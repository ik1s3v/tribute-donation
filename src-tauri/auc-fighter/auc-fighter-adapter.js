function zE(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var Lh = { exports: {} }, cf = {}, Nh = { exports: {} }, Wl = { exports: {} };
Wl.exports;
var sE;
function TM() {
  return sE || (sE = 1, function(u, s) {
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
      var p = "18.3.1", m = Symbol.for("react.element"), E = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), k = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), ze = Symbol.for("react.offscreen"), ve = Symbol.iterator, Re = "@@iterator";
      function G(f) {
        if (f === null || typeof f != "object")
          return null;
        var y = ve && f[ve] || f[Re];
        return typeof y == "function" ? y : null;
      }
      var ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, pe = {
        transition: null
      }, Z = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ue = {}, qt = null;
      function Ze(f) {
        qt = f;
      }
      ue.setExtraStackFrame = function(f) {
        qt = f;
      }, ue.getCurrentStack = null, ue.getStackAddendum = function() {
        var f = "";
        qt && (f += qt);
        var y = ue.getCurrentStack;
        return y && (f += y() || ""), f;
      };
      var gt = !1, Rt = !1, at = !1, Ce = !1, mt = !1, it = {
        ReactCurrentDispatcher: ee,
        ReactCurrentBatchConfig: pe,
        ReactCurrentOwner: Ee
      };
      it.ReactDebugCurrentFrame = ue, it.ReactCurrentActQueue = Z;
      function Tt(f) {
        {
          for (var y = arguments.length, _ = new Array(y > 1 ? y - 1 : 0), O = 1; O < y; O++)
            _[O - 1] = arguments[O];
          ln("warn", f, _);
        }
      }
      function we(f) {
        {
          for (var y = arguments.length, _ = new Array(y > 1 ? y - 1 : 0), O = 1; O < y; O++)
            _[O - 1] = arguments[O];
          ln("error", f, _);
        }
      }
      function ln(f, y, _) {
        {
          var O = it.ReactDebugCurrentFrame, P = O.getStackAddendum();
          P !== "" && (y += "%s", _ = _.concat([P]));
          var ce = _.map(function(ne) {
            return String(ne);
          });
          ce.unshift("Warning: " + y), Function.prototype.apply.call(console[f], console, ce);
        }
      }
      var pr = {};
      function $n(f, y) {
        {
          var _ = f.constructor, O = _ && (_.displayName || _.name) || "ReactClass", P = O + "." + y;
          if (pr[P])
            return;
          we("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", y, O), pr[P] = !0;
        }
      }
      var nr = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(f) {
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
        enqueueForceUpdate: function(f, y, _) {
          $n(f, "forceUpdate");
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
        enqueueReplaceState: function(f, y, _, O) {
          $n(f, "replaceState");
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
        enqueueSetState: function(f, y, _, O) {
          $n(f, "setState");
        }
      }, zt = Object.assign, hr = {};
      Object.freeze(hr);
      function gn(f, y, _) {
        this.props = f, this.context = y, this.refs = hr, this.updater = _ || nr;
      }
      gn.prototype.isReactComponent = {}, gn.prototype.setState = function(f, y) {
        if (typeof f != "object" && typeof f != "function" && f != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, f, y, "setState");
      }, gn.prototype.forceUpdate = function(f) {
        this.updater.enqueueForceUpdate(this, f, "forceUpdate");
      };
      {
        var na = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, zr = function(f, y) {
          Object.defineProperty(gn.prototype, f, {
            get: function() {
              Tt("%s(...) is deprecated in plain JavaScript React classes. %s", y[0], y[1]);
            }
          });
        };
        for (var Gt in na)
          na.hasOwnProperty(Gt) && zr(Gt, na[Gt]);
      }
      function Yn() {
      }
      Yn.prototype = gn.prototype;
      function Wt(f, y, _) {
        this.props = f, this.context = y, this.refs = hr, this.updater = _ || nr;
      }
      var Qt = Wt.prototype = new Yn();
      Qt.constructor = Wt, zt(Qt, gn.prototype), Qt.isPureReactComponent = !0;
      function Kt() {
        var f = {
          current: null
        };
        return Object.seal(f), f;
      }
      var An = Array.isArray;
      function jt(f) {
        return An(f);
      }
      function bn(f) {
        {
          var y = typeof Symbol == "function" && Symbol.toStringTag, _ = y && f[Symbol.toStringTag] || f.constructor.name || "Object";
          return _;
        }
      }
      function Ft(f) {
        try {
          return Ht(f), !1;
        } catch {
          return !0;
        }
      }
      function Ht(f) {
        return "" + f;
      }
      function rr(f) {
        if (Ft(f))
          return we("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bn(f)), Ht(f);
      }
      function ra(f, y, _) {
        var O = f.displayName;
        if (O)
          return O;
        var P = y.displayName || y.name || "";
        return P !== "" ? _ + "(" + P + ")" : _;
      }
      function mr(f) {
        return f.displayName || "Context";
      }
      function kn(f) {
        if (f == null)
          return null;
        if (typeof f.tag == "number" && we("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
          return f.displayName || f.name || null;
        if (typeof f == "string")
          return f;
        switch (f) {
          case T:
            return "Fragment";
          case E:
            return "Portal";
          case L:
            return "Profiler";
          case d:
            return "StrictMode";
          case U:
            return "Suspense";
          case B:
            return "SuspenseList";
        }
        if (typeof f == "object")
          switch (f.$$typeof) {
            case k:
              var y = f;
              return mr(y) + ".Consumer";
            case D:
              var _ = f;
              return mr(_._context) + ".Provider";
            case j:
              return ra(f, f.render, "ForwardRef");
            case z:
              var O = f.displayName || null;
              return O !== null ? O : kn(f.type) || "Memo";
            case J: {
              var P = f, ce = P._payload, ne = P._init;
              try {
                return kn(ne(ce));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var sn = Object.prototype.hasOwnProperty, Xt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Sn, jr, xt;
      xt = {};
      function En(f) {
        if (sn.call(f, "ref")) {
          var y = Object.getOwnPropertyDescriptor(f, "ref").get;
          if (y && y.isReactWarning)
            return !1;
        }
        return f.ref !== void 0;
      }
      function Ln(f) {
        if (sn.call(f, "key")) {
          var y = Object.getOwnPropertyDescriptor(f, "key").get;
          if (y && y.isReactWarning)
            return !1;
        }
        return f.key !== void 0;
      }
      function Aa(f, y) {
        var _ = function() {
          Sn || (Sn = !0, we("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        _.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: _,
          configurable: !0
        });
      }
      function aa(f, y) {
        var _ = function() {
          jr || (jr = !0, we("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        _.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: _,
          configurable: !0
        });
      }
      function Y(f) {
        if (typeof f.ref == "string" && Ee.current && f.__self && Ee.current.stateNode !== f.__self) {
          var y = kn(Ee.current.type);
          xt[y] || (we('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y, f.ref), xt[y] = !0);
        }
      }
      var ae = function(f, y, _, O, P, ce, ne) {
        var ge = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: m,
          // Built-in properties that belong on the element
          type: f,
          key: y,
          ref: _,
          props: ne,
          // Record the component responsible for creating this element.
          _owner: ce
        };
        return ge._store = {}, Object.defineProperty(ge._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ge, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: O
        }), Object.defineProperty(ge, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: P
        }), Object.freeze && (Object.freeze(ge.props), Object.freeze(ge)), ge;
      };
      function _e(f, y, _) {
        var O, P = {}, ce = null, ne = null, ge = null, ke = null;
        if (y != null) {
          En(y) && (ne = y.ref, Y(y)), Ln(y) && (rr(y.key), ce = "" + y.key), ge = y.__self === void 0 ? null : y.__self, ke = y.__source === void 0 ? null : y.__source;
          for (O in y)
            sn.call(y, O) && !Xt.hasOwnProperty(O) && (P[O] = y[O]);
        }
        var Ye = arguments.length - 2;
        if (Ye === 1)
          P.children = _;
        else if (Ye > 1) {
          for (var Ke = Array(Ye), Xe = 0; Xe < Ye; Xe++)
            Ke[Xe] = arguments[Xe + 2];
          Object.freeze && Object.freeze(Ke), P.children = Ke;
        }
        if (f && f.defaultProps) {
          var Oe = f.defaultProps;
          for (O in Oe)
            P[O] === void 0 && (P[O] = Oe[O]);
        }
        if (ce || ne) {
          var ut = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          ce && Aa(P, ut), ne && aa(P, ut);
        }
        return ae(f, ce, ne, ge, ke, Ee.current, P);
      }
      function $e(f, y) {
        var _ = ae(f.type, y, f.ref, f._self, f._source, f._owner, f.props);
        return _;
      }
      function et(f, y, _) {
        if (f == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
        var O, P = zt({}, f.props), ce = f.key, ne = f.ref, ge = f._self, ke = f._source, Ye = f._owner;
        if (y != null) {
          En(y) && (ne = y.ref, Ye = Ee.current), Ln(y) && (rr(y.key), ce = "" + y.key);
          var Ke;
          f.type && f.type.defaultProps && (Ke = f.type.defaultProps);
          for (O in y)
            sn.call(y, O) && !Xt.hasOwnProperty(O) && (y[O] === void 0 && Ke !== void 0 ? P[O] = Ke[O] : P[O] = y[O]);
        }
        var Xe = arguments.length - 2;
        if (Xe === 1)
          P.children = _;
        else if (Xe > 1) {
          for (var Oe = Array(Xe), ut = 0; ut < Xe; ut++)
            Oe[ut] = arguments[ut + 2];
          P.children = Oe;
        }
        return ae(f.type, ce, ne, ge, ke, Ye, P);
      }
      function st(f) {
        return typeof f == "object" && f !== null && f.$$typeof === m;
      }
      var ct = ".", cn = ":";
      function dt(f) {
        var y = /[=:]/g, _ = {
          "=": "=0",
          ":": "=2"
        }, O = f.replace(y, function(P) {
          return _[P];
        });
        return "$" + O;
      }
      var We = !1, vt = /\/+/g;
      function yr(f) {
        return f.replace(vt, "$&/");
      }
      function gr(f, y) {
        return typeof f == "object" && f !== null && f.key != null ? (rr(f.key), dt("" + f.key)) : y.toString(36);
      }
      function ar(f, y, _, O, P) {
        var ce = typeof f;
        (ce === "undefined" || ce === "boolean") && (f = null);
        var ne = !1;
        if (f === null)
          ne = !0;
        else
          switch (ce) {
            case "string":
            case "number":
              ne = !0;
              break;
            case "object":
              switch (f.$$typeof) {
                case m:
                case E:
                  ne = !0;
              }
          }
        if (ne) {
          var ge = f, ke = P(ge), Ye = O === "" ? ct + gr(ge, 0) : O;
          if (jt(ke)) {
            var Ke = "";
            Ye != null && (Ke = yr(Ye) + "/"), ar(ke, y, Ke, "", function(Af) {
              return Af;
            });
          } else ke != null && (st(ke) && (ke.key && (!ge || ge.key !== ke.key) && rr(ke.key), ke = $e(
            ke,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            _ + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ke.key && (!ge || ge.key !== ke.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              yr("" + ke.key) + "/"
            ) : "") + Ye
          )), y.push(ke));
          return 1;
        }
        var Xe, Oe, ut = 0, bt = O === "" ? ct : O + cn;
        if (jt(f))
          for (var yi = 0; yi < f.length; yi++)
            Xe = f[yi], Oe = bt + gr(Xe, yi), ut += ar(Xe, y, _, Oe, P);
        else {
          var yu = G(f);
          if (typeof yu == "function") {
            var la = f;
            yu === la.entries && (We || Tt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), We = !0);
            for (var gu = yu.call(la), bu, Mf = 0; !(bu = gu.next()).done; )
              Xe = bu.value, Oe = bt + gr(Xe, Mf++), ut += ar(Xe, y, _, Oe, P);
          } else if (ce === "object") {
            var cs = String(f);
            throw new Error("Objects are not valid as a React child (found: " + (cs === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : cs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ut;
      }
      function ia(f, y, _) {
        if (f == null)
          return f;
        var O = [], P = 0;
        return ar(f, O, "", "", function(ce) {
          return y.call(_, ce, P++);
        }), O;
      }
      function nu(f) {
        var y = 0;
        return ia(f, function() {
          y++;
        }), y;
      }
      function ui(f, y, _) {
        ia(f, function() {
          y.apply(this, arguments);
        }, _);
      }
      function Xi(f) {
        return ia(f, function(y) {
          return y;
        }) || [];
      }
      function Ji(f) {
        if (!st(f))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return f;
      }
      function li(f) {
        var y = {
          $$typeof: k,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: f,
          _currentValue2: f,
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
        y.Provider = {
          $$typeof: D,
          _context: y
        };
        var _ = !1, O = !1, P = !1;
        {
          var ce = {
            $$typeof: k,
            _context: y
          };
          Object.defineProperties(ce, {
            Provider: {
              get: function() {
                return O || (O = !0, we("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), y.Provider;
              },
              set: function(ne) {
                y.Provider = ne;
              }
            },
            _currentValue: {
              get: function() {
                return y._currentValue;
              },
              set: function(ne) {
                y._currentValue = ne;
              }
            },
            _currentValue2: {
              get: function() {
                return y._currentValue2;
              },
              set: function(ne) {
                y._currentValue2 = ne;
              }
            },
            _threadCount: {
              get: function() {
                return y._threadCount;
              },
              set: function(ne) {
                y._threadCount = ne;
              }
            },
            Consumer: {
              get: function() {
                return _ || (_ = !0, we("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), y.Consumer;
              }
            },
            displayName: {
              get: function() {
                return y.displayName;
              },
              set: function(ne) {
                P || (Tt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ne), P = !0);
              }
            }
          }), y.Consumer = ce;
        }
        return y._currentRenderer = null, y._currentRenderer2 = null, y;
      }
      var br = -1, ir = 0, In = 1, Fr = 2;
      function si(f) {
        if (f._status === br) {
          var y = f._result, _ = y();
          if (_.then(function(ce) {
            if (f._status === ir || f._status === br) {
              var ne = f;
              ne._status = In, ne._result = ce;
            }
          }, function(ce) {
            if (f._status === ir || f._status === br) {
              var ne = f;
              ne._status = Fr, ne._result = ce;
            }
          }), f._status === br) {
            var O = f;
            O._status = ir, O._result = _;
          }
        }
        if (f._status === In) {
          var P = f._result;
          return P === void 0 && we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, P), "default" in P || we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, P), P.default;
        } else
          throw f._result;
      }
      function g(f) {
        var y = {
          // We use these fields to store the result.
          _status: br,
          _result: f
        }, _ = {
          $$typeof: J,
          _payload: y,
          _init: si
        };
        {
          var O, P;
          Object.defineProperties(_, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return O;
              },
              set: function(ce) {
                we("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), O = ce, Object.defineProperty(_, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return P;
              },
              set: function(ce) {
                we("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), P = ce, Object.defineProperty(_, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return _;
      }
      function H(f) {
        f != null && f.$$typeof === z ? we("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof f != "function" ? we("forwardRef requires a render function but was given %s.", f === null ? "null" : typeof f) : f.length !== 0 && f.length !== 2 && we("forwardRef render functions accept exactly two parameters: props and ref. %s", f.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), f != null && (f.defaultProps != null || f.propTypes != null) && we("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var y = {
          $$typeof: j,
          render: f
        };
        {
          var _;
          Object.defineProperty(y, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return _;
            },
            set: function(O) {
              _ = O, !f.name && !f.displayName && (f.displayName = O);
            }
          });
        }
        return y;
      }
      var I;
      I = Symbol.for("react.module.reference");
      function ie(f) {
        return !!(typeof f == "string" || typeof f == "function" || f === T || f === L || mt || f === d || f === U || f === B || Ce || f === ze || gt || Rt || at || typeof f == "object" && f !== null && (f.$$typeof === J || f.$$typeof === z || f.$$typeof === D || f.$$typeof === k || f.$$typeof === j || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        f.$$typeof === I || f.getModuleId !== void 0));
      }
      function Ae(f, y) {
        ie(f) || we("memo: The first argument must be a component. Instead received: %s", f === null ? "null" : typeof f);
        var _ = {
          $$typeof: z,
          type: f,
          compare: y === void 0 ? null : y
        };
        {
          var O;
          Object.defineProperty(_, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return O;
            },
            set: function(P) {
              O = P, !f.name && !f.displayName && (f.displayName = P);
            }
          });
        }
        return _;
      }
      function he() {
        var f = ee.current;
        return f === null && we(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), f;
      }
      function Te(f) {
        var y = he();
        if (f._context !== void 0) {
          var _ = f._context;
          _.Consumer === f ? we("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : _.Provider === f && we("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return y.useContext(f);
      }
      function le(f) {
        var y = he();
        return y.useState(f);
      }
      function _t(f, y, _) {
        var O = he();
        return O.useReducer(f, y, _);
      }
      function tt(f) {
        var y = he();
        return y.useRef(f);
      }
      function nt(f, y) {
        var _ = he();
        return _.useEffect(f, y);
      }
      function fn(f, y) {
        var _ = he();
        return _.useInsertionEffect(f, y);
      }
      function Hr(f, y) {
        var _ = he();
        return _.useLayoutEffect(f, y);
      }
      function Sr(f, y) {
        var _ = he();
        return _.useCallback(f, y);
      }
      function wt(f, y) {
        var _ = he();
        return _.useMemo(f, y);
      }
      function ci(f, y, _) {
        var O = he();
        return O.useImperativeHandle(f, y, _);
      }
      function Er(f, y) {
        {
          var _ = he();
          return _.useDebugValue(f, y);
        }
      }
      function De() {
        var f = he();
        return f.useTransition();
      }
      function fi(f) {
        var y = he();
        return y.useDeferredValue(f);
      }
      function Zl() {
        var f = he();
        return f.useId();
      }
      function es(f, y, _) {
        var O = he();
        return O.useSyncExternalStore(f, y, _);
      }
      var ka = 0, ru, au, iu, ou, uu, ts, ns;
      function Zi() {
      }
      Zi.__reactDisabledLog = !0;
      function lu() {
        {
          if (ka === 0) {
            ru = console.log, au = console.info, iu = console.warn, ou = console.error, uu = console.group, ts = console.groupCollapsed, ns = console.groupEnd;
            var f = {
              configurable: !0,
              enumerable: !0,
              value: Zi,
              writable: !0
            };
            Object.defineProperties(console, {
              info: f,
              log: f,
              warn: f,
              error: f,
              group: f,
              groupCollapsed: f,
              groupEnd: f
            });
          }
          ka++;
        }
      }
      function Vr() {
        {
          if (ka--, ka === 0) {
            var f = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: zt({}, f, {
                value: ru
              }),
              info: zt({}, f, {
                value: au
              }),
              warn: zt({}, f, {
                value: iu
              }),
              error: zt({}, f, {
                value: ou
              }),
              group: zt({}, f, {
                value: uu
              }),
              groupCollapsed: zt({}, f, {
                value: ts
              }),
              groupEnd: zt({}, f, {
                value: ns
              })
            });
          }
          ka < 0 && we("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var di = it.ReactCurrentDispatcher, La;
      function eo(f, y, _) {
        {
          if (La === void 0)
            try {
              throw Error();
            } catch (P) {
              var O = P.stack.trim().match(/\n( *(at )?)/);
              La = O && O[1] || "";
            }
          return `
` + La + f;
        }
      }
      var vi = !1, to;
      {
        var su = typeof WeakMap == "function" ? WeakMap : Map;
        to = new su();
      }
      function rs(f, y) {
        if (!f || vi)
          return "";
        {
          var _ = to.get(f);
          if (_ !== void 0)
            return _;
        }
        var O;
        vi = !0;
        var P = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ce;
        ce = di.current, di.current = null, lu();
        try {
          if (y) {
            var ne = function() {
              throw Error();
            };
            if (Object.defineProperty(ne.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ne, []);
              } catch (bt) {
                O = bt;
              }
              Reflect.construct(f, [], ne);
            } else {
              try {
                ne.call();
              } catch (bt) {
                O = bt;
              }
              f.call(ne.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (bt) {
              O = bt;
            }
            f();
          }
        } catch (bt) {
          if (bt && O && typeof bt.stack == "string") {
            for (var ge = bt.stack.split(`
`), ke = O.stack.split(`
`), Ye = ge.length - 1, Ke = ke.length - 1; Ye >= 1 && Ke >= 0 && ge[Ye] !== ke[Ke]; )
              Ke--;
            for (; Ye >= 1 && Ke >= 0; Ye--, Ke--)
              if (ge[Ye] !== ke[Ke]) {
                if (Ye !== 1 || Ke !== 1)
                  do
                    if (Ye--, Ke--, Ke < 0 || ge[Ye] !== ke[Ke]) {
                      var Xe = `
` + ge[Ye].replace(" at new ", " at ");
                      return f.displayName && Xe.includes("<anonymous>") && (Xe = Xe.replace("<anonymous>", f.displayName)), typeof f == "function" && to.set(f, Xe), Xe;
                    }
                  while (Ye >= 1 && Ke >= 0);
                break;
              }
          }
        } finally {
          vi = !1, di.current = ce, Vr(), Error.prepareStackTrace = P;
        }
        var Oe = f ? f.displayName || f.name : "", ut = Oe ? eo(Oe) : "";
        return typeof f == "function" && to.set(f, ut), ut;
      }
      function cu(f, y, _) {
        return rs(f, !1);
      }
      function xf(f) {
        var y = f.prototype;
        return !!(y && y.isReactComponent);
      }
      function pi(f, y, _) {
        if (f == null)
          return "";
        if (typeof f == "function")
          return rs(f, xf(f));
        if (typeof f == "string")
          return eo(f);
        switch (f) {
          case U:
            return eo("Suspense");
          case B:
            return eo("SuspenseList");
        }
        if (typeof f == "object")
          switch (f.$$typeof) {
            case j:
              return cu(f.render);
            case z:
              return pi(f.type, y, _);
            case J: {
              var O = f, P = O._payload, ce = O._init;
              try {
                return pi(ce(P), y, _);
              } catch {
              }
            }
          }
        return "";
      }
      var as = {}, fu = it.ReactDebugCurrentFrame;
      function He(f) {
        if (f) {
          var y = f._owner, _ = pi(f.type, f._source, y ? y.type : null);
          fu.setExtraStackFrame(_);
        } else
          fu.setExtraStackFrame(null);
      }
      function _f(f, y, _, O, P) {
        {
          var ce = Function.call.bind(sn);
          for (var ne in f)
            if (ce(f, ne)) {
              var ge = void 0;
              try {
                if (typeof f[ne] != "function") {
                  var ke = Error((O || "React class") + ": " + _ + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ke.name = "Invariant Violation", ke;
                }
                ge = f[ne](y, ne, O, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ye) {
                ge = Ye;
              }
              ge && !(ge instanceof Error) && (He(P), we("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", _, ne, typeof ge), He(null)), ge instanceof Error && !(ge.message in as) && (as[ge.message] = !0, He(P), we("Failed %s type: %s", _, ge.message), He(null));
            }
        }
      }
      function oa(f) {
        if (f) {
          var y = f._owner, _ = pi(f.type, f._source, y ? y.type : null);
          Ze(_);
        } else
          Ze(null);
      }
      var Se;
      Se = !1;
      function du() {
        if (Ee.current) {
          var f = kn(Ee.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
      function Cn(f) {
        if (f !== void 0) {
          var y = f.fileName.replace(/^.*[\\\/]/, ""), _ = f.lineNumber;
          return `

Check your code at ` + y + ":" + _ + ".";
        }
        return "";
      }
      function hi(f) {
        return f != null ? Cn(f.__source) : "";
      }
      var Na = {};
      function wf(f) {
        var y = du();
        if (!y) {
          var _ = typeof f == "string" ? f : f.displayName || f.name;
          _ && (y = `

Check the top-level render call using <` + _ + ">.");
        }
        return y;
      }
      function Vt(f, y) {
        if (!(!f._store || f._store.validated || f.key != null)) {
          f._store.validated = !0;
          var _ = wf(y);
          if (!Na[_]) {
            Na[_] = !0;
            var O = "";
            f && f._owner && f._owner !== Ee.current && (O = " It was passed a child from " + kn(f._owner.type) + "."), oa(f), we('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, O), oa(null);
          }
        }
      }
      function ot(f, y) {
        if (typeof f == "object") {
          if (jt(f))
            for (var _ = 0; _ < f.length; _++) {
              var O = f[_];
              st(O) && Vt(O, y);
            }
          else if (st(f))
            f._store && (f._store.validated = !0);
          else if (f) {
            var P = G(f);
            if (typeof P == "function" && P !== f.entries)
              for (var ce = P.call(f), ne; !(ne = ce.next()).done; )
                st(ne.value) && Vt(ne.value, y);
          }
        }
      }
      function is(f) {
        {
          var y = f.type;
          if (y == null || typeof y == "string")
            return;
          var _;
          if (typeof y == "function")
            _ = y.propTypes;
          else if (typeof y == "object" && (y.$$typeof === j || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          y.$$typeof === z))
            _ = y.propTypes;
          else
            return;
          if (_) {
            var O = kn(y);
            _f(_, f.props, "prop", O, f);
          } else if (y.PropTypes !== void 0 && !Se) {
            Se = !0;
            var P = kn(y);
            we("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
          }
          typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && we("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function or(f) {
        {
          for (var y = Object.keys(f.props), _ = 0; _ < y.length; _++) {
            var O = y[_];
            if (O !== "children" && O !== "key") {
              oa(f), we("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", O), oa(null);
              break;
            }
          }
          f.ref !== null && (oa(f), we("Invalid attribute `ref` supplied to `React.Fragment`."), oa(null));
        }
      }
      function Rn(f, y, _) {
        var O = ie(f);
        if (!O) {
          var P = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = hi(y);
          ce ? P += ce : P += du();
          var ne;
          f === null ? ne = "null" : jt(f) ? ne = "array" : f !== void 0 && f.$$typeof === m ? (ne = "<" + (kn(f.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : ne = typeof f, we("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ne, P);
        }
        var ge = _e.apply(this, arguments);
        if (ge == null)
          return ge;
        if (O)
          for (var ke = 2; ke < arguments.length; ke++)
            ot(arguments[ke], f);
        return f === T ? or(ge) : is(ge), ge;
      }
      var Cr = !1;
      function Df(f) {
        var y = Rn.bind(null, f);
        return y.type = f, Cr || (Cr = !0, Tt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(y, "type", {
          enumerable: !1,
          get: function() {
            return Tt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: f
            }), f;
          }
        }), y;
      }
      function vu(f, y, _) {
        for (var O = et.apply(this, arguments), P = 2; P < arguments.length; P++)
          ot(arguments[P], O.type);
        return is(O), O;
      }
      function os(f, y) {
        var _ = pe.transition;
        pe.transition = {};
        var O = pe.transition;
        pe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          f();
        } finally {
          if (pe.transition = _, _ === null && O._updatedFibers) {
            var P = O._updatedFibers.size;
            P > 10 && Tt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), O._updatedFibers.clear();
          }
        }
      }
      var pu = !1, no = null;
      function Of(f) {
        if (no === null)
          try {
            var y = ("require" + Math.random()).slice(0, 7), _ = u && u[y];
            no = _.call(u, "timers").setImmediate;
          } catch {
            no = function(P) {
              pu === !1 && (pu = !0, typeof MessageChannel > "u" && we("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ce = new MessageChannel();
              ce.port1.onmessage = P, ce.port2.postMessage(void 0);
            };
          }
        return no(f);
      }
      var Ua = 0, mi = !1;
      function hu(f) {
        {
          var y = Ua;
          Ua++, Z.current === null && (Z.current = []);
          var _ = Z.isBatchingLegacy, O;
          try {
            if (Z.isBatchingLegacy = !0, O = f(), !_ && Z.didScheduleLegacyUpdate) {
              var P = Z.current;
              P !== null && (Z.didScheduleLegacyUpdate = !1, io(P));
            }
          } catch (Oe) {
            throw ua(y), Oe;
          } finally {
            Z.isBatchingLegacy = _;
          }
          if (O !== null && typeof O == "object" && typeof O.then == "function") {
            var ce = O, ne = !1, ge = {
              then: function(Oe, ut) {
                ne = !0, ce.then(function(bt) {
                  ua(y), Ua === 0 ? ro(bt, Oe, ut) : Oe(bt);
                }, function(bt) {
                  ua(y), ut(bt);
                });
              }
            };
            return !mi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ne || (mi = !0, we("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ge;
          } else {
            var ke = O;
            if (ua(y), Ua === 0) {
              var Ye = Z.current;
              Ye !== null && (io(Ye), Z.current = null);
              var Ke = {
                then: function(Oe, ut) {
                  Z.current === null ? (Z.current = [], ro(ke, Oe, ut)) : Oe(ke);
                }
              };
              return Ke;
            } else {
              var Xe = {
                then: function(Oe, ut) {
                  Oe(ke);
                }
              };
              return Xe;
            }
          }
        }
      }
      function ua(f) {
        f !== Ua - 1 && we("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ua = f;
      }
      function ro(f, y, _) {
        {
          var O = Z.current;
          if (O !== null)
            try {
              io(O), Of(function() {
                O.length === 0 ? (Z.current = null, y(f)) : ro(f, y, _);
              });
            } catch (P) {
              _(P);
            }
          else
            y(f);
        }
      }
      var ao = !1;
      function io(f) {
        if (!ao) {
          ao = !0;
          var y = 0;
          try {
            for (; y < f.length; y++) {
              var _ = f[y];
              do
                _ = _(!0);
              while (_ !== null);
            }
            f.length = 0;
          } catch (O) {
            throw f = f.slice(y + 1), O;
          } finally {
            ao = !1;
          }
        }
      }
      var us = Rn, ls = vu, mu = Df, ss = {
        map: ia,
        forEach: ui,
        count: nu,
        toArray: Xi,
        only: Ji
      };
      s.Children = ss, s.Component = gn, s.Fragment = T, s.Profiler = L, s.PureComponent = Wt, s.StrictMode = d, s.Suspense = U, s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = it, s.act = hu, s.cloneElement = ls, s.createContext = li, s.createElement = us, s.createFactory = mu, s.createRef = Kt, s.forwardRef = H, s.isValidElement = st, s.lazy = g, s.memo = Ae, s.startTransition = os, s.unstable_act = hu, s.useCallback = Sr, s.useContext = Te, s.useDebugValue = Er, s.useDeferredValue = fi, s.useEffect = nt, s.useId = Zl, s.useImperativeHandle = ci, s.useInsertionEffect = fn, s.useLayoutEffect = Hr, s.useMemo = wt, s.useReducer = _t, s.useRef = tt, s.useState = le, s.useSyncExternalStore = es, s.useTransition = De, s.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  }(Wl, Wl.exports)), Wl.exports;
}
var cE;
function bf() {
  return cE || (cE = 1, Nh.exports = TM()), Nh.exports;
}
var fE;
function xM() {
  if (fE) return cf;
  fE = 1;
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
    var u = bf(), s = Symbol.for("react.element"), p = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), L = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), J = Symbol.iterator, ze = "@@iterator";
    function ve(g) {
      if (g === null || typeof g != "object")
        return null;
      var H = J && g[J] || g[ze];
      return typeof H == "function" ? H : null;
    }
    var Re = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function G(g) {
      {
        for (var H = arguments.length, I = new Array(H > 1 ? H - 1 : 0), ie = 1; ie < H; ie++)
          I[ie - 1] = arguments[ie];
        ee("error", g, I);
      }
    }
    function ee(g, H, I) {
      {
        var ie = Re.ReactDebugCurrentFrame, Ae = ie.getStackAddendum();
        Ae !== "" && (H += "%s", I = I.concat([Ae]));
        var he = I.map(function(Te) {
          return String(Te);
        });
        he.unshift("Warning: " + H), Function.prototype.apply.call(console[g], console, he);
      }
    }
    var pe = !1, Z = !1, Ee = !1, ue = !1, qt = !1, Ze;
    Ze = Symbol.for("react.module.reference");
    function gt(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === m || g === T || qt || g === E || g === k || g === j || ue || g === z || pe || Z || Ee || typeof g == "object" && g !== null && (g.$$typeof === B || g.$$typeof === U || g.$$typeof === d || g.$$typeof === L || g.$$typeof === D || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === Ze || g.getModuleId !== void 0));
    }
    function Rt(g, H, I) {
      var ie = g.displayName;
      if (ie)
        return ie;
      var Ae = H.displayName || H.name || "";
      return Ae !== "" ? I + "(" + Ae + ")" : I;
    }
    function at(g) {
      return g.displayName || "Context";
    }
    function Ce(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && G("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case m:
          return "Fragment";
        case p:
          return "Portal";
        case T:
          return "Profiler";
        case E:
          return "StrictMode";
        case k:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case L:
            var H = g;
            return at(H) + ".Consumer";
          case d:
            var I = g;
            return at(I._context) + ".Provider";
          case D:
            return Rt(g, g.render, "ForwardRef");
          case U:
            var ie = g.displayName || null;
            return ie !== null ? ie : Ce(g.type) || "Memo";
          case B: {
            var Ae = g, he = Ae._payload, Te = Ae._init;
            try {
              return Ce(Te(he));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var mt = Object.assign, it = 0, Tt, we, ln, pr, $n, nr, zt;
    function hr() {
    }
    hr.__reactDisabledLog = !0;
    function gn() {
      {
        if (it === 0) {
          Tt = console.log, we = console.info, ln = console.warn, pr = console.error, $n = console.group, nr = console.groupCollapsed, zt = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: hr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        it++;
      }
    }
    function na() {
      {
        if (it--, it === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: mt({}, g, {
              value: Tt
            }),
            info: mt({}, g, {
              value: we
            }),
            warn: mt({}, g, {
              value: ln
            }),
            error: mt({}, g, {
              value: pr
            }),
            group: mt({}, g, {
              value: $n
            }),
            groupCollapsed: mt({}, g, {
              value: nr
            }),
            groupEnd: mt({}, g, {
              value: zt
            })
          });
        }
        it < 0 && G("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var zr = Re.ReactCurrentDispatcher, Gt;
    function Yn(g, H, I) {
      {
        if (Gt === void 0)
          try {
            throw Error();
          } catch (Ae) {
            var ie = Ae.stack.trim().match(/\n( *(at )?)/);
            Gt = ie && ie[1] || "";
          }
        return `
` + Gt + g;
      }
    }
    var Wt = !1, Qt;
    {
      var Kt = typeof WeakMap == "function" ? WeakMap : Map;
      Qt = new Kt();
    }
    function An(g, H) {
      if (!g || Wt)
        return "";
      {
        var I = Qt.get(g);
        if (I !== void 0)
          return I;
      }
      var ie;
      Wt = !0;
      var Ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var he;
      he = zr.current, zr.current = null, gn();
      try {
        if (H) {
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
            } catch (wt) {
              ie = wt;
            }
            Reflect.construct(g, [], Te);
          } else {
            try {
              Te.call();
            } catch (wt) {
              ie = wt;
            }
            g.call(Te.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (wt) {
            ie = wt;
          }
          g();
        }
      } catch (wt) {
        if (wt && ie && typeof wt.stack == "string") {
          for (var le = wt.stack.split(`
`), _t = ie.stack.split(`
`), tt = le.length - 1, nt = _t.length - 1; tt >= 1 && nt >= 0 && le[tt] !== _t[nt]; )
            nt--;
          for (; tt >= 1 && nt >= 0; tt--, nt--)
            if (le[tt] !== _t[nt]) {
              if (tt !== 1 || nt !== 1)
                do
                  if (tt--, nt--, nt < 0 || le[tt] !== _t[nt]) {
                    var fn = `
` + le[tt].replace(" at new ", " at ");
                    return g.displayName && fn.includes("<anonymous>") && (fn = fn.replace("<anonymous>", g.displayName)), typeof g == "function" && Qt.set(g, fn), fn;
                  }
                while (tt >= 1 && nt >= 0);
              break;
            }
        }
      } finally {
        Wt = !1, zr.current = he, na(), Error.prepareStackTrace = Ae;
      }
      var Hr = g ? g.displayName || g.name : "", Sr = Hr ? Yn(Hr) : "";
      return typeof g == "function" && Qt.set(g, Sr), Sr;
    }
    function jt(g, H, I) {
      return An(g, !1);
    }
    function bn(g) {
      var H = g.prototype;
      return !!(H && H.isReactComponent);
    }
    function Ft(g, H, I) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return An(g, bn(g));
      if (typeof g == "string")
        return Yn(g);
      switch (g) {
        case k:
          return Yn("Suspense");
        case j:
          return Yn("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case D:
            return jt(g.render);
          case U:
            return Ft(g.type, H, I);
          case B: {
            var ie = g, Ae = ie._payload, he = ie._init;
            try {
              return Ft(he(Ae), H, I);
            } catch {
            }
          }
        }
      return "";
    }
    var Ht = Object.prototype.hasOwnProperty, rr = {}, ra = Re.ReactDebugCurrentFrame;
    function mr(g) {
      if (g) {
        var H = g._owner, I = Ft(g.type, g._source, H ? H.type : null);
        ra.setExtraStackFrame(I);
      } else
        ra.setExtraStackFrame(null);
    }
    function kn(g, H, I, ie, Ae) {
      {
        var he = Function.call.bind(Ht);
        for (var Te in g)
          if (he(g, Te)) {
            var le = void 0;
            try {
              if (typeof g[Te] != "function") {
                var _t = Error((ie || "React class") + ": " + I + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _t.name = "Invariant Violation", _t;
              }
              le = g[Te](H, Te, ie, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              le = tt;
            }
            le && !(le instanceof Error) && (mr(Ae), G("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", I, Te, typeof le), mr(null)), le instanceof Error && !(le.message in rr) && (rr[le.message] = !0, mr(Ae), G("Failed %s type: %s", I, le.message), mr(null));
          }
      }
    }
    var sn = Array.isArray;
    function Xt(g) {
      return sn(g);
    }
    function Sn(g) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, I = H && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return I;
      }
    }
    function jr(g) {
      try {
        return xt(g), !1;
      } catch {
        return !0;
      }
    }
    function xt(g) {
      return "" + g;
    }
    function En(g) {
      if (jr(g))
        return G("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sn(g)), xt(g);
    }
    var Ln = Re.ReactCurrentOwner, Aa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, aa, Y, ae;
    ae = {};
    function _e(g) {
      if (Ht.call(g, "ref")) {
        var H = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function $e(g) {
      if (Ht.call(g, "key")) {
        var H = Object.getOwnPropertyDescriptor(g, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function et(g, H) {
      if (typeof g.ref == "string" && Ln.current && H && Ln.current.stateNode !== H) {
        var I = Ce(Ln.current.type);
        ae[I] || (G('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ce(Ln.current.type), g.ref), ae[I] = !0);
      }
    }
    function st(g, H) {
      {
        var I = function() {
          aa || (aa = !0, G("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        I.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: I,
          configurable: !0
        });
      }
    }
    function ct(g, H) {
      {
        var I = function() {
          Y || (Y = !0, G("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        I.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var cn = function(g, H, I, ie, Ae, he, Te) {
      var le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: g,
        key: H,
        ref: I,
        props: Te,
        // Record the component responsible for creating this element.
        _owner: he
      };
      return le._store = {}, Object.defineProperty(le._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(le, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.defineProperty(le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ae
      }), Object.freeze && (Object.freeze(le.props), Object.freeze(le)), le;
    };
    function dt(g, H, I, ie, Ae) {
      {
        var he, Te = {}, le = null, _t = null;
        I !== void 0 && (En(I), le = "" + I), $e(H) && (En(H.key), le = "" + H.key), _e(H) && (_t = H.ref, et(H, Ae));
        for (he in H)
          Ht.call(H, he) && !Aa.hasOwnProperty(he) && (Te[he] = H[he]);
        if (g && g.defaultProps) {
          var tt = g.defaultProps;
          for (he in tt)
            Te[he] === void 0 && (Te[he] = tt[he]);
        }
        if (le || _t) {
          var nt = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          le && st(Te, nt), _t && ct(Te, nt);
        }
        return cn(g, le, _t, Ae, ie, Ln.current, Te);
      }
    }
    var We = Re.ReactCurrentOwner, vt = Re.ReactDebugCurrentFrame;
    function yr(g) {
      if (g) {
        var H = g._owner, I = Ft(g.type, g._source, H ? H.type : null);
        vt.setExtraStackFrame(I);
      } else
        vt.setExtraStackFrame(null);
    }
    var gr;
    gr = !1;
    function ar(g) {
      return typeof g == "object" && g !== null && g.$$typeof === s;
    }
    function ia() {
      {
        if (We.current) {
          var g = Ce(We.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function nu(g) {
      {
        if (g !== void 0) {
          var H = g.fileName.replace(/^.*[\\\/]/, ""), I = g.lineNumber;
          return `

Check your code at ` + H + ":" + I + ".";
        }
        return "";
      }
    }
    var ui = {};
    function Xi(g) {
      {
        var H = ia();
        if (!H) {
          var I = typeof g == "string" ? g : g.displayName || g.name;
          I && (H = `

Check the top-level render call using <` + I + ">.");
        }
        return H;
      }
    }
    function Ji(g, H) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var I = Xi(H);
        if (ui[I])
          return;
        ui[I] = !0;
        var ie = "";
        g && g._owner && g._owner !== We.current && (ie = " It was passed a child from " + Ce(g._owner.type) + "."), yr(g), G('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, ie), yr(null);
      }
    }
    function li(g, H) {
      {
        if (typeof g != "object")
          return;
        if (Xt(g))
          for (var I = 0; I < g.length; I++) {
            var ie = g[I];
            ar(ie) && Ji(ie, H);
          }
        else if (ar(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var Ae = ve(g);
          if (typeof Ae == "function" && Ae !== g.entries)
            for (var he = Ae.call(g), Te; !(Te = he.next()).done; )
              ar(Te.value) && Ji(Te.value, H);
        }
      }
    }
    function br(g) {
      {
        var H = g.type;
        if (H == null || typeof H == "string")
          return;
        var I;
        if (typeof H == "function")
          I = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === D || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === U))
          I = H.propTypes;
        else
          return;
        if (I) {
          var ie = Ce(H);
          kn(I, g.props, "prop", ie, g);
        } else if (H.PropTypes !== void 0 && !gr) {
          gr = !0;
          var Ae = Ce(H);
          G("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ae || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && G("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(g) {
      {
        for (var H = Object.keys(g.props), I = 0; I < H.length; I++) {
          var ie = H[I];
          if (ie !== "children" && ie !== "key") {
            yr(g), G("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), yr(null);
            break;
          }
        }
        g.ref !== null && (yr(g), G("Invalid attribute `ref` supplied to `React.Fragment`."), yr(null));
      }
    }
    var In = {};
    function Fr(g, H, I, ie, Ae, he) {
      {
        var Te = gt(g);
        if (!Te) {
          var le = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _t = nu(Ae);
          _t ? le += _t : le += ia();
          var tt;
          g === null ? tt = "null" : Xt(g) ? tt = "array" : g !== void 0 && g.$$typeof === s ? (tt = "<" + (Ce(g.type) || "Unknown") + " />", le = " Did you accidentally export a JSX literal instead of a component?") : tt = typeof g, G("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tt, le);
        }
        var nt = dt(g, H, I, Ae, he);
        if (nt == null)
          return nt;
        if (Te) {
          var fn = H.children;
          if (fn !== void 0)
            if (ie)
              if (Xt(fn)) {
                for (var Hr = 0; Hr < fn.length; Hr++)
                  li(fn[Hr], g);
                Object.freeze && Object.freeze(fn);
              } else
                G("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              li(fn, g);
        }
        if (Ht.call(H, "key")) {
          var Sr = Ce(g), wt = Object.keys(H).filter(function(De) {
            return De !== "key";
          }), ci = wt.length > 0 ? "{key: someKey, " + wt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!In[Sr + ci]) {
            var Er = wt.length > 0 ? "{" + wt.join(": ..., ") + ": ...}" : "{}";
            G(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ci, Sr, Er, Sr), In[Sr + ci] = !0;
          }
        }
        return g === m ? ir(nt) : br(nt), nt;
      }
    }
    var si = Fr;
    cf.Fragment = m, cf.jsxDEV = si;
  }(), cf;
}
var dE;
function _M() {
  return dE || (dE = 1, Lh.exports = xM()), Lh.exports;
}
var It = _M(), Pn = bf();
const wM = /* @__PURE__ */ zE(Pn);
var ff = {}, Uh = { exports: {} }, zh = { exports: {} }, jh = {}, vE;
function DM() {
  return vE || (vE = 1, function(u) {
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
      var s = !1, p = 5;
      function m(Y, ae) {
        var _e = Y.length;
        Y.push(ae), d(Y, ae, _e);
      }
      function E(Y) {
        return Y.length === 0 ? null : Y[0];
      }
      function T(Y) {
        if (Y.length === 0)
          return null;
        var ae = Y[0], _e = Y.pop();
        return _e !== ae && (Y[0] = _e, L(Y, _e, 0)), ae;
      }
      function d(Y, ae, _e) {
        for (var $e = _e; $e > 0; ) {
          var et = $e - 1 >>> 1, st = Y[et];
          if (D(st, ae) > 0)
            Y[et] = ae, Y[$e] = st, $e = et;
          else
            return;
        }
      }
      function L(Y, ae, _e) {
        for (var $e = _e, et = Y.length, st = et >>> 1; $e < st; ) {
          var ct = ($e + 1) * 2 - 1, cn = Y[ct], dt = ct + 1, We = Y[dt];
          if (D(cn, ae) < 0)
            dt < et && D(We, cn) < 0 ? (Y[$e] = We, Y[dt] = ae, $e = dt) : (Y[$e] = cn, Y[ct] = ae, $e = ct);
          else if (dt < et && D(We, ae) < 0)
            Y[$e] = We, Y[dt] = ae, $e = dt;
          else
            return;
        }
      }
      function D(Y, ae) {
        var _e = Y.sortIndex - ae.sortIndex;
        return _e !== 0 ? _e : Y.id - ae.id;
      }
      var k = 1, j = 2, U = 3, B = 4, z = 5;
      function J(Y, ae) {
      }
      var ze = typeof performance == "object" && typeof performance.now == "function";
      if (ze) {
        var ve = performance;
        u.unstable_now = function() {
          return ve.now();
        };
      } else {
        var Re = Date, G = Re.now();
        u.unstable_now = function() {
          return Re.now() - G;
        };
      }
      var ee = 1073741823, pe = -1, Z = 250, Ee = 5e3, ue = 1e4, qt = ee, Ze = [], gt = [], Rt = 1, at = null, Ce = U, mt = !1, it = !1, Tt = !1, we = typeof setTimeout == "function" ? setTimeout : null, ln = typeof clearTimeout == "function" ? clearTimeout : null, pr = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function $n(Y) {
        for (var ae = E(gt); ae !== null; ) {
          if (ae.callback === null)
            T(gt);
          else if (ae.startTime <= Y)
            T(gt), ae.sortIndex = ae.expirationTime, m(Ze, ae);
          else
            return;
          ae = E(gt);
        }
      }
      function nr(Y) {
        if (Tt = !1, $n(Y), !it)
          if (E(Ze) !== null)
            it = !0, xt(zt);
          else {
            var ae = E(gt);
            ae !== null && En(nr, ae.startTime - Y);
          }
      }
      function zt(Y, ae) {
        it = !1, Tt && (Tt = !1, Ln()), mt = !0;
        var _e = Ce;
        try {
          var $e;
          if (!s) return hr(Y, ae);
        } finally {
          at = null, Ce = _e, mt = !1;
        }
      }
      function hr(Y, ae) {
        var _e = ae;
        for ($n(_e), at = E(Ze); at !== null && !(at.expirationTime > _e && (!Y || ra())); ) {
          var $e = at.callback;
          if (typeof $e == "function") {
            at.callback = null, Ce = at.priorityLevel;
            var et = at.expirationTime <= _e, st = $e(et);
            _e = u.unstable_now(), typeof st == "function" ? at.callback = st : at === E(Ze) && T(Ze), $n(_e);
          } else
            T(Ze);
          at = E(Ze);
        }
        if (at !== null)
          return !0;
        var ct = E(gt);
        return ct !== null && En(nr, ct.startTime - _e), !1;
      }
      function gn(Y, ae) {
        switch (Y) {
          case k:
          case j:
          case U:
          case B:
          case z:
            break;
          default:
            Y = U;
        }
        var _e = Ce;
        Ce = Y;
        try {
          return ae();
        } finally {
          Ce = _e;
        }
      }
      function na(Y) {
        var ae;
        switch (Ce) {
          case k:
          case j:
          case U:
            ae = U;
            break;
          default:
            ae = Ce;
            break;
        }
        var _e = Ce;
        Ce = ae;
        try {
          return Y();
        } finally {
          Ce = _e;
        }
      }
      function zr(Y) {
        var ae = Ce;
        return function() {
          var _e = Ce;
          Ce = ae;
          try {
            return Y.apply(this, arguments);
          } finally {
            Ce = _e;
          }
        };
      }
      function Gt(Y, ae, _e) {
        var $e = u.unstable_now(), et;
        if (typeof _e == "object" && _e !== null) {
          var st = _e.delay;
          typeof st == "number" && st > 0 ? et = $e + st : et = $e;
        } else
          et = $e;
        var ct;
        switch (Y) {
          case k:
            ct = pe;
            break;
          case j:
            ct = Z;
            break;
          case z:
            ct = qt;
            break;
          case B:
            ct = ue;
            break;
          case U:
          default:
            ct = Ee;
            break;
        }
        var cn = et + ct, dt = {
          id: Rt++,
          callback: ae,
          priorityLevel: Y,
          startTime: et,
          expirationTime: cn,
          sortIndex: -1
        };
        return et > $e ? (dt.sortIndex = et, m(gt, dt), E(Ze) === null && dt === E(gt) && (Tt ? Ln() : Tt = !0, En(nr, et - $e))) : (dt.sortIndex = cn, m(Ze, dt), !it && !mt && (it = !0, xt(zt))), dt;
      }
      function Yn() {
      }
      function Wt() {
        !it && !mt && (it = !0, xt(zt));
      }
      function Qt() {
        return E(Ze);
      }
      function Kt(Y) {
        Y.callback = null;
      }
      function An() {
        return Ce;
      }
      var jt = !1, bn = null, Ft = -1, Ht = p, rr = -1;
      function ra() {
        var Y = u.unstable_now() - rr;
        return !(Y < Ht);
      }
      function mr() {
      }
      function kn(Y) {
        if (Y < 0 || Y > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Y > 0 ? Ht = Math.floor(1e3 / Y) : Ht = p;
      }
      var sn = function() {
        if (bn !== null) {
          var Y = u.unstable_now();
          rr = Y;
          var ae = !0, _e = !0;
          try {
            _e = bn(ae, Y);
          } finally {
            _e ? Xt() : (jt = !1, bn = null);
          }
        } else
          jt = !1;
      }, Xt;
      if (typeof pr == "function")
        Xt = function() {
          pr(sn);
        };
      else if (typeof MessageChannel < "u") {
        var Sn = new MessageChannel(), jr = Sn.port2;
        Sn.port1.onmessage = sn, Xt = function() {
          jr.postMessage(null);
        };
      } else
        Xt = function() {
          we(sn, 0);
        };
      function xt(Y) {
        bn = Y, jt || (jt = !0, Xt());
      }
      function En(Y, ae) {
        Ft = we(function() {
          Y(u.unstable_now());
        }, ae);
      }
      function Ln() {
        ln(Ft), Ft = -1;
      }
      var Aa = mr, aa = null;
      u.unstable_IdlePriority = z, u.unstable_ImmediatePriority = k, u.unstable_LowPriority = B, u.unstable_NormalPriority = U, u.unstable_Profiling = aa, u.unstable_UserBlockingPriority = j, u.unstable_cancelCallback = Kt, u.unstable_continueExecution = Wt, u.unstable_forceFrameRate = kn, u.unstable_getCurrentPriorityLevel = An, u.unstable_getFirstCallbackNode = Qt, u.unstable_next = na, u.unstable_pauseExecution = Yn, u.unstable_requestPaint = Aa, u.unstable_runWithPriority = gn, u.unstable_scheduleCallback = Gt, u.unstable_shouldYield = ra, u.unstable_wrapCallback = zr, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  }(jh)), jh;
}
var pE;
function OM() {
  return pE || (pE = 1, zh.exports = DM()), zh.exports;
}
var Vn = {}, hE;
function MM() {
  if (hE) return Vn;
  hE = 1;
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
    var u = bf(), s = OM(), p = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, m = !1;
    function E(e) {
      m = e;
    }
    function T(e) {
      if (!m) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        L("warn", e, n);
      }
    }
    function d(e) {
      if (!m) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        L("error", e, n);
      }
    }
    function L(e, t, n) {
      {
        var r = p.ReactDebugCurrentFrame, a = r.getStackAddendum();
        a !== "" && (t += "%s", n = n.concat([a]));
        var i = n.map(function(o) {
          return String(o);
        });
        i.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, i);
      }
    }
    var D = 0, k = 1, j = 2, U = 3, B = 4, z = 5, J = 6, ze = 7, ve = 8, Re = 9, G = 10, ee = 11, pe = 12, Z = 13, Ee = 14, ue = 15, qt = 16, Ze = 17, gt = 18, Rt = 19, at = 21, Ce = 22, mt = 23, it = 24, Tt = 25, we = !0, ln = !1, pr = !1, $n = !1, nr = !1, zt = !0, hr = !0, gn = !0, na = !0, zr = /* @__PURE__ */ new Set(), Gt = {}, Yn = {};
    function Wt(e, t) {
      Qt(e, t), Qt(e + "Capture", t);
    }
    function Qt(e, t) {
      Gt[e] && d("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Gt[e] = t;
      {
        var n = e.toLowerCase();
        Yn[n] = e, e === "onDoubleClick" && (Yn.ondblclick = e);
      }
      for (var r = 0; r < t.length; r++)
        zr.add(t[r]);
    }
    var Kt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", An = Object.prototype.hasOwnProperty;
    function jt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function bn(e) {
      try {
        return Ft(e), !1;
      } catch {
        return !0;
      }
    }
    function Ft(e) {
      return "" + e;
    }
    function Ht(e, t) {
      if (bn(e))
        return d("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jt(e)), Ft(e);
    }
    function rr(e) {
      if (bn(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jt(e)), Ft(e);
    }
    function ra(e, t) {
      if (bn(e))
        return d("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jt(e)), Ft(e);
    }
    function mr(e, t) {
      if (bn(e))
        return d("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jt(e)), Ft(e);
    }
    function kn(e) {
      if (bn(e))
        return d("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", jt(e)), Ft(e);
    }
    function sn(e) {
      if (bn(e))
        return d("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", jt(e)), Ft(e);
    }
    var Xt = 0, Sn = 1, jr = 2, xt = 3, En = 4, Ln = 5, Aa = 6, aa = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Y = aa + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ae = new RegExp("^[" + aa + "][" + Y + "]*$"), _e = {}, $e = {};
    function et(e) {
      return An.call($e, e) ? !0 : An.call(_e, e) ? !1 : ae.test(e) ? ($e[e] = !0, !0) : (_e[e] = !0, d("Invalid attribute name: `%s`", e), !1);
    }
    function st(e, t, n) {
      return t !== null ? t.type === Xt : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function ct(e, t, n, r) {
      if (n !== null && n.type === Xt)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (r)
            return !1;
          if (n !== null)
            return !n.acceptsBooleans;
          var a = e.toLowerCase().slice(0, 5);
          return a !== "data-" && a !== "aria-";
        }
        default:
          return !1;
      }
    }
    function cn(e, t, n, r) {
      if (t === null || typeof t > "u" || ct(e, t, n, r))
        return !0;
      if (r)
        return !1;
      if (n !== null)
        switch (n.type) {
          case xt:
            return !t;
          case En:
            return t === !1;
          case Ln:
            return isNaN(t);
          case Aa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function dt(e) {
      return vt.hasOwnProperty(e) ? vt[e] : null;
    }
    function We(e, t, n, r, a, i, o) {
      this.acceptsBooleans = t === jr || t === xt || t === En, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
    }
    var vt = {}, yr = [
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
    yr.forEach(function(e) {
      vt[e] = new We(
        e,
        Xt,
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
      vt[t] = new We(
        t,
        Sn,
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
      vt[e] = new We(
        e,
        jr,
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
      vt[e] = new We(
        e,
        jr,
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
      vt[e] = new We(
        e,
        xt,
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
      vt[e] = new We(
        e,
        xt,
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
      vt[e] = new We(
        e,
        En,
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
      vt[e] = new We(
        e,
        Aa,
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
      vt[e] = new We(
        e,
        Ln,
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
    var gr = /[\-\:]([a-z])/g, ar = function(e) {
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
      var t = e.replace(gr, ar);
      vt[t] = new We(
        t,
        Sn,
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
      var t = e.replace(gr, ar);
      vt[t] = new We(
        t,
        Sn,
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
      var t = e.replace(gr, ar);
      vt[t] = new We(
        t,
        Sn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      vt[e] = new We(
        e,
        Sn,
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
    var ia = "xlinkHref";
    vt[ia] = new We(
      "xlinkHref",
      Sn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      vt[e] = new We(
        e,
        Sn,
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
    var nu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ui = !1;
    function Xi(e) {
      !ui && nu.test(e) && (ui = !0, d("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ji(e, t, n, r) {
      if (r.mustUseProperty) {
        var a = r.propertyName;
        return e[a];
      } else {
        Ht(n, t), r.sanitizeURL && Xi("" + n);
        var i = r.attributeName, o = null;
        if (r.type === En) {
          if (e.hasAttribute(i)) {
            var l = e.getAttribute(i);
            return l === "" ? !0 : cn(t, n, r, !1) ? l : l === "" + n ? n : l;
          }
        } else if (e.hasAttribute(i)) {
          if (cn(t, n, r, !1))
            return e.getAttribute(i);
          if (r.type === xt)
            return n;
          o = e.getAttribute(i);
        }
        return cn(t, n, r, !1) ? o === null ? n : o : o === "" + n ? n : o;
      }
    }
    function li(e, t, n, r) {
      {
        if (!et(t))
          return;
        if (!e.hasAttribute(t))
          return n === void 0 ? void 0 : null;
        var a = e.getAttribute(t);
        return Ht(n, t), a === "" + n ? n : a;
      }
    }
    function br(e, t, n, r) {
      var a = dt(t);
      if (!st(t, a, r)) {
        if (cn(t, n, a, r) && (n = null), r || a === null) {
          if (et(t)) {
            var i = t;
            n === null ? e.removeAttribute(i) : (Ht(n, t), e.setAttribute(i, "" + n));
          }
          return;
        }
        var o = a.mustUseProperty;
        if (o) {
          var l = a.propertyName;
          if (n === null) {
            var c = a.type;
            e[l] = c === xt ? !1 : "";
          } else
            e[l] = n;
          return;
        }
        var v = a.attributeName, h = a.attributeNamespace;
        if (n === null)
          e.removeAttribute(v);
        else {
          var S = a.type, b;
          S === xt || S === En && n === !0 ? b = "" : (Ht(n, v), b = "" + n, a.sanitizeURL && Xi(b.toString())), h ? e.setAttributeNS(h, v, b) : e.setAttribute(v, b);
        }
      }
    }
    var ir = Symbol.for("react.element"), In = Symbol.for("react.portal"), Fr = Symbol.for("react.fragment"), si = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), H = Symbol.for("react.provider"), I = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), Ae = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), Te = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), _t = Symbol.for("react.scope"), tt = Symbol.for("react.debug_trace_mode"), nt = Symbol.for("react.offscreen"), fn = Symbol.for("react.legacy_hidden"), Hr = Symbol.for("react.cache"), Sr = Symbol.for("react.tracing_marker"), wt = Symbol.iterator, ci = "@@iterator";
    function Er(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = wt && e[wt] || e[ci];
      return typeof t == "function" ? t : null;
    }
    var De = Object.assign, fi = 0, Zl, es, ka, ru, au, iu, ou;
    function uu() {
    }
    uu.__reactDisabledLog = !0;
    function ts() {
      {
        if (fi === 0) {
          Zl = console.log, es = console.info, ka = console.warn, ru = console.error, au = console.group, iu = console.groupCollapsed, ou = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: uu,
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
        fi++;
      }
    }
    function ns() {
      {
        if (fi--, fi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: De({}, e, {
              value: Zl
            }),
            info: De({}, e, {
              value: es
            }),
            warn: De({}, e, {
              value: ka
            }),
            error: De({}, e, {
              value: ru
            }),
            group: De({}, e, {
              value: au
            }),
            groupCollapsed: De({}, e, {
              value: iu
            }),
            groupEnd: De({}, e, {
              value: ou
            })
          });
        }
        fi < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Zi = p.ReactCurrentDispatcher, lu;
    function Vr(e, t, n) {
      {
        if (lu === void 0)
          try {
            throw Error();
          } catch (a) {
            var r = a.stack.trim().match(/\n( *(at )?)/);
            lu = r && r[1] || "";
          }
        return `
` + lu + e;
      }
    }
    var di = !1, La;
    {
      var eo = typeof WeakMap == "function" ? WeakMap : Map;
      La = new eo();
    }
    function vi(e, t) {
      if (!e || di)
        return "";
      {
        var n = La.get(e);
        if (n !== void 0)
          return n;
      }
      var r;
      di = !0;
      var a = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var i;
      i = Zi.current, Zi.current = null, ts();
      try {
        if (t) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (w) {
              r = w;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (w) {
              r = w;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            r = w;
          }
          e();
        }
      } catch (w) {
        if (w && r && typeof w.stack == "string") {
          for (var l = w.stack.split(`
`), c = r.stack.split(`
`), v = l.length - 1, h = c.length - 1; v >= 1 && h >= 0 && l[v] !== c[h]; )
            h--;
          for (; v >= 1 && h >= 0; v--, h--)
            if (l[v] !== c[h]) {
              if (v !== 1 || h !== 1)
                do
                  if (v--, h--, h < 0 || l[v] !== c[h]) {
                    var S = `
` + l[v].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && La.set(e, S), S;
                  }
                while (v >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        di = !1, Zi.current = i, ns(), Error.prepareStackTrace = a;
      }
      var b = e ? e.displayName || e.name : "", x = b ? Vr(b) : "";
      return typeof e == "function" && La.set(e, x), x;
    }
    function to(e, t, n) {
      return vi(e, !0);
    }
    function su(e, t, n) {
      return vi(e, !1);
    }
    function rs(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function cu(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return vi(e, rs(e));
      if (typeof e == "string")
        return Vr(e);
      switch (e) {
        case Ae:
          return Vr("Suspense");
        case he:
          return Vr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ie:
            return su(e.render);
          case Te:
            return cu(e.type, t, n);
          case le: {
            var r = e, a = r._payload, i = r._init;
            try {
              return cu(i(a), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    function xf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case z:
          return Vr(e.type);
        case qt:
          return Vr("Lazy");
        case Z:
          return Vr("Suspense");
        case Rt:
          return Vr("SuspenseList");
        case D:
        case j:
        case ue:
          return su(e.type);
        case ee:
          return su(e.type.render);
        case k:
          return to(e.type);
        default:
          return "";
      }
    }
    function pi(e) {
      try {
        var t = "", n = e;
        do
          t += xf(n), n = n.return;
        while (n);
        return t;
      } catch (r) {
        return `
Error generating stack: ` + r.message + `
` + r.stack;
      }
    }
    function as(e, t, n) {
      var r = e.displayName;
      if (r)
        return r;
      var a = t.displayName || t.name || "";
      return a !== "" ? n + "(" + a + ")" : n;
    }
    function fu(e) {
      return e.displayName || "Context";
    }
    function He(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Fr:
          return "Fragment";
        case In:
          return "Portal";
        case g:
          return "Profiler";
        case si:
          return "StrictMode";
        case Ae:
          return "Suspense";
        case he:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            var t = e;
            return fu(t) + ".Consumer";
          case H:
            var n = e;
            return fu(n._context) + ".Provider";
          case ie:
            return as(e, e.render, "ForwardRef");
          case Te:
            var r = e.displayName || null;
            return r !== null ? r : He(e.type) || "Memo";
          case le: {
            var a = e, i = a._payload, o = a._init;
            try {
              return He(o(i));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function _f(e, t, n) {
      var r = t.displayName || t.name || "";
      return e.displayName || (r !== "" ? n + "(" + r + ")" : n);
    }
    function oa(e) {
      return e.displayName || "Context";
    }
    function Se(e) {
      var t = e.tag, n = e.type;
      switch (t) {
        case it:
          return "Cache";
        case Re:
          var r = n;
          return oa(r) + ".Consumer";
        case G:
          var a = n;
          return oa(a._context) + ".Provider";
        case gt:
          return "DehydratedFragment";
        case ee:
          return _f(n, n.render, "ForwardRef");
        case ze:
          return "Fragment";
        case z:
          return n;
        case B:
          return "Portal";
        case U:
          return "Root";
        case J:
          return "Text";
        case qt:
          return He(n);
        case ve:
          return n === si ? "StrictMode" : "Mode";
        case Ce:
          return "Offscreen";
        case pe:
          return "Profiler";
        case at:
          return "Scope";
        case Z:
          return "Suspense";
        case Rt:
          return "SuspenseList";
        case Tt:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case k:
        case D:
        case Ze:
        case j:
        case Ee:
        case ue:
          if (typeof n == "function")
            return n.displayName || n.name || null;
          if (typeof n == "string")
            return n;
          break;
      }
      return null;
    }
    var du = p.ReactDebugCurrentFrame, Cn = null, hi = !1;
    function Na() {
      {
        if (Cn === null)
          return null;
        var e = Cn._debugOwner;
        if (e !== null && typeof e < "u")
          return Se(e);
      }
      return null;
    }
    function wf() {
      return Cn === null ? "" : pi(Cn);
    }
    function Vt() {
      du.getCurrentStack = null, Cn = null, hi = !1;
    }
    function ot(e) {
      du.getCurrentStack = e === null ? null : wf, Cn = e, hi = !1;
    }
    function is() {
      return Cn;
    }
    function or(e) {
      hi = e;
    }
    function Rn(e) {
      return "" + e;
    }
    function Cr(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return sn(e), e;
        default:
          return "";
      }
    }
    var Df = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function vu(e, t) {
      Df[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || d("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || d("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function os(e) {
      var t = e.type, n = e.nodeName;
      return n && n.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function pu(e) {
      return e._valueTracker;
    }
    function no(e) {
      e._valueTracker = null;
    }
    function Of(e) {
      var t = "";
      return e && (os(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ua(e) {
      var t = os(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      sn(e[t]);
      var r = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof n > "u" || typeof n.get != "function" || typeof n.set != "function")) {
        var a = n.get, i = n.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return a.call(this);
          },
          set: function(l) {
            sn(l), r = "" + l, i.call(this, l);
          }
        }), Object.defineProperty(e, t, {
          enumerable: n.enumerable
        });
        var o = {
          getValue: function() {
            return r;
          },
          setValue: function(l) {
            sn(l), r = "" + l;
          },
          stopTracking: function() {
            no(e), delete e[t];
          }
        };
        return o;
      }
    }
    function mi(e) {
      pu(e) || (e._valueTracker = Ua(e));
    }
    function hu(e) {
      if (!e)
        return !1;
      var t = pu(e);
      if (!t)
        return !0;
      var n = t.getValue(), r = Of(e);
      return r !== n ? (t.setValue(r), !0) : !1;
    }
    function ua(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var ro = !1, ao = !1, io = !1, us = !1;
    function ls(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function mu(e, t) {
      var n = e, r = t.checked, a = De({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? n._wrapperState.initialChecked
      });
      return a;
    }
    function ss(e, t) {
      vu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ao && (d("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component", t.type), ao = !0), t.value !== void 0 && t.defaultValue !== void 0 && !ro && (d("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component", t.type), ro = !0);
      var n = e, r = t.defaultValue == null ? "" : t.defaultValue;
      n._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Cr(t.value != null ? t.value : r),
        controlled: ls(t)
      };
    }
    function f(e, t) {
      var n = e, r = t.checked;
      r != null && br(n, "checked", r, !1);
    }
    function y(e, t) {
      var n = e;
      {
        var r = ls(t);
        !n._wrapperState.controlled && r && !us && (d("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), us = !0), n._wrapperState.controlled && !r && !io && (d("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), io = !0);
      }
      f(e, t);
      var a = Cr(t.value), i = t.type;
      if (a != null)
        i === "number" ? (a === 0 && n.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        n.value != a) && (n.value = Rn(a)) : n.value !== Rn(a) && (n.value = Rn(a));
      else if (i === "submit" || i === "reset") {
        n.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ce(n, t.type, a) : t.hasOwnProperty("defaultValue") && ce(n, t.type, Cr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (n.defaultChecked = !!t.defaultChecked);
    }
    function _(e, t, n) {
      var r = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var a = t.type, i = a === "submit" || a === "reset";
        if (i && (t.value === void 0 || t.value === null))
          return;
        var o = Rn(r._wrapperState.initialValue);
        n || o !== r.value && (r.value = o), r.defaultValue = o;
      }
      var l = r.name;
      l !== "" && (r.name = ""), r.defaultChecked = !r.defaultChecked, r.defaultChecked = !!r._wrapperState.initialChecked, l !== "" && (r.name = l);
    }
    function O(e, t) {
      var n = e;
      y(n, t), P(n, t);
    }
    function P(e, t) {
      var n = t.name;
      if (t.type === "radio" && n != null) {
        for (var r = e; r.parentNode; )
          r = r.parentNode;
        Ht(n, "name");
        for (var a = r.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), i = 0; i < a.length; i++) {
          var o = a[i];
          if (!(o === e || o.form !== e.form)) {
            var l = Qs(o);
            if (!l)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            hu(o), y(o, l);
          }
        }
      }
    }
    function ce(e, t, n) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ua(e.ownerDocument) !== e) && (n == null ? e.defaultValue = Rn(e._wrapperState.initialValue) : e.defaultValue !== Rn(n) && (e.defaultValue = Rn(n)));
    }
    var ne = !1, ge = !1, ke = !1;
    function Ye(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? u.Children.forEach(t.children, function(n) {
        n != null && (typeof n == "string" || typeof n == "number" || ge || (ge = !0, d("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ke || (ke = !0, d("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ne && (d("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ne = !0);
    }
    function Ke(e, t) {
      t.value != null && e.setAttribute("value", Rn(Cr(t.value)));
    }
    var Xe = Array.isArray;
    function Oe(e) {
      return Xe(e);
    }
    var ut;
    ut = !1;
    function bt() {
      var e = Na();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var yi = ["value", "defaultValue"];
    function yu(e) {
      {
        vu("select", e);
        for (var t = 0; t < yi.length; t++) {
          var n = yi[t];
          if (e[n] != null) {
            var r = Oe(e[n]);
            e.multiple && !r ? d("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, bt()) : !e.multiple && r && d("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, bt());
          }
        }
      }
    }
    function la(e, t, n, r) {
      var a = e.options;
      if (t) {
        for (var i = n, o = {}, l = 0; l < i.length; l++)
          o["$" + i[l]] = !0;
        for (var c = 0; c < a.length; c++) {
          var v = o.hasOwnProperty("$" + a[c].value);
          a[c].selected !== v && (a[c].selected = v), v && r && (a[c].defaultSelected = !0);
        }
      } else {
        for (var h = Rn(Cr(n)), S = null, b = 0; b < a.length; b++) {
          if (a[b].value === h) {
            a[b].selected = !0, r && (a[b].defaultSelected = !0);
            return;
          }
          S === null && !a[b].disabled && (S = a[b]);
        }
        S !== null && (S.selected = !0);
      }
    }
    function gu(e, t) {
      return De({}, t, {
        value: void 0
      });
    }
    function bu(e, t) {
      var n = e;
      yu(t), n._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !ut && (d("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ut = !0);
    }
    function Mf(e, t) {
      var n = e;
      n.multiple = !!t.multiple;
      var r = t.value;
      r != null ? la(n, !!t.multiple, r, !1) : t.defaultValue != null && la(n, !!t.multiple, t.defaultValue, !0);
    }
    function cs(e, t) {
      var n = e, r = n._wrapperState.wasMultiple;
      n._wrapperState.wasMultiple = !!t.multiple;
      var a = t.value;
      a != null ? la(n, !!t.multiple, a, !1) : r !== !!t.multiple && (t.defaultValue != null ? la(n, !!t.multiple, t.defaultValue, !0) : la(n, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Af(e, t) {
      var n = e, r = t.value;
      r != null && la(n, !!t.multiple, r, !1);
    }
    var tm = !1;
    function kf(e, t) {
      var n = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var r = De({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Rn(n._wrapperState.initialValue)
      });
      return r;
    }
    function nm(e, t) {
      var n = e;
      vu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !tm && (d("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component"), tm = !0);
      var r = t.value;
      if (r == null) {
        var a = t.children, i = t.defaultValue;
        if (a != null) {
          d("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (i != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Oe(a)) {
              if (a.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              a = a[0];
            }
            i = a;
          }
        }
        i == null && (i = ""), r = i;
      }
      n._wrapperState = {
        initialValue: Cr(r)
      };
    }
    function rm(e, t) {
      var n = e, r = Cr(t.value), a = Cr(t.defaultValue);
      if (r != null) {
        var i = Rn(r);
        i !== n.value && (n.value = i), t.defaultValue == null && n.defaultValue !== i && (n.defaultValue = i);
      }
      a != null && (n.defaultValue = Rn(a));
    }
    function am(e, t) {
      var n = e, r = n.textContent;
      r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
    }
    function fC(e, t) {
      rm(e, t);
    }
    var sa = "http://www.w3.org/1999/xhtml", dC = "http://www.w3.org/1998/Math/MathML", Lf = "http://www.w3.org/2000/svg";
    function Nf(e) {
      switch (e) {
        case "svg":
          return Lf;
        case "math":
          return dC;
        default:
          return sa;
      }
    }
    function Uf(e, t) {
      return e == null || e === sa ? Nf(t) : e === Lf && t === "foreignObject" ? sa : e;
    }
    var vC = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, n, r, a);
        });
      } : e;
    }, fs, im = vC(function(e, t) {
      if (e.namespaceURI === Lf && !("innerHTML" in e)) {
        fs = fs || document.createElement("div"), fs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var n = fs.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; n.firstChild; )
          e.appendChild(n.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Nn = 1, ca = 3, St = 8, fa = 9, zf = 11, ds = function(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === ca) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, pC = {
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
    }, Su = {
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
    function hC(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var mC = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Su).forEach(function(e) {
      mC.forEach(function(t) {
        Su[hC(t, e)] = Su[e];
      });
    });
    function jf(e, t, n) {
      var r = t == null || typeof t == "boolean" || t === "";
      return r ? "" : !n && typeof t == "number" && t !== 0 && !(Su.hasOwnProperty(e) && Su[e]) ? t + "px" : (mr(t, e), ("" + t).trim());
    }
    var yC = /([A-Z])/g, gC = /^ms-/;
    function bC(e) {
      return e.replace(yC, "-$1").toLowerCase().replace(gC, "-ms-");
    }
    var om = function() {
    };
    {
      var SC = /^(?:webkit|moz|o)[A-Z]/, EC = /^-ms-/, CC = /-(.)/g, um = /;\s*$/, oo = {}, Ff = {}, lm = !1, sm = !1, RC = function(e) {
        return e.replace(CC, function(t, n) {
          return n.toUpperCase();
        });
      }, TC = function(e) {
        oo.hasOwnProperty(e) && oo[e] || (oo[e] = !0, d(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          RC(e.replace(EC, "ms-"))
        ));
      }, xC = function(e) {
        oo.hasOwnProperty(e) && oo[e] || (oo[e] = !0, d("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, _C = function(e, t) {
        Ff.hasOwnProperty(t) && Ff[t] || (Ff[t] = !0, d(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(um, "")));
      }, wC = function(e, t) {
        lm || (lm = !0, d("`NaN` is an invalid value for the `%s` css style property.", e));
      }, DC = function(e, t) {
        sm || (sm = !0, d("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      om = function(e, t) {
        e.indexOf("-") > -1 ? TC(e) : SC.test(e) ? xC(e) : um.test(t) && _C(e, t), typeof t == "number" && (isNaN(t) ? wC(e, t) : isFinite(t) || DC(e, t));
      };
    }
    var OC = om;
    function MC(e) {
      {
        var t = "", n = "";
        for (var r in e)
          if (e.hasOwnProperty(r)) {
            var a = e[r];
            if (a != null) {
              var i = r.indexOf("--") === 0;
              t += n + (i ? r : bC(r)) + ":", t += jf(r, a, i), n = ";";
            }
          }
        return t || null;
      }
    }
    function cm(e, t) {
      var n = e.style;
      for (var r in t)
        if (t.hasOwnProperty(r)) {
          var a = r.indexOf("--") === 0;
          a || OC(r, t[r]);
          var i = jf(r, t[r], a);
          r === "float" && (r = "cssFloat"), a ? n.setProperty(r, i) : n[r] = i;
        }
    }
    function AC(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function fm(e) {
      var t = {};
      for (var n in e)
        for (var r = pC[n] || [n], a = 0; a < r.length; a++)
          t[r[a]] = n;
      return t;
    }
    function kC(e, t) {
      {
        if (!t)
          return;
        var n = fm(e), r = fm(t), a = {};
        for (var i in n) {
          var o = n[i], l = r[i];
          if (l && o !== l) {
            var c = o + "," + l;
            if (a[c])
              continue;
            a[c] = !0, d("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", AC(e[o]) ? "Removing" : "Updating", o, l);
          }
        }
      }
    }
    var LC = {
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
    }, NC = De({
      menuitem: !0
    }, LC), UC = "__html";
    function Hf(e, t) {
      if (t) {
        if (NC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(UC in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && d("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function gi(e, t) {
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
    var vs = {
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
    }, dm = {
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
    }, uo = {}, zC = new RegExp("^(aria)-[" + Y + "]*$"), jC = new RegExp("^(aria)[A-Z][" + Y + "]*$");
    function FC(e, t) {
      {
        if (An.call(uo, t) && uo[t])
          return !0;
        if (jC.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), r = dm.hasOwnProperty(n) ? n : null;
          if (r == null)
            return d("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), uo[t] = !0, !0;
          if (t !== r)
            return d("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, r), uo[t] = !0, !0;
        }
        if (zC.test(t)) {
          var a = t.toLowerCase(), i = dm.hasOwnProperty(a) ? a : null;
          if (i == null)
            return uo[t] = !0, !1;
          if (t !== i)
            return d("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, i), uo[t] = !0, !0;
        }
      }
      return !0;
    }
    function HC(e, t) {
      {
        var n = [];
        for (var r in t) {
          var a = FC(e, r);
          a || n.push(r);
        }
        var i = n.map(function(o) {
          return "`" + o + "`";
        }).join(", ");
        n.length === 1 ? d("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", i, e) : n.length > 1 && d("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", i, e);
      }
    }
    function VC(e, t) {
      gi(e, t) || HC(e, t);
    }
    var vm = !1;
    function BC(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !vm && (vm = !0, e === "select" && t.multiple ? d("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : d("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var pm = function() {
    };
    {
      var Tn = {}, hm = /^on./, PC = /^on[^A-Z]/, $C = new RegExp("^(aria)-[" + Y + "]*$"), YC = new RegExp("^(aria)[A-Z][" + Y + "]*$");
      pm = function(e, t, n, r) {
        if (An.call(Tn, t) && Tn[t])
          return !0;
        var a = t.toLowerCase();
        if (a === "onfocusin" || a === "onfocusout")
          return d("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Tn[t] = !0, !0;
        if (r != null) {
          var i = r.registrationNameDependencies, o = r.possibleRegistrationNames;
          if (i.hasOwnProperty(t))
            return !0;
          var l = o.hasOwnProperty(a) ? o[a] : null;
          if (l != null)
            return d("Invalid event handler property `%s`. Did you mean `%s`?", t, l), Tn[t] = !0, !0;
          if (hm.test(t))
            return d("Unknown event handler property `%s`. It will be ignored.", t), Tn[t] = !0, !0;
        } else if (hm.test(t))
          return PC.test(t) && d("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Tn[t] = !0, !0;
        if ($C.test(t) || YC.test(t))
          return !0;
        if (a === "innerhtml")
          return d("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Tn[t] = !0, !0;
        if (a === "aria")
          return d("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Tn[t] = !0, !0;
        if (a === "is" && n !== null && n !== void 0 && typeof n != "string")
          return d("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), Tn[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return d("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Tn[t] = !0, !0;
        var c = dt(t), v = c !== null && c.type === Xt;
        if (vs.hasOwnProperty(a)) {
          var h = vs[a];
          if (h !== t)
            return d("Invalid DOM property `%s`. Did you mean `%s`?", t, h), Tn[t] = !0, !0;
        } else if (!v && t !== a)
          return d("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, a), Tn[t] = !0, !0;
        return typeof n == "boolean" && ct(t, n, c, !1) ? (n ? d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), Tn[t] = !0, !0) : v ? !0 : ct(t, n, c, !1) ? (Tn[t] = !0, !1) : ((n === "false" || n === "true") && c !== null && c.type === xt && (d("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), Tn[t] = !0), !0);
      };
    }
    var IC = function(e, t, n) {
      {
        var r = [];
        for (var a in t) {
          var i = pm(e, a, t[a], n);
          i || r.push(a);
        }
        var o = r.map(function(l) {
          return "`" + l + "`";
        }).join(", ");
        r.length === 1 ? d("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", o, e) : r.length > 1 && d("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", o, e);
      }
    };
    function qC(e, t, n) {
      gi(e, t) || IC(e, t, n);
    }
    var mm = 1, Vf = 2, Eu = 4, GC = mm | Vf | Eu, Cu = null;
    function WC(e) {
      Cu !== null && d("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Cu = e;
    }
    function QC() {
      Cu === null && d("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Cu = null;
    }
    function KC(e) {
      return e === Cu;
    }
    function Bf(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ca ? t.parentNode : t;
    }
    var Pf = null, lo = null, so = null;
    function ym(e) {
      var t = Ya(e);
      if (t) {
        if (typeof Pf != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var n = t.stateNode;
        if (n) {
          var r = Qs(n);
          Pf(t.stateNode, t.type, r);
        }
      }
    }
    function XC(e) {
      Pf = e;
    }
    function gm(e) {
      lo ? so ? so.push(e) : so = [e] : lo = e;
    }
    function JC() {
      return lo !== null || so !== null;
    }
    function bm() {
      if (lo) {
        var e = lo, t = so;
        if (lo = null, so = null, ym(e), t)
          for (var n = 0; n < t.length; n++)
            ym(t[n]);
      }
    }
    var Sm = function(e, t) {
      return e(t);
    }, Em = function() {
    }, $f = !1;
    function ZC() {
      var e = JC();
      e && (Em(), bm());
    }
    function Cm(e, t, n) {
      if ($f)
        return e(t, n);
      $f = !0;
      try {
        return Sm(e, t, n);
      } finally {
        $f = !1, ZC();
      }
    }
    function eR(e, t, n) {
      Sm = e, Em = n;
    }
    function tR(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function nR(e, t, n) {
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
          return !!(n.disabled && tR(t));
        default:
          return !1;
      }
    }
    function Ru(e, t) {
      var n = e.stateNode;
      if (n === null)
        return null;
      var r = Qs(n);
      if (r === null)
        return null;
      var a = r[t];
      if (nR(t, e.type, r))
        return null;
      if (a && typeof a != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type.");
      return a;
    }
    var Yf = !1;
    if (Kt)
      try {
        var Tu = {};
        Object.defineProperty(Tu, "passive", {
          get: function() {
            Yf = !0;
          }
        }), window.addEventListener("test", Tu, Tu), window.removeEventListener("test", Tu, Tu);
      } catch {
        Yf = !1;
      }
    function Rm(e, t, n, r, a, i, o, l, c) {
      var v = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, v);
      } catch (h) {
        this.onError(h);
      }
    }
    var Tm = Rm;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var If = document.createElement("react");
      Tm = function(t, n, r, a, i, o, l, c, v) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var h = document.createEvent("Event"), S = !1, b = !0, x = window.event, w = Object.getOwnPropertyDescriptor(window, "event");
        function M() {
          If.removeEventListener(A, oe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = x);
        }
        var q = Array.prototype.slice.call(arguments, 3);
        function oe() {
          S = !0, M(), n.apply(r, q), b = !1;
        }
        var re, Ue = !1, Me = !1;
        function C(R) {
          if (re = R.error, Ue = !0, re === null && R.colno === 0 && R.lineno === 0 && (Me = !0), R.defaultPrevented && re != null && typeof re == "object")
            try {
              re._suppressLogging = !0;
            } catch {
            }
        }
        var A = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", C), If.addEventListener(A, oe, !1), h.initEvent(A, !1, !1), If.dispatchEvent(h), w && Object.defineProperty(window, "event", w), S && b && (Ue ? Me && (re = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : re = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(re)), window.removeEventListener("error", C), !S)
          return M(), Rm.apply(this, arguments);
      };
    }
    var rR = Tm, co = !1, ps = null, hs = !1, qf = null, aR = {
      onError: function(e) {
        co = !0, ps = e;
      }
    };
    function Gf(e, t, n, r, a, i, o, l, c) {
      co = !1, ps = null, rR.apply(aR, arguments);
    }
    function iR(e, t, n, r, a, i, o, l, c) {
      if (Gf.apply(this, arguments), co) {
        var v = Wf();
        hs || (hs = !0, qf = v);
      }
    }
    function oR() {
      if (hs) {
        var e = qf;
        throw hs = !1, qf = null, e;
      }
    }
    function uR() {
      return co;
    }
    function Wf() {
      if (co) {
        var e = ps;
        return co = !1, ps = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function fo(e) {
      return e._reactInternals;
    }
    function lR(e) {
      return e._reactInternals !== void 0;
    }
    function sR(e, t) {
      e._reactInternals = t;
    }
    var fe = (
      /*                      */
      0
    ), vo = (
      /*                */
      1
    ), Et = (
      /*                    */
      2
    ), Ve = (
      /*                       */
      4
    ), bi = (
      /*                */
      16
    ), xu = (
      /*                 */
      32
    ), xm = (
      /*                     */
      64
    ), Be = (
      /*                   */
      128
    ), da = (
      /*            */
      256
    ), Si = (
      /*                          */
      512
    ), po = (
      /*                     */
      1024
    ), za = (
      /*                      */
      2048
    ), va = (
      /*                    */
      4096
    ), Ei = (
      /*                   */
      8192
    ), Qf = (
      /*             */
      16384
    ), cR = (
      /*               */
      32767
    ), ms = (
      /*                   */
      32768
    ), xn = (
      /*                */
      65536
    ), Kf = (
      /* */
      131072
    ), _m = (
      /*                       */
      1048576
    ), Xf = (
      /*                    */
      2097152
    ), Ci = (
      /*                 */
      4194304
    ), Jf = (
      /*                */
      8388608
    ), ja = (
      /*               */
      16777216
    ), Zf = (
      /*              */
      33554432
    ), ed = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ve | po | 0
    ), td = Et | Ve | bi | xu | Si | va | Ei, _u = Ve | xm | Si | Ei, ho = za | bi, pa = Ci | Jf | Xf, fR = p.ReactCurrentOwner;
    function Ri(e) {
      var t = e, n = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var r = t;
        do
          t = r, (t.flags & (Et | va)) !== fe && (n = t.return), r = t.return;
        while (r);
      }
      return t.tag === U ? n : null;
    }
    function wm(e) {
      if (e.tag === Z) {
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
    function Dm(e) {
      return e.tag === U ? e.stateNode.containerInfo : null;
    }
    function dR(e) {
      return Ri(e) === e;
    }
    function vR(e) {
      {
        var t = fR.current;
        if (t !== null && t.tag === k) {
          var n = t, r = n.stateNode;
          r._warnedAboutRefsInRender || d("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Se(n) || "A component"), r._warnedAboutRefsInRender = !0;
        }
      }
      var a = fo(e);
      return a ? Ri(a) === a : !1;
    }
    function Om(e) {
      if (Ri(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Mm(e) {
      var t = e.alternate;
      if (!t) {
        var n = Ri(e);
        if (n === null)
          throw new Error("Unable to find node on an unmounted component.");
        return n !== e ? null : e;
      }
      for (var r = e, a = t; ; ) {
        var i = r.return;
        if (i === null)
          break;
        var o = i.alternate;
        if (o === null) {
          var l = i.return;
          if (l !== null) {
            r = a = l;
            continue;
          }
          break;
        }
        if (i.child === o.child) {
          for (var c = i.child; c; ) {
            if (c === r)
              return Om(i), e;
            if (c === a)
              return Om(i), t;
            c = c.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (r.return !== a.return)
          r = i, a = o;
        else {
          for (var v = !1, h = i.child; h; ) {
            if (h === r) {
              v = !0, r = i, a = o;
              break;
            }
            if (h === a) {
              v = !0, a = i, r = o;
              break;
            }
            h = h.sibling;
          }
          if (!v) {
            for (h = o.child; h; ) {
              if (h === r) {
                v = !0, r = o, a = i;
                break;
              }
              if (h === a) {
                v = !0, a = o, r = i;
                break;
              }
              h = h.sibling;
            }
            if (!v)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (r.alternate !== a)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (r.tag !== U)
        throw new Error("Unable to find node on an unmounted component.");
      return r.stateNode.current === r ? e : t;
    }
    function Am(e) {
      var t = Mm(e);
      return t !== null ? km(t) : null;
    }
    function km(e) {
      if (e.tag === z || e.tag === J)
        return e;
      for (var t = e.child; t !== null; ) {
        var n = km(t);
        if (n !== null)
          return n;
        t = t.sibling;
      }
      return null;
    }
    function pR(e) {
      var t = Mm(e);
      return t !== null ? Lm(t) : null;
    }
    function Lm(e) {
      if (e.tag === z || e.tag === J)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== B) {
          var n = Lm(t);
          if (n !== null)
            return n;
        }
        t = t.sibling;
      }
      return null;
    }
    var Nm = s.unstable_scheduleCallback, hR = s.unstable_cancelCallback, mR = s.unstable_shouldYield, yR = s.unstable_requestPaint, Bt = s.unstable_now, gR = s.unstable_getCurrentPriorityLevel, ys = s.unstable_ImmediatePriority, nd = s.unstable_UserBlockingPriority, Ti = s.unstable_NormalPriority, bR = s.unstable_LowPriority, rd = s.unstable_IdlePriority, SR = s.unstable_yieldValue, ER = s.unstable_setDisableYieldValue, mo = null, dn = null, Q = null, Br = !1, Rr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function CR(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return d("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        hr && (e = De({}, e, {
          getLaneLabelMap: DR,
          injectProfilingHooks: wR
        })), mo = t.inject(e), dn = t;
      } catch (n) {
        d("React instrumentation encountered an error: %s.", n);
      }
      return !!t.checkDCE;
    }
    function RR(e, t) {
      if (dn && typeof dn.onScheduleFiberRoot == "function")
        try {
          dn.onScheduleFiberRoot(mo, e, t);
        } catch (n) {
          Br || (Br = !0, d("React instrumentation encountered an error: %s", n));
        }
    }
    function TR(e, t) {
      if (dn && typeof dn.onCommitFiberRoot == "function")
        try {
          var n = (e.current.flags & Be) === Be;
          if (gn) {
            var r;
            switch (t) {
              case Wn:
                r = ys;
                break;
              case ma:
                r = nd;
                break;
              case ya:
                r = Ti;
                break;
              case Ts:
                r = rd;
                break;
              default:
                r = Ti;
                break;
            }
            dn.onCommitFiberRoot(mo, e, r, n);
          }
        } catch (a) {
          Br || (Br = !0, d("React instrumentation encountered an error: %s", a));
        }
    }
    function xR(e) {
      if (dn && typeof dn.onPostCommitFiberRoot == "function")
        try {
          dn.onPostCommitFiberRoot(mo, e);
        } catch (t) {
          Br || (Br = !0, d("React instrumentation encountered an error: %s", t));
        }
    }
    function _R(e) {
      if (dn && typeof dn.onCommitFiberUnmount == "function")
        try {
          dn.onCommitFiberUnmount(mo, e);
        } catch (t) {
          Br || (Br = !0, d("React instrumentation encountered an error: %s", t));
        }
    }
    function Pt(e) {
      if (typeof SR == "function" && (ER(e), E(e)), dn && typeof dn.setStrictMode == "function")
        try {
          dn.setStrictMode(mo, e);
        } catch (t) {
          Br || (Br = !0, d("React instrumentation encountered an error: %s", t));
        }
    }
    function wR(e) {
      Q = e;
    }
    function DR() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, n = 0; n < id; n++) {
          var r = WR(t);
          e.set(t, r), t *= 2;
        }
        return e;
      }
    }
    function OR(e) {
      Q !== null && typeof Q.markCommitStarted == "function" && Q.markCommitStarted(e);
    }
    function Um() {
      Q !== null && typeof Q.markCommitStopped == "function" && Q.markCommitStopped();
    }
    function wu(e) {
      Q !== null && typeof Q.markComponentRenderStarted == "function" && Q.markComponentRenderStarted(e);
    }
    function yo() {
      Q !== null && typeof Q.markComponentRenderStopped == "function" && Q.markComponentRenderStopped();
    }
    function MR(e) {
      Q !== null && typeof Q.markComponentPassiveEffectMountStarted == "function" && Q.markComponentPassiveEffectMountStarted(e);
    }
    function AR() {
      Q !== null && typeof Q.markComponentPassiveEffectMountStopped == "function" && Q.markComponentPassiveEffectMountStopped();
    }
    function kR(e) {
      Q !== null && typeof Q.markComponentPassiveEffectUnmountStarted == "function" && Q.markComponentPassiveEffectUnmountStarted(e);
    }
    function LR() {
      Q !== null && typeof Q.markComponentPassiveEffectUnmountStopped == "function" && Q.markComponentPassiveEffectUnmountStopped();
    }
    function NR(e) {
      Q !== null && typeof Q.markComponentLayoutEffectMountStarted == "function" && Q.markComponentLayoutEffectMountStarted(e);
    }
    function UR() {
      Q !== null && typeof Q.markComponentLayoutEffectMountStopped == "function" && Q.markComponentLayoutEffectMountStopped();
    }
    function zm(e) {
      Q !== null && typeof Q.markComponentLayoutEffectUnmountStarted == "function" && Q.markComponentLayoutEffectUnmountStarted(e);
    }
    function jm() {
      Q !== null && typeof Q.markComponentLayoutEffectUnmountStopped == "function" && Q.markComponentLayoutEffectUnmountStopped();
    }
    function zR(e, t, n) {
      Q !== null && typeof Q.markComponentErrored == "function" && Q.markComponentErrored(e, t, n);
    }
    function jR(e, t, n) {
      Q !== null && typeof Q.markComponentSuspended == "function" && Q.markComponentSuspended(e, t, n);
    }
    function FR(e) {
      Q !== null && typeof Q.markLayoutEffectsStarted == "function" && Q.markLayoutEffectsStarted(e);
    }
    function HR() {
      Q !== null && typeof Q.markLayoutEffectsStopped == "function" && Q.markLayoutEffectsStopped();
    }
    function VR(e) {
      Q !== null && typeof Q.markPassiveEffectsStarted == "function" && Q.markPassiveEffectsStarted(e);
    }
    function BR() {
      Q !== null && typeof Q.markPassiveEffectsStopped == "function" && Q.markPassiveEffectsStopped();
    }
    function Fm(e) {
      Q !== null && typeof Q.markRenderStarted == "function" && Q.markRenderStarted(e);
    }
    function PR() {
      Q !== null && typeof Q.markRenderYielded == "function" && Q.markRenderYielded();
    }
    function Hm() {
      Q !== null && typeof Q.markRenderStopped == "function" && Q.markRenderStopped();
    }
    function $R(e) {
      Q !== null && typeof Q.markRenderScheduled == "function" && Q.markRenderScheduled(e);
    }
    function YR(e, t) {
      Q !== null && typeof Q.markForceUpdateScheduled == "function" && Q.markForceUpdateScheduled(e, t);
    }
    function ad(e, t) {
      Q !== null && typeof Q.markStateUpdateScheduled == "function" && Q.markStateUpdateScheduled(e, t);
    }
    var se = (
      /*                         */
      0
    ), Le = (
      /*                 */
      1
    ), Ie = (
      /*                    */
      2
    ), pt = (
      /*               */
      8
    ), Pr = (
      /*              */
      16
    ), Vm = Math.clz32 ? Math.clz32 : GR, IR = Math.log, qR = Math.LN2;
    function GR(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (IR(t) / qR | 0) | 0;
    }
    var id = 31, F = (
      /*                        */
      0
    ), $t = (
      /*                          */
      0
    ), me = (
      /*                        */
      1
    ), go = (
      /*    */
      2
    ), ha = (
      /*             */
      4
    ), xi = (
      /*            */
      8
    ), $r = (
      /*                     */
      16
    ), Du = (
      /*                */
      32
    ), bo = (
      /*                       */
      4194240
    ), Ou = (
      /*                        */
      64
    ), od = (
      /*                        */
      128
    ), ud = (
      /*                        */
      256
    ), ld = (
      /*                        */
      512
    ), sd = (
      /*                        */
      1024
    ), cd = (
      /*                        */
      2048
    ), fd = (
      /*                        */
      4096
    ), dd = (
      /*                        */
      8192
    ), vd = (
      /*                        */
      16384
    ), pd = (
      /*                       */
      32768
    ), hd = (
      /*                       */
      65536
    ), md = (
      /*                       */
      131072
    ), yd = (
      /*                       */
      262144
    ), gd = (
      /*                       */
      524288
    ), bd = (
      /*                       */
      1048576
    ), Sd = (
      /*                       */
      2097152
    ), gs = (
      /*                            */
      130023424
    ), So = (
      /*                             */
      4194304
    ), Ed = (
      /*                             */
      8388608
    ), Cd = (
      /*                             */
      16777216
    ), Rd = (
      /*                             */
      33554432
    ), Td = (
      /*                             */
      67108864
    ), Bm = So, Mu = (
      /*          */
      134217728
    ), Pm = (
      /*                          */
      268435455
    ), Au = (
      /*               */
      268435456
    ), _i = (
      /*                        */
      536870912
    ), qn = (
      /*                   */
      1073741824
    );
    function WR(e) {
      {
        if (e & me)
          return "Sync";
        if (e & go)
          return "InputContinuousHydration";
        if (e & ha)
          return "InputContinuous";
        if (e & xi)
          return "DefaultHydration";
        if (e & $r)
          return "Default";
        if (e & Du)
          return "TransitionHydration";
        if (e & bo)
          return "Transition";
        if (e & gs)
          return "Retry";
        if (e & Mu)
          return "SelectiveHydration";
        if (e & Au)
          return "IdleHydration";
        if (e & _i)
          return "Idle";
        if (e & qn)
          return "Offscreen";
      }
    }
    var Je = -1, bs = Ou, Ss = So;
    function ku(e) {
      switch (wi(e)) {
        case me:
          return me;
        case go:
          return go;
        case ha:
          return ha;
        case xi:
          return xi;
        case $r:
          return $r;
        case Du:
          return Du;
        case Ou:
        case od:
        case ud:
        case ld:
        case sd:
        case cd:
        case fd:
        case dd:
        case vd:
        case pd:
        case hd:
        case md:
        case yd:
        case gd:
        case bd:
        case Sd:
          return e & bo;
        case So:
        case Ed:
        case Cd:
        case Rd:
        case Td:
          return e & gs;
        case Mu:
          return Mu;
        case Au:
          return Au;
        case _i:
          return _i;
        case qn:
          return qn;
        default:
          return d("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Es(e, t) {
      var n = e.pendingLanes;
      if (n === F)
        return F;
      var r = F, a = e.suspendedLanes, i = e.pingedLanes, o = n & Pm;
      if (o !== F) {
        var l = o & ~a;
        if (l !== F)
          r = ku(l);
        else {
          var c = o & i;
          c !== F && (r = ku(c));
        }
      } else {
        var v = n & ~a;
        v !== F ? r = ku(v) : i !== F && (r = ku(i));
      }
      if (r === F)
        return F;
      if (t !== F && t !== r && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & a) === F) {
        var h = wi(r), S = wi(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          h >= S || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          h === $r && (S & bo) !== F
        )
          return t;
      }
      (r & ha) !== F && (r |= n & $r);
      var b = e.entangledLanes;
      if (b !== F)
        for (var x = e.entanglements, w = r & b; w > 0; ) {
          var M = Di(w), q = 1 << M;
          r |= x[M], w &= ~q;
        }
      return r;
    }
    function QR(e, t) {
      for (var n = e.eventTimes, r = Je; t > 0; ) {
        var a = Di(t), i = 1 << a, o = n[a];
        o > r && (r = o), t &= ~i;
      }
      return r;
    }
    function KR(e, t) {
      switch (e) {
        case me:
        case go:
        case ha:
          return t + 250;
        case xi:
        case $r:
        case Du:
        case Ou:
        case od:
        case ud:
        case ld:
        case sd:
        case cd:
        case fd:
        case dd:
        case vd:
        case pd:
        case hd:
        case md:
        case yd:
        case gd:
        case bd:
        case Sd:
          return t + 5e3;
        case So:
        case Ed:
        case Cd:
        case Rd:
        case Td:
          return Je;
        case Mu:
        case Au:
        case _i:
        case qn:
          return Je;
        default:
          return d("Should have found matching lanes. This is a bug in React."), Je;
      }
    }
    function XR(e, t) {
      for (var n = e.pendingLanes, r = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, o = n; o > 0; ) {
        var l = Di(o), c = 1 << l, v = i[l];
        v === Je ? ((c & r) === F || (c & a) !== F) && (i[l] = KR(c, t)) : v <= t && (e.expiredLanes |= c), o &= ~c;
      }
    }
    function JR(e) {
      return ku(e.pendingLanes);
    }
    function xd(e) {
      var t = e.pendingLanes & ~qn;
      return t !== F ? t : t & qn ? qn : F;
    }
    function ZR(e) {
      return (e & me) !== F;
    }
    function _d(e) {
      return (e & Pm) !== F;
    }
    function $m(e) {
      return (e & gs) === e;
    }
    function eT(e) {
      var t = me | ha | $r;
      return (e & t) === F;
    }
    function tT(e) {
      return (e & bo) === e;
    }
    function Cs(e, t) {
      var n = go | ha | xi | $r;
      return (t & n) !== F;
    }
    function nT(e, t) {
      return (t & e.expiredLanes) !== F;
    }
    function Ym(e) {
      return (e & bo) !== F;
    }
    function Im() {
      var e = bs;
      return bs <<= 1, (bs & bo) === F && (bs = Ou), e;
    }
    function rT() {
      var e = Ss;
      return Ss <<= 1, (Ss & gs) === F && (Ss = So), e;
    }
    function wi(e) {
      return e & -e;
    }
    function Lu(e) {
      return wi(e);
    }
    function Di(e) {
      return 31 - Vm(e);
    }
    function wd(e) {
      return Di(e);
    }
    function Gn(e, t) {
      return (e & t) !== F;
    }
    function Eo(e, t) {
      return (e & t) === t;
    }
    function xe(e, t) {
      return e | t;
    }
    function Rs(e, t) {
      return e & ~t;
    }
    function qm(e, t) {
      return e & t;
    }
    function mk(e) {
      return e;
    }
    function aT(e, t) {
      return e !== $t && e < t ? e : t;
    }
    function Dd(e) {
      for (var t = [], n = 0; n < id; n++)
        t.push(e);
      return t;
    }
    function Nu(e, t, n) {
      e.pendingLanes |= t, t !== _i && (e.suspendedLanes = F, e.pingedLanes = F);
      var r = e.eventTimes, a = wd(t);
      r[a] = n;
    }
    function iT(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var n = e.expirationTimes, r = t; r > 0; ) {
        var a = Di(r), i = 1 << a;
        n[a] = Je, r &= ~i;
      }
    }
    function Gm(e, t, n) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function oT(e, t) {
      var n = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = F, e.pingedLanes = F, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var r = e.entanglements, a = e.eventTimes, i = e.expirationTimes, o = n; o > 0; ) {
        var l = Di(o), c = 1 << l;
        r[l] = F, a[l] = Je, i[l] = Je, o &= ~c;
      }
    }
    function Od(e, t) {
      for (var n = e.entangledLanes |= t, r = e.entanglements, a = n; a; ) {
        var i = Di(a), o = 1 << i;
        // Is this one of the newly entangled lanes?
        o & t | // Is this lane transitively entangled with the newly entangled lanes?
        r[i] & t && (r[i] |= t), a &= ~o;
      }
    }
    function uT(e, t) {
      var n = wi(t), r;
      switch (n) {
        case ha:
          r = go;
          break;
        case $r:
          r = xi;
          break;
        case Ou:
        case od:
        case ud:
        case ld:
        case sd:
        case cd:
        case fd:
        case dd:
        case vd:
        case pd:
        case hd:
        case md:
        case yd:
        case gd:
        case bd:
        case Sd:
        case So:
        case Ed:
        case Cd:
        case Rd:
        case Td:
          r = Du;
          break;
        case _i:
          r = Au;
          break;
        default:
          r = $t;
          break;
      }
      return (r & (e.suspendedLanes | t)) !== $t ? $t : r;
    }
    function Wm(e, t, n) {
      if (Rr)
        for (var r = e.pendingUpdatersLaneMap; n > 0; ) {
          var a = wd(n), i = 1 << a, o = r[a];
          o.add(t), n &= ~i;
        }
    }
    function Qm(e, t) {
      if (Rr)
        for (var n = e.pendingUpdatersLaneMap, r = e.memoizedUpdaters; t > 0; ) {
          var a = wd(t), i = 1 << a, o = n[a];
          o.size > 0 && (o.forEach(function(l) {
            var c = l.alternate;
            (c === null || !r.has(c)) && r.add(l);
          }), o.clear()), t &= ~i;
        }
    }
    function Km(e, t) {
      return null;
    }
    var Wn = me, ma = ha, ya = $r, Ts = _i, Uu = $t;
    function Tr() {
      return Uu;
    }
    function Yt(e) {
      Uu = e;
    }
    function lT(e, t) {
      var n = Uu;
      try {
        return Uu = e, t();
      } finally {
        Uu = n;
      }
    }
    function sT(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function cT(e, t) {
      return e > t ? e : t;
    }
    function Md(e, t) {
      return e !== 0 && e < t;
    }
    function Xm(e) {
      var t = wi(e);
      return Md(Wn, t) ? Md(ma, t) ? _d(t) ? ya : Ts : ma : Wn;
    }
    function xs(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Jm;
    function fT(e) {
      Jm = e;
    }
    function dT(e) {
      Jm(e);
    }
    var Ad;
    function vT(e) {
      Ad = e;
    }
    var Zm;
    function pT(e) {
      Zm = e;
    }
    var ey;
    function hT(e) {
      ey = e;
    }
    var ty;
    function mT(e) {
      ty = e;
    }
    var kd = !1, _s = [], Fa = null, Ha = null, Va = null, zu = /* @__PURE__ */ new Map(), ju = /* @__PURE__ */ new Map(), Ba = [], yT = [
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
    function gT(e) {
      return yT.indexOf(e) > -1;
    }
    function bT(e, t, n, r, a) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: n,
        nativeEvent: a,
        targetContainers: [r]
      };
    }
    function ny(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Fa = null;
          break;
        case "dragenter":
        case "dragleave":
          Ha = null;
          break;
        case "mouseover":
        case "mouseout":
          Va = null;
          break;
        case "pointerover":
        case "pointerout": {
          var n = t.pointerId;
          zu.delete(n);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var r = t.pointerId;
          ju.delete(r);
          break;
        }
      }
    }
    function Fu(e, t, n, r, a, i) {
      if (e === null || e.nativeEvent !== i) {
        var o = bT(t, n, r, a, i);
        if (t !== null) {
          var l = Ya(t);
          l !== null && Ad(l);
        }
        return o;
      }
      e.eventSystemFlags |= r;
      var c = e.targetContainers;
      return a !== null && c.indexOf(a) === -1 && c.push(a), e;
    }
    function ST(e, t, n, r, a) {
      switch (t) {
        case "focusin": {
          var i = a;
          return Fa = Fu(Fa, e, t, n, r, i), !0;
        }
        case "dragenter": {
          var o = a;
          return Ha = Fu(Ha, e, t, n, r, o), !0;
        }
        case "mouseover": {
          var l = a;
          return Va = Fu(Va, e, t, n, r, l), !0;
        }
        case "pointerover": {
          var c = a, v = c.pointerId;
          return zu.set(v, Fu(zu.get(v) || null, e, t, n, r, c)), !0;
        }
        case "gotpointercapture": {
          var h = a, S = h.pointerId;
          return ju.set(S, Fu(ju.get(S) || null, e, t, n, r, h)), !0;
        }
      }
      return !1;
    }
    function ry(e) {
      var t = Ai(e.target);
      if (t !== null) {
        var n = Ri(t);
        if (n !== null) {
          var r = n.tag;
          if (r === Z) {
            var a = wm(n);
            if (a !== null) {
              e.blockedOn = a, ty(e.priority, function() {
                Zm(n);
              });
              return;
            }
          } else if (r === U) {
            var i = n.stateNode;
            if (xs(i)) {
              e.blockedOn = Dm(n);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function ET(e) {
      for (var t = ey(), n = {
        blockedOn: null,
        target: e,
        priority: t
      }, r = 0; r < Ba.length && Md(t, Ba[r].priority); r++)
        ;
      Ba.splice(r, 0, n), r === 0 && ry(n);
    }
    function ws(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var n = t[0], r = Ud(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
        if (r === null) {
          var a = e.nativeEvent, i = new a.constructor(a.type, a);
          WC(i), a.target.dispatchEvent(i), QC();
        } else {
          var o = Ya(r);
          return o !== null && Ad(o), e.blockedOn = r, !1;
        }
        t.shift();
      }
      return !0;
    }
    function ay(e, t, n) {
      ws(e) && n.delete(t);
    }
    function CT() {
      kd = !1, Fa !== null && ws(Fa) && (Fa = null), Ha !== null && ws(Ha) && (Ha = null), Va !== null && ws(Va) && (Va = null), zu.forEach(ay), ju.forEach(ay);
    }
    function Hu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, kd || (kd = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, CT)));
    }
    function Vu(e) {
      if (_s.length > 0) {
        Hu(_s[0], e);
        for (var t = 1; t < _s.length; t++) {
          var n = _s[t];
          n.blockedOn === e && (n.blockedOn = null);
        }
      }
      Fa !== null && Hu(Fa, e), Ha !== null && Hu(Ha, e), Va !== null && Hu(Va, e);
      var r = function(l) {
        return Hu(l, e);
      };
      zu.forEach(r), ju.forEach(r);
      for (var a = 0; a < Ba.length; a++) {
        var i = Ba[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; Ba.length > 0; ) {
        var o = Ba[0];
        if (o.blockedOn !== null)
          break;
        ry(o), o.blockedOn === null && Ba.shift();
      }
    }
    var Co = p.ReactCurrentBatchConfig, Ld = !0;
    function iy(e) {
      Ld = !!e;
    }
    function RT() {
      return Ld;
    }
    function TT(e, t, n) {
      var r = oy(t), a;
      switch (r) {
        case Wn:
          a = xT;
          break;
        case ma:
          a = _T;
          break;
        case ya:
        default:
          a = Nd;
          break;
      }
      return a.bind(null, t, n, e);
    }
    function xT(e, t, n, r) {
      var a = Tr(), i = Co.transition;
      Co.transition = null;
      try {
        Yt(Wn), Nd(e, t, n, r);
      } finally {
        Yt(a), Co.transition = i;
      }
    }
    function _T(e, t, n, r) {
      var a = Tr(), i = Co.transition;
      Co.transition = null;
      try {
        Yt(ma), Nd(e, t, n, r);
      } finally {
        Yt(a), Co.transition = i;
      }
    }
    function Nd(e, t, n, r) {
      Ld && wT(e, t, n, r);
    }
    function wT(e, t, n, r) {
      var a = Ud(e, t, n, r);
      if (a === null) {
        Qd(e, t, r, Ds, n), ny(e, r);
        return;
      }
      if (ST(a, e, t, n, r)) {
        r.stopPropagation();
        return;
      }
      if (ny(e, r), t & Eu && gT(e)) {
        for (; a !== null; ) {
          var i = Ya(a);
          i !== null && dT(i);
          var o = Ud(e, t, n, r);
          if (o === null && Qd(e, t, r, Ds, n), o === a)
            break;
          a = o;
        }
        a !== null && r.stopPropagation();
        return;
      }
      Qd(e, t, r, null, n);
    }
    var Ds = null;
    function Ud(e, t, n, r) {
      Ds = null;
      var a = Bf(r), i = Ai(a);
      if (i !== null) {
        var o = Ri(i);
        if (o === null)
          i = null;
        else {
          var l = o.tag;
          if (l === Z) {
            var c = wm(o);
            if (c !== null)
              return c;
            i = null;
          } else if (l === U) {
            var v = o.stateNode;
            if (xs(v))
              return Dm(o);
            i = null;
          } else o !== i && (i = null);
        }
      }
      return Ds = i, null;
    }
    function oy(e) {
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
          return Wn;
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
          return ma;
        case "message": {
          var t = gR();
          switch (t) {
            case ys:
              return Wn;
            case nd:
              return ma;
            case Ti:
            case bR:
              return ya;
            case rd:
              return Ts;
            default:
              return ya;
          }
        }
        default:
          return ya;
      }
    }
    function DT(e, t, n) {
      return e.addEventListener(t, n, !1), n;
    }
    function OT(e, t, n) {
      return e.addEventListener(t, n, !0), n;
    }
    function MT(e, t, n, r) {
      return e.addEventListener(t, n, {
        capture: !0,
        passive: r
      }), n;
    }
    function AT(e, t, n, r) {
      return e.addEventListener(t, n, {
        passive: r
      }), n;
    }
    var Bu = null, zd = null, Pu = null;
    function kT(e) {
      return Bu = e, zd = ly(), !0;
    }
    function LT() {
      Bu = null, zd = null, Pu = null;
    }
    function uy() {
      if (Pu)
        return Pu;
      var e, t = zd, n = t.length, r, a = ly(), i = a.length;
      for (e = 0; e < n && t[e] === a[e]; e++)
        ;
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === a[i - r]; r++)
        ;
      var l = r > 1 ? 1 - r : void 0;
      return Pu = a.slice(e, l), Pu;
    }
    function ly() {
      return "value" in Bu ? Bu.value : Bu.textContent;
    }
    function Os(e) {
      var t, n = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Ms() {
      return !0;
    }
    function sy() {
      return !1;
    }
    function Qn(e) {
      function t(n, r, a, i, o) {
        this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
        for (var l in e)
          if (e.hasOwnProperty(l)) {
            var c = e[l];
            c ? this[l] = c(i) : this[l] = i[l];
          }
        var v = i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1;
        return v ? this.isDefaultPrevented = Ms : this.isDefaultPrevented = sy, this.isPropagationStopped = sy, this;
      }
      return De(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ms);
        },
        stopPropagation: function() {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ms);
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
        isPersistent: Ms
      }), t;
    }
    var Ro = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, jd = Qn(Ro), $u = De({}, Ro, {
      view: 0,
      detail: 0
    }), NT = Qn($u), Fd, Hd, Yu;
    function UT(e) {
      e !== Yu && (Yu && e.type === "mousemove" ? (Fd = e.screenX - Yu.screenX, Hd = e.screenY - Yu.screenY) : (Fd = 0, Hd = 0), Yu = e);
    }
    var As = De({}, $u, {
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
      getModifierState: Bd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (UT(e), Fd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Hd;
      }
    }), cy = Qn(As), zT = De({}, As, {
      dataTransfer: 0
    }), jT = Qn(zT), FT = De({}, $u, {
      relatedTarget: 0
    }), Vd = Qn(FT), HT = De({}, Ro, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), VT = Qn(HT), BT = De({}, Ro, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), PT = Qn(BT), $T = De({}, Ro, {
      data: 0
    }), fy = Qn($T), YT = fy, IT = {
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
    }, qT = {
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
    function GT(e) {
      if (e.key) {
        var t = IT[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var n = Os(e);
        return n === 13 ? "Enter" : String.fromCharCode(n);
      }
      return e.type === "keydown" || e.type === "keyup" ? qT[e.keyCode] || "Unidentified" : "";
    }
    var WT = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function QT(e) {
      var t = this, n = t.nativeEvent;
      if (n.getModifierState)
        return n.getModifierState(e);
      var r = WT[e];
      return r ? !!n[r] : !1;
    }
    function Bd(e) {
      return QT;
    }
    var KT = De({}, $u, {
      key: GT,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Bd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Os(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Os(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), XT = Qn(KT), JT = De({}, As, {
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
    }), dy = Qn(JT), ZT = De({}, $u, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Bd
    }), ex = Qn(ZT), tx = De({}, Ro, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), nx = Qn(tx), rx = De({}, As, {
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
    }), ax = Qn(rx), ix = [9, 13, 27, 32], vy = 229, Pd = Kt && "CompositionEvent" in window, Iu = null;
    Kt && "documentMode" in document && (Iu = document.documentMode);
    var ox = Kt && "TextEvent" in window && !Iu, py = Kt && (!Pd || Iu && Iu > 8 && Iu <= 11), hy = 32, my = String.fromCharCode(hy);
    function ux() {
      Wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Wt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Wt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Wt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var yy = !1;
    function lx(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function sx(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function cx(e, t) {
      return e === "keydown" && t.keyCode === vy;
    }
    function gy(e, t) {
      switch (e) {
        case "keyup":
          return ix.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== vy;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function by(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Sy(e) {
      return e.locale === "ko";
    }
    var To = !1;
    function fx(e, t, n, r, a) {
      var i, o;
      if (Pd ? i = sx(t) : To ? gy(t, r) && (i = "onCompositionEnd") : cx(t, r) && (i = "onCompositionStart"), !i)
        return null;
      py && !Sy(r) && (!To && i === "onCompositionStart" ? To = kT(a) : i === "onCompositionEnd" && To && (o = uy()));
      var l = zs(n, i);
      if (l.length > 0) {
        var c = new fy(i, t, null, r, a);
        if (e.push({
          event: c,
          listeners: l
        }), o)
          c.data = o;
        else {
          var v = by(r);
          v !== null && (c.data = v);
        }
      }
    }
    function dx(e, t) {
      switch (e) {
        case "compositionend":
          return by(t);
        case "keypress":
          var n = t.which;
          return n !== hy ? null : (yy = !0, my);
        case "textInput":
          var r = t.data;
          return r === my && yy ? null : r;
        default:
          return null;
      }
    }
    function vx(e, t) {
      if (To) {
        if (e === "compositionend" || !Pd && gy(e, t)) {
          var n = uy();
          return LT(), To = !1, n;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!lx(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return py && !Sy(t) ? null : t.data;
        default:
          return null;
      }
    }
    function px(e, t, n, r, a) {
      var i;
      if (ox ? i = dx(t, r) : i = vx(t, r), !i)
        return null;
      var o = zs(n, "onBeforeInput");
      if (o.length > 0) {
        var l = new YT("onBeforeInput", "beforeinput", null, r, a);
        e.push({
          event: l,
          listeners: o
        }), l.data = i;
      }
    }
    function hx(e, t, n, r, a, i, o) {
      fx(e, t, n, r, a), px(e, t, n, r, a);
    }
    var mx = {
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
    function Ey(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!mx[e.type] : t === "textarea";
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
    function yx(e) {
      if (!Kt)
        return !1;
      var t = "on" + e, n = t in document;
      if (!n) {
        var r = document.createElement("div");
        r.setAttribute(t, "return;"), n = typeof r[t] == "function";
      }
      return n;
    }
    function gx() {
      Wt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Cy(e, t, n, r) {
      gm(r);
      var a = zs(t, "onChange");
      if (a.length > 0) {
        var i = new jd("onChange", "change", null, n, r);
        e.push({
          event: i,
          listeners: a
        });
      }
    }
    var qu = null, Gu = null;
    function bx(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function Sx(e) {
      var t = [];
      Cy(t, Gu, e, Bf(e)), Cm(Ex, t);
    }
    function Ex(e) {
      Vy(e, 0);
    }
    function ks(e) {
      var t = Mo(e);
      if (hu(t))
        return e;
    }
    function Cx(e, t) {
      if (e === "change")
        return t;
    }
    var Ry = !1;
    Kt && (Ry = yx("input") && (!document.documentMode || document.documentMode > 9));
    function Rx(e, t) {
      qu = e, Gu = t, qu.attachEvent("onpropertychange", xy);
    }
    function Ty() {
      qu && (qu.detachEvent("onpropertychange", xy), qu = null, Gu = null);
    }
    function xy(e) {
      e.propertyName === "value" && ks(Gu) && Sx(e);
    }
    function Tx(e, t, n) {
      e === "focusin" ? (Ty(), Rx(t, n)) : e === "focusout" && Ty();
    }
    function xx(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ks(Gu);
    }
    function _x(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function wx(e, t) {
      if (e === "click")
        return ks(t);
    }
    function Dx(e, t) {
      if (e === "input" || e === "change")
        return ks(t);
    }
    function Ox(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ce(e, "number", e.value);
    }
    function Mx(e, t, n, r, a, i, o) {
      var l = n ? Mo(n) : window, c, v;
      if (bx(l) ? c = Cx : Ey(l) ? Ry ? c = Dx : (c = xx, v = Tx) : _x(l) && (c = wx), c) {
        var h = c(t, n);
        if (h) {
          Cy(e, h, r, a);
          return;
        }
      }
      v && v(t, l, n), t === "focusout" && Ox(l);
    }
    function Ax() {
      Qt("onMouseEnter", ["mouseout", "mouseover"]), Qt("onMouseLeave", ["mouseout", "mouseover"]), Qt("onPointerEnter", ["pointerout", "pointerover"]), Qt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function kx(e, t, n, r, a, i, o) {
      var l = t === "mouseover" || t === "pointerover", c = t === "mouseout" || t === "pointerout";
      if (l && !KC(r)) {
        var v = r.relatedTarget || r.fromElement;
        if (v && (Ai(v) || ll(v)))
          return;
      }
      if (!(!c && !l)) {
        var h;
        if (a.window === a)
          h = a;
        else {
          var S = a.ownerDocument;
          S ? h = S.defaultView || S.parentWindow : h = window;
        }
        var b, x;
        if (c) {
          var w = r.relatedTarget || r.toElement;
          if (b = n, x = w ? Ai(w) : null, x !== null) {
            var M = Ri(x);
            (x !== M || x.tag !== z && x.tag !== J) && (x = null);
          }
        } else
          b = null, x = n;
        if (b !== x) {
          var q = cy, oe = "onMouseLeave", re = "onMouseEnter", Ue = "mouse";
          (t === "pointerout" || t === "pointerover") && (q = dy, oe = "onPointerLeave", re = "onPointerEnter", Ue = "pointer");
          var Me = b == null ? h : Mo(b), C = x == null ? h : Mo(x), A = new q(oe, Ue + "leave", b, r, a);
          A.target = Me, A.relatedTarget = C;
          var R = null, V = Ai(a);
          if (V === n) {
            var X = new q(re, Ue + "enter", x, r, a);
            X.target = C, X.relatedTarget = Me, R = X;
          }
          n_(e, A, R, b, x);
        }
      }
    }
    function Lx(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Kn = typeof Object.is == "function" ? Object.is : Lx;
    function Wu(e, t) {
      if (Kn(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var n = Object.keys(e), r = Object.keys(t);
      if (n.length !== r.length)
        return !1;
      for (var a = 0; a < n.length; a++) {
        var i = n[a];
        if (!An.call(t, i) || !Kn(e[i], t[i]))
          return !1;
      }
      return !0;
    }
    function _y(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Nx(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function wy(e, t) {
      for (var n = _y(e), r = 0, a = 0; n; ) {
        if (n.nodeType === ca) {
          if (a = r + n.textContent.length, r <= t && a >= t)
            return {
              node: n,
              offset: t - r
            };
          r = a;
        }
        n = _y(Nx(n));
      }
    }
    function Ux(e) {
      var t = e.ownerDocument, n = t && t.defaultView || window, r = n.getSelection && n.getSelection();
      if (!r || r.rangeCount === 0)
        return null;
      var a = r.anchorNode, i = r.anchorOffset, o = r.focusNode, l = r.focusOffset;
      try {
        a.nodeType, o.nodeType;
      } catch {
        return null;
      }
      return zx(e, a, i, o, l);
    }
    function zx(e, t, n, r, a) {
      var i = 0, o = -1, l = -1, c = 0, v = 0, h = e, S = null;
      e: for (; ; ) {
        for (var b = null; h === t && (n === 0 || h.nodeType === ca) && (o = i + n), h === r && (a === 0 || h.nodeType === ca) && (l = i + a), h.nodeType === ca && (i += h.nodeValue.length), (b = h.firstChild) !== null; )
          S = h, h = b;
        for (; ; ) {
          if (h === e)
            break e;
          if (S === t && ++c === n && (o = i), S === r && ++v === a && (l = i), (b = h.nextSibling) !== null)
            break;
          h = S, S = h.parentNode;
        }
        h = b;
      }
      return o === -1 || l === -1 ? null : {
        start: o,
        end: l
      };
    }
    function jx(e, t) {
      var n = e.ownerDocument || document, r = n && n.defaultView || window;
      if (r.getSelection) {
        var a = r.getSelection(), i = e.textContent.length, o = Math.min(t.start, i), l = t.end === void 0 ? o : Math.min(t.end, i);
        if (!a.extend && o > l) {
          var c = l;
          l = o, o = c;
        }
        var v = wy(e, o), h = wy(e, l);
        if (v && h) {
          if (a.rangeCount === 1 && a.anchorNode === v.node && a.anchorOffset === v.offset && a.focusNode === h.node && a.focusOffset === h.offset)
            return;
          var S = n.createRange();
          S.setStart(v.node, v.offset), a.removeAllRanges(), o > l ? (a.addRange(S), a.extend(h.node, h.offset)) : (S.setEnd(h.node, h.offset), a.addRange(S));
        }
      }
    }
    function Dy(e) {
      return e && e.nodeType === ca;
    }
    function Oy(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Dy(e) ? !1 : Dy(t) ? Oy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function Fx(e) {
      return e && e.ownerDocument && Oy(e.ownerDocument.documentElement, e);
    }
    function Hx(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function My() {
      for (var e = window, t = ua(); t instanceof e.HTMLIFrameElement; ) {
        if (Hx(t))
          e = t.contentWindow;
        else
          return t;
        t = ua(e.document);
      }
      return t;
    }
    function $d(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Vx() {
      var e = My();
      return {
        focusedElem: e,
        selectionRange: $d(e) ? Px(e) : null
      };
    }
    function Bx(e) {
      var t = My(), n = e.focusedElem, r = e.selectionRange;
      if (t !== n && Fx(n)) {
        r !== null && $d(n) && $x(n, r);
        for (var a = [], i = n; i = i.parentNode; )
          i.nodeType === Nn && a.push({
            element: i,
            left: i.scrollLeft,
            top: i.scrollTop
          });
        typeof n.focus == "function" && n.focus();
        for (var o = 0; o < a.length; o++) {
          var l = a[o];
          l.element.scrollLeft = l.left, l.element.scrollTop = l.top;
        }
      }
    }
    function Px(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ux(e), t || {
        start: 0,
        end: 0
      };
    }
    function $x(e, t) {
      var n = t.start, r = t.end;
      r === void 0 && (r = n), "selectionStart" in e ? (e.selectionStart = n, e.selectionEnd = Math.min(r, e.value.length)) : jx(e, t);
    }
    var Yx = Kt && "documentMode" in document && document.documentMode <= 11;
    function Ix() {
      Wt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var xo = null, Yd = null, Qu = null, Id = !1;
    function qx(e) {
      if ("selectionStart" in e && $d(e))
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
    function Gx(e) {
      return e.window === e ? e.document : e.nodeType === fa ? e : e.ownerDocument;
    }
    function Ay(e, t, n) {
      var r = Gx(n);
      if (!(Id || xo == null || xo !== ua(r))) {
        var a = qx(xo);
        if (!Qu || !Wu(Qu, a)) {
          Qu = a;
          var i = zs(Yd, "onSelect");
          if (i.length > 0) {
            var o = new jd("onSelect", "select", null, t, n);
            e.push({
              event: o,
              listeners: i
            }), o.target = xo;
          }
        }
      }
    }
    function Wx(e, t, n, r, a, i, o) {
      var l = n ? Mo(n) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Ey(l) || l.contentEditable === "true") && (xo = l, Yd = n, Qu = null);
          break;
        case "focusout":
          xo = null, Yd = null, Qu = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Id = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Id = !1, Ay(e, r, a);
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
          if (Yx)
            break;
        // falls through
        case "keydown":
        case "keyup":
          Ay(e, r, a);
      }
    }
    function Ls(e, t) {
      var n = {};
      return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var _o = {
      animationend: Ls("Animation", "AnimationEnd"),
      animationiteration: Ls("Animation", "AnimationIteration"),
      animationstart: Ls("Animation", "AnimationStart"),
      transitionend: Ls("Transition", "TransitionEnd")
    }, qd = {}, ky = {};
    Kt && (ky = document.createElement("div").style, "AnimationEvent" in window || (delete _o.animationend.animation, delete _o.animationiteration.animation, delete _o.animationstart.animation), "TransitionEvent" in window || delete _o.transitionend.transition);
    function Ns(e) {
      if (qd[e])
        return qd[e];
      if (!_o[e])
        return e;
      var t = _o[e];
      for (var n in t)
        if (t.hasOwnProperty(n) && n in ky)
          return qd[e] = t[n];
      return e;
    }
    var Ly = Ns("animationend"), Ny = Ns("animationiteration"), Uy = Ns("animationstart"), zy = Ns("transitionend"), jy = /* @__PURE__ */ new Map(), Fy = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Pa(e, t) {
      jy.set(e, t), Wt(t, [e]);
    }
    function Qx() {
      for (var e = 0; e < Fy.length; e++) {
        var t = Fy[e], n = t.toLowerCase(), r = t[0].toUpperCase() + t.slice(1);
        Pa(n, "on" + r);
      }
      Pa(Ly, "onAnimationEnd"), Pa(Ny, "onAnimationIteration"), Pa(Uy, "onAnimationStart"), Pa("dblclick", "onDoubleClick"), Pa("focusin", "onFocus"), Pa("focusout", "onBlur"), Pa(zy, "onTransitionEnd");
    }
    function Kx(e, t, n, r, a, i, o) {
      var l = jy.get(t);
      if (l !== void 0) {
        var c = jd, v = t;
        switch (t) {
          case "keypress":
            if (Os(r) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            c = XT;
            break;
          case "focusin":
            v = "focus", c = Vd;
            break;
          case "focusout":
            v = "blur", c = Vd;
            break;
          case "beforeblur":
          case "afterblur":
            c = Vd;
            break;
          case "click":
            if (r.button === 2)
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
            c = cy;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            c = jT;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            c = ex;
            break;
          case Ly:
          case Ny:
          case Uy:
            c = VT;
            break;
          case zy:
            c = nx;
            break;
          case "scroll":
            c = NT;
            break;
          case "wheel":
            c = ax;
            break;
          case "copy":
          case "cut":
          case "paste":
            c = PT;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            c = dy;
            break;
        }
        var h = (i & Eu) !== 0;
        {
          var S = !h && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = e_(n, l, r.type, h, S);
          if (b.length > 0) {
            var x = new c(l, v, null, r, a);
            e.push({
              event: x,
              listeners: b
            });
          }
        }
      }
    }
    Qx(), Ax(), gx(), Ix(), ux();
    function Xx(e, t, n, r, a, i, o) {
      Kx(e, t, n, r, a, i);
      var l = (i & GC) === 0;
      l && (kx(e, t, n, r, a), Mx(e, t, n, r, a), Wx(e, t, n, r, a), hx(e, t, n, r, a));
    }
    var Ku = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Gd = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Ku));
    function Hy(e, t, n) {
      var r = e.type || "unknown-event";
      e.currentTarget = n, iR(r, t, void 0, e), e.currentTarget = null;
    }
    function Jx(e, t, n) {
      var r;
      if (n)
        for (var a = t.length - 1; a >= 0; a--) {
          var i = t[a], o = i.instance, l = i.currentTarget, c = i.listener;
          if (o !== r && e.isPropagationStopped())
            return;
          Hy(e, c, l), r = o;
        }
      else
        for (var v = 0; v < t.length; v++) {
          var h = t[v], S = h.instance, b = h.currentTarget, x = h.listener;
          if (S !== r && e.isPropagationStopped())
            return;
          Hy(e, x, b), r = S;
        }
    }
    function Vy(e, t) {
      for (var n = (t & Eu) !== 0, r = 0; r < e.length; r++) {
        var a = e[r], i = a.event, o = a.listeners;
        Jx(i, o, n);
      }
      oR();
    }
    function Zx(e, t, n, r, a) {
      var i = Bf(n), o = [];
      Xx(o, e, r, n, i, t), Vy(o, t);
    }
    function rt(e, t) {
      Gd.has(e) || d('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var n = !1, r = Ow(t), a = r_(e);
      r.has(a) || (By(t, e, Vf, n), r.add(a));
    }
    function Wd(e, t, n) {
      Gd.has(e) && !t && d('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var r = 0;
      t && (r |= Eu), By(n, e, r, t);
    }
    var Us = "_reactListening" + Math.random().toString(36).slice(2);
    function Xu(e) {
      if (!e[Us]) {
        e[Us] = !0, zr.forEach(function(n) {
          n !== "selectionchange" && (Gd.has(n) || Wd(n, !1, e), Wd(n, !0, e));
        });
        var t = e.nodeType === fa ? e : e.ownerDocument;
        t !== null && (t[Us] || (t[Us] = !0, Wd("selectionchange", !1, t)));
      }
    }
    function By(e, t, n, r, a) {
      var i = TT(e, t, n), o = void 0;
      Yf && (t === "touchstart" || t === "touchmove" || t === "wheel") && (o = !0), e = e, r ? o !== void 0 ? MT(e, t, i, o) : OT(e, t, i) : o !== void 0 ? AT(e, t, i, o) : DT(e, t, i);
    }
    function Py(e, t) {
      return e === t || e.nodeType === St && e.parentNode === t;
    }
    function Qd(e, t, n, r, a) {
      var i = r;
      if ((t & mm) === 0 && (t & Vf) === 0) {
        var o = a;
        if (r !== null) {
          var l = r;
          e: for (; ; ) {
            if (l === null)
              return;
            var c = l.tag;
            if (c === U || c === B) {
              var v = l.stateNode.containerInfo;
              if (Py(v, o))
                break;
              if (c === B)
                for (var h = l.return; h !== null; ) {
                  var S = h.tag;
                  if (S === U || S === B) {
                    var b = h.stateNode.containerInfo;
                    if (Py(b, o))
                      return;
                  }
                  h = h.return;
                }
              for (; v !== null; ) {
                var x = Ai(v);
                if (x === null)
                  return;
                var w = x.tag;
                if (w === z || w === J) {
                  l = i = x;
                  continue e;
                }
                v = v.parentNode;
              }
            }
            l = l.return;
          }
        }
      }
      Cm(function() {
        return Zx(e, t, n, i);
      });
    }
    function Ju(e, t, n) {
      return {
        instance: e,
        listener: t,
        currentTarget: n
      };
    }
    function e_(e, t, n, r, a, i) {
      for (var o = t !== null ? t + "Capture" : null, l = r ? o : t, c = [], v = e, h = null; v !== null; ) {
        var S = v, b = S.stateNode, x = S.tag;
        if (x === z && b !== null && (h = b, l !== null)) {
          var w = Ru(v, l);
          w != null && c.push(Ju(v, w, h));
        }
        if (a)
          break;
        v = v.return;
      }
      return c;
    }
    function zs(e, t) {
      for (var n = t + "Capture", r = [], a = e; a !== null; ) {
        var i = a, o = i.stateNode, l = i.tag;
        if (l === z && o !== null) {
          var c = o, v = Ru(a, n);
          v != null && r.unshift(Ju(a, v, c));
          var h = Ru(a, t);
          h != null && r.push(Ju(a, h, c));
        }
        a = a.return;
      }
      return r;
    }
    function wo(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== z);
      return e || null;
    }
    function t_(e, t) {
      for (var n = e, r = t, a = 0, i = n; i; i = wo(i))
        a++;
      for (var o = 0, l = r; l; l = wo(l))
        o++;
      for (; a - o > 0; )
        n = wo(n), a--;
      for (; o - a > 0; )
        r = wo(r), o--;
      for (var c = a; c--; ) {
        if (n === r || r !== null && n === r.alternate)
          return n;
        n = wo(n), r = wo(r);
      }
      return null;
    }
    function $y(e, t, n, r, a) {
      for (var i = t._reactName, o = [], l = n; l !== null && l !== r; ) {
        var c = l, v = c.alternate, h = c.stateNode, S = c.tag;
        if (v !== null && v === r)
          break;
        if (S === z && h !== null) {
          var b = h;
          if (a) {
            var x = Ru(l, i);
            x != null && o.unshift(Ju(l, x, b));
          } else if (!a) {
            var w = Ru(l, i);
            w != null && o.push(Ju(l, w, b));
          }
        }
        l = l.return;
      }
      o.length !== 0 && e.push({
        event: t,
        listeners: o
      });
    }
    function n_(e, t, n, r, a) {
      var i = r && a ? t_(r, a) : null;
      r !== null && $y(e, t, r, i, !1), a !== null && n !== null && $y(e, n, a, i, !0);
    }
    function r_(e, t) {
      return e + "__bubble";
    }
    var Un = !1, Zu = "dangerouslySetInnerHTML", js = "suppressContentEditableWarning", $a = "suppressHydrationWarning", Yy = "autoFocus", Oi = "children", Mi = "style", Fs = "__html", Kd, Hs, el, Iy, Vs, qy, Gy;
    Kd = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Hs = function(e, t) {
      VC(e, t), BC(e, t), qC(e, t, {
        registrationNameDependencies: Gt,
        possibleRegistrationNames: Yn
      });
    }, qy = Kt && !document.documentMode, el = function(e, t, n) {
      if (!Un) {
        var r = Bs(n), a = Bs(t);
        a !== r && (Un = !0, d("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(a), JSON.stringify(r)));
      }
    }, Iy = function(e) {
      if (!Un) {
        Un = !0;
        var t = [];
        e.forEach(function(n) {
          t.push(n);
        }), d("Extra attributes from the server: %s", t);
      }
    }, Vs = function(e, t) {
      t === !1 ? d("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : d("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, Gy = function(e, t) {
      var n = e.namespaceURI === sa ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return n.innerHTML = t, n.innerHTML;
    };
    var a_ = /\r\n?/g, i_ = /\u0000|\uFFFD/g;
    function Bs(e) {
      kn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(a_, `
`).replace(i_, "");
    }
    function Ps(e, t, n, r) {
      var a = Bs(t), i = Bs(e);
      if (i !== a && (r && (Un || (Un = !0, d('Text content did not match. Server: "%s" Client: "%s"', i, a))), n && we))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function Wy(e) {
      return e.nodeType === fa ? e : e.ownerDocument;
    }
    function o_() {
    }
    function $s(e) {
      e.onclick = o_;
    }
    function u_(e, t, n, r, a) {
      for (var i in r)
        if (r.hasOwnProperty(i)) {
          var o = r[i];
          if (i === Mi)
            o && Object.freeze(o), cm(t, o);
          else if (i === Zu) {
            var l = o ? o[Fs] : void 0;
            l != null && im(t, l);
          } else if (i === Oi)
            if (typeof o == "string") {
              var c = e !== "textarea" || o !== "";
              c && ds(t, o);
            } else typeof o == "number" && ds(t, "" + o);
          else i === js || i === $a || i === Yy || (Gt.hasOwnProperty(i) ? o != null && (typeof o != "function" && Vs(i, o), i === "onScroll" && rt("scroll", t)) : o != null && br(t, i, o, a));
        }
    }
    function l_(e, t, n, r) {
      for (var a = 0; a < t.length; a += 2) {
        var i = t[a], o = t[a + 1];
        i === Mi ? cm(e, o) : i === Zu ? im(e, o) : i === Oi ? ds(e, o) : br(e, i, o, r);
      }
    }
    function s_(e, t, n, r) {
      var a, i = Wy(n), o, l = r;
      if (l === sa && (l = Nf(e)), l === sa) {
        if (a = gi(e, t), !a && e !== e.toLowerCase() && d("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var c = i.createElement("div");
          c.innerHTML = "<script><\/script>";
          var v = c.firstChild;
          o = c.removeChild(v);
        } else if (typeof t.is == "string")
          o = i.createElement(e, {
            is: t.is
          });
        else if (o = i.createElement(e), e === "select") {
          var h = o;
          t.multiple ? h.multiple = !0 : t.size && (h.size = t.size);
        }
      } else
        o = i.createElementNS(l, e);
      return l === sa && !a && Object.prototype.toString.call(o) === "[object HTMLUnknownElement]" && !An.call(Kd, e) && (Kd[e] = !0, d("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), o;
    }
    function c_(e, t) {
      return Wy(t).createTextNode(e);
    }
    function f_(e, t, n, r) {
      var a = gi(t, n);
      Hs(t, n);
      var i;
      switch (t) {
        case "dialog":
          rt("cancel", e), rt("close", e), i = n;
          break;
        case "iframe":
        case "object":
        case "embed":
          rt("load", e), i = n;
          break;
        case "video":
        case "audio":
          for (var o = 0; o < Ku.length; o++)
            rt(Ku[o], e);
          i = n;
          break;
        case "source":
          rt("error", e), i = n;
          break;
        case "img":
        case "image":
        case "link":
          rt("error", e), rt("load", e), i = n;
          break;
        case "details":
          rt("toggle", e), i = n;
          break;
        case "input":
          ss(e, n), i = mu(e, n), rt("invalid", e);
          break;
        case "option":
          Ye(e, n), i = n;
          break;
        case "select":
          bu(e, n), i = gu(e, n), rt("invalid", e);
          break;
        case "textarea":
          nm(e, n), i = kf(e, n), rt("invalid", e);
          break;
        default:
          i = n;
      }
      switch (Hf(t, i), u_(t, e, r, i, a), t) {
        case "input":
          mi(e), _(e, n, !1);
          break;
        case "textarea":
          mi(e), am(e);
          break;
        case "option":
          Ke(e, n);
          break;
        case "select":
          Mf(e, n);
          break;
        default:
          typeof i.onClick == "function" && $s(e);
          break;
      }
    }
    function d_(e, t, n, r, a) {
      Hs(t, r);
      var i = null, o, l;
      switch (t) {
        case "input":
          o = mu(e, n), l = mu(e, r), i = [];
          break;
        case "select":
          o = gu(e, n), l = gu(e, r), i = [];
          break;
        case "textarea":
          o = kf(e, n), l = kf(e, r), i = [];
          break;
        default:
          o = n, l = r, typeof o.onClick != "function" && typeof l.onClick == "function" && $s(e);
          break;
      }
      Hf(t, l);
      var c, v, h = null;
      for (c in o)
        if (!(l.hasOwnProperty(c) || !o.hasOwnProperty(c) || o[c] == null))
          if (c === Mi) {
            var S = o[c];
            for (v in S)
              S.hasOwnProperty(v) && (h || (h = {}), h[v] = "");
          } else c === Zu || c === Oi || c === js || c === $a || c === Yy || (Gt.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
      for (c in l) {
        var b = l[c], x = o?.[c];
        if (!(!l.hasOwnProperty(c) || b === x || b == null && x == null))
          if (c === Mi)
            if (b && Object.freeze(b), x) {
              for (v in x)
                x.hasOwnProperty(v) && (!b || !b.hasOwnProperty(v)) && (h || (h = {}), h[v] = "");
              for (v in b)
                b.hasOwnProperty(v) && x[v] !== b[v] && (h || (h = {}), h[v] = b[v]);
            } else
              h || (i || (i = []), i.push(c, h)), h = b;
          else if (c === Zu) {
            var w = b ? b[Fs] : void 0, M = x ? x[Fs] : void 0;
            w != null && M !== w && (i = i || []).push(c, w);
          } else c === Oi ? (typeof b == "string" || typeof b == "number") && (i = i || []).push(c, "" + b) : c === js || c === $a || (Gt.hasOwnProperty(c) ? (b != null && (typeof b != "function" && Vs(c, b), c === "onScroll" && rt("scroll", e)), !i && x !== b && (i = [])) : (i = i || []).push(c, b));
      }
      return h && (kC(h, l[Mi]), (i = i || []).push(Mi, h)), i;
    }
    function v_(e, t, n, r, a) {
      n === "input" && a.type === "radio" && a.name != null && f(e, a);
      var i = gi(n, r), o = gi(n, a);
      switch (l_(e, t, i, o), n) {
        case "input":
          y(e, a);
          break;
        case "textarea":
          rm(e, a);
          break;
        case "select":
          cs(e, a);
          break;
      }
    }
    function p_(e) {
      {
        var t = e.toLowerCase();
        return vs.hasOwnProperty(t) && vs[t] || null;
      }
    }
    function h_(e, t, n, r, a, i, o) {
      var l, c;
      switch (l = gi(t, n), Hs(t, n), t) {
        case "dialog":
          rt("cancel", e), rt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          rt("load", e);
          break;
        case "video":
        case "audio":
          for (var v = 0; v < Ku.length; v++)
            rt(Ku[v], e);
          break;
        case "source":
          rt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          rt("error", e), rt("load", e);
          break;
        case "details":
          rt("toggle", e);
          break;
        case "input":
          ss(e, n), rt("invalid", e);
          break;
        case "option":
          Ye(e, n);
          break;
        case "select":
          bu(e, n), rt("invalid", e);
          break;
        case "textarea":
          nm(e, n), rt("invalid", e);
          break;
      }
      Hf(t, n);
      {
        c = /* @__PURE__ */ new Set();
        for (var h = e.attributes, S = 0; S < h.length; S++) {
          var b = h[S].name.toLowerCase();
          switch (b) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              c.add(h[S].name);
          }
        }
      }
      var x = null;
      for (var w in n)
        if (n.hasOwnProperty(w)) {
          var M = n[w];
          if (w === Oi)
            typeof M == "string" ? e.textContent !== M && (n[$a] !== !0 && Ps(e.textContent, M, i, o), x = [Oi, M]) : typeof M == "number" && e.textContent !== "" + M && (n[$a] !== !0 && Ps(e.textContent, M, i, o), x = [Oi, "" + M]);
          else if (Gt.hasOwnProperty(w))
            M != null && (typeof M != "function" && Vs(w, M), w === "onScroll" && rt("scroll", e));
          else if (o && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof l == "boolean") {
            var q = void 0, oe = dt(w);
            if (n[$a] !== !0) {
              if (!(w === js || w === $a || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              w === "value" || w === "checked" || w === "selected")) {
                if (w === Zu) {
                  var re = e.innerHTML, Ue = M ? M[Fs] : void 0;
                  if (Ue != null) {
                    var Me = Gy(e, Ue);
                    Me !== re && el(w, re, Me);
                  }
                } else if (w === Mi) {
                  if (c.delete(w), qy) {
                    var C = MC(M);
                    q = e.getAttribute("style"), C !== q && el(w, q, C);
                  }
                } else if (l && !nr)
                  c.delete(w.toLowerCase()), q = li(e, w, M), M !== q && el(w, q, M);
                else if (!st(w, oe, l) && !cn(w, M, oe, l)) {
                  var A = !1;
                  if (oe !== null)
                    c.delete(oe.attributeName), q = Ji(e, w, M, oe);
                  else {
                    var R = r;
                    if (R === sa && (R = Nf(t)), R === sa)
                      c.delete(w.toLowerCase());
                    else {
                      var V = p_(w);
                      V !== null && V !== w && (A = !0, c.delete(V)), c.delete(w);
                    }
                    q = li(e, w, M);
                  }
                  var X = nr;
                  !X && M !== q && !A && el(w, q, M);
                }
              }
            }
          }
        }
      switch (o && // $FlowFixMe - Should be inferred as not undefined.
      c.size > 0 && n[$a] !== !0 && Iy(c), t) {
        case "input":
          mi(e), _(e, n, !0);
          break;
        case "textarea":
          mi(e), am(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof n.onClick == "function" && $s(e);
          break;
      }
      return x;
    }
    function m_(e, t, n) {
      var r = e.nodeValue !== t;
      return r;
    }
    function Xd(e, t) {
      {
        if (Un)
          return;
        Un = !0, d("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Jd(e, t) {
      {
        if (Un)
          return;
        Un = !0, d('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Zd(e, t, n) {
      {
        if (Un)
          return;
        Un = !0, d("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ev(e, t) {
      {
        if (t === "" || Un)
          return;
        Un = !0, d('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function y_(e, t, n) {
      switch (t) {
        case "input":
          O(e, n);
          return;
        case "textarea":
          fC(e, n);
          return;
        case "select":
          Af(e, n);
          return;
      }
    }
    var tl = function() {
    }, nl = function() {
    };
    {
      var g_ = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], Qy = [
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
      ], b_ = Qy.concat(["button"]), S_ = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Ky = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      nl = function(e, t) {
        var n = De({}, e || Ky), r = {
          tag: t
        };
        return Qy.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), b_.indexOf(t) !== -1 && (n.pTagInButtonScope = null), g_.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = r, t === "form" && (n.formTag = r), t === "a" && (n.aTagInScope = r), t === "button" && (n.buttonTagInScope = r), t === "nobr" && (n.nobrTagInScope = r), t === "p" && (n.pTagInButtonScope = r), t === "li" && (n.listItemTagAutoclosing = r), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = r), n;
      };
      var E_ = function(e, t) {
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
            return S_.indexOf(t) === -1;
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
      }, C_ = function(e, t) {
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
      }, Xy = {};
      tl = function(e, t, n) {
        n = n || Ky;
        var r = n.current, a = r && r.tag;
        t != null && (e != null && d("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var i = E_(e, a) ? null : r, o = i ? null : C_(e, n), l = i || o;
        if (l) {
          var c = l.tag, v = !!i + "|" + e + "|" + c;
          if (!Xy[v]) {
            Xy[v] = !0;
            var h = e, S = "";
            if (e === "#text" ? /\S/.test(t) ? h = "Text nodes" : (h = "Whitespace text nodes", S = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : h = "<" + e + ">", i) {
              var b = "";
              c === "table" && e === "tr" && (b += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), d("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", h, c, S, b);
            } else
              d("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", h, c);
          }
        }
      };
    }
    var Ys = "suppressHydrationWarning", Is = "$", qs = "/$", rl = "$?", al = "$!", R_ = "style", tv = null, nv = null;
    function T_(e) {
      var t, n, r = e.nodeType;
      switch (r) {
        case fa:
        case zf: {
          t = r === fa ? "#document" : "#fragment";
          var a = e.documentElement;
          n = a ? a.namespaceURI : Uf(null, "");
          break;
        }
        default: {
          var i = r === St ? e.parentNode : e, o = i.namespaceURI || null;
          t = i.tagName, n = Uf(o, t);
          break;
        }
      }
      {
        var l = t.toLowerCase(), c = nl(null, l);
        return {
          namespace: n,
          ancestorInfo: c
        };
      }
    }
    function x_(e, t, n) {
      {
        var r = e, a = Uf(r.namespace, t), i = nl(r.ancestorInfo, t);
        return {
          namespace: a,
          ancestorInfo: i
        };
      }
    }
    function yk(e) {
      return e;
    }
    function __(e) {
      tv = RT(), nv = Vx();
      var t = null;
      return iy(!1), t;
    }
    function w_(e) {
      Bx(nv), iy(tv), tv = null, nv = null;
    }
    function D_(e, t, n, r, a) {
      var i;
      {
        var o = r;
        if (tl(e, null, o.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var l = "" + t.children, c = nl(o.ancestorInfo, e);
          tl(null, l, c);
        }
        i = o.namespace;
      }
      var v = s_(e, t, n, i);
      return ul(a, v), cv(v, t), v;
    }
    function O_(e, t) {
      e.appendChild(t);
    }
    function M_(e, t, n, r, a) {
      switch (f_(e, t, n, r), t) {
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
    function A_(e, t, n, r, a, i) {
      {
        var o = i;
        if (typeof r.children != typeof n.children && (typeof r.children == "string" || typeof r.children == "number")) {
          var l = "" + r.children, c = nl(o.ancestorInfo, t);
          tl(null, l, c);
        }
      }
      return d_(e, t, n, r);
    }
    function rv(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function k_(e, t, n, r) {
      {
        var a = n;
        tl(null, e, a.ancestorInfo);
      }
      var i = c_(e, t);
      return ul(r, i), i;
    }
    function L_() {
      var e = window.event;
      return e === void 0 ? ya : oy(e.type);
    }
    var av = typeof setTimeout == "function" ? setTimeout : void 0, N_ = typeof clearTimeout == "function" ? clearTimeout : void 0, iv = -1, Jy = typeof Promise == "function" ? Promise : void 0, U_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jy < "u" ? function(e) {
      return Jy.resolve(null).then(e).catch(z_);
    } : av;
    function z_(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function j_(e, t, n, r) {
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
    function F_(e, t, n, r, a, i) {
      v_(e, t, n, r, a), cv(e, a);
    }
    function Zy(e) {
      ds(e, "");
    }
    function H_(e, t, n) {
      e.nodeValue = n;
    }
    function V_(e, t) {
      e.appendChild(t);
    }
    function B_(e, t) {
      var n;
      e.nodeType === St ? (n = e.parentNode, n.insertBefore(t, e)) : (n = e, n.appendChild(t));
      var r = e._reactRootContainer;
      r == null && n.onclick === null && $s(n);
    }
    function P_(e, t, n) {
      e.insertBefore(t, n);
    }
    function $_(e, t, n) {
      e.nodeType === St ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
    }
    function Y_(e, t) {
      e.removeChild(t);
    }
    function I_(e, t) {
      e.nodeType === St ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function ov(e, t) {
      var n = t, r = 0;
      do {
        var a = n.nextSibling;
        if (e.removeChild(n), a && a.nodeType === St) {
          var i = a.data;
          if (i === qs)
            if (r === 0) {
              e.removeChild(a), Vu(t);
              return;
            } else
              r--;
          else (i === Is || i === rl || i === al) && r++;
        }
        n = a;
      } while (n);
      Vu(t);
    }
    function q_(e, t) {
      e.nodeType === St ? ov(e.parentNode, t) : e.nodeType === Nn && ov(e, t), Vu(e);
    }
    function G_(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function W_(e) {
      e.nodeValue = "";
    }
    function Q_(e, t) {
      e = e;
      var n = t[R_], r = n != null && n.hasOwnProperty("display") ? n.display : null;
      e.style.display = jf("display", r);
    }
    function K_(e, t) {
      e.nodeValue = t;
    }
    function X_(e) {
      e.nodeType === Nn ? e.textContent = "" : e.nodeType === fa && e.documentElement && e.removeChild(e.documentElement);
    }
    function J_(e, t, n) {
      return e.nodeType !== Nn || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Z_(e, t) {
      return t === "" || e.nodeType !== ca ? null : e;
    }
    function ew(e) {
      return e.nodeType !== St ? null : e;
    }
    function eg(e) {
      return e.data === rl;
    }
    function uv(e) {
      return e.data === al;
    }
    function tw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, n, r, a;
      return t && (n = t.dgst, r = t.msg, a = t.stck), {
        message: r,
        digest: n,
        stack: a
      };
    }
    function nw(e, t) {
      e._reactRetry = t;
    }
    function Gs(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Nn || t === ca)
          break;
        if (t === St) {
          var n = e.data;
          if (n === Is || n === al || n === rl)
            break;
          if (n === qs)
            return null;
        }
      }
      return e;
    }
    function il(e) {
      return Gs(e.nextSibling);
    }
    function rw(e) {
      return Gs(e.firstChild);
    }
    function aw(e) {
      return Gs(e.firstChild);
    }
    function iw(e) {
      return Gs(e.nextSibling);
    }
    function ow(e, t, n, r, a, i, o) {
      ul(i, e), cv(e, n);
      var l;
      {
        var c = a;
        l = c.namespace;
      }
      var v = (i.mode & Le) !== se;
      return h_(e, t, n, l, r, v, o);
    }
    function uw(e, t, n, r) {
      return ul(n, e), n.mode & Le, m_(e, t);
    }
    function lw(e, t) {
      ul(t, e);
    }
    function sw(e) {
      for (var t = e.nextSibling, n = 0; t; ) {
        if (t.nodeType === St) {
          var r = t.data;
          if (r === qs) {
            if (n === 0)
              return il(t);
            n--;
          } else (r === Is || r === al || r === rl) && n++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function tg(e) {
      for (var t = e.previousSibling, n = 0; t; ) {
        if (t.nodeType === St) {
          var r = t.data;
          if (r === Is || r === al || r === rl) {
            if (n === 0)
              return t;
            n--;
          } else r === qs && n++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function cw(e) {
      Vu(e);
    }
    function fw(e) {
      Vu(e);
    }
    function dw(e) {
      return e !== "head" && e !== "body";
    }
    function vw(e, t, n, r) {
      var a = !0;
      Ps(t.nodeValue, n, r, a);
    }
    function pw(e, t, n, r, a, i) {
      if (t[Ys] !== !0) {
        var o = !0;
        Ps(r.nodeValue, a, i, o);
      }
    }
    function hw(e, t) {
      t.nodeType === Nn ? Xd(e, t) : t.nodeType === St || Jd(e, t);
    }
    function mw(e, t) {
      {
        var n = e.parentNode;
        n !== null && (t.nodeType === Nn ? Xd(n, t) : t.nodeType === St || Jd(n, t));
      }
    }
    function yw(e, t, n, r, a) {
      (a || t[Ys] !== !0) && (r.nodeType === Nn ? Xd(n, r) : r.nodeType === St || Jd(n, r));
    }
    function gw(e, t, n) {
      Zd(e, t);
    }
    function bw(e, t) {
      ev(e, t);
    }
    function Sw(e, t, n) {
      {
        var r = e.parentNode;
        r !== null && Zd(r, t);
      }
    }
    function Ew(e, t) {
      {
        var n = e.parentNode;
        n !== null && ev(n, t);
      }
    }
    function Cw(e, t, n, r, a, i) {
      (i || t[Ys] !== !0) && Zd(n, r);
    }
    function Rw(e, t, n, r, a) {
      (a || t[Ys] !== !0) && ev(n, r);
    }
    function Tw(e) {
      d("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function xw(e) {
      Xu(e);
    }
    var Do = Math.random().toString(36).slice(2), Oo = "__reactFiber$" + Do, lv = "__reactProps$" + Do, ol = "__reactContainer$" + Do, sv = "__reactEvents$" + Do, _w = "__reactListeners$" + Do, ww = "__reactHandles$" + Do;
    function Dw(e) {
      delete e[Oo], delete e[lv], delete e[sv], delete e[_w], delete e[ww];
    }
    function ul(e, t) {
      t[Oo] = e;
    }
    function Ws(e, t) {
      t[ol] = e;
    }
    function ng(e) {
      e[ol] = null;
    }
    function ll(e) {
      return !!e[ol];
    }
    function Ai(e) {
      var t = e[Oo];
      if (t)
        return t;
      for (var n = e.parentNode; n; ) {
        if (t = n[ol] || n[Oo], t) {
          var r = t.alternate;
          if (t.child !== null || r !== null && r.child !== null)
            for (var a = tg(e); a !== null; ) {
              var i = a[Oo];
              if (i)
                return i;
              a = tg(a);
            }
          return t;
        }
        e = n, n = e.parentNode;
      }
      return null;
    }
    function Ya(e) {
      var t = e[Oo] || e[ol];
      return t && (t.tag === z || t.tag === J || t.tag === Z || t.tag === U) ? t : null;
    }
    function Mo(e) {
      if (e.tag === z || e.tag === J)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Qs(e) {
      return e[lv] || null;
    }
    function cv(e, t) {
      e[lv] = t;
    }
    function Ow(e) {
      var t = e[sv];
      return t === void 0 && (t = e[sv] = /* @__PURE__ */ new Set()), t;
    }
    var rg = {}, ag = p.ReactDebugCurrentFrame;
    function Ks(e) {
      if (e) {
        var t = e._owner, n = cu(e.type, e._source, t ? t.type : null);
        ag.setExtraStackFrame(n);
      } else
        ag.setExtraStackFrame(null);
    }
    function xr(e, t, n, r, a) {
      {
        var i = Function.call.bind(An);
        for (var o in e)
          if (i(e, o)) {
            var l = void 0;
            try {
              if (typeof e[o] != "function") {
                var c = Error((r || "React class") + ": " + n + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw c.name = "Invariant Violation", c;
              }
              l = e[o](t, o, r, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              l = v;
            }
            l && !(l instanceof Error) && (Ks(a), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", r || "React class", n, o, typeof l), Ks(null)), l instanceof Error && !(l.message in rg) && (rg[l.message] = !0, Ks(a), d("Failed %s type: %s", n, l.message), Ks(null));
          }
      }
    }
    var fv = [], Xs;
    Xs = [];
    var ga = -1;
    function Ia(e) {
      return {
        current: e
      };
    }
    function vn(e, t) {
      if (ga < 0) {
        d("Unexpected pop.");
        return;
      }
      t !== Xs[ga] && d("Unexpected Fiber popped."), e.current = fv[ga], fv[ga] = null, Xs[ga] = null, ga--;
    }
    function pn(e, t, n) {
      ga++, fv[ga] = e.current, Xs[ga] = n, e.current = t;
    }
    var dv;
    dv = {};
    var Xn = {};
    Object.freeze(Xn);
    var ba = Ia(Xn), Yr = Ia(!1), vv = Xn;
    function Ao(e, t, n) {
      return n && Ir(t) ? vv : ba.current;
    }
    function ig(e, t, n) {
      {
        var r = e.stateNode;
        r.__reactInternalMemoizedUnmaskedChildContext = t, r.__reactInternalMemoizedMaskedChildContext = n;
      }
    }
    function ko(e, t) {
      {
        var n = e.type, r = n.contextTypes;
        if (!r)
          return Xn;
        var a = e.stateNode;
        if (a && a.__reactInternalMemoizedUnmaskedChildContext === t)
          return a.__reactInternalMemoizedMaskedChildContext;
        var i = {};
        for (var o in r)
          i[o] = t[o];
        {
          var l = Se(e) || "Unknown";
          xr(r, i, "context", l);
        }
        return a && ig(e, t, i), i;
      }
    }
    function Js() {
      return Yr.current;
    }
    function Ir(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Zs(e) {
      vn(Yr, e), vn(ba, e);
    }
    function pv(e) {
      vn(Yr, e), vn(ba, e);
    }
    function og(e, t, n) {
      {
        if (ba.current !== Xn)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        pn(ba, t, e), pn(Yr, n, e);
      }
    }
    function ug(e, t, n) {
      {
        var r = e.stateNode, a = t.childContextTypes;
        if (typeof r.getChildContext != "function") {
          {
            var i = Se(e) || "Unknown";
            dv[i] || (dv[i] = !0, d("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", i, i));
          }
          return n;
        }
        var o = r.getChildContext();
        for (var l in o)
          if (!(l in a))
            throw new Error((Se(e) || "Unknown") + '.getChildContext(): key "' + l + '" is not defined in childContextTypes.');
        {
          var c = Se(e) || "Unknown";
          xr(a, o, "child context", c);
        }
        return De({}, n, o);
      }
    }
    function ec(e) {
      {
        var t = e.stateNode, n = t && t.__reactInternalMemoizedMergedChildContext || Xn;
        return vv = ba.current, pn(ba, n, e), pn(Yr, Yr.current, e), !0;
      }
    }
    function lg(e, t, n) {
      {
        var r = e.stateNode;
        if (!r)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (n) {
          var a = ug(e, t, vv);
          r.__reactInternalMemoizedMergedChildContext = a, vn(Yr, e), vn(ba, e), pn(ba, a, e), pn(Yr, n, e);
        } else
          vn(Yr, e), pn(Yr, n, e);
      }
    }
    function Mw(e) {
      {
        if (!dR(e) || e.tag !== k)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case U:
              return t.stateNode.context;
            case k: {
              var n = t.type;
              if (Ir(n))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var qa = 0, tc = 1, Sa = null, hv = !1, mv = !1;
    function sg(e) {
      Sa === null ? Sa = [e] : Sa.push(e);
    }
    function Aw(e) {
      hv = !0, sg(e);
    }
    function cg() {
      hv && Ga();
    }
    function Ga() {
      if (!mv && Sa !== null) {
        mv = !0;
        var e = 0, t = Tr();
        try {
          var n = !0, r = Sa;
          for (Yt(Wn); e < r.length; e++) {
            var a = r[e];
            do
              a = a(n);
            while (a !== null);
          }
          Sa = null, hv = !1;
        } catch (i) {
          throw Sa !== null && (Sa = Sa.slice(e + 1)), Nm(ys, Ga), i;
        } finally {
          Yt(t), mv = !1;
        }
      }
      return null;
    }
    var Lo = [], No = 0, nc = null, rc = 0, ur = [], lr = 0, ki = null, Ea = 1, Ca = "";
    function kw(e) {
      return Ni(), (e.flags & _m) !== fe;
    }
    function Lw(e) {
      return Ni(), rc;
    }
    function Nw() {
      var e = Ca, t = Ea, n = t & ~Uw(t);
      return n.toString(32) + e;
    }
    function Li(e, t) {
      Ni(), Lo[No++] = rc, Lo[No++] = nc, nc = e, rc = t;
    }
    function fg(e, t, n) {
      Ni(), ur[lr++] = Ea, ur[lr++] = Ca, ur[lr++] = ki, ki = e;
      var r = Ea, a = Ca, i = ac(r) - 1, o = r & ~(1 << i), l = n + 1, c = ac(t) + i;
      if (c > 30) {
        var v = i - i % 5, h = (1 << v) - 1, S = (o & h).toString(32), b = o >> v, x = i - v, w = ac(t) + x, M = l << x, q = M | b, oe = S + a;
        Ea = 1 << w | q, Ca = oe;
      } else {
        var re = l << i, Ue = re | o, Me = a;
        Ea = 1 << c | Ue, Ca = Me;
      }
    }
    function yv(e) {
      Ni();
      var t = e.return;
      if (t !== null) {
        var n = 1, r = 0;
        Li(e, n), fg(e, n, r);
      }
    }
    function ac(e) {
      return 32 - Vm(e);
    }
    function Uw(e) {
      return 1 << ac(e) - 1;
    }
    function gv(e) {
      for (; e === nc; )
        nc = Lo[--No], Lo[No] = null, rc = Lo[--No], Lo[No] = null;
      for (; e === ki; )
        ki = ur[--lr], ur[lr] = null, Ca = ur[--lr], ur[lr] = null, Ea = ur[--lr], ur[lr] = null;
    }
    function zw() {
      return Ni(), ki !== null ? {
        id: Ea,
        overflow: Ca
      } : null;
    }
    function jw(e, t) {
      Ni(), ur[lr++] = Ea, ur[lr++] = Ca, ur[lr++] = ki, Ea = t.id, Ca = t.overflow, ki = e;
    }
    function Ni() {
      Zt() || d("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Jt = null, sr = null, _r = !1, Ui = !1, Wa = null;
    function Fw() {
      _r && d("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function dg() {
      Ui = !0;
    }
    function Hw() {
      return Ui;
    }
    function Vw(e) {
      var t = e.stateNode.containerInfo;
      return sr = aw(t), Jt = e, _r = !0, Wa = null, Ui = !1, !0;
    }
    function Bw(e, t, n) {
      return sr = iw(t), Jt = e, _r = !0, Wa = null, Ui = !1, n !== null && jw(e, n), !0;
    }
    function vg(e, t) {
      switch (e.tag) {
        case U: {
          hw(e.stateNode.containerInfo, t);
          break;
        }
        case z: {
          var n = (e.mode & Le) !== se;
          yw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            n
          );
          break;
        }
        case Z: {
          var r = e.memoizedState;
          r.dehydrated !== null && mw(r.dehydrated, t);
          break;
        }
      }
    }
    function pg(e, t) {
      vg(e, t);
      var n = IO();
      n.stateNode = t, n.return = e;
      var r = e.deletions;
      r === null ? (e.deletions = [n], e.flags |= bi) : r.push(n);
    }
    function bv(e, t) {
      {
        if (Ui)
          return;
        switch (e.tag) {
          case U: {
            var n = e.stateNode.containerInfo;
            switch (t.tag) {
              case z:
                var r = t.type;
                t.pendingProps, gw(n, r);
                break;
              case J:
                var a = t.pendingProps;
                bw(n, a);
                break;
            }
            break;
          }
          case z: {
            var i = e.type, o = e.memoizedProps, l = e.stateNode;
            switch (t.tag) {
              case z: {
                var c = t.type, v = t.pendingProps, h = (e.mode & Le) !== se;
                Cw(
                  i,
                  o,
                  l,
                  c,
                  v,
                  // TODO: Delete this argument when we remove the legacy root API.
                  h
                );
                break;
              }
              case J: {
                var S = t.pendingProps, b = (e.mode & Le) !== se;
                Rw(
                  i,
                  o,
                  l,
                  S,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
            }
            break;
          }
          case Z: {
            var x = e.memoizedState, w = x.dehydrated;
            if (w !== null) switch (t.tag) {
              case z:
                var M = t.type;
                t.pendingProps, Sw(w, M);
                break;
              case J:
                var q = t.pendingProps;
                Ew(w, q);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function hg(e, t) {
      t.flags = t.flags & ~va | Et, bv(e, t);
    }
    function mg(e, t) {
      switch (e.tag) {
        case z: {
          var n = e.type;
          e.pendingProps;
          var r = J_(t, n);
          return r !== null ? (e.stateNode = r, Jt = e, sr = rw(r), !0) : !1;
        }
        case J: {
          var a = e.pendingProps, i = Z_(t, a);
          return i !== null ? (e.stateNode = i, Jt = e, sr = null, !0) : !1;
        }
        case Z: {
          var o = ew(t);
          if (o !== null) {
            var l = {
              dehydrated: o,
              treeContext: zw(),
              retryLane: qn
            };
            e.memoizedState = l;
            var c = qO(o);
            return c.return = e, e.child = c, Jt = e, sr = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Sv(e) {
      return (e.mode & Le) !== se && (e.flags & Be) === fe;
    }
    function Ev(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Cv(e) {
      if (_r) {
        var t = sr;
        if (!t) {
          Sv(e) && (bv(Jt, e), Ev()), hg(Jt, e), _r = !1, Jt = e;
          return;
        }
        var n = t;
        if (!mg(e, t)) {
          Sv(e) && (bv(Jt, e), Ev()), t = il(n);
          var r = Jt;
          if (!t || !mg(e, t)) {
            hg(Jt, e), _r = !1, Jt = e;
            return;
          }
          pg(r, n);
        }
      }
    }
    function Pw(e, t, n) {
      var r = e.stateNode, a = !Ui, i = ow(r, e.type, e.memoizedProps, t, n, e, a);
      return e.updateQueue = i, i !== null;
    }
    function $w(e) {
      var t = e.stateNode, n = e.memoizedProps, r = uw(t, n, e);
      if (r) {
        var a = Jt;
        if (a !== null)
          switch (a.tag) {
            case U: {
              var i = a.stateNode.containerInfo, o = (a.mode & Le) !== se;
              vw(
                i,
                t,
                n,
                // TODO: Delete this argument when we remove the legacy root API.
                o
              );
              break;
            }
            case z: {
              var l = a.type, c = a.memoizedProps, v = a.stateNode, h = (a.mode & Le) !== se;
              pw(
                l,
                c,
                v,
                t,
                n,
                // TODO: Delete this argument when we remove the legacy root API.
                h
              );
              break;
            }
          }
      }
      return r;
    }
    function Yw(e) {
      var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
      if (!n)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      lw(n, e);
    }
    function Iw(e) {
      var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
      if (!n)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return sw(n);
    }
    function yg(e) {
      for (var t = e.return; t !== null && t.tag !== z && t.tag !== U && t.tag !== Z; )
        t = t.return;
      Jt = t;
    }
    function ic(e) {
      if (e !== Jt)
        return !1;
      if (!_r)
        return yg(e), _r = !0, !1;
      if (e.tag !== U && (e.tag !== z || dw(e.type) && !rv(e.type, e.memoizedProps))) {
        var t = sr;
        if (t)
          if (Sv(e))
            gg(e), Ev();
          else
            for (; t; )
              pg(e, t), t = il(t);
      }
      return yg(e), e.tag === Z ? sr = Iw(e) : sr = Jt ? il(e.stateNode) : null, !0;
    }
    function qw() {
      return _r && sr !== null;
    }
    function gg(e) {
      for (var t = sr; t; )
        vg(e, t), t = il(t);
    }
    function Uo() {
      Jt = null, sr = null, _r = !1, Ui = !1;
    }
    function bg() {
      Wa !== null && (dS(Wa), Wa = null);
    }
    function Zt() {
      return _r;
    }
    function Rv(e) {
      Wa === null ? Wa = [e] : Wa.push(e);
    }
    var Gw = p.ReactCurrentBatchConfig, Ww = null;
    function Qw() {
      return Gw.transition;
    }
    var wr = {
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
      var Kw = function(e) {
        for (var t = null, n = e; n !== null; )
          n.mode & pt && (t = n), n = n.return;
        return t;
      }, zi = function(e) {
        var t = [];
        return e.forEach(function(n) {
          t.push(n);
        }), t.sort().join(", ");
      }, sl = [], cl = [], fl = [], dl = [], vl = [], pl = [], ji = /* @__PURE__ */ new Set();
      wr.recordUnsafeLifecycleWarnings = function(e, t) {
        ji.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && sl.push(e), e.mode & pt && typeof t.UNSAFE_componentWillMount == "function" && cl.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && fl.push(e), e.mode & pt && typeof t.UNSAFE_componentWillReceiveProps == "function" && dl.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && vl.push(e), e.mode & pt && typeof t.UNSAFE_componentWillUpdate == "function" && pl.push(e));
      }, wr.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        sl.length > 0 && (sl.forEach(function(b) {
          e.add(Se(b) || "Component"), ji.add(b.type);
        }), sl = []);
        var t = /* @__PURE__ */ new Set();
        cl.length > 0 && (cl.forEach(function(b) {
          t.add(Se(b) || "Component"), ji.add(b.type);
        }), cl = []);
        var n = /* @__PURE__ */ new Set();
        fl.length > 0 && (fl.forEach(function(b) {
          n.add(Se(b) || "Component"), ji.add(b.type);
        }), fl = []);
        var r = /* @__PURE__ */ new Set();
        dl.length > 0 && (dl.forEach(function(b) {
          r.add(Se(b) || "Component"), ji.add(b.type);
        }), dl = []);
        var a = /* @__PURE__ */ new Set();
        vl.length > 0 && (vl.forEach(function(b) {
          a.add(Se(b) || "Component"), ji.add(b.type);
        }), vl = []);
        var i = /* @__PURE__ */ new Set();
        if (pl.length > 0 && (pl.forEach(function(b) {
          i.add(Se(b) || "Component"), ji.add(b.type);
        }), pl = []), t.size > 0) {
          var o = zi(t);
          d(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, o);
        }
        if (r.size > 0) {
          var l = zi(r);
          d(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, l);
        }
        if (i.size > 0) {
          var c = zi(i);
          d(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, c);
        }
        if (e.size > 0) {
          var v = zi(e);
          T(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, v);
        }
        if (n.size > 0) {
          var h = zi(n);
          T(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, h);
        }
        if (a.size > 0) {
          var S = zi(a);
          T(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
      };
      var oc = /* @__PURE__ */ new Map(), Sg = /* @__PURE__ */ new Set();
      wr.recordLegacyContextWarning = function(e, t) {
        var n = Kw(e);
        if (n === null) {
          d("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!Sg.has(e.type)) {
          var r = oc.get(n);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (r === void 0 && (r = [], oc.set(n, r)), r.push(e));
        }
      }, wr.flushLegacyContextWarning = function() {
        oc.forEach(function(e, t) {
          if (e.length !== 0) {
            var n = e[0], r = /* @__PURE__ */ new Set();
            e.forEach(function(i) {
              r.add(Se(i) || "Component"), Sg.add(i.type);
            });
            var a = zi(r);
            try {
              ot(n), d(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, a);
            } finally {
              Vt();
            }
          }
        });
      }, wr.discardPendingWarnings = function() {
        sl = [], cl = [], fl = [], dl = [], vl = [], pl = [], oc = /* @__PURE__ */ new Map();
      };
    }
    var Tv, xv, _v, wv, Dv, Eg = function(e, t) {
    };
    Tv = !1, xv = !1, _v = {}, wv = {}, Dv = {}, Eg = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var n = Se(t) || "Component";
        wv[n] || (wv[n] = !0, d('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Xw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function hl(e, t, n) {
      var r = n.ref;
      if (r !== null && typeof r != "function" && typeof r != "object") {
        if ((e.mode & pt || zt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(n._owner && n._self && n._owner.stateNode !== n._self) && // Will already throw with "Function components cannot have string refs"
        !(n._owner && n._owner.tag !== k) && // Will already warn with "Function components cannot be given refs"
        !(typeof n.type == "function" && !Xw(n.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        n._owner) {
          var a = Se(e) || "Component";
          _v[a] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', a, r), _v[a] = !0);
        }
        if (n._owner) {
          var i = n._owner, o;
          if (i) {
            var l = i;
            if (l.tag !== k)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            o = l.stateNode;
          }
          if (!o)
            throw new Error("Missing owner for string ref " + r + ". This error is likely caused by a bug in React. Please file an issue.");
          var c = o;
          ra(r, "ref");
          var v = "" + r;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === v)
            return t.ref;
          var h = function(S) {
            var b = c.refs;
            S === null ? delete b[v] : b[v] = S;
          };
          return h._stringRef = v, h;
        } else {
          if (typeof r != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!n._owner)
            throw new Error("Element ref was specified as a string (" + r + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return r;
    }
    function uc(e, t) {
      var n = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
    }
    function lc(e) {
      {
        var t = Se(e) || "Component";
        if (Dv[t])
          return;
        Dv[t] = !0, d("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Cg(e) {
      var t = e._payload, n = e._init;
      return n(t);
    }
    function Rg(e) {
      function t(C, A) {
        if (e) {
          var R = C.deletions;
          R === null ? (C.deletions = [A], C.flags |= bi) : R.push(A);
        }
      }
      function n(C, A) {
        if (!e)
          return null;
        for (var R = A; R !== null; )
          t(C, R), R = R.sibling;
        return null;
      }
      function r(C, A) {
        for (var R = /* @__PURE__ */ new Map(), V = A; V !== null; )
          V.key !== null ? R.set(V.key, V) : R.set(V.index, V), V = V.sibling;
        return R;
      }
      function a(C, A) {
        var R = qi(C, A);
        return R.index = 0, R.sibling = null, R;
      }
      function i(C, A, R) {
        if (C.index = R, !e)
          return C.flags |= _m, A;
        var V = C.alternate;
        if (V !== null) {
          var X = V.index;
          return X < A ? (C.flags |= Et, A) : X;
        } else
          return C.flags |= Et, A;
      }
      function o(C) {
        return e && C.alternate === null && (C.flags |= Et), C;
      }
      function l(C, A, R, V) {
        if (A === null || A.tag !== J) {
          var X = Rh(R, C.mode, V);
          return X.return = C, X;
        } else {
          var W = a(A, R);
          return W.return = C, W;
        }
      }
      function c(C, A, R, V) {
        var X = R.type;
        if (X === Fr)
          return h(C, A, R.props.children, V, R.key);
        if (A !== null && (A.elementType === X || // Keep this check inline so it only runs on the false path:
        DS(A, R) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof X == "object" && X !== null && X.$$typeof === le && Cg(X) === A.type)) {
          var W = a(A, R.props);
          return W.ref = hl(C, A, R), W.return = C, W._debugSource = R._source, W._debugOwner = R._owner, W;
        }
        var de = Ch(R, C.mode, V);
        return de.ref = hl(C, A, R), de.return = C, de;
      }
      function v(C, A, R, V) {
        if (A === null || A.tag !== B || A.stateNode.containerInfo !== R.containerInfo || A.stateNode.implementation !== R.implementation) {
          var X = Th(R, C.mode, V);
          return X.return = C, X;
        } else {
          var W = a(A, R.children || []);
          return W.return = C, W;
        }
      }
      function h(C, A, R, V, X) {
        if (A === null || A.tag !== ze) {
          var W = ii(R, C.mode, V, X);
          return W.return = C, W;
        } else {
          var de = a(A, R);
          return de.return = C, de;
        }
      }
      function S(C, A, R) {
        if (typeof A == "string" && A !== "" || typeof A == "number") {
          var V = Rh("" + A, C.mode, R);
          return V.return = C, V;
        }
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case ir: {
              var X = Ch(A, C.mode, R);
              return X.ref = hl(C, null, A), X.return = C, X;
            }
            case In: {
              var W = Th(A, C.mode, R);
              return W.return = C, W;
            }
            case le: {
              var de = A._payload, be = A._init;
              return S(C, be(de), R);
            }
          }
          if (Oe(A) || Er(A)) {
            var Ge = ii(A, C.mode, R, null);
            return Ge.return = C, Ge;
          }
          uc(C, A);
        }
        return typeof A == "function" && lc(C), null;
      }
      function b(C, A, R, V) {
        var X = A !== null ? A.key : null;
        if (typeof R == "string" && R !== "" || typeof R == "number")
          return X !== null ? null : l(C, A, "" + R, V);
        if (typeof R == "object" && R !== null) {
          switch (R.$$typeof) {
            case ir:
              return R.key === X ? c(C, A, R, V) : null;
            case In:
              return R.key === X ? v(C, A, R, V) : null;
            case le: {
              var W = R._payload, de = R._init;
              return b(C, A, de(W), V);
            }
          }
          if (Oe(R) || Er(R))
            return X !== null ? null : h(C, A, R, V, null);
          uc(C, R);
        }
        return typeof R == "function" && lc(C), null;
      }
      function x(C, A, R, V, X) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var W = C.get(R) || null;
          return l(A, W, "" + V, X);
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case ir: {
              var de = C.get(V.key === null ? R : V.key) || null;
              return c(A, de, V, X);
            }
            case In: {
              var be = C.get(V.key === null ? R : V.key) || null;
              return v(A, be, V, X);
            }
            case le:
              var Ge = V._payload, je = V._init;
              return x(C, A, R, je(Ge), X);
          }
          if (Oe(V) || Er(V)) {
            var yt = C.get(R) || null;
            return h(A, yt, V, X, null);
          }
          uc(A, V);
        }
        return typeof V == "function" && lc(A), null;
      }
      function w(C, A, R) {
        {
          if (typeof C != "object" || C === null)
            return A;
          switch (C.$$typeof) {
            case ir:
            case In:
              Eg(C, R);
              var V = C.key;
              if (typeof V != "string")
                break;
              if (A === null) {
                A = /* @__PURE__ */ new Set(), A.add(V);
                break;
              }
              if (!A.has(V)) {
                A.add(V);
                break;
              }
              d("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", V);
              break;
            case le:
              var X = C._payload, W = C._init;
              w(W(X), A, R);
              break;
          }
        }
        return A;
      }
      function M(C, A, R, V) {
        for (var X = null, W = 0; W < R.length; W++) {
          var de = R[W];
          X = w(de, X, C);
        }
        for (var be = null, Ge = null, je = A, yt = 0, Fe = 0, ht = null; je !== null && Fe < R.length; Fe++) {
          je.index > Fe ? (ht = je, je = null) : ht = je.sibling;
          var mn = b(C, je, R[Fe], V);
          if (mn === null) {
            je === null && (je = ht);
            break;
          }
          e && je && mn.alternate === null && t(C, je), yt = i(mn, yt, Fe), Ge === null ? be = mn : Ge.sibling = mn, Ge = mn, je = ht;
        }
        if (Fe === R.length) {
          if (n(C, je), Zt()) {
            var un = Fe;
            Li(C, un);
          }
          return be;
        }
        if (je === null) {
          for (; Fe < R.length; Fe++) {
            var Zn = S(C, R[Fe], V);
            Zn !== null && (yt = i(Zn, yt, Fe), Ge === null ? be = Zn : Ge.sibling = Zn, Ge = Zn);
          }
          if (Zt()) {
            var On = Fe;
            Li(C, On);
          }
          return be;
        }
        for (var Mn = r(C, je); Fe < R.length; Fe++) {
          var yn = x(Mn, C, Fe, R[Fe], V);
          yn !== null && (e && yn.alternate !== null && Mn.delete(yn.key === null ? Fe : yn.key), yt = i(yn, yt, Fe), Ge === null ? be = yn : Ge.sibling = yn, Ge = yn);
        }
        if (e && Mn.forEach(function(eu) {
          return t(C, eu);
        }), Zt()) {
          var Oa = Fe;
          Li(C, Oa);
        }
        return be;
      }
      function q(C, A, R, V) {
        var X = Er(R);
        if (typeof X != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          R[Symbol.toStringTag] === "Generator" && (xv || d("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), xv = !0), R.entries === X && (Tv || d("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Tv = !0);
          var W = X.call(R);
          if (W)
            for (var de = null, be = W.next(); !be.done; be = W.next()) {
              var Ge = be.value;
              de = w(Ge, de, C);
            }
        }
        var je = X.call(R);
        if (je == null)
          throw new Error("An iterable object provided no iterator.");
        for (var yt = null, Fe = null, ht = A, mn = 0, un = 0, Zn = null, On = je.next(); ht !== null && !On.done; un++, On = je.next()) {
          ht.index > un ? (Zn = ht, ht = null) : Zn = ht.sibling;
          var Mn = b(C, ht, On.value, V);
          if (Mn === null) {
            ht === null && (ht = Zn);
            break;
          }
          e && ht && Mn.alternate === null && t(C, ht), mn = i(Mn, mn, un), Fe === null ? yt = Mn : Fe.sibling = Mn, Fe = Mn, ht = Zn;
        }
        if (On.done) {
          if (n(C, ht), Zt()) {
            var yn = un;
            Li(C, yn);
          }
          return yt;
        }
        if (ht === null) {
          for (; !On.done; un++, On = je.next()) {
            var Oa = S(C, On.value, V);
            Oa !== null && (mn = i(Oa, mn, un), Fe === null ? yt = Oa : Fe.sibling = Oa, Fe = Oa);
          }
          if (Zt()) {
            var eu = un;
            Li(C, eu);
          }
          return yt;
        }
        for (var Gl = r(C, ht); !On.done; un++, On = je.next()) {
          var Zr = x(Gl, C, un, On.value, V);
          Zr !== null && (e && Zr.alternate !== null && Gl.delete(Zr.key === null ? un : Zr.key), mn = i(Zr, mn, un), Fe === null ? yt = Zr : Fe.sibling = Zr, Fe = Zr);
        }
        if (e && Gl.forEach(function(RM) {
          return t(C, RM);
        }), Zt()) {
          var CM = un;
          Li(C, CM);
        }
        return yt;
      }
      function oe(C, A, R, V) {
        if (A !== null && A.tag === J) {
          n(C, A.sibling);
          var X = a(A, R);
          return X.return = C, X;
        }
        n(C, A);
        var W = Rh(R, C.mode, V);
        return W.return = C, W;
      }
      function re(C, A, R, V) {
        for (var X = R.key, W = A; W !== null; ) {
          if (W.key === X) {
            var de = R.type;
            if (de === Fr) {
              if (W.tag === ze) {
                n(C, W.sibling);
                var be = a(W, R.props.children);
                return be.return = C, be._debugSource = R._source, be._debugOwner = R._owner, be;
              }
            } else if (W.elementType === de || // Keep this check inline so it only runs on the false path:
            DS(W, R) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof de == "object" && de !== null && de.$$typeof === le && Cg(de) === W.type) {
              n(C, W.sibling);
              var Ge = a(W, R.props);
              return Ge.ref = hl(C, W, R), Ge.return = C, Ge._debugSource = R._source, Ge._debugOwner = R._owner, Ge;
            }
            n(C, W);
            break;
          } else
            t(C, W);
          W = W.sibling;
        }
        if (R.type === Fr) {
          var je = ii(R.props.children, C.mode, V, R.key);
          return je.return = C, je;
        } else {
          var yt = Ch(R, C.mode, V);
          return yt.ref = hl(C, A, R), yt.return = C, yt;
        }
      }
      function Ue(C, A, R, V) {
        for (var X = R.key, W = A; W !== null; ) {
          if (W.key === X)
            if (W.tag === B && W.stateNode.containerInfo === R.containerInfo && W.stateNode.implementation === R.implementation) {
              n(C, W.sibling);
              var de = a(W, R.children || []);
              return de.return = C, de;
            } else {
              n(C, W);
              break;
            }
          else
            t(C, W);
          W = W.sibling;
        }
        var be = Th(R, C.mode, V);
        return be.return = C, be;
      }
      function Me(C, A, R, V) {
        var X = typeof R == "object" && R !== null && R.type === Fr && R.key === null;
        if (X && (R = R.props.children), typeof R == "object" && R !== null) {
          switch (R.$$typeof) {
            case ir:
              return o(re(C, A, R, V));
            case In:
              return o(Ue(C, A, R, V));
            case le:
              var W = R._payload, de = R._init;
              return Me(C, A, de(W), V);
          }
          if (Oe(R))
            return M(C, A, R, V);
          if (Er(R))
            return q(C, A, R, V);
          uc(C, R);
        }
        return typeof R == "string" && R !== "" || typeof R == "number" ? o(oe(C, A, "" + R, V)) : (typeof R == "function" && lc(C), n(C, A));
      }
      return Me;
    }
    var zo = Rg(!0), Tg = Rg(!1);
    function Jw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var n = t.child, r = qi(n, n.pendingProps);
        for (t.child = r, r.return = t; n.sibling !== null; )
          n = n.sibling, r = r.sibling = qi(n, n.pendingProps), r.return = t;
        r.sibling = null;
      }
    }
    function Zw(e, t) {
      for (var n = e.child; n !== null; )
        VO(n, t), n = n.sibling;
    }
    var Ov = Ia(null), Mv;
    Mv = {};
    var sc = null, jo = null, Av = null, cc = !1;
    function fc() {
      sc = null, jo = null, Av = null, cc = !1;
    }
    function xg() {
      cc = !0;
    }
    function _g() {
      cc = !1;
    }
    function wg(e, t, n) {
      pn(Ov, t._currentValue, e), t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Mv && d("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Mv;
    }
    function kv(e, t) {
      var n = Ov.current;
      vn(Ov, t), e._currentValue = n;
    }
    function Lv(e, t, n) {
      for (var r = e; r !== null; ) {
        var a = r.alternate;
        if (Eo(r.childLanes, t) ? a !== null && !Eo(a.childLanes, t) && (a.childLanes = xe(a.childLanes, t)) : (r.childLanes = xe(r.childLanes, t), a !== null && (a.childLanes = xe(a.childLanes, t))), r === n)
          break;
        r = r.return;
      }
      r !== n && d("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function eD(e, t, n) {
      tD(e, t, n);
    }
    function tD(e, t, n) {
      var r = e.child;
      for (r !== null && (r.return = e); r !== null; ) {
        var a = void 0, i = r.dependencies;
        if (i !== null) {
          a = r.child;
          for (var o = i.firstContext; o !== null; ) {
            if (o.context === t) {
              if (r.tag === k) {
                var l = Lu(n), c = Ra(Je, l);
                c.tag = vc;
                var v = r.updateQueue;
                if (v !== null) {
                  var h = v.shared, S = h.pending;
                  S === null ? c.next = c : (c.next = S.next, S.next = c), h.pending = c;
                }
              }
              r.lanes = xe(r.lanes, n);
              var b = r.alternate;
              b !== null && (b.lanes = xe(b.lanes, n)), Lv(r.return, n, e), i.lanes = xe(i.lanes, n);
              break;
            }
            o = o.next;
          }
        } else if (r.tag === G)
          a = r.type === e.type ? null : r.child;
        else if (r.tag === gt) {
          var x = r.return;
          if (x === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          x.lanes = xe(x.lanes, n);
          var w = x.alternate;
          w !== null && (w.lanes = xe(w.lanes, n)), Lv(x, n, e), a = r.sibling;
        } else
          a = r.child;
        if (a !== null)
          a.return = r;
        else
          for (a = r; a !== null; ) {
            if (a === e) {
              a = null;
              break;
            }
            var M = a.sibling;
            if (M !== null) {
              M.return = a.return, a = M;
              break;
            }
            a = a.return;
          }
        r = a;
      }
    }
    function Fo(e, t) {
      sc = e, jo = null, Av = null;
      var n = e.dependencies;
      if (n !== null) {
        var r = n.firstContext;
        r !== null && (Gn(n.lanes, t) && Ml(), n.firstContext = null);
      }
    }
    function Ct(e) {
      cc && d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Av !== e) {
        var n = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (jo === null) {
          if (sc === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          jo = n, sc.dependencies = {
            lanes: F,
            firstContext: n
          };
        } else
          jo = jo.next = n;
      }
      return t;
    }
    var Fi = null;
    function Nv(e) {
      Fi === null ? Fi = [e] : Fi.push(e);
    }
    function nD() {
      if (Fi !== null) {
        for (var e = 0; e < Fi.length; e++) {
          var t = Fi[e], n = t.interleaved;
          if (n !== null) {
            t.interleaved = null;
            var r = n.next, a = t.pending;
            if (a !== null) {
              var i = a.next;
              a.next = r, n.next = i;
            }
            t.pending = n;
          }
        }
        Fi = null;
      }
    }
    function Dg(e, t, n, r) {
      var a = t.interleaved;
      return a === null ? (n.next = n, Nv(t)) : (n.next = a.next, a.next = n), t.interleaved = n, dc(e, r);
    }
    function rD(e, t, n, r) {
      var a = t.interleaved;
      a === null ? (n.next = n, Nv(t)) : (n.next = a.next, a.next = n), t.interleaved = n;
    }
    function aD(e, t, n, r) {
      var a = t.interleaved;
      return a === null ? (n.next = n, Nv(t)) : (n.next = a.next, a.next = n), t.interleaved = n, dc(e, r);
    }
    function zn(e, t) {
      return dc(e, t);
    }
    var iD = dc;
    function dc(e, t) {
      e.lanes = xe(e.lanes, t);
      var n = e.alternate;
      n !== null && (n.lanes = xe(n.lanes, t)), n === null && (e.flags & (Et | va)) !== fe && TS(e);
      for (var r = e, a = e.return; a !== null; )
        a.childLanes = xe(a.childLanes, t), n = a.alternate, n !== null ? n.childLanes = xe(n.childLanes, t) : (a.flags & (Et | va)) !== fe && TS(e), r = a, a = a.return;
      if (r.tag === U) {
        var i = r.stateNode;
        return i;
      } else
        return null;
    }
    var Og = 0, Mg = 1, vc = 2, Uv = 3, pc = !1, zv, hc;
    zv = !1, hc = null;
    function jv(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: F
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function Ag(e, t) {
      var n = t.updateQueue, r = e.updateQueue;
      if (n === r) {
        var a = {
          baseState: r.baseState,
          firstBaseUpdate: r.firstBaseUpdate,
          lastBaseUpdate: r.lastBaseUpdate,
          shared: r.shared,
          effects: r.effects
        };
        t.updateQueue = a;
      }
    }
    function Ra(e, t) {
      var n = {
        eventTime: e,
        lane: t,
        tag: Og,
        payload: null,
        callback: null,
        next: null
      };
      return n;
    }
    function Qa(e, t, n) {
      var r = e.updateQueue;
      if (r === null)
        return null;
      var a = r.shared;
      if (hc === a && !zv && (d("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), zv = !0), rO()) {
        var i = a.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), a.pending = t, iD(e, n);
      } else
        return aD(e, a, t, n);
    }
    function mc(e, t, n) {
      var r = t.updateQueue;
      if (r !== null) {
        var a = r.shared;
        if (Ym(n)) {
          var i = a.lanes;
          i = qm(i, e.pendingLanes);
          var o = xe(i, n);
          a.lanes = o, Od(e, o);
        }
      }
    }
    function Fv(e, t) {
      var n = e.updateQueue, r = e.alternate;
      if (r !== null) {
        var a = r.updateQueue;
        if (n === a) {
          var i = null, o = null, l = n.firstBaseUpdate;
          if (l !== null) {
            var c = l;
            do {
              var v = {
                eventTime: c.eventTime,
                lane: c.lane,
                tag: c.tag,
                payload: c.payload,
                callback: c.callback,
                next: null
              };
              o === null ? i = o = v : (o.next = v, o = v), c = c.next;
            } while (c !== null);
            o === null ? i = o = t : (o.next = t, o = t);
          } else
            i = o = t;
          n = {
            baseState: a.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: a.shared,
            effects: a.effects
          }, e.updateQueue = n;
          return;
        }
      }
      var h = n.lastBaseUpdate;
      h === null ? n.firstBaseUpdate = t : h.next = t, n.lastBaseUpdate = t;
    }
    function oD(e, t, n, r, a, i) {
      switch (n.tag) {
        case Mg: {
          var o = n.payload;
          if (typeof o == "function") {
            xg();
            var l = o.call(i, r, a);
            {
              if (e.mode & pt) {
                Pt(!0);
                try {
                  o.call(i, r, a);
                } finally {
                  Pt(!1);
                }
              }
              _g();
            }
            return l;
          }
          return o;
        }
        case Uv:
          e.flags = e.flags & ~xn | Be;
        // Intentional fallthrough
        case Og: {
          var c = n.payload, v;
          if (typeof c == "function") {
            xg(), v = c.call(i, r, a);
            {
              if (e.mode & pt) {
                Pt(!0);
                try {
                  c.call(i, r, a);
                } finally {
                  Pt(!1);
                }
              }
              _g();
            }
          } else
            v = c;
          return v == null ? r : De({}, r, v);
        }
        case vc:
          return pc = !0, r;
      }
      return r;
    }
    function yc(e, t, n, r) {
      var a = e.updateQueue;
      pc = !1, hc = a.shared;
      var i = a.firstBaseUpdate, o = a.lastBaseUpdate, l = a.shared.pending;
      if (l !== null) {
        a.shared.pending = null;
        var c = l, v = c.next;
        c.next = null, o === null ? i = v : o.next = v, o = c;
        var h = e.alternate;
        if (h !== null) {
          var S = h.updateQueue, b = S.lastBaseUpdate;
          b !== o && (b === null ? S.firstBaseUpdate = v : b.next = v, S.lastBaseUpdate = c);
        }
      }
      if (i !== null) {
        var x = a.baseState, w = F, M = null, q = null, oe = null, re = i;
        do {
          var Ue = re.lane, Me = re.eventTime;
          if (Eo(r, Ue)) {
            if (oe !== null) {
              var A = {
                eventTime: Me,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: $t,
                tag: re.tag,
                payload: re.payload,
                callback: re.callback,
                next: null
              };
              oe = oe.next = A;
            }
            x = oD(e, a, re, x, t, n);
            var R = re.callback;
            if (R !== null && // If the update was already committed, we should not queue its
            // callback again.
            re.lane !== $t) {
              e.flags |= xm;
              var V = a.effects;
              V === null ? a.effects = [re] : V.push(re);
            }
          } else {
            var C = {
              eventTime: Me,
              lane: Ue,
              tag: re.tag,
              payload: re.payload,
              callback: re.callback,
              next: null
            };
            oe === null ? (q = oe = C, M = x) : oe = oe.next = C, w = xe(w, Ue);
          }
          if (re = re.next, re === null) {
            if (l = a.shared.pending, l === null)
              break;
            var X = l, W = X.next;
            X.next = null, re = W, a.lastBaseUpdate = X, a.shared.pending = null;
          }
        } while (!0);
        oe === null && (M = x), a.baseState = M, a.firstBaseUpdate = q, a.lastBaseUpdate = oe;
        var de = a.shared.interleaved;
        if (de !== null) {
          var be = de;
          do
            w = xe(w, be.lane), be = be.next;
          while (be !== de);
        } else i === null && (a.shared.lanes = F);
        Pl(w), e.lanes = w, e.memoizedState = x;
      }
      hc = null;
    }
    function uD(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function kg() {
      pc = !1;
    }
    function gc() {
      return pc;
    }
    function Lg(e, t, n) {
      var r = t.effects;
      if (t.effects = null, r !== null)
        for (var a = 0; a < r.length; a++) {
          var i = r[a], o = i.callback;
          o !== null && (i.callback = null, uD(o, n));
        }
    }
    var ml = {}, Ka = Ia(ml), yl = Ia(ml), bc = Ia(ml);
    function Sc(e) {
      if (e === ml)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function Ng() {
      var e = Sc(bc.current);
      return e;
    }
    function Hv(e, t) {
      pn(bc, t, e), pn(yl, e, e), pn(Ka, ml, e);
      var n = T_(t);
      vn(Ka, e), pn(Ka, n, e);
    }
    function Ho(e) {
      vn(Ka, e), vn(yl, e), vn(bc, e);
    }
    function Vv() {
      var e = Sc(Ka.current);
      return e;
    }
    function Ug(e) {
      Sc(bc.current);
      var t = Sc(Ka.current), n = x_(t, e.type);
      t !== n && (pn(yl, e, e), pn(Ka, n, e));
    }
    function Bv(e) {
      yl.current === e && (vn(Ka, e), vn(yl, e));
    }
    var lD = 0, zg = 1, jg = 1, gl = 2, Dr = Ia(lD);
    function Pv(e, t) {
      return (e & t) !== 0;
    }
    function Vo(e) {
      return e & zg;
    }
    function $v(e, t) {
      return e & zg | t;
    }
    function sD(e, t) {
      return e | t;
    }
    function Xa(e, t) {
      pn(Dr, t, e);
    }
    function Bo(e) {
      vn(Dr, e);
    }
    function cD(e, t) {
      var n = e.memoizedState;
      return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Ec(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Z) {
          var n = t.memoizedState;
          if (n !== null) {
            var r = n.dehydrated;
            if (r === null || eg(r) || uv(r))
              return t;
          }
        } else if (t.tag === Rt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var a = (t.flags & Be) !== fe;
          if (a)
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
    var jn = (
      /*   */
      0
    ), Dt = (
      /* */
      1
    ), qr = (
      /*  */
      2
    ), Ot = (
      /*    */
      4
    ), en = (
      /*   */
      8
    ), Yv = [];
    function Iv() {
      for (var e = 0; e < Yv.length; e++) {
        var t = Yv[e];
        t._workInProgressVersionPrimary = null;
      }
      Yv.length = 0;
    }
    function fD(e, t) {
      var n = t._getVersion, r = n(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, r] : e.mutableSourceEagerHydrationData.push(t, r);
    }
    var K = p.ReactCurrentDispatcher, bl = p.ReactCurrentBatchConfig, qv, Po;
    qv = /* @__PURE__ */ new Set();
    var Hi = F, qe = null, Mt = null, At = null, Cc = !1, Sl = !1, El = 0, dD = 0, vD = 25, N = null, cr = null, Ja = -1, Gv = !1;
    function Pe() {
      {
        var e = N;
        cr === null ? cr = [e] : cr.push(e);
      }
    }
    function $() {
      {
        var e = N;
        cr !== null && (Ja++, cr[Ja] !== e && pD(e));
      }
    }
    function $o(e) {
      e != null && !Oe(e) && d("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", N, typeof e);
    }
    function pD(e) {
      {
        var t = Se(qe);
        if (!qv.has(t) && (qv.add(t), cr !== null)) {
          for (var n = "", r = 30, a = 0; a <= Ja; a++) {
            for (var i = cr[a], o = a === Ja ? e : i, l = a + 1 + ". " + i; l.length < r; )
              l += " ";
            l += o + `
`, n += l;
          }
          d(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, n);
        }
      }
    }
    function hn() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Wv(e, t) {
      if (Gv)
        return !1;
      if (t === null)
        return d("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", N), !1;
      e.length !== t.length && d(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, N, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Kn(e[n], t[n]))
          return !1;
      return !0;
    }
    function Yo(e, t, n, r, a, i) {
      Hi = i, qe = t, cr = e !== null ? e._debugHookTypes : null, Ja = -1, Gv = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = F, e !== null && e.memoizedState !== null ? K.current = ib : cr !== null ? K.current = ab : K.current = rb;
      var o = n(r, a);
      if (Sl) {
        var l = 0;
        do {
          if (Sl = !1, El = 0, l >= vD)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          l += 1, Gv = !1, Mt = null, At = null, t.updateQueue = null, Ja = -1, K.current = ob, o = n(r, a);
        } while (Sl);
      }
      K.current = Uc, t._debugHookTypes = cr;
      var c = Mt !== null && Mt.next !== null;
      if (Hi = F, qe = null, Mt = null, At = null, N = null, cr = null, Ja = -1, e !== null && (e.flags & pa) !== (t.flags & pa) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Le) !== se && d("Internal React error: Expected static flag was missing. Please notify the React team."), Cc = !1, c)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return o;
    }
    function Io() {
      var e = El !== 0;
      return El = 0, e;
    }
    function Fg(e, t, n) {
      t.updateQueue = e.updateQueue, (t.mode & Pr) !== se ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Rs(e.lanes, n);
    }
    function Hg() {
      if (K.current = Uc, Cc) {
        for (var e = qe.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Cc = !1;
      }
      Hi = F, qe = null, Mt = null, At = null, cr = null, Ja = -1, N = null, Jg = !1, Sl = !1, El = 0;
    }
    function Gr() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return At === null ? qe.memoizedState = At = e : At = At.next = e, At;
    }
    function fr() {
      var e;
      if (Mt === null) {
        var t = qe.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Mt.next;
      var n;
      if (At === null ? n = qe.memoizedState : n = At.next, n !== null)
        At = n, n = At.next, Mt = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Mt = e;
        var r = {
          memoizedState: Mt.memoizedState,
          baseState: Mt.baseState,
          baseQueue: Mt.baseQueue,
          queue: Mt.queue,
          next: null
        };
        At === null ? qe.memoizedState = At = r : At = At.next = r;
      }
      return At;
    }
    function Vg() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Qv(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Kv(e, t, n) {
      var r = Gr(), a;
      n !== void 0 ? a = n(t) : a = t, r.memoizedState = r.baseState = a;
      var i = {
        pending: null,
        interleaved: null,
        lanes: F,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      };
      r.queue = i;
      var o = i.dispatch = gD.bind(null, qe, i);
      return [r.memoizedState, o];
    }
    function Xv(e, t, n) {
      var r = fr(), a = r.queue;
      if (a === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      a.lastRenderedReducer = e;
      var i = Mt, o = i.baseQueue, l = a.pending;
      if (l !== null) {
        if (o !== null) {
          var c = o.next, v = l.next;
          o.next = v, l.next = c;
        }
        i.baseQueue !== o && d("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), i.baseQueue = o = l, a.pending = null;
      }
      if (o !== null) {
        var h = o.next, S = i.baseState, b = null, x = null, w = null, M = h;
        do {
          var q = M.lane;
          if (Eo(Hi, q)) {
            if (w !== null) {
              var re = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: $t,
                action: M.action,
                hasEagerState: M.hasEagerState,
                eagerState: M.eagerState,
                next: null
              };
              w = w.next = re;
            }
            if (M.hasEagerState)
              S = M.eagerState;
            else {
              var Ue = M.action;
              S = e(S, Ue);
            }
          } else {
            var oe = {
              lane: q,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            };
            w === null ? (x = w = oe, b = S) : w = w.next = oe, qe.lanes = xe(qe.lanes, q), Pl(q);
          }
          M = M.next;
        } while (M !== null && M !== h);
        w === null ? b = S : w.next = x, Kn(S, r.memoizedState) || Ml(), r.memoizedState = S, r.baseState = b, r.baseQueue = w, a.lastRenderedState = S;
      }
      var Me = a.interleaved;
      if (Me !== null) {
        var C = Me;
        do {
          var A = C.lane;
          qe.lanes = xe(qe.lanes, A), Pl(A), C = C.next;
        } while (C !== Me);
      } else o === null && (a.lanes = F);
      var R = a.dispatch;
      return [r.memoizedState, R];
    }
    function Jv(e, t, n) {
      var r = fr(), a = r.queue;
      if (a === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, l = r.memoizedState;
      if (o !== null) {
        a.pending = null;
        var c = o.next, v = c;
        do {
          var h = v.action;
          l = e(l, h), v = v.next;
        } while (v !== c);
        Kn(l, r.memoizedState) || Ml(), r.memoizedState = l, r.baseQueue === null && (r.baseState = l), a.lastRenderedState = l;
      }
      return [l, i];
    }
    function gk(e, t, n) {
    }
    function bk(e, t, n) {
    }
    function Zv(e, t, n) {
      var r = qe, a = Gr(), i, o = Zt();
      if (o) {
        if (n === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        i = n(), Po || i !== n() && (d("The result of getServerSnapshot should be cached to avoid an infinite loop"), Po = !0);
      } else {
        if (i = t(), !Po) {
          var l = t();
          Kn(i, l) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), Po = !0);
        }
        var c = ef();
        if (c === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Cs(c, Hi) || Bg(r, t, i);
      }
      a.memoizedState = i;
      var v = {
        value: i,
        getSnapshot: t
      };
      return a.queue = v, wc($g.bind(null, r, v, e), [e]), r.flags |= za, Cl(Dt | en, Pg.bind(null, r, v, i, t), void 0, null), i;
    }
    function Rc(e, t, n) {
      var r = qe, a = fr(), i = t();
      if (!Po) {
        var o = t();
        Kn(i, o) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), Po = !0);
      }
      var l = a.memoizedState, c = !Kn(l, i);
      c && (a.memoizedState = i, Ml());
      var v = a.queue;
      if (Tl($g.bind(null, r, v, e), [e]), v.getSnapshot !== t || c || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      At !== null && At.memoizedState.tag & Dt) {
        r.flags |= za, Cl(Dt | en, Pg.bind(null, r, v, i, t), void 0, null);
        var h = ef();
        if (h === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Cs(h, Hi) || Bg(r, t, i);
      }
      return i;
    }
    function Bg(e, t, n) {
      e.flags |= Qf;
      var r = {
        getSnapshot: t,
        value: n
      }, a = qe.updateQueue;
      if (a === null)
        a = Vg(), qe.updateQueue = a, a.stores = [r];
      else {
        var i = a.stores;
        i === null ? a.stores = [r] : i.push(r);
      }
    }
    function Pg(e, t, n, r) {
      t.value = n, t.getSnapshot = r, Yg(t) && Ig(e);
    }
    function $g(e, t, n) {
      var r = function() {
        Yg(t) && Ig(e);
      };
      return n(r);
    }
    function Yg(e) {
      var t = e.getSnapshot, n = e.value;
      try {
        var r = t();
        return !Kn(n, r);
      } catch {
        return !0;
      }
    }
    function Ig(e) {
      var t = zn(e, me);
      t !== null && Ut(t, e, me, Je);
    }
    function Tc(e) {
      var t = Gr();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        interleaved: null,
        lanes: F,
        dispatch: null,
        lastRenderedReducer: Qv,
        lastRenderedState: e
      };
      t.queue = n;
      var r = n.dispatch = bD.bind(null, qe, n);
      return [t.memoizedState, r];
    }
    function ep(e) {
      return Xv(Qv);
    }
    function tp(e) {
      return Jv(Qv);
    }
    function Cl(e, t, n, r) {
      var a = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        // Circular
        next: null
      }, i = qe.updateQueue;
      if (i === null)
        i = Vg(), qe.updateQueue = i, i.lastEffect = a.next = a;
      else {
        var o = i.lastEffect;
        if (o === null)
          i.lastEffect = a.next = a;
        else {
          var l = o.next;
          o.next = a, a.next = l, i.lastEffect = a;
        }
      }
      return a;
    }
    function np(e) {
      var t = Gr();
      {
        var n = {
          current: e
        };
        return t.memoizedState = n, n;
      }
    }
    function xc(e) {
      var t = fr();
      return t.memoizedState;
    }
    function Rl(e, t, n, r) {
      var a = Gr(), i = r === void 0 ? null : r;
      qe.flags |= e, a.memoizedState = Cl(Dt | t, n, void 0, i);
    }
    function _c(e, t, n, r) {
      var a = fr(), i = r === void 0 ? null : r, o = void 0;
      if (Mt !== null) {
        var l = Mt.memoizedState;
        if (o = l.destroy, i !== null) {
          var c = l.deps;
          if (Wv(i, c)) {
            a.memoizedState = Cl(t, n, o, i);
            return;
          }
        }
      }
      qe.flags |= e, a.memoizedState = Cl(Dt | t, n, o, i);
    }
    function wc(e, t) {
      return (qe.mode & Pr) !== se ? Rl(Zf | za | Jf, en, e, t) : Rl(za | Jf, en, e, t);
    }
    function Tl(e, t) {
      return _c(za, en, e, t);
    }
    function rp(e, t) {
      return Rl(Ve, qr, e, t);
    }
    function Dc(e, t) {
      return _c(Ve, qr, e, t);
    }
    function ap(e, t) {
      var n = Ve;
      return n |= Ci, (qe.mode & Pr) !== se && (n |= ja), Rl(n, Ot, e, t);
    }
    function Oc(e, t) {
      return _c(Ve, Ot, e, t);
    }
    function qg(e, t) {
      if (typeof t == "function") {
        var n = t, r = e();
        return n(r), function() {
          n(null);
        };
      } else if (t != null) {
        var a = t;
        a.hasOwnProperty("current") || d("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(a).join(", ") + "}");
        var i = e();
        return a.current = i, function() {
          a.current = null;
        };
      }
    }
    function ip(e, t, n) {
      typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var r = n != null ? n.concat([e]) : null, a = Ve;
      return a |= Ci, (qe.mode & Pr) !== se && (a |= ja), Rl(a, Ot, qg.bind(null, t, e), r);
    }
    function Mc(e, t, n) {
      typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var r = n != null ? n.concat([e]) : null;
      return _c(Ve, Ot, qg.bind(null, t, e), r);
    }
    function hD(e, t) {
    }
    var Ac = hD;
    function op(e, t) {
      var n = Gr(), r = t === void 0 ? null : t;
      return n.memoizedState = [e, r], e;
    }
    function kc(e, t) {
      var n = fr(), r = t === void 0 ? null : t, a = n.memoizedState;
      if (a !== null && r !== null) {
        var i = a[1];
        if (Wv(r, i))
          return a[0];
      }
      return n.memoizedState = [e, r], e;
    }
    function up(e, t) {
      var n = Gr(), r = t === void 0 ? null : t, a = e();
      return n.memoizedState = [a, r], a;
    }
    function Lc(e, t) {
      var n = fr(), r = t === void 0 ? null : t, a = n.memoizedState;
      if (a !== null && r !== null) {
        var i = a[1];
        if (Wv(r, i))
          return a[0];
      }
      var o = e();
      return n.memoizedState = [o, r], o;
    }
    function lp(e) {
      var t = Gr();
      return t.memoizedState = e, e;
    }
    function Gg(e) {
      var t = fr(), n = Mt, r = n.memoizedState;
      return Qg(t, r, e);
    }
    function Wg(e) {
      var t = fr();
      if (Mt === null)
        return t.memoizedState = e, e;
      var n = Mt.memoizedState;
      return Qg(t, n, e);
    }
    function Qg(e, t, n) {
      var r = !eT(Hi);
      if (r) {
        if (!Kn(n, t)) {
          var a = Im();
          qe.lanes = xe(qe.lanes, a), Pl(a), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Ml()), e.memoizedState = n, n;
    }
    function mD(e, t, n) {
      var r = Tr();
      Yt(sT(r, ma)), e(!0);
      var a = bl.transition;
      bl.transition = {};
      var i = bl.transition;
      bl.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Yt(r), bl.transition = a, a === null && i._updatedFibers) {
          var o = i._updatedFibers.size;
          o > 10 && T("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), i._updatedFibers.clear();
        }
      }
    }
    function sp() {
      var e = Tc(!1), t = e[0], n = e[1], r = mD.bind(null, n), a = Gr();
      return a.memoizedState = r, [t, r];
    }
    function Kg() {
      var e = ep(), t = e[0], n = fr(), r = n.memoizedState;
      return [t, r];
    }
    function Xg() {
      var e = tp(), t = e[0], n = fr(), r = n.memoizedState;
      return [t, r];
    }
    var Jg = !1;
    function yD() {
      return Jg;
    }
    function cp() {
      var e = Gr(), t = ef(), n = t.identifierPrefix, r;
      if (Zt()) {
        var a = Nw();
        r = ":" + n + "R" + a;
        var i = El++;
        i > 0 && (r += "H" + i.toString(32)), r += ":";
      } else {
        var o = dD++;
        r = ":" + n + "r" + o.toString(32) + ":";
      }
      return e.memoizedState = r, r;
    }
    function Nc() {
      var e = fr(), t = e.memoizedState;
      return t;
    }
    function gD(e, t, n) {
      typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var r = ri(e), a = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Zg(e))
        eb(t, a);
      else {
        var i = Dg(e, t, a, r);
        if (i !== null) {
          var o = Dn();
          Ut(i, e, r, o), tb(i, t, r);
        }
      }
      nb(e, r);
    }
    function bD(e, t, n) {
      typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var r = ri(e), a = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Zg(e))
        eb(t, a);
      else {
        var i = e.alternate;
        if (e.lanes === F && (i === null || i.lanes === F)) {
          var o = t.lastRenderedReducer;
          if (o !== null) {
            var l;
            l = K.current, K.current = Or;
            try {
              var c = t.lastRenderedState, v = o(c, n);
              if (a.hasEagerState = !0, a.eagerState = v, Kn(v, c)) {
                rD(e, t, a, r);
                return;
              }
            } catch {
            } finally {
              K.current = l;
            }
          }
        }
        var h = Dg(e, t, a, r);
        if (h !== null) {
          var S = Dn();
          Ut(h, e, r, S), tb(h, t, r);
        }
      }
      nb(e, r);
    }
    function Zg(e) {
      var t = e.alternate;
      return e === qe || t !== null && t === qe;
    }
    function eb(e, t) {
      Sl = Cc = !0;
      var n = e.pending;
      n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function tb(e, t, n) {
      if (Ym(n)) {
        var r = t.lanes;
        r = qm(r, e.pendingLanes);
        var a = xe(r, n);
        t.lanes = a, Od(e, a);
      }
    }
    function nb(e, t, n) {
      ad(e, t);
    }
    var Uc = {
      readContext: Ct,
      useCallback: hn,
      useContext: hn,
      useEffect: hn,
      useImperativeHandle: hn,
      useInsertionEffect: hn,
      useLayoutEffect: hn,
      useMemo: hn,
      useReducer: hn,
      useRef: hn,
      useState: hn,
      useDebugValue: hn,
      useDeferredValue: hn,
      useTransition: hn,
      useMutableSource: hn,
      useSyncExternalStore: hn,
      useId: hn,
      unstable_isNewReconciler: ln
    }, rb = null, ab = null, ib = null, ob = null, Wr = null, Or = null, zc = null;
    {
      var fp = function() {
        d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ye = function() {
        d("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      rb = {
        readContext: function(e) {
          return Ct(e);
        },
        useCallback: function(e, t) {
          return N = "useCallback", Pe(), $o(t), op(e, t);
        },
        useContext: function(e) {
          return N = "useContext", Pe(), Ct(e);
        },
        useEffect: function(e, t) {
          return N = "useEffect", Pe(), $o(t), wc(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return N = "useImperativeHandle", Pe(), $o(n), ip(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return N = "useInsertionEffect", Pe(), $o(t), rp(e, t);
        },
        useLayoutEffect: function(e, t) {
          return N = "useLayoutEffect", Pe(), $o(t), ap(e, t);
        },
        useMemo: function(e, t) {
          N = "useMemo", Pe(), $o(t);
          var n = K.current;
          K.current = Wr;
          try {
            return up(e, t);
          } finally {
            K.current = n;
          }
        },
        useReducer: function(e, t, n) {
          N = "useReducer", Pe();
          var r = K.current;
          K.current = Wr;
          try {
            return Kv(e, t, n);
          } finally {
            K.current = r;
          }
        },
        useRef: function(e) {
          return N = "useRef", Pe(), np(e);
        },
        useState: function(e) {
          N = "useState", Pe();
          var t = K.current;
          K.current = Wr;
          try {
            return Tc(e);
          } finally {
            K.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return N = "useDebugValue", Pe(), void 0;
        },
        useDeferredValue: function(e) {
          return N = "useDeferredValue", Pe(), lp(e);
        },
        useTransition: function() {
          return N = "useTransition", Pe(), sp();
        },
        useMutableSource: function(e, t, n) {
          return N = "useMutableSource", Pe(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return N = "useSyncExternalStore", Pe(), Zv(e, t, n);
        },
        useId: function() {
          return N = "useId", Pe(), cp();
        },
        unstable_isNewReconciler: ln
      }, ab = {
        readContext: function(e) {
          return Ct(e);
        },
        useCallback: function(e, t) {
          return N = "useCallback", $(), op(e, t);
        },
        useContext: function(e) {
          return N = "useContext", $(), Ct(e);
        },
        useEffect: function(e, t) {
          return N = "useEffect", $(), wc(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return N = "useImperativeHandle", $(), ip(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return N = "useInsertionEffect", $(), rp(e, t);
        },
        useLayoutEffect: function(e, t) {
          return N = "useLayoutEffect", $(), ap(e, t);
        },
        useMemo: function(e, t) {
          N = "useMemo", $();
          var n = K.current;
          K.current = Wr;
          try {
            return up(e, t);
          } finally {
            K.current = n;
          }
        },
        useReducer: function(e, t, n) {
          N = "useReducer", $();
          var r = K.current;
          K.current = Wr;
          try {
            return Kv(e, t, n);
          } finally {
            K.current = r;
          }
        },
        useRef: function(e) {
          return N = "useRef", $(), np(e);
        },
        useState: function(e) {
          N = "useState", $();
          var t = K.current;
          K.current = Wr;
          try {
            return Tc(e);
          } finally {
            K.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return N = "useDebugValue", $(), void 0;
        },
        useDeferredValue: function(e) {
          return N = "useDeferredValue", $(), lp(e);
        },
        useTransition: function() {
          return N = "useTransition", $(), sp();
        },
        useMutableSource: function(e, t, n) {
          return N = "useMutableSource", $(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return N = "useSyncExternalStore", $(), Zv(e, t, n);
        },
        useId: function() {
          return N = "useId", $(), cp();
        },
        unstable_isNewReconciler: ln
      }, ib = {
        readContext: function(e) {
          return Ct(e);
        },
        useCallback: function(e, t) {
          return N = "useCallback", $(), kc(e, t);
        },
        useContext: function(e) {
          return N = "useContext", $(), Ct(e);
        },
        useEffect: function(e, t) {
          return N = "useEffect", $(), Tl(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return N = "useImperativeHandle", $(), Mc(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return N = "useInsertionEffect", $(), Dc(e, t);
        },
        useLayoutEffect: function(e, t) {
          return N = "useLayoutEffect", $(), Oc(e, t);
        },
        useMemo: function(e, t) {
          N = "useMemo", $();
          var n = K.current;
          K.current = Or;
          try {
            return Lc(e, t);
          } finally {
            K.current = n;
          }
        },
        useReducer: function(e, t, n) {
          N = "useReducer", $();
          var r = K.current;
          K.current = Or;
          try {
            return Xv(e, t, n);
          } finally {
            K.current = r;
          }
        },
        useRef: function(e) {
          return N = "useRef", $(), xc();
        },
        useState: function(e) {
          N = "useState", $();
          var t = K.current;
          K.current = Or;
          try {
            return ep(e);
          } finally {
            K.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return N = "useDebugValue", $(), Ac();
        },
        useDeferredValue: function(e) {
          return N = "useDeferredValue", $(), Gg(e);
        },
        useTransition: function() {
          return N = "useTransition", $(), Kg();
        },
        useMutableSource: function(e, t, n) {
          return N = "useMutableSource", $(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return N = "useSyncExternalStore", $(), Rc(e, t);
        },
        useId: function() {
          return N = "useId", $(), Nc();
        },
        unstable_isNewReconciler: ln
      }, ob = {
        readContext: function(e) {
          return Ct(e);
        },
        useCallback: function(e, t) {
          return N = "useCallback", $(), kc(e, t);
        },
        useContext: function(e) {
          return N = "useContext", $(), Ct(e);
        },
        useEffect: function(e, t) {
          return N = "useEffect", $(), Tl(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return N = "useImperativeHandle", $(), Mc(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return N = "useInsertionEffect", $(), Dc(e, t);
        },
        useLayoutEffect: function(e, t) {
          return N = "useLayoutEffect", $(), Oc(e, t);
        },
        useMemo: function(e, t) {
          N = "useMemo", $();
          var n = K.current;
          K.current = zc;
          try {
            return Lc(e, t);
          } finally {
            K.current = n;
          }
        },
        useReducer: function(e, t, n) {
          N = "useReducer", $();
          var r = K.current;
          K.current = zc;
          try {
            return Jv(e, t, n);
          } finally {
            K.current = r;
          }
        },
        useRef: function(e) {
          return N = "useRef", $(), xc();
        },
        useState: function(e) {
          N = "useState", $();
          var t = K.current;
          K.current = zc;
          try {
            return tp(e);
          } finally {
            K.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return N = "useDebugValue", $(), Ac();
        },
        useDeferredValue: function(e) {
          return N = "useDeferredValue", $(), Wg(e);
        },
        useTransition: function() {
          return N = "useTransition", $(), Xg();
        },
        useMutableSource: function(e, t, n) {
          return N = "useMutableSource", $(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return N = "useSyncExternalStore", $(), Rc(e, t);
        },
        useId: function() {
          return N = "useId", $(), Nc();
        },
        unstable_isNewReconciler: ln
      }, Wr = {
        readContext: function(e) {
          return fp(), Ct(e);
        },
        useCallback: function(e, t) {
          return N = "useCallback", ye(), Pe(), op(e, t);
        },
        useContext: function(e) {
          return N = "useContext", ye(), Pe(), Ct(e);
        },
        useEffect: function(e, t) {
          return N = "useEffect", ye(), Pe(), wc(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return N = "useImperativeHandle", ye(), Pe(), ip(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return N = "useInsertionEffect", ye(), Pe(), rp(e, t);
        },
        useLayoutEffect: function(e, t) {
          return N = "useLayoutEffect", ye(), Pe(), ap(e, t);
        },
        useMemo: function(e, t) {
          N = "useMemo", ye(), Pe();
          var n = K.current;
          K.current = Wr;
          try {
            return up(e, t);
          } finally {
            K.current = n;
          }
        },
        useReducer: function(e, t, n) {
          N = "useReducer", ye(), Pe();
          var r = K.current;
          K.current = Wr;
          try {
            return Kv(e, t, n);
          } finally {
            K.current = r;
          }
        },
        useRef: function(e) {
          return N = "useRef", ye(), Pe(), np(e);
        },
        useState: function(e) {
          N = "useState", ye(), Pe();
          var t = K.current;
          K.current = Wr;
          try {
            return Tc(e);
          } finally {
            K.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return N = "useDebugValue", ye(), Pe(), void 0;
        },
        useDeferredValue: function(e) {
          return N = "useDeferredValue", ye(), Pe(), lp(e);
        },
        useTransition: function() {
          return N = "useTransition", ye(), Pe(), sp();
        },
        useMutableSource: function(e, t, n) {
          return N = "useMutableSource", ye(), Pe(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return N = "useSyncExternalStore", ye(), Pe(), Zv(e, t, n);
        },
        useId: function() {
          return N = "useId", ye(), Pe(), cp();
        },
        unstable_isNewReconciler: ln
      }, Or = {
        readContext: function(e) {
          return fp(), Ct(e);
        },
        useCallback: function(e, t) {
          return N = "useCallback", ye(), $(), kc(e, t);
        },
        useContext: function(e) {
          return N = "useContext", ye(), $(), Ct(e);
        },
        useEffect: function(e, t) {
          return N = "useEffect", ye(), $(), Tl(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return N = "useImperativeHandle", ye(), $(), Mc(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return N = "useInsertionEffect", ye(), $(), Dc(e, t);
        },
        useLayoutEffect: function(e, t) {
          return N = "useLayoutEffect", ye(), $(), Oc(e, t);
        },
        useMemo: function(e, t) {
          N = "useMemo", ye(), $();
          var n = K.current;
          K.current = Or;
          try {
            return Lc(e, t);
          } finally {
            K.current = n;
          }
        },
        useReducer: function(e, t, n) {
          N = "useReducer", ye(), $();
          var r = K.current;
          K.current = Or;
          try {
            return Xv(e, t, n);
          } finally {
            K.current = r;
          }
        },
        useRef: function(e) {
          return N = "useRef", ye(), $(), xc();
        },
        useState: function(e) {
          N = "useState", ye(), $();
          var t = K.current;
          K.current = Or;
          try {
            return ep(e);
          } finally {
            K.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return N = "useDebugValue", ye(), $(), Ac();
        },
        useDeferredValue: function(e) {
          return N = "useDeferredValue", ye(), $(), Gg(e);
        },
        useTransition: function() {
          return N = "useTransition", ye(), $(), Kg();
        },
        useMutableSource: function(e, t, n) {
          return N = "useMutableSource", ye(), $(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return N = "useSyncExternalStore", ye(), $(), Rc(e, t);
        },
        useId: function() {
          return N = "useId", ye(), $(), Nc();
        },
        unstable_isNewReconciler: ln
      }, zc = {
        readContext: function(e) {
          return fp(), Ct(e);
        },
        useCallback: function(e, t) {
          return N = "useCallback", ye(), $(), kc(e, t);
        },
        useContext: function(e) {
          return N = "useContext", ye(), $(), Ct(e);
        },
        useEffect: function(e, t) {
          return N = "useEffect", ye(), $(), Tl(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return N = "useImperativeHandle", ye(), $(), Mc(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return N = "useInsertionEffect", ye(), $(), Dc(e, t);
        },
        useLayoutEffect: function(e, t) {
          return N = "useLayoutEffect", ye(), $(), Oc(e, t);
        },
        useMemo: function(e, t) {
          N = "useMemo", ye(), $();
          var n = K.current;
          K.current = Or;
          try {
            return Lc(e, t);
          } finally {
            K.current = n;
          }
        },
        useReducer: function(e, t, n) {
          N = "useReducer", ye(), $();
          var r = K.current;
          K.current = Or;
          try {
            return Jv(e, t, n);
          } finally {
            K.current = r;
          }
        },
        useRef: function(e) {
          return N = "useRef", ye(), $(), xc();
        },
        useState: function(e) {
          N = "useState", ye(), $();
          var t = K.current;
          K.current = Or;
          try {
            return tp(e);
          } finally {
            K.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return N = "useDebugValue", ye(), $(), Ac();
        },
        useDeferredValue: function(e) {
          return N = "useDeferredValue", ye(), $(), Wg(e);
        },
        useTransition: function() {
          return N = "useTransition", ye(), $(), Xg();
        },
        useMutableSource: function(e, t, n) {
          return N = "useMutableSource", ye(), $(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return N = "useSyncExternalStore", ye(), $(), Rc(e, t);
        },
        useId: function() {
          return N = "useId", ye(), $(), Nc();
        },
        unstable_isNewReconciler: ln
      };
    }
    var Za = s.unstable_now, ub = 0, jc = -1, xl = -1, Fc = -1, dp = !1, Hc = !1;
    function lb() {
      return dp;
    }
    function SD() {
      Hc = !0;
    }
    function ED() {
      dp = !1, Hc = !1;
    }
    function CD() {
      dp = Hc, Hc = !1;
    }
    function sb() {
      return ub;
    }
    function cb() {
      ub = Za();
    }
    function vp(e) {
      xl = Za(), e.actualStartTime < 0 && (e.actualStartTime = Za());
    }
    function fb(e) {
      xl = -1;
    }
    function Vc(e, t) {
      if (xl >= 0) {
        var n = Za() - xl;
        e.actualDuration += n, t && (e.selfBaseDuration = n), xl = -1;
      }
    }
    function Qr(e) {
      if (jc >= 0) {
        var t = Za() - jc;
        jc = -1;
        for (var n = e.return; n !== null; ) {
          switch (n.tag) {
            case U:
              var r = n.stateNode;
              r.effectDuration += t;
              return;
            case pe:
              var a = n.stateNode;
              a.effectDuration += t;
              return;
          }
          n = n.return;
        }
      }
    }
    function pp(e) {
      if (Fc >= 0) {
        var t = Za() - Fc;
        Fc = -1;
        for (var n = e.return; n !== null; ) {
          switch (n.tag) {
            case U:
              var r = n.stateNode;
              r !== null && (r.passiveEffectDuration += t);
              return;
            case pe:
              var a = n.stateNode;
              a !== null && (a.passiveEffectDuration += t);
              return;
          }
          n = n.return;
        }
      }
    }
    function Kr() {
      jc = Za();
    }
    function hp() {
      Fc = Za();
    }
    function mp(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Mr(e, t) {
      if (e && e.defaultProps) {
        var n = De({}, t), r = e.defaultProps;
        for (var a in r)
          n[a] === void 0 && (n[a] = r[a]);
        return n;
      }
      return t;
    }
    var yp = {}, gp, bp, Sp, Ep, Cp, db, Bc, Rp, Tp, xp, _l;
    {
      gp = /* @__PURE__ */ new Set(), bp = /* @__PURE__ */ new Set(), Sp = /* @__PURE__ */ new Set(), Ep = /* @__PURE__ */ new Set(), Rp = /* @__PURE__ */ new Set(), Cp = /* @__PURE__ */ new Set(), Tp = /* @__PURE__ */ new Set(), xp = /* @__PURE__ */ new Set(), _l = /* @__PURE__ */ new Set();
      var vb = /* @__PURE__ */ new Set();
      Bc = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var n = t + "_" + e;
          vb.has(n) || (vb.add(n), d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, db = function(e, t) {
        if (t === void 0) {
          var n = He(e) || "Component";
          Cp.has(n) || (Cp.add(n), d("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
        }
      }, Object.defineProperty(yp, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(yp);
    }
    function _p(e, t, n, r) {
      var a = e.memoizedState, i = n(r, a);
      {
        if (e.mode & pt) {
          Pt(!0);
          try {
            i = n(r, a);
          } finally {
            Pt(!1);
          }
        }
        db(t, i);
      }
      var o = i == null ? a : De({}, a, i);
      if (e.memoizedState = o, e.lanes === F) {
        var l = e.updateQueue;
        l.baseState = o;
      }
    }
    var wp = {
      isMounted: vR,
      enqueueSetState: function(e, t, n) {
        var r = fo(e), a = Dn(), i = ri(r), o = Ra(a, i);
        o.payload = t, n != null && (Bc(n, "setState"), o.callback = n);
        var l = Qa(r, o, i);
        l !== null && (Ut(l, r, i, a), mc(l, r, i)), ad(r, i);
      },
      enqueueReplaceState: function(e, t, n) {
        var r = fo(e), a = Dn(), i = ri(r), o = Ra(a, i);
        o.tag = Mg, o.payload = t, n != null && (Bc(n, "replaceState"), o.callback = n);
        var l = Qa(r, o, i);
        l !== null && (Ut(l, r, i, a), mc(l, r, i)), ad(r, i);
      },
      enqueueForceUpdate: function(e, t) {
        var n = fo(e), r = Dn(), a = ri(n), i = Ra(r, a);
        i.tag = vc, t != null && (Bc(t, "forceUpdate"), i.callback = t);
        var o = Qa(n, i, a);
        o !== null && (Ut(o, n, a, r), mc(o, n, a)), YR(n, a);
      }
    };
    function pb(e, t, n, r, a, i, o) {
      var l = e.stateNode;
      if (typeof l.shouldComponentUpdate == "function") {
        var c = l.shouldComponentUpdate(r, i, o);
        {
          if (e.mode & pt) {
            Pt(!0);
            try {
              c = l.shouldComponentUpdate(r, i, o);
            } finally {
              Pt(!1);
            }
          }
          c === void 0 && d("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", He(t) || "Component");
        }
        return c;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Wu(n, r) || !Wu(a, i) : !0;
    }
    function RD(e, t, n) {
      var r = e.stateNode;
      {
        var a = He(t) || "Component", i = r.render;
        i || (t.prototype && typeof t.prototype.render == "function" ? d("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", a) : d("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", a)), r.getInitialState && !r.getInitialState.isReactClassApproved && !r.state && d("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", a), r.getDefaultProps && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", a), r.propTypes && d("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", a), r.contextType && d("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", a), t.childContextTypes && !_l.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & pt) === se && (_l.add(t), d(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, a)), t.contextTypes && !_l.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & pt) === se && (_l.add(t), d(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, a)), r.contextTypes && d("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", a), t.contextType && t.contextTypes && !Tp.has(t) && (Tp.add(t), d("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", a)), typeof r.componentShouldUpdate == "function" && d("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", a), t.prototype && t.prototype.isPureReactComponent && typeof r.shouldComponentUpdate < "u" && d("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", He(t) || "A pure component"), typeof r.componentDidUnmount == "function" && d("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", a), typeof r.componentDidReceiveProps == "function" && d("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", a), typeof r.componentWillRecieveProps == "function" && d("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", a), typeof r.UNSAFE_componentWillRecieveProps == "function" && d("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", a);
        var o = r.props !== n;
        r.props !== void 0 && o && d("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", a, a), r.defaultProps && d("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", a, a), typeof r.getSnapshotBeforeUpdate == "function" && typeof r.componentDidUpdate != "function" && !Sp.has(t) && (Sp.add(t), d("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", He(t))), typeof r.getDerivedStateFromProps == "function" && d("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", a), typeof r.getDerivedStateFromError == "function" && d("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", a), typeof t.getSnapshotBeforeUpdate == "function" && d("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", a);
        var l = r.state;
        l && (typeof l != "object" || Oe(l)) && d("%s.state: must be set to an object or null", a), typeof r.getChildContext == "function" && typeof t.childContextTypes != "object" && d("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", a);
      }
    }
    function hb(e, t) {
      t.updater = wp, e.stateNode = t, sR(t, e), t._reactInternalInstance = yp;
    }
    function mb(e, t, n) {
      var r = !1, a = Xn, i = Xn, o = t.contextType;
      if ("contextType" in t) {
        var l = (
          // Allow null for conditional declaration
          o === null || o !== void 0 && o.$$typeof === I && o._context === void 0
        );
        if (!l && !xp.has(t)) {
          xp.add(t);
          var c = "";
          o === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof o != "object" ? c = " However, it is set to a " + typeof o + "." : o.$$typeof === H ? c = " Did you accidentally pass the Context.Provider instead?" : o._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(o).join(", ") + "}.", d("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", He(t) || "Component", c);
        }
      }
      if (typeof o == "object" && o !== null)
        i = Ct(o);
      else {
        a = Ao(e, t, !0);
        var v = t.contextTypes;
        r = v != null, i = r ? ko(e, a) : Xn;
      }
      var h = new t(n, i);
      if (e.mode & pt) {
        Pt(!0);
        try {
          h = new t(n, i);
        } finally {
          Pt(!1);
        }
      }
      var S = e.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null;
      hb(e, h);
      {
        if (typeof t.getDerivedStateFromProps == "function" && S === null) {
          var b = He(t) || "Component";
          bp.has(b) || (bp.add(b), d("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, h.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function") {
          var x = null, w = null, M = null;
          if (typeof h.componentWillMount == "function" && h.componentWillMount.__suppressDeprecationWarning !== !0 ? x = "componentWillMount" : typeof h.UNSAFE_componentWillMount == "function" && (x = "UNSAFE_componentWillMount"), typeof h.componentWillReceiveProps == "function" && h.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? w = "componentWillReceiveProps" : typeof h.UNSAFE_componentWillReceiveProps == "function" && (w = "UNSAFE_componentWillReceiveProps"), typeof h.componentWillUpdate == "function" && h.componentWillUpdate.__suppressDeprecationWarning !== !0 ? M = "componentWillUpdate" : typeof h.UNSAFE_componentWillUpdate == "function" && (M = "UNSAFE_componentWillUpdate"), x !== null || w !== null || M !== null) {
            var q = He(t) || "Component", oe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Ep.has(q) || (Ep.add(q), d(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, q, oe, x !== null ? `
  ` + x : "", w !== null ? `
  ` + w : "", M !== null ? `
  ` + M : ""));
          }
        }
      }
      return r && ig(e, a, i), h;
    }
    function TD(e, t) {
      var n = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (d("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Se(e) || "Component"), wp.enqueueReplaceState(t, t.state, null));
    }
    function yb(e, t, n, r) {
      var a = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== a) {
        {
          var i = Se(e) || "Component";
          gp.has(i) || (gp.add(i), d("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", i));
        }
        wp.enqueueReplaceState(t, t.state, null);
      }
    }
    function Dp(e, t, n, r) {
      RD(e, t, n);
      var a = e.stateNode;
      a.props = n, a.state = e.memoizedState, a.refs = {}, jv(e);
      var i = t.contextType;
      if (typeof i == "object" && i !== null)
        a.context = Ct(i);
      else {
        var o = Ao(e, t, !0);
        a.context = ko(e, o);
      }
      {
        if (a.state === n) {
          var l = He(t) || "Component";
          Rp.has(l) || (Rp.add(l), d("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", l));
        }
        e.mode & pt && wr.recordLegacyContextWarning(e, a), wr.recordUnsafeLifecycleWarnings(e, a);
      }
      a.state = e.memoizedState;
      var c = t.getDerivedStateFromProps;
      if (typeof c == "function" && (_p(e, t, c, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function") && (TD(e, a), yc(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function") {
        var v = Ve;
        v |= Ci, (e.mode & Pr) !== se && (v |= ja), e.flags |= v;
      }
    }
    function xD(e, t, n, r) {
      var a = e.stateNode, i = e.memoizedProps;
      a.props = i;
      var o = a.context, l = t.contextType, c = Xn;
      if (typeof l == "object" && l !== null)
        c = Ct(l);
      else {
        var v = Ao(e, t, !0);
        c = ko(e, v);
      }
      var h = t.getDerivedStateFromProps, S = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function";
      !S && (typeof a.UNSAFE_componentWillReceiveProps == "function" || typeof a.componentWillReceiveProps == "function") && (i !== n || o !== c) && yb(e, a, n, c), kg();
      var b = e.memoizedState, x = a.state = b;
      if (yc(e, n, a, r), x = e.memoizedState, i === n && b === x && !Js() && !gc()) {
        if (typeof a.componentDidMount == "function") {
          var w = Ve;
          w |= Ci, (e.mode & Pr) !== se && (w |= ja), e.flags |= w;
        }
        return !1;
      }
      typeof h == "function" && (_p(e, t, h, n), x = e.memoizedState);
      var M = gc() || pb(e, t, i, n, b, x, c);
      if (M) {
        if (!S && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function") && (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function") {
          var q = Ve;
          q |= Ci, (e.mode & Pr) !== se && (q |= ja), e.flags |= q;
        }
      } else {
        if (typeof a.componentDidMount == "function") {
          var oe = Ve;
          oe |= Ci, (e.mode & Pr) !== se && (oe |= ja), e.flags |= oe;
        }
        e.memoizedProps = n, e.memoizedState = x;
      }
      return a.props = n, a.state = x, a.context = c, M;
    }
    function _D(e, t, n, r, a) {
      var i = t.stateNode;
      Ag(e, t);
      var o = t.memoizedProps, l = t.type === t.elementType ? o : Mr(t.type, o);
      i.props = l;
      var c = t.pendingProps, v = i.context, h = n.contextType, S = Xn;
      if (typeof h == "object" && h !== null)
        S = Ct(h);
      else {
        var b = Ao(t, n, !0);
        S = ko(t, b);
      }
      var x = n.getDerivedStateFromProps, w = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      !w && (typeof i.UNSAFE_componentWillReceiveProps == "function" || typeof i.componentWillReceiveProps == "function") && (o !== c || v !== S) && yb(t, i, r, S), kg();
      var M = t.memoizedState, q = i.state = M;
      if (yc(t, r, i, a), q = t.memoizedState, o === c && M === q && !Js() && !gc() && !pr)
        return typeof i.componentDidUpdate == "function" && (o !== e.memoizedProps || M !== e.memoizedState) && (t.flags |= Ve), typeof i.getSnapshotBeforeUpdate == "function" && (o !== e.memoizedProps || M !== e.memoizedState) && (t.flags |= po), !1;
      typeof x == "function" && (_p(t, n, x, r), q = t.memoizedState);
      var oe = gc() || pb(t, n, l, r, M, q, S) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      pr;
      return oe ? (!w && (typeof i.UNSAFE_componentWillUpdate == "function" || typeof i.componentWillUpdate == "function") && (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, q, S), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, q, S)), typeof i.componentDidUpdate == "function" && (t.flags |= Ve), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= po)) : (typeof i.componentDidUpdate == "function" && (o !== e.memoizedProps || M !== e.memoizedState) && (t.flags |= Ve), typeof i.getSnapshotBeforeUpdate == "function" && (o !== e.memoizedProps || M !== e.memoizedState) && (t.flags |= po), t.memoizedProps = r, t.memoizedState = q), i.props = r, i.state = q, i.context = S, oe;
    }
    function Vi(e, t) {
      return {
        value: e,
        source: t,
        stack: pi(t),
        digest: null
      };
    }
    function Op(e, t, n) {
      return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
      };
    }
    function wD(e, t) {
      return !0;
    }
    function Mp(e, t) {
      try {
        var n = wD(e, t);
        if (n === !1)
          return;
        var r = t.value, a = t.source, i = t.stack, o = i !== null ? i : "";
        if (r != null && r._suppressLogging) {
          if (e.tag === k)
            return;
          console.error(r);
        }
        var l = a ? Se(a) : null, c = l ? "The above error occurred in the <" + l + "> component:" : "The above error occurred in one of your React components:", v;
        if (e.tag === U)
          v = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var h = Se(e) || "Anonymous";
          v = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + h + ".");
        }
        var S = c + `
` + o + `

` + ("" + v);
        console.error(S);
      } catch (b) {
        setTimeout(function() {
          throw b;
        });
      }
    }
    var DD = typeof WeakMap == "function" ? WeakMap : Map;
    function gb(e, t, n) {
      var r = Ra(Je, n);
      r.tag = Uv, r.payload = {
        element: null
      };
      var a = t.value;
      return r.callback = function() {
        SO(a), Mp(e, t);
      }, r;
    }
    function Ap(e, t, n) {
      var r = Ra(Je, n);
      r.tag = Uv;
      var a = e.type.getDerivedStateFromError;
      if (typeof a == "function") {
        var i = t.value;
        r.payload = function() {
          return a(i);
        }, r.callback = function() {
          OS(e), Mp(e, t);
        };
      }
      var o = e.stateNode;
      return o !== null && typeof o.componentDidCatch == "function" && (r.callback = function() {
        OS(e), Mp(e, t), typeof a != "function" && gO(this);
        var c = t.value, v = t.stack;
        this.componentDidCatch(c, {
          componentStack: v !== null ? v : ""
        }), typeof a != "function" && (Gn(e.lanes, me) || d("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Se(e) || "Unknown"));
      }), r;
    }
    function bb(e, t, n) {
      var r = e.pingCache, a;
      if (r === null ? (r = e.pingCache = new DD(), a = /* @__PURE__ */ new Set(), r.set(t, a)) : (a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a))), !a.has(n)) {
        a.add(n);
        var i = EO.bind(null, e, t, n);
        Rr && $l(e, n), t.then(i, i);
      }
    }
    function OD(e, t, n, r) {
      var a = e.updateQueue;
      if (a === null) {
        var i = /* @__PURE__ */ new Set();
        i.add(n), e.updateQueue = i;
      } else
        a.add(n);
    }
    function MD(e, t) {
      var n = e.tag;
      if ((e.mode & Le) === se && (n === D || n === ee || n === ue)) {
        var r = e.alternate;
        r ? (e.updateQueue = r.updateQueue, e.memoizedState = r.memoizedState, e.lanes = r.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Sb(e) {
      var t = e;
      do {
        if (t.tag === Z && cD(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Eb(e, t, n, r, a) {
      if ((e.mode & Le) === se) {
        if (e === t)
          e.flags |= xn;
        else {
          if (e.flags |= Be, n.flags |= Kf, n.flags &= -52805, n.tag === k) {
            var i = n.alternate;
            if (i === null)
              n.tag = Ze;
            else {
              var o = Ra(Je, me);
              o.tag = vc, Qa(n, o, me);
            }
          }
          n.lanes = xe(n.lanes, me);
        }
        return e;
      }
      return e.flags |= xn, e.lanes = a, e;
    }
    function AD(e, t, n, r, a) {
      if (n.flags |= ms, Rr && $l(e, a), r !== null && typeof r == "object" && typeof r.then == "function") {
        var i = r;
        MD(n), Zt() && n.mode & Le && dg();
        var o = Sb(t);
        if (o !== null) {
          o.flags &= ~da, Eb(o, t, n, e, a), o.mode & Le && bb(e, i, a), OD(o, e, i);
          return;
        } else {
          if (!ZR(a)) {
            bb(e, i, a), ch();
            return;
          }
          var l = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          r = l;
        }
      } else if (Zt() && n.mode & Le) {
        dg();
        var c = Sb(t);
        if (c !== null) {
          (c.flags & xn) === fe && (c.flags |= da), Eb(c, t, n, e, a), Rv(Vi(r, n));
          return;
        }
      }
      r = Vi(r, n), cO(r);
      var v = t;
      do {
        switch (v.tag) {
          case U: {
            var h = r;
            v.flags |= xn;
            var S = Lu(a);
            v.lanes = xe(v.lanes, S);
            var b = gb(v, h, S);
            Fv(v, b);
            return;
          }
          case k:
            var x = r, w = v.type, M = v.stateNode;
            if ((v.flags & Be) === fe && (typeof w.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && !SS(M))) {
              v.flags |= xn;
              var q = Lu(a);
              v.lanes = xe(v.lanes, q);
              var oe = Ap(v, x, q);
              Fv(v, oe);
              return;
            }
            break;
        }
        v = v.return;
      } while (v !== null);
    }
    function kD() {
      return null;
    }
    var wl = p.ReactCurrentOwner, Ar = !1, kp, Dl, Lp, Np, Up, Bi, zp, Pc, Ol;
    kp = {}, Dl = {}, Lp = {}, Np = {}, Up = {}, Bi = !1, zp = {}, Pc = {}, Ol = {};
    function _n(e, t, n, r) {
      e === null ? t.child = Tg(t, null, n, r) : t.child = zo(t, e.child, n, r);
    }
    function LD(e, t, n, r) {
      t.child = zo(t, e.child, null, r), t.child = zo(t, null, n, r);
    }
    function Cb(e, t, n, r, a) {
      if (t.type !== t.elementType) {
        var i = n.propTypes;
        i && xr(
          i,
          r,
          // Resolved props
          "prop",
          He(n)
        );
      }
      var o = n.render, l = t.ref, c, v;
      Fo(t, a), wu(t);
      {
        if (wl.current = t, or(!0), c = Yo(e, t, o, r, l, a), v = Io(), t.mode & pt) {
          Pt(!0);
          try {
            c = Yo(e, t, o, r, l, a), v = Io();
          } finally {
            Pt(!1);
          }
        }
        or(!1);
      }
      return yo(), e !== null && !Ar ? (Fg(e, t, a), Ta(e, t, a)) : (Zt() && v && yv(t), t.flags |= vo, _n(e, t, c, a), t.child);
    }
    function Rb(e, t, n, r, a) {
      if (e === null) {
        var i = n.type;
        if (FO(i) && n.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        n.defaultProps === void 0) {
          var o = i;
          return o = Zo(i), t.tag = ue, t.type = o, Hp(t, i), Tb(e, t, o, r, a);
        }
        {
          var l = i.propTypes;
          if (l && xr(
            l,
            r,
            // Resolved props
            "prop",
            He(i)
          ), n.defaultProps !== void 0) {
            var c = He(i) || "Unknown";
            Ol[c] || (d("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", c), Ol[c] = !0);
          }
        }
        var v = Eh(n.type, null, r, t, t.mode, a);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var h = n.type, S = h.propTypes;
        S && xr(
          S,
          r,
          // Resolved props
          "prop",
          He(h)
        );
      }
      var b = e.child, x = Ip(e, a);
      if (!x) {
        var w = b.memoizedProps, M = n.compare;
        if (M = M !== null ? M : Wu, M(w, r) && e.ref === t.ref)
          return Ta(e, t, a);
      }
      t.flags |= vo;
      var q = qi(b, r);
      return q.ref = t.ref, q.return = t, t.child = q, q;
    }
    function Tb(e, t, n, r, a) {
      if (t.type !== t.elementType) {
        var i = t.elementType;
        if (i.$$typeof === le) {
          var o = i, l = o._payload, c = o._init;
          try {
            i = c(l);
          } catch {
            i = null;
          }
          var v = i && i.propTypes;
          v && xr(
            v,
            r,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            He(i)
          );
        }
      }
      if (e !== null) {
        var h = e.memoizedProps;
        if (Wu(h, r) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ar = !1, t.pendingProps = r = h, Ip(e, a))
            (e.flags & Kf) !== fe && (Ar = !0);
          else return t.lanes = e.lanes, Ta(e, t, a);
      }
      return jp(e, t, n, r, a);
    }
    function xb(e, t, n) {
      var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
      if (r.mode === "hidden" || $n)
        if ((t.mode & Le) === se) {
          var o = {
            baseLanes: F,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = o, tf(t, n);
        } else if (Gn(n, qn)) {
          var S = {
            baseLanes: F,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = S;
          var b = i !== null ? i.baseLanes : n;
          tf(t, b);
        } else {
          var l = null, c;
          if (i !== null) {
            var v = i.baseLanes;
            c = xe(v, n);
          } else
            c = n;
          t.lanes = t.childLanes = qn;
          var h = {
            baseLanes: c,
            cachePool: l,
            transitions: null
          };
          return t.memoizedState = h, t.updateQueue = null, tf(t, c), null;
        }
      else {
        var x;
        i !== null ? (x = xe(i.baseLanes, n), t.memoizedState = null) : x = n, tf(t, x);
      }
      return _n(e, t, a, n), t.child;
    }
    function ND(e, t, n) {
      var r = t.pendingProps;
      return _n(e, t, r, n), t.child;
    }
    function UD(e, t, n) {
      var r = t.pendingProps.children;
      return _n(e, t, r, n), t.child;
    }
    function zD(e, t, n) {
      {
        t.flags |= Ve;
        {
          var r = t.stateNode;
          r.effectDuration = 0, r.passiveEffectDuration = 0;
        }
      }
      var a = t.pendingProps, i = a.children;
      return _n(e, t, i, n), t.child;
    }
    function _b(e, t) {
      var n = t.ref;
      (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= Si, t.flags |= Xf);
    }
    function jp(e, t, n, r, a) {
      if (t.type !== t.elementType) {
        var i = n.propTypes;
        i && xr(
          i,
          r,
          // Resolved props
          "prop",
          He(n)
        );
      }
      var o;
      {
        var l = Ao(t, n, !0);
        o = ko(t, l);
      }
      var c, v;
      Fo(t, a), wu(t);
      {
        if (wl.current = t, or(!0), c = Yo(e, t, n, r, o, a), v = Io(), t.mode & pt) {
          Pt(!0);
          try {
            c = Yo(e, t, n, r, o, a), v = Io();
          } finally {
            Pt(!1);
          }
        }
        or(!1);
      }
      return yo(), e !== null && !Ar ? (Fg(e, t, a), Ta(e, t, a)) : (Zt() && v && yv(t), t.flags |= vo, _n(e, t, c, a), t.child);
    }
    function wb(e, t, n, r, a) {
      {
        switch (ZO(t)) {
          case !1: {
            var i = t.stateNode, o = t.type, l = new o(t.memoizedProps, i.context), c = l.state;
            i.updater.enqueueSetState(i, c, null);
            break;
          }
          case !0: {
            t.flags |= Be, t.flags |= xn;
            var v = new Error("Simulated error coming from DevTools"), h = Lu(a);
            t.lanes = xe(t.lanes, h);
            var S = Ap(t, Vi(v, t), h);
            Fv(t, S);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var b = n.propTypes;
          b && xr(
            b,
            r,
            // Resolved props
            "prop",
            He(n)
          );
        }
      }
      var x;
      Ir(n) ? (x = !0, ec(t)) : x = !1, Fo(t, a);
      var w = t.stateNode, M;
      w === null ? (Yc(e, t), mb(t, n, r), Dp(t, n, r, a), M = !0) : e === null ? M = xD(t, n, r, a) : M = _D(e, t, n, r, a);
      var q = Fp(e, t, n, M, x, a);
      {
        var oe = t.stateNode;
        M && oe.props !== r && (Bi || d("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Se(t) || "a component"), Bi = !0);
      }
      return q;
    }
    function Fp(e, t, n, r, a, i) {
      _b(e, t);
      var o = (t.flags & Be) !== fe;
      if (!r && !o)
        return a && lg(t, n, !1), Ta(e, t, i);
      var l = t.stateNode;
      wl.current = t;
      var c;
      if (o && typeof n.getDerivedStateFromError != "function")
        c = null, fb();
      else {
        wu(t);
        {
          if (or(!0), c = l.render(), t.mode & pt) {
            Pt(!0);
            try {
              l.render();
            } finally {
              Pt(!1);
            }
          }
          or(!1);
        }
        yo();
      }
      return t.flags |= vo, e !== null && o ? LD(e, t, c, i) : _n(e, t, c, i), t.memoizedState = l.state, a && lg(t, n, !0), t.child;
    }
    function Db(e) {
      var t = e.stateNode;
      t.pendingContext ? og(e, t.pendingContext, t.pendingContext !== t.context) : t.context && og(e, t.context, !1), Hv(e, t.containerInfo);
    }
    function jD(e, t, n) {
      if (Db(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var r = t.pendingProps, a = t.memoizedState, i = a.element;
      Ag(e, t), yc(t, r, null, n);
      var o = t.memoizedState;
      t.stateNode;
      var l = o.element;
      if (a.isDehydrated) {
        var c = {
          element: l,
          isDehydrated: !1,
          cache: o.cache,
          pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
          transitions: o.transitions
        }, v = t.updateQueue;
        if (v.baseState = c, t.memoizedState = c, t.flags & da) {
          var h = Vi(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Ob(e, t, l, n, h);
        } else if (l !== i) {
          var S = Vi(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Ob(e, t, l, n, S);
        } else {
          Vw(t);
          var b = Tg(t, null, l, n);
          t.child = b;
          for (var x = b; x; )
            x.flags = x.flags & ~Et | va, x = x.sibling;
        }
      } else {
        if (Uo(), l === i)
          return Ta(e, t, n);
        _n(e, t, l, n);
      }
      return t.child;
    }
    function Ob(e, t, n, r, a) {
      return Uo(), Rv(a), t.flags |= da, _n(e, t, n, r), t.child;
    }
    function FD(e, t, n) {
      Ug(t), e === null && Cv(t);
      var r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = a.children, l = rv(r, a);
      return l ? o = null : i !== null && rv(r, i) && (t.flags |= xu), _b(e, t), _n(e, t, o, n), t.child;
    }
    function HD(e, t) {
      return e === null && Cv(t), null;
    }
    function VD(e, t, n, r) {
      Yc(e, t);
      var a = t.pendingProps, i = n, o = i._payload, l = i._init, c = l(o);
      t.type = c;
      var v = t.tag = HO(c), h = Mr(c, a), S;
      switch (v) {
        case D:
          return Hp(t, c), t.type = c = Zo(c), S = jp(null, t, c, h, r), S;
        case k:
          return t.type = c = hh(c), S = wb(null, t, c, h, r), S;
        case ee:
          return t.type = c = mh(c), S = Cb(null, t, c, h, r), S;
        case Ee: {
          if (t.type !== t.elementType) {
            var b = c.propTypes;
            b && xr(
              b,
              h,
              // Resolved for outer only
              "prop",
              He(c)
            );
          }
          return S = Rb(
            null,
            t,
            c,
            Mr(c.type, h),
            // The inner type can have defaults too
            r
          ), S;
        }
      }
      var x = "";
      throw c !== null && typeof c == "object" && c.$$typeof === le && (x = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + c + ". " + ("Lazy element type must resolve to a class or function." + x));
    }
    function BD(e, t, n, r, a) {
      Yc(e, t), t.tag = k;
      var i;
      return Ir(n) ? (i = !0, ec(t)) : i = !1, Fo(t, a), mb(t, n, r), Dp(t, n, r, a), Fp(null, t, n, !0, i, a);
    }
    function PD(e, t, n, r) {
      Yc(e, t);
      var a = t.pendingProps, i;
      {
        var o = Ao(t, n, !1);
        i = ko(t, o);
      }
      Fo(t, r);
      var l, c;
      wu(t);
      {
        if (n.prototype && typeof n.prototype.render == "function") {
          var v = He(n) || "Unknown";
          kp[v] || (d("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", v, v), kp[v] = !0);
        }
        t.mode & pt && wr.recordLegacyContextWarning(t, null), or(!0), wl.current = t, l = Yo(null, t, n, a, i, r), c = Io(), or(!1);
      }
      if (yo(), t.flags |= vo, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0) {
        var h = He(n) || "Unknown";
        Dl[h] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", h, h, h), Dl[h] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0
      ) {
        {
          var S = He(n) || "Unknown";
          Dl[S] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", S, S, S), Dl[S] = !0);
        }
        t.tag = k, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Ir(n) ? (b = !0, ec(t)) : b = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, jv(t), hb(t, l), Dp(t, n, a, r), Fp(null, t, n, !0, b, r);
      } else {
        if (t.tag = D, t.mode & pt) {
          Pt(!0);
          try {
            l = Yo(null, t, n, a, i, r), c = Io();
          } finally {
            Pt(!1);
          }
        }
        return Zt() && c && yv(t), _n(null, t, l, r), Hp(t, n), t.child;
      }
    }
    function Hp(e, t) {
      {
        if (t && t.childContextTypes && d("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var n = "", r = Na();
          r && (n += `

Check the render method of \`` + r + "`.");
          var a = r || "", i = e._debugSource;
          i && (a = i.fileName + ":" + i.lineNumber), Up[a] || (Up[a] = !0, d("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", n));
        }
        if (t.defaultProps !== void 0) {
          var o = He(t) || "Unknown";
          Ol[o] || (d("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", o), Ol[o] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var l = He(t) || "Unknown";
          Np[l] || (d("%s: Function components do not support getDerivedStateFromProps.", l), Np[l] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var c = He(t) || "Unknown";
          Lp[c] || (d("%s: Function components do not support contextType.", c), Lp[c] = !0);
        }
      }
    }
    var Vp = {
      dehydrated: null,
      treeContext: null,
      retryLane: $t
    };
    function Bp(e) {
      return {
        baseLanes: e,
        cachePool: kD(),
        transitions: null
      };
    }
    function $D(e, t) {
      var n = null;
      return {
        baseLanes: xe(e.baseLanes, t),
        cachePool: n,
        transitions: e.transitions
      };
    }
    function YD(e, t, n, r) {
      if (t !== null) {
        var a = t.memoizedState;
        if (a === null)
          return !1;
      }
      return Pv(e, gl);
    }
    function ID(e, t) {
      return Rs(e.childLanes, t);
    }
    function Mb(e, t, n) {
      var r = t.pendingProps;
      eM(t) && (t.flags |= Be);
      var a = Dr.current, i = !1, o = (t.flags & Be) !== fe;
      if (o || YD(a, e) ? (i = !0, t.flags &= ~Be) : (e === null || e.memoizedState !== null) && (a = sD(a, jg)), a = Vo(a), Xa(t, a), e === null) {
        Cv(t);
        var l = t.memoizedState;
        if (l !== null) {
          var c = l.dehydrated;
          if (c !== null)
            return KD(t, c);
        }
        var v = r.children, h = r.fallback;
        if (i) {
          var S = qD(t, v, h, n), b = t.child;
          return b.memoizedState = Bp(n), t.memoizedState = Vp, S;
        } else
          return Pp(t, v);
      } else {
        var x = e.memoizedState;
        if (x !== null) {
          var w = x.dehydrated;
          if (w !== null)
            return XD(e, t, o, r, w, x, n);
        }
        if (i) {
          var M = r.fallback, q = r.children, oe = WD(e, t, q, M, n), re = t.child, Ue = e.child.memoizedState;
          return re.memoizedState = Ue === null ? Bp(n) : $D(Ue, n), re.childLanes = ID(e, n), t.memoizedState = Vp, oe;
        } else {
          var Me = r.children, C = GD(e, t, Me, n);
          return t.memoizedState = null, C;
        }
      }
    }
    function Pp(e, t, n) {
      var r = e.mode, a = {
        mode: "visible",
        children: t
      }, i = $p(a, r);
      return i.return = e, e.child = i, i;
    }
    function qD(e, t, n, r) {
      var a = e.mode, i = e.child, o = {
        mode: "hidden",
        children: t
      }, l, c;
      return (a & Le) === se && i !== null ? (l = i, l.childLanes = F, l.pendingProps = o, e.mode & Ie && (l.actualDuration = 0, l.actualStartTime = -1, l.selfBaseDuration = 0, l.treeBaseDuration = 0), c = ii(n, a, r, null)) : (l = $p(o, a), c = ii(n, a, r, null)), l.return = e, c.return = e, l.sibling = c, e.child = l, c;
    }
    function $p(e, t, n) {
      return AS(e, t, F, null);
    }
    function Ab(e, t) {
      return qi(e, t);
    }
    function GD(e, t, n, r) {
      var a = e.child, i = a.sibling, o = Ab(a, {
        mode: "visible",
        children: n
      });
      if ((t.mode & Le) === se && (o.lanes = r), o.return = t, o.sibling = null, i !== null) {
        var l = t.deletions;
        l === null ? (t.deletions = [i], t.flags |= bi) : l.push(i);
      }
      return t.child = o, o;
    }
    function WD(e, t, n, r, a) {
      var i = t.mode, o = e.child, l = o.sibling, c = {
        mode: "hidden",
        children: n
      }, v;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (i & Le) === se && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== o
      ) {
        var h = t.child;
        v = h, v.childLanes = F, v.pendingProps = c, t.mode & Ie && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = o.selfBaseDuration, v.treeBaseDuration = o.treeBaseDuration), t.deletions = null;
      } else
        v = Ab(o, c), v.subtreeFlags = o.subtreeFlags & pa;
      var S;
      return l !== null ? S = qi(l, r) : (S = ii(r, i, a, null), S.flags |= Et), S.return = t, v.return = t, v.sibling = S, t.child = v, S;
    }
    function $c(e, t, n, r) {
      r !== null && Rv(r), zo(t, e.child, null, n);
      var a = t.pendingProps, i = a.children, o = Pp(t, i);
      return o.flags |= Et, t.memoizedState = null, o;
    }
    function QD(e, t, n, r, a) {
      var i = t.mode, o = {
        mode: "visible",
        children: n
      }, l = $p(o, i), c = ii(r, i, a, null);
      return c.flags |= Et, l.return = t, c.return = t, l.sibling = c, t.child = l, (t.mode & Le) !== se && zo(t, e.child, null, a), c;
    }
    function KD(e, t, n) {
      return (e.mode & Le) === se ? (d("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = me) : uv(t) ? e.lanes = xi : e.lanes = qn, null;
    }
    function XD(e, t, n, r, a, i, o) {
      if (n)
        if (t.flags & da) {
          t.flags &= ~da;
          var C = Op(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return $c(e, t, o, C);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Be, null;
          var A = r.children, R = r.fallback, V = QD(e, t, A, R, o), X = t.child;
          return X.memoizedState = Bp(o), t.memoizedState = Vp, V;
        }
      else {
        if (Fw(), (t.mode & Le) === se)
          return $c(
            e,
            t,
            o,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (uv(a)) {
          var l, c, v;
          {
            var h = tw(a);
            l = h.digest, c = h.message, v = h.stack;
          }
          var S;
          c ? S = new Error(c) : S = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = Op(S, l, v);
          return $c(e, t, o, b);
        }
        var x = Gn(o, e.childLanes);
        if (Ar || x) {
          var w = ef();
          if (w !== null) {
            var M = uT(w, o);
            if (M !== $t && M !== i.retryLane) {
              i.retryLane = M;
              var q = Je;
              zn(e, M), Ut(w, e, M, q);
            }
          }
          ch();
          var oe = Op(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return $c(e, t, o, oe);
        } else if (eg(a)) {
          t.flags |= Be, t.child = e.child;
          var re = CO.bind(null, e);
          return nw(a, re), null;
        } else {
          Bw(t, a, i.treeContext);
          var Ue = r.children, Me = Pp(t, Ue);
          return Me.flags |= va, Me;
        }
      }
    }
    function kb(e, t, n) {
      e.lanes = xe(e.lanes, t);
      var r = e.alternate;
      r !== null && (r.lanes = xe(r.lanes, t)), Lv(e.return, t, n);
    }
    function JD(e, t, n) {
      for (var r = t; r !== null; ) {
        if (r.tag === Z) {
          var a = r.memoizedState;
          a !== null && kb(r, n, e);
        } else if (r.tag === Rt)
          kb(r, n, e);
        else if (r.child !== null) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === e)
          return;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e)
            return;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    function ZD(e) {
      for (var t = e, n = null; t !== null; ) {
        var r = t.alternate;
        r !== null && Ec(r) === null && (n = t), t = t.sibling;
      }
      return n;
    }
    function e0(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !zp[e])
        if (zp[e] = !0, typeof e == "string")
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
    function t0(e, t) {
      e !== void 0 && !Pc[e] && (e !== "collapsed" && e !== "hidden" ? (Pc[e] = !0, d('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Pc[e] = !0, d('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Lb(e, t) {
      {
        var n = Oe(e), r = !n && typeof Er(e) == "function";
        if (n || r) {
          var a = n ? "array" : "iterable";
          return d("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", a, t, a), !1;
        }
      }
      return !0;
    }
    function n0(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Oe(e)) {
          for (var n = 0; n < e.length; n++)
            if (!Lb(e[n], n))
              return;
        } else {
          var r = Er(e);
          if (typeof r == "function") {
            var a = r.call(e);
            if (a)
              for (var i = a.next(), o = 0; !i.done; i = a.next()) {
                if (!Lb(i.value, o))
                  return;
                o++;
              }
          } else
            d('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function Yp(e, t, n, r, a) {
      var i = e.memoizedState;
      i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: a
      } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a);
    }
    function Nb(e, t, n) {
      var r = t.pendingProps, a = r.revealOrder, i = r.tail, o = r.children;
      e0(a), t0(i, a), n0(o, a), _n(e, t, o, n);
      var l = Dr.current, c = Pv(l, gl);
      if (c)
        l = $v(l, gl), t.flags |= Be;
      else {
        var v = e !== null && (e.flags & Be) !== fe;
        v && JD(t, t.child, n), l = Vo(l);
      }
      if (Xa(t, l), (t.mode & Le) === se)
        t.memoizedState = null;
      else
        switch (a) {
          case "forwards": {
            var h = ZD(t.child), S;
            h === null ? (S = t.child, t.child = null) : (S = h.sibling, h.sibling = null), Yp(
              t,
              !1,
              // isBackwards
              S,
              h,
              i
            );
            break;
          }
          case "backwards": {
            var b = null, x = t.child;
            for (t.child = null; x !== null; ) {
              var w = x.alternate;
              if (w !== null && Ec(w) === null) {
                t.child = x;
                break;
              }
              var M = x.sibling;
              x.sibling = b, b = x, x = M;
            }
            Yp(
              t,
              !0,
              // isBackwards
              b,
              null,
              // last
              i
            );
            break;
          }
          case "together": {
            Yp(
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
    function r0(e, t, n) {
      Hv(t, t.stateNode.containerInfo);
      var r = t.pendingProps;
      return e === null ? t.child = zo(t, null, r, n) : _n(e, t, r, n), t.child;
    }
    var Ub = !1;
    function a0(e, t, n) {
      var r = t.type, a = r._context, i = t.pendingProps, o = t.memoizedProps, l = i.value;
      {
        "value" in i || Ub || (Ub = !0, d("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var c = t.type.propTypes;
        c && xr(c, i, "prop", "Context.Provider");
      }
      if (wg(t, a, l), o !== null) {
        var v = o.value;
        if (Kn(v, l)) {
          if (o.children === i.children && !Js())
            return Ta(e, t, n);
        } else
          eD(t, a, n);
      }
      var h = i.children;
      return _n(e, t, h, n), t.child;
    }
    var zb = !1;
    function i0(e, t, n) {
      var r = t.type;
      r._context === void 0 ? r !== r.Consumer && (zb || (zb = !0, d("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : r = r._context;
      var a = t.pendingProps, i = a.children;
      typeof i != "function" && d("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Fo(t, n);
      var o = Ct(r);
      wu(t);
      var l;
      return wl.current = t, or(!0), l = i(o), or(!1), yo(), t.flags |= vo, _n(e, t, l, n), t.child;
    }
    function Ml() {
      Ar = !0;
    }
    function Yc(e, t) {
      (t.mode & Le) === se && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Et);
    }
    function Ta(e, t, n) {
      return e !== null && (t.dependencies = e.dependencies), fb(), Pl(t.lanes), Gn(n, t.childLanes) ? (Jw(e, t), t.child) : null;
    }
    function o0(e, t, n) {
      {
        var r = t.return;
        if (r === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, t === r.child)
          r.child = n;
        else {
          var a = r.child;
          if (a === null)
            throw new Error("Expected parent to have a child.");
          for (; a.sibling !== t; )
            if (a = a.sibling, a === null)
              throw new Error("Expected to find the previous sibling.");
          a.sibling = n;
        }
        var i = r.deletions;
        return i === null ? (r.deletions = [e], r.flags |= bi) : i.push(e), n.flags |= Et, n;
      }
    }
    function Ip(e, t) {
      var n = e.lanes;
      return !!Gn(n, t);
    }
    function u0(e, t, n) {
      switch (t.tag) {
        case U:
          Db(t), t.stateNode, Uo();
          break;
        case z:
          Ug(t);
          break;
        case k: {
          var r = t.type;
          Ir(r) && ec(t);
          break;
        }
        case B:
          Hv(t, t.stateNode.containerInfo);
          break;
        case G: {
          var a = t.memoizedProps.value, i = t.type._context;
          wg(t, i, a);
          break;
        }
        case pe:
          {
            var o = Gn(n, t.childLanes);
            o && (t.flags |= Ve);
            {
              var l = t.stateNode;
              l.effectDuration = 0, l.passiveEffectDuration = 0;
            }
          }
          break;
        case Z: {
          var c = t.memoizedState;
          if (c !== null) {
            if (c.dehydrated !== null)
              return Xa(t, Vo(Dr.current)), t.flags |= Be, null;
            var v = t.child, h = v.childLanes;
            if (Gn(n, h))
              return Mb(e, t, n);
            Xa(t, Vo(Dr.current));
            var S = Ta(e, t, n);
            return S !== null ? S.sibling : null;
          } else
            Xa(t, Vo(Dr.current));
          break;
        }
        case Rt: {
          var b = (e.flags & Be) !== fe, x = Gn(n, t.childLanes);
          if (b) {
            if (x)
              return Nb(e, t, n);
            t.flags |= Be;
          }
          var w = t.memoizedState;
          if (w !== null && (w.rendering = null, w.tail = null, w.lastEffect = null), Xa(t, Dr.current), x)
            break;
          return null;
        }
        case Ce:
        case mt:
          return t.lanes = F, xb(e, t, n);
      }
      return Ta(e, t, n);
    }
    function jb(e, t, n) {
      if (t._debugNeedsRemount && e !== null)
        return o0(e, t, Eh(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var r = e.memoizedProps, a = t.pendingProps;
        if (r !== a || Js() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ar = !0;
        else {
          var i = Ip(e, n);
          if (!i && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Be) === fe)
            return Ar = !1, u0(e, t, n);
          (e.flags & Kf) !== fe ? Ar = !0 : Ar = !1;
        }
      } else if (Ar = !1, Zt() && kw(t)) {
        var o = t.index, l = Lw();
        fg(t, l, o);
      }
      switch (t.lanes = F, t.tag) {
        case j:
          return PD(e, t, t.type, n);
        case qt: {
          var c = t.elementType;
          return VD(e, t, c, n);
        }
        case D: {
          var v = t.type, h = t.pendingProps, S = t.elementType === v ? h : Mr(v, h);
          return jp(e, t, v, S, n);
        }
        case k: {
          var b = t.type, x = t.pendingProps, w = t.elementType === b ? x : Mr(b, x);
          return wb(e, t, b, w, n);
        }
        case U:
          return jD(e, t, n);
        case z:
          return FD(e, t, n);
        case J:
          return HD(e, t);
        case Z:
          return Mb(e, t, n);
        case B:
          return r0(e, t, n);
        case ee: {
          var M = t.type, q = t.pendingProps, oe = t.elementType === M ? q : Mr(M, q);
          return Cb(e, t, M, oe, n);
        }
        case ze:
          return ND(e, t, n);
        case ve:
          return UD(e, t, n);
        case pe:
          return zD(e, t, n);
        case G:
          return a0(e, t, n);
        case Re:
          return i0(e, t, n);
        case Ee: {
          var re = t.type, Ue = t.pendingProps, Me = Mr(re, Ue);
          if (t.type !== t.elementType) {
            var C = re.propTypes;
            C && xr(
              C,
              Me,
              // Resolved for outer only
              "prop",
              He(re)
            );
          }
          return Me = Mr(re.type, Me), Rb(e, t, re, Me, n);
        }
        case ue:
          return Tb(e, t, t.type, t.pendingProps, n);
        case Ze: {
          var A = t.type, R = t.pendingProps, V = t.elementType === A ? R : Mr(A, R);
          return BD(e, t, A, V, n);
        }
        case Rt:
          return Nb(e, t, n);
        case at:
          break;
        case Ce:
          return xb(e, t, n);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function qo(e) {
      e.flags |= Ve;
    }
    function Fb(e) {
      e.flags |= Si, e.flags |= Xf;
    }
    var Hb, qp, Vb, Bb;
    Hb = function(e, t, n, r) {
      for (var a = t.child; a !== null; ) {
        if (a.tag === z || a.tag === J)
          O_(e, a.stateNode);
        else if (a.tag !== B) {
          if (a.child !== null) {
            a.child.return = a, a = a.child;
            continue;
          }
        }
        if (a === t)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === t)
            return;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }, qp = function(e, t) {
    }, Vb = function(e, t, n, r, a) {
      var i = e.memoizedProps;
      if (i !== r) {
        var o = t.stateNode, l = Vv(), c = A_(o, n, i, r, a, l);
        t.updateQueue = c, c && qo(t);
      }
    }, Bb = function(e, t, n, r) {
      n !== r && qo(t);
    };
    function Al(e, t) {
      if (!Zt())
        switch (e.tailMode) {
          case "hidden": {
            for (var n = e.tail, r = null; n !== null; )
              n.alternate !== null && (r = n), n = n.sibling;
            r === null ? e.tail = null : r.sibling = null;
            break;
          }
          case "collapsed": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : i.sibling = null;
            break;
          }
        }
    }
    function tn(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, n = F, r = fe;
      if (t) {
        if ((e.mode & Ie) !== se) {
          for (var c = e.selfBaseDuration, v = e.child; v !== null; )
            n = xe(n, xe(v.lanes, v.childLanes)), r |= v.subtreeFlags & pa, r |= v.flags & pa, c += v.treeBaseDuration, v = v.sibling;
          e.treeBaseDuration = c;
        } else
          for (var h = e.child; h !== null; )
            n = xe(n, xe(h.lanes, h.childLanes)), r |= h.subtreeFlags & pa, r |= h.flags & pa, h.return = e, h = h.sibling;
        e.subtreeFlags |= r;
      } else {
        if ((e.mode & Ie) !== se) {
          for (var a = e.actualDuration, i = e.selfBaseDuration, o = e.child; o !== null; )
            n = xe(n, xe(o.lanes, o.childLanes)), r |= o.subtreeFlags, r |= o.flags, a += o.actualDuration, i += o.treeBaseDuration, o = o.sibling;
          e.actualDuration = a, e.treeBaseDuration = i;
        } else
          for (var l = e.child; l !== null; )
            n = xe(n, xe(l.lanes, l.childLanes)), r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
        e.subtreeFlags |= r;
      }
      return e.childLanes = n, t;
    }
    function l0(e, t, n) {
      if (qw() && (t.mode & Le) !== se && (t.flags & Be) === fe)
        return gg(t), Uo(), t.flags |= da | ms | xn, !1;
      var r = ic(t);
      if (n !== null && n.dehydrated !== null)
        if (e === null) {
          if (!r)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Yw(t), tn(t), (t.mode & Ie) !== se) {
            var a = n !== null;
            if (a) {
              var i = t.child;
              i !== null && (t.treeBaseDuration -= i.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Uo(), (t.flags & Be) === fe && (t.memoizedState = null), t.flags |= Ve, tn(t), (t.mode & Ie) !== se) {
            var o = n !== null;
            if (o) {
              var l = t.child;
              l !== null && (t.treeBaseDuration -= l.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return bg(), !0;
    }
    function Pb(e, t, n) {
      var r = t.pendingProps;
      switch (gv(t), t.tag) {
        case j:
        case qt:
        case ue:
        case D:
        case ee:
        case ze:
        case ve:
        case pe:
        case Re:
        case Ee:
          return tn(t), null;
        case k: {
          var a = t.type;
          return Ir(a) && Zs(t), tn(t), null;
        }
        case U: {
          var i = t.stateNode;
          if (Ho(t), pv(t), Iv(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), e === null || e.child === null) {
            var o = ic(t);
            if (o)
              qo(t);
            else if (e !== null) {
              var l = e.memoizedState;
              // Check if this is a client root
              (!l.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & da) !== fe) && (t.flags |= po, bg());
            }
          }
          return qp(e, t), tn(t), null;
        }
        case z: {
          Bv(t);
          var c = Ng(), v = t.type;
          if (e !== null && t.stateNode != null)
            Vb(e, t, v, r, c), e.ref !== t.ref && Fb(t);
          else {
            if (!r) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return tn(t), null;
            }
            var h = Vv(), S = ic(t);
            if (S)
              Pw(t, c, h) && qo(t);
            else {
              var b = D_(v, r, c, h, t);
              Hb(b, t, !1, !1), t.stateNode = b, M_(b, v, r, c) && qo(t);
            }
            t.ref !== null && Fb(t);
          }
          return tn(t), null;
        }
        case J: {
          var x = r;
          if (e && t.stateNode != null) {
            var w = e.memoizedProps;
            Bb(e, t, w, x);
          } else {
            if (typeof x != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var M = Ng(), q = Vv(), oe = ic(t);
            oe ? $w(t) && qo(t) : t.stateNode = k_(x, M, q, t);
          }
          return tn(t), null;
        }
        case Z: {
          Bo(t);
          var re = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ue = l0(e, t, re);
            if (!Ue)
              return t.flags & xn ? t : null;
          }
          if ((t.flags & Be) !== fe)
            return t.lanes = n, (t.mode & Ie) !== se && mp(t), t;
          var Me = re !== null, C = e !== null && e.memoizedState !== null;
          if (Me !== C && Me) {
            var A = t.child;
            if (A.flags |= Ei, (t.mode & Le) !== se) {
              var R = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              R || Pv(Dr.current, jg) ? sO() : ch();
            }
          }
          var V = t.updateQueue;
          if (V !== null && (t.flags |= Ve), tn(t), (t.mode & Ie) !== se && Me) {
            var X = t.child;
            X !== null && (t.treeBaseDuration -= X.treeBaseDuration);
          }
          return null;
        }
        case B:
          return Ho(t), qp(e, t), e === null && xw(t.stateNode.containerInfo), tn(t), null;
        case G:
          var W = t.type._context;
          return kv(W, t), tn(t), null;
        case Ze: {
          var de = t.type;
          return Ir(de) && Zs(t), tn(t), null;
        }
        case Rt: {
          Bo(t);
          var be = t.memoizedState;
          if (be === null)
            return tn(t), null;
          var Ge = (t.flags & Be) !== fe, je = be.rendering;
          if (je === null)
            if (Ge)
              Al(be, !1);
            else {
              var yt = fO() && (e === null || (e.flags & Be) === fe);
              if (!yt)
                for (var Fe = t.child; Fe !== null; ) {
                  var ht = Ec(Fe);
                  if (ht !== null) {
                    Ge = !0, t.flags |= Be, Al(be, !1);
                    var mn = ht.updateQueue;
                    return mn !== null && (t.updateQueue = mn, t.flags |= Ve), t.subtreeFlags = fe, Zw(t, n), Xa(t, $v(Dr.current, gl)), t.child;
                  }
                  Fe = Fe.sibling;
                }
              be.tail !== null && Bt() > sS() && (t.flags |= Be, Ge = !0, Al(be, !1), t.lanes = Bm);
            }
          else {
            if (!Ge) {
              var un = Ec(je);
              if (un !== null) {
                t.flags |= Be, Ge = !0;
                var Zn = un.updateQueue;
                if (Zn !== null && (t.updateQueue = Zn, t.flags |= Ve), Al(be, !0), be.tail === null && be.tailMode === "hidden" && !je.alternate && !Zt())
                  return tn(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Bt() * 2 - be.renderingStartTime > sS() && n !== qn && (t.flags |= Be, Ge = !0, Al(be, !1), t.lanes = Bm);
            }
            if (be.isBackwards)
              je.sibling = t.child, t.child = je;
            else {
              var On = be.last;
              On !== null ? On.sibling = je : t.child = je, be.last = je;
            }
          }
          if (be.tail !== null) {
            var Mn = be.tail;
            be.rendering = Mn, be.tail = Mn.sibling, be.renderingStartTime = Bt(), Mn.sibling = null;
            var yn = Dr.current;
            return Ge ? yn = $v(yn, gl) : yn = Vo(yn), Xa(t, yn), Mn;
          }
          return tn(t), null;
        }
        case at:
          break;
        case Ce:
        case mt: {
          sh(t);
          var Oa = t.memoizedState, eu = Oa !== null;
          if (e !== null) {
            var Gl = e.memoizedState, Zr = Gl !== null;
            Zr !== eu && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !$n && (t.flags |= Ei);
          }
          return !eu || (t.mode & Le) === se ? tn(t) : Gn(Jr, qn) && (tn(t), t.subtreeFlags & (Et | Ve) && (t.flags |= Ei)), null;
        }
        case it:
          return null;
        case Tt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function s0(e, t, n) {
      switch (gv(t), t.tag) {
        case k: {
          var r = t.type;
          Ir(r) && Zs(t);
          var a = t.flags;
          return a & xn ? (t.flags = a & ~xn | Be, (t.mode & Ie) !== se && mp(t), t) : null;
        }
        case U: {
          t.stateNode, Ho(t), pv(t), Iv();
          var i = t.flags;
          return (i & xn) !== fe && (i & Be) === fe ? (t.flags = i & ~xn | Be, t) : null;
        }
        case z:
          return Bv(t), null;
        case Z: {
          Bo(t);
          var o = t.memoizedState;
          if (o !== null && o.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Uo();
          }
          var l = t.flags;
          return l & xn ? (t.flags = l & ~xn | Be, (t.mode & Ie) !== se && mp(t), t) : null;
        }
        case Rt:
          return Bo(t), null;
        case B:
          return Ho(t), null;
        case G:
          var c = t.type._context;
          return kv(c, t), null;
        case Ce:
        case mt:
          return sh(t), null;
        case it:
          return null;
        default:
          return null;
      }
    }
    function $b(e, t, n) {
      switch (gv(t), t.tag) {
        case k: {
          var r = t.type.childContextTypes;
          r != null && Zs(t);
          break;
        }
        case U: {
          t.stateNode, Ho(t), pv(t), Iv();
          break;
        }
        case z: {
          Bv(t);
          break;
        }
        case B:
          Ho(t);
          break;
        case Z:
          Bo(t);
          break;
        case Rt:
          Bo(t);
          break;
        case G:
          var a = t.type._context;
          kv(a, t);
          break;
        case Ce:
        case mt:
          sh(t);
          break;
      }
    }
    var Yb = null;
    Yb = /* @__PURE__ */ new Set();
    var Ic = !1, nn = !1, c0 = typeof WeakSet == "function" ? WeakSet : Set, te = null, Go = null, Wo = null;
    function f0(e) {
      Gf(null, function() {
        throw e;
      }), Wf();
    }
    var d0 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ie)
        try {
          Kr(), t.componentWillUnmount();
        } finally {
          Qr(e);
        }
      else
        t.componentWillUnmount();
    };
    function Ib(e, t) {
      try {
        ei(Ot, e);
      } catch (n) {
        Qe(e, t, n);
      }
    }
    function Gp(e, t, n) {
      try {
        d0(e, n);
      } catch (r) {
        Qe(e, t, r);
      }
    }
    function v0(e, t, n) {
      try {
        n.componentDidMount();
      } catch (r) {
        Qe(e, t, r);
      }
    }
    function qb(e, t) {
      try {
        Wb(e);
      } catch (n) {
        Qe(e, t, n);
      }
    }
    function Qo(e, t) {
      var n = e.ref;
      if (n !== null)
        if (typeof n == "function") {
          var r;
          try {
            if (gn && na && e.mode & Ie)
              try {
                Kr(), r = n(null);
              } finally {
                Qr(e);
              }
            else
              r = n(null);
          } catch (a) {
            Qe(e, t, a);
          }
          typeof r == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Se(e));
        } else
          n.current = null;
    }
    function qc(e, t, n) {
      try {
        n();
      } catch (r) {
        Qe(e, t, r);
      }
    }
    var Gb = !1;
    function p0(e, t) {
      __(e.containerInfo), te = t, h0();
      var n = Gb;
      return Gb = !1, n;
    }
    function h0() {
      for (; te !== null; ) {
        var e = te, t = e.child;
        (e.subtreeFlags & ed) !== fe && t !== null ? (t.return = e, te = t) : m0();
      }
    }
    function m0() {
      for (; te !== null; ) {
        var e = te;
        ot(e);
        try {
          y0(e);
        } catch (n) {
          Qe(e, e.return, n);
        }
        Vt();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, te = t;
          return;
        }
        te = e.return;
      }
    }
    function y0(e) {
      var t = e.alternate, n = e.flags;
      if ((n & po) !== fe) {
        switch (ot(e), e.tag) {
          case D:
          case ee:
          case ue:
            break;
          case k: {
            if (t !== null) {
              var r = t.memoizedProps, a = t.memoizedState, i = e.stateNode;
              e.type === e.elementType && !Bi && (i.props !== e.memoizedProps && d("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Se(e) || "instance"), i.state !== e.memoizedState && d("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Se(e) || "instance"));
              var o = i.getSnapshotBeforeUpdate(e.elementType === e.type ? r : Mr(e.type, r), a);
              {
                var l = Yb;
                o === void 0 && !l.has(e.type) && (l.add(e.type), d("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Se(e)));
              }
              i.__reactInternalSnapshotBeforeUpdate = o;
            }
            break;
          }
          case U: {
            {
              var c = e.stateNode;
              X_(c.containerInfo);
            }
            break;
          }
          case z:
          case J:
          case B:
          case Ze:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Vt();
      }
    }
    function kr(e, t, n) {
      var r = t.updateQueue, a = r !== null ? r.lastEffect : null;
      if (a !== null) {
        var i = a.next, o = i;
        do {
          if ((o.tag & e) === e) {
            var l = o.destroy;
            o.destroy = void 0, l !== void 0 && ((e & en) !== jn ? kR(t) : (e & Ot) !== jn && zm(t), (e & qr) !== jn && Yl(!0), qc(t, n, l), (e & qr) !== jn && Yl(!1), (e & en) !== jn ? LR() : (e & Ot) !== jn && jm());
          }
          o = o.next;
        } while (o !== i);
      }
    }
    function ei(e, t) {
      var n = t.updateQueue, r = n !== null ? n.lastEffect : null;
      if (r !== null) {
        var a = r.next, i = a;
        do {
          if ((i.tag & e) === e) {
            (e & en) !== jn ? MR(t) : (e & Ot) !== jn && NR(t);
            var o = i.create;
            (e & qr) !== jn && Yl(!0), i.destroy = o(), (e & qr) !== jn && Yl(!1), (e & en) !== jn ? AR() : (e & Ot) !== jn && UR();
            {
              var l = i.destroy;
              if (l !== void 0 && typeof l != "function") {
                var c = void 0;
                (i.tag & Ot) !== fe ? c = "useLayoutEffect" : (i.tag & qr) !== fe ? c = "useInsertionEffect" : c = "useEffect";
                var v = void 0;
                l === null ? v = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof l.then == "function" ? v = `

It looks like you wrote ` + c + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + c + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : v = " You returned: " + l, d("%s must not return anything besides a function, which is used for clean-up.%s", c, v);
              }
            }
          }
          i = i.next;
        } while (i !== a);
      }
    }
    function g0(e, t) {
      if ((t.flags & Ve) !== fe)
        switch (t.tag) {
          case pe: {
            var n = t.stateNode.passiveEffectDuration, r = t.memoizedProps, a = r.id, i = r.onPostCommit, o = sb(), l = t.alternate === null ? "mount" : "update";
            lb() && (l = "nested-update"), typeof i == "function" && i(a, l, n, o);
            var c = t.return;
            e: for (; c !== null; ) {
              switch (c.tag) {
                case U:
                  var v = c.stateNode;
                  v.passiveEffectDuration += n;
                  break e;
                case pe:
                  var h = c.stateNode;
                  h.passiveEffectDuration += n;
                  break e;
              }
              c = c.return;
            }
            break;
          }
        }
    }
    function b0(e, t, n, r) {
      if ((n.flags & _u) !== fe)
        switch (n.tag) {
          case D:
          case ee:
          case ue: {
            if (!nn)
              if (n.mode & Ie)
                try {
                  Kr(), ei(Ot | Dt, n);
                } finally {
                  Qr(n);
                }
              else
                ei(Ot | Dt, n);
            break;
          }
          case k: {
            var a = n.stateNode;
            if (n.flags & Ve && !nn)
              if (t === null)
                if (n.type === n.elementType && !Bi && (a.props !== n.memoizedProps && d("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Se(n) || "instance"), a.state !== n.memoizedState && d("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Se(n) || "instance")), n.mode & Ie)
                  try {
                    Kr(), a.componentDidMount();
                  } finally {
                    Qr(n);
                  }
                else
                  a.componentDidMount();
              else {
                var i = n.elementType === n.type ? t.memoizedProps : Mr(n.type, t.memoizedProps), o = t.memoizedState;
                if (n.type === n.elementType && !Bi && (a.props !== n.memoizedProps && d("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Se(n) || "instance"), a.state !== n.memoizedState && d("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Se(n) || "instance")), n.mode & Ie)
                  try {
                    Kr(), a.componentDidUpdate(i, o, a.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Qr(n);
                  }
                else
                  a.componentDidUpdate(i, o, a.__reactInternalSnapshotBeforeUpdate);
              }
            var l = n.updateQueue;
            l !== null && (n.type === n.elementType && !Bi && (a.props !== n.memoizedProps && d("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Se(n) || "instance"), a.state !== n.memoizedState && d("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Se(n) || "instance")), Lg(n, l, a));
            break;
          }
          case U: {
            var c = n.updateQueue;
            if (c !== null) {
              var v = null;
              if (n.child !== null)
                switch (n.child.tag) {
                  case z:
                    v = n.child.stateNode;
                    break;
                  case k:
                    v = n.child.stateNode;
                    break;
                }
              Lg(n, c, v);
            }
            break;
          }
          case z: {
            var h = n.stateNode;
            if (t === null && n.flags & Ve) {
              var S = n.type, b = n.memoizedProps;
              j_(h, S, b);
            }
            break;
          }
          case J:
            break;
          case B:
            break;
          case pe: {
            {
              var x = n.memoizedProps, w = x.onCommit, M = x.onRender, q = n.stateNode.effectDuration, oe = sb(), re = t === null ? "mount" : "update";
              lb() && (re = "nested-update"), typeof M == "function" && M(n.memoizedProps.id, re, n.actualDuration, n.treeBaseDuration, n.actualStartTime, oe);
              {
                typeof w == "function" && w(n.memoizedProps.id, re, q, oe), mO(n);
                var Ue = n.return;
                e: for (; Ue !== null; ) {
                  switch (Ue.tag) {
                    case U:
                      var Me = Ue.stateNode;
                      Me.effectDuration += q;
                      break e;
                    case pe:
                      var C = Ue.stateNode;
                      C.effectDuration += q;
                      break e;
                  }
                  Ue = Ue.return;
                }
              }
            }
            break;
          }
          case Z: {
            w0(e, n);
            break;
          }
          case Rt:
          case Ze:
          case at:
          case Ce:
          case mt:
          case Tt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      nn || n.flags & Si && Wb(n);
    }
    function S0(e) {
      switch (e.tag) {
        case D:
        case ee:
        case ue: {
          if (e.mode & Ie)
            try {
              Kr(), Ib(e, e.return);
            } finally {
              Qr(e);
            }
          else
            Ib(e, e.return);
          break;
        }
        case k: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && v0(e, e.return, t), qb(e, e.return);
          break;
        }
        case z: {
          qb(e, e.return);
          break;
        }
      }
    }
    function E0(e, t) {
      for (var n = null, r = e; ; ) {
        if (r.tag === z) {
          if (n === null) {
            n = r;
            try {
              var a = r.stateNode;
              t ? G_(a) : Q_(r.stateNode, r.memoizedProps);
            } catch (o) {
              Qe(e, e.return, o);
            }
          }
        } else if (r.tag === J) {
          if (n === null)
            try {
              var i = r.stateNode;
              t ? W_(i) : K_(i, r.memoizedProps);
            } catch (o) {
              Qe(e, e.return, o);
            }
        } else if (!((r.tag === Ce || r.tag === mt) && r.memoizedState !== null && r !== e)) {
          if (r.child !== null) {
            r.child.return = r, r = r.child;
            continue;
          }
        }
        if (r === e)
          return;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e)
            return;
          n === r && (n = null), r = r.return;
        }
        n === r && (n = null), r.sibling.return = r.return, r = r.sibling;
      }
    }
    function Wb(e) {
      var t = e.ref;
      if (t !== null) {
        var n = e.stateNode, r;
        switch (e.tag) {
          case z:
            r = n;
            break;
          default:
            r = n;
        }
        if (typeof t == "function") {
          var a;
          if (e.mode & Ie)
            try {
              Kr(), a = t(r);
            } finally {
              Qr(e);
            }
          else
            a = t(r);
          typeof a == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Se(e));
        } else
          t.hasOwnProperty("current") || d("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Se(e)), t.current = r;
      }
    }
    function C0(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Qb(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Qb(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === z) {
          var n = e.stateNode;
          n !== null && Dw(n);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function R0(e) {
      for (var t = e.return; t !== null; ) {
        if (Kb(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kb(e) {
      return e.tag === z || e.tag === U || e.tag === B;
    }
    function Xb(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Kb(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== z && t.tag !== J && t.tag !== gt; ) {
          if (t.flags & Et || t.child === null || t.tag === B)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Et))
          return t.stateNode;
      }
    }
    function T0(e) {
      var t = R0(e);
      switch (t.tag) {
        case z: {
          var n = t.stateNode;
          t.flags & xu && (Zy(n), t.flags &= ~xu);
          var r = Xb(e);
          Qp(e, r, n);
          break;
        }
        case U:
        case B: {
          var a = t.stateNode.containerInfo, i = Xb(e);
          Wp(e, i, a);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function Wp(e, t, n) {
      var r = e.tag, a = r === z || r === J;
      if (a) {
        var i = e.stateNode;
        t ? $_(n, i, t) : B_(n, i);
      } else if (r !== B) {
        var o = e.child;
        if (o !== null) {
          Wp(o, t, n);
          for (var l = o.sibling; l !== null; )
            Wp(l, t, n), l = l.sibling;
        }
      }
    }
    function Qp(e, t, n) {
      var r = e.tag, a = r === z || r === J;
      if (a) {
        var i = e.stateNode;
        t ? P_(n, i, t) : V_(n, i);
      } else if (r !== B) {
        var o = e.child;
        if (o !== null) {
          Qp(o, t, n);
          for (var l = o.sibling; l !== null; )
            Qp(l, t, n), l = l.sibling;
        }
      }
    }
    var rn = null, Lr = !1;
    function x0(e, t, n) {
      {
        var r = t;
        e: for (; r !== null; ) {
          switch (r.tag) {
            case z: {
              rn = r.stateNode, Lr = !1;
              break e;
            }
            case U: {
              rn = r.stateNode.containerInfo, Lr = !0;
              break e;
            }
            case B: {
              rn = r.stateNode.containerInfo, Lr = !0;
              break e;
            }
          }
          r = r.return;
        }
        if (rn === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Jb(e, t, n), rn = null, Lr = !1;
      }
      C0(n);
    }
    function ti(e, t, n) {
      for (var r = n.child; r !== null; )
        Jb(e, t, r), r = r.sibling;
    }
    function Jb(e, t, n) {
      switch (_R(n), n.tag) {
        case z:
          nn || Qo(n, t);
        // eslint-disable-next-line-no-fallthrough
        case J: {
          {
            var r = rn, a = Lr;
            rn = null, ti(e, t, n), rn = r, Lr = a, rn !== null && (Lr ? I_(rn, n.stateNode) : Y_(rn, n.stateNode));
          }
          return;
        }
        case gt: {
          rn !== null && (Lr ? q_(rn, n.stateNode) : ov(rn, n.stateNode));
          return;
        }
        case B: {
          {
            var i = rn, o = Lr;
            rn = n.stateNode.containerInfo, Lr = !0, ti(e, t, n), rn = i, Lr = o;
          }
          return;
        }
        case D:
        case ee:
        case Ee:
        case ue: {
          if (!nn) {
            var l = n.updateQueue;
            if (l !== null) {
              var c = l.lastEffect;
              if (c !== null) {
                var v = c.next, h = v;
                do {
                  var S = h, b = S.destroy, x = S.tag;
                  b !== void 0 && ((x & qr) !== jn ? qc(n, t, b) : (x & Ot) !== jn && (zm(n), n.mode & Ie ? (Kr(), qc(n, t, b), Qr(n)) : qc(n, t, b), jm())), h = h.next;
                } while (h !== v);
              }
            }
          }
          ti(e, t, n);
          return;
        }
        case k: {
          if (!nn) {
            Qo(n, t);
            var w = n.stateNode;
            typeof w.componentWillUnmount == "function" && Gp(n, t, w);
          }
          ti(e, t, n);
          return;
        }
        case at: {
          ti(e, t, n);
          return;
        }
        case Ce: {
          if (
            // TODO: Remove this dead flag
            n.mode & Le
          ) {
            var M = nn;
            nn = M || n.memoizedState !== null, ti(e, t, n), nn = M;
          } else
            ti(e, t, n);
          break;
        }
        default: {
          ti(e, t, n);
          return;
        }
      }
    }
    function _0(e) {
      e.memoizedState;
    }
    function w0(e, t) {
      var n = t.memoizedState;
      if (n === null) {
        var r = t.alternate;
        if (r !== null) {
          var a = r.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            i !== null && fw(i);
          }
        }
      }
    }
    function Zb(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new c0()), t.forEach(function(r) {
          var a = RO.bind(null, e, r);
          if (!n.has(r)) {
            if (n.add(r), Rr)
              if (Go !== null && Wo !== null)
                $l(Wo, Go);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            r.then(a, a);
          }
        });
      }
    }
    function D0(e, t, n) {
      Go = n, Wo = e, ot(t), eS(t, e), ot(t), Go = null, Wo = null;
    }
    function Nr(e, t, n) {
      var r = t.deletions;
      if (r !== null)
        for (var a = 0; a < r.length; a++) {
          var i = r[a];
          try {
            x0(e, t, i);
          } catch (c) {
            Qe(i, t, c);
          }
        }
      var o = is();
      if (t.subtreeFlags & td)
        for (var l = t.child; l !== null; )
          ot(l), eS(l, e), l = l.sibling;
      ot(o);
    }
    function eS(e, t, n) {
      var r = e.alternate, a = e.flags;
      switch (e.tag) {
        case D:
        case ee:
        case Ee:
        case ue: {
          if (Nr(t, e), Xr(e), a & Ve) {
            try {
              kr(qr | Dt, e, e.return), ei(qr | Dt, e);
            } catch (de) {
              Qe(e, e.return, de);
            }
            if (e.mode & Ie) {
              try {
                Kr(), kr(Ot | Dt, e, e.return);
              } catch (de) {
                Qe(e, e.return, de);
              }
              Qr(e);
            } else
              try {
                kr(Ot | Dt, e, e.return);
              } catch (de) {
                Qe(e, e.return, de);
              }
          }
          return;
        }
        case k: {
          Nr(t, e), Xr(e), a & Si && r !== null && Qo(r, r.return);
          return;
        }
        case z: {
          Nr(t, e), Xr(e), a & Si && r !== null && Qo(r, r.return);
          {
            if (e.flags & xu) {
              var i = e.stateNode;
              try {
                Zy(i);
              } catch (de) {
                Qe(e, e.return, de);
              }
            }
            if (a & Ve) {
              var o = e.stateNode;
              if (o != null) {
                var l = e.memoizedProps, c = r !== null ? r.memoizedProps : l, v = e.type, h = e.updateQueue;
                if (e.updateQueue = null, h !== null)
                  try {
                    F_(o, h, v, c, l, e);
                  } catch (de) {
                    Qe(e, e.return, de);
                  }
              }
            }
          }
          return;
        }
        case J: {
          if (Nr(t, e), Xr(e), a & Ve) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var S = e.stateNode, b = e.memoizedProps, x = r !== null ? r.memoizedProps : b;
            try {
              H_(S, x, b);
            } catch (de) {
              Qe(e, e.return, de);
            }
          }
          return;
        }
        case U: {
          if (Nr(t, e), Xr(e), a & Ve && r !== null) {
            var w = r.memoizedState;
            if (w.isDehydrated)
              try {
                cw(t.containerInfo);
              } catch (de) {
                Qe(e, e.return, de);
              }
          }
          return;
        }
        case B: {
          Nr(t, e), Xr(e);
          return;
        }
        case Z: {
          Nr(t, e), Xr(e);
          var M = e.child;
          if (M.flags & Ei) {
            var q = M.stateNode, oe = M.memoizedState, re = oe !== null;
            if (q.isHidden = re, re) {
              var Ue = M.alternate !== null && M.alternate.memoizedState !== null;
              Ue || lO();
            }
          }
          if (a & Ve) {
            try {
              _0(e);
            } catch (de) {
              Qe(e, e.return, de);
            }
            Zb(e);
          }
          return;
        }
        case Ce: {
          var Me = r !== null && r.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Le
          ) {
            var C = nn;
            nn = C || Me, Nr(t, e), nn = C;
          } else
            Nr(t, e);
          if (Xr(e), a & Ei) {
            var A = e.stateNode, R = e.memoizedState, V = R !== null, X = e;
            if (A.isHidden = V, V && !Me && (X.mode & Le) !== se) {
              te = X;
              for (var W = X.child; W !== null; )
                te = W, M0(W), W = W.sibling;
            }
            E0(X, V);
          }
          return;
        }
        case Rt: {
          Nr(t, e), Xr(e), a & Ve && Zb(e);
          return;
        }
        case at:
          return;
        default: {
          Nr(t, e), Xr(e);
          return;
        }
      }
    }
    function Xr(e) {
      var t = e.flags;
      if (t & Et) {
        try {
          T0(e);
        } catch (n) {
          Qe(e, e.return, n);
        }
        e.flags &= ~Et;
      }
      t & va && (e.flags &= ~va);
    }
    function O0(e, t, n) {
      Go = n, Wo = t, te = e, tS(e, t, n), Go = null, Wo = null;
    }
    function tS(e, t, n) {
      for (var r = (e.mode & Le) !== se; te !== null; ) {
        var a = te, i = a.child;
        if (a.tag === Ce && r) {
          var o = a.memoizedState !== null, l = o || Ic;
          if (l) {
            Kp(e, t, n);
            continue;
          } else {
            var c = a.alternate, v = c !== null && c.memoizedState !== null, h = v || nn, S = Ic, b = nn;
            Ic = l, nn = h, nn && !b && (te = a, A0(a));
            for (var x = i; x !== null; )
              te = x, tS(
                x,
                // New root; bubble back up to here and stop.
                t,
                n
              ), x = x.sibling;
            te = a, Ic = S, nn = b, Kp(e, t, n);
            continue;
          }
        }
        (a.subtreeFlags & _u) !== fe && i !== null ? (i.return = a, te = i) : Kp(e, t, n);
      }
    }
    function Kp(e, t, n) {
      for (; te !== null; ) {
        var r = te;
        if ((r.flags & _u) !== fe) {
          var a = r.alternate;
          ot(r);
          try {
            b0(t, a, r, n);
          } catch (o) {
            Qe(r, r.return, o);
          }
          Vt();
        }
        if (r === e) {
          te = null;
          return;
        }
        var i = r.sibling;
        if (i !== null) {
          i.return = r.return, te = i;
          return;
        }
        te = r.return;
      }
    }
    function M0(e) {
      for (; te !== null; ) {
        var t = te, n = t.child;
        switch (t.tag) {
          case D:
          case ee:
          case Ee:
          case ue: {
            if (t.mode & Ie)
              try {
                Kr(), kr(Ot, t, t.return);
              } finally {
                Qr(t);
              }
            else
              kr(Ot, t, t.return);
            break;
          }
          case k: {
            Qo(t, t.return);
            var r = t.stateNode;
            typeof r.componentWillUnmount == "function" && Gp(t, t.return, r);
            break;
          }
          case z: {
            Qo(t, t.return);
            break;
          }
          case Ce: {
            var a = t.memoizedState !== null;
            if (a) {
              nS(e);
              continue;
            }
            break;
          }
        }
        n !== null ? (n.return = t, te = n) : nS(e);
      }
    }
    function nS(e) {
      for (; te !== null; ) {
        var t = te;
        if (t === e) {
          te = null;
          return;
        }
        var n = t.sibling;
        if (n !== null) {
          n.return = t.return, te = n;
          return;
        }
        te = t.return;
      }
    }
    function A0(e) {
      for (; te !== null; ) {
        var t = te, n = t.child;
        if (t.tag === Ce) {
          var r = t.memoizedState !== null;
          if (r) {
            rS(e);
            continue;
          }
        }
        n !== null ? (n.return = t, te = n) : rS(e);
      }
    }
    function rS(e) {
      for (; te !== null; ) {
        var t = te;
        ot(t);
        try {
          S0(t);
        } catch (r) {
          Qe(t, t.return, r);
        }
        if (Vt(), t === e) {
          te = null;
          return;
        }
        var n = t.sibling;
        if (n !== null) {
          n.return = t.return, te = n;
          return;
        }
        te = t.return;
      }
    }
    function k0(e, t, n, r) {
      te = t, L0(t, e, n, r);
    }
    function L0(e, t, n, r) {
      for (; te !== null; ) {
        var a = te, i = a.child;
        (a.subtreeFlags & ho) !== fe && i !== null ? (i.return = a, te = i) : N0(e, t, n, r);
      }
    }
    function N0(e, t, n, r) {
      for (; te !== null; ) {
        var a = te;
        if ((a.flags & za) !== fe) {
          ot(a);
          try {
            U0(t, a, n, r);
          } catch (o) {
            Qe(a, a.return, o);
          }
          Vt();
        }
        if (a === e) {
          te = null;
          return;
        }
        var i = a.sibling;
        if (i !== null) {
          i.return = a.return, te = i;
          return;
        }
        te = a.return;
      }
    }
    function U0(e, t, n, r) {
      switch (t.tag) {
        case D:
        case ee:
        case ue: {
          if (t.mode & Ie) {
            hp();
            try {
              ei(en | Dt, t);
            } finally {
              pp(t);
            }
          } else
            ei(en | Dt, t);
          break;
        }
      }
    }
    function z0(e) {
      te = e, j0();
    }
    function j0() {
      for (; te !== null; ) {
        var e = te, t = e.child;
        if ((te.flags & bi) !== fe) {
          var n = e.deletions;
          if (n !== null) {
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              te = a, V0(a, e);
            }
            {
              var i = e.alternate;
              if (i !== null) {
                var o = i.child;
                if (o !== null) {
                  i.child = null;
                  do {
                    var l = o.sibling;
                    o.sibling = null, o = l;
                  } while (o !== null);
                }
              }
            }
            te = e;
          }
        }
        (e.subtreeFlags & ho) !== fe && t !== null ? (t.return = e, te = t) : F0();
      }
    }
    function F0() {
      for (; te !== null; ) {
        var e = te;
        (e.flags & za) !== fe && (ot(e), H0(e), Vt());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, te = t;
          return;
        }
        te = e.return;
      }
    }
    function H0(e) {
      switch (e.tag) {
        case D:
        case ee:
        case ue: {
          e.mode & Ie ? (hp(), kr(en | Dt, e, e.return), pp(e)) : kr(en | Dt, e, e.return);
          break;
        }
      }
    }
    function V0(e, t) {
      for (; te !== null; ) {
        var n = te;
        ot(n), P0(n, t), Vt();
        var r = n.child;
        r !== null ? (r.return = n, te = r) : B0(e);
      }
    }
    function B0(e) {
      for (; te !== null; ) {
        var t = te, n = t.sibling, r = t.return;
        if (Qb(t), t === e) {
          te = null;
          return;
        }
        if (n !== null) {
          n.return = r, te = n;
          return;
        }
        te = r;
      }
    }
    function P0(e, t) {
      switch (e.tag) {
        case D:
        case ee:
        case ue: {
          e.mode & Ie ? (hp(), kr(en, e, t), pp(e)) : kr(en, e, t);
          break;
        }
      }
    }
    function $0(e) {
      switch (e.tag) {
        case D:
        case ee:
        case ue: {
          try {
            ei(Ot | Dt, e);
          } catch (n) {
            Qe(e, e.return, n);
          }
          break;
        }
        case k: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (n) {
            Qe(e, e.return, n);
          }
          break;
        }
      }
    }
    function Y0(e) {
      switch (e.tag) {
        case D:
        case ee:
        case ue: {
          try {
            ei(en | Dt, e);
          } catch (t) {
            Qe(e, e.return, t);
          }
          break;
        }
      }
    }
    function I0(e) {
      switch (e.tag) {
        case D:
        case ee:
        case ue: {
          try {
            kr(Ot | Dt, e, e.return);
          } catch (n) {
            Qe(e, e.return, n);
          }
          break;
        }
        case k: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Gp(e, e.return, t);
          break;
        }
      }
    }
    function q0(e) {
      switch (e.tag) {
        case D:
        case ee:
        case ue:
          try {
            kr(en | Dt, e, e.return);
          } catch (t) {
            Qe(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var kl = Symbol.for;
      kl("selector.component"), kl("selector.has_pseudo_class"), kl("selector.role"), kl("selector.test_id"), kl("selector.text");
    }
    var G0 = [];
    function W0() {
      G0.forEach(function(e) {
        return e();
      });
    }
    var Q0 = p.ReactCurrentActQueue;
    function K0(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), n = typeof jest < "u";
        return n && t !== !1;
      }
    }
    function aS() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Q0.current !== null && d("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var X0 = Math.ceil, Xp = p.ReactCurrentDispatcher, Jp = p.ReactCurrentOwner, an = p.ReactCurrentBatchConfig, Ur = p.ReactCurrentActQueue, kt = (
      /*             */
      0
    ), iS = (
      /*               */
      1
    ), on = (
      /*                */
      2
    ), dr = (
      /*                */
      4
    ), xa = 0, Ll = 1, Pi = 2, Gc = 3, Nl = 4, oS = 5, Zp = 6, Ne = kt, wn = null, ft = null, Lt = F, Jr = F, eh = Ia(F), Nt = xa, Ul = null, Wc = F, zl = F, Qc = F, jl = null, Fn = null, th = 0, uS = 500, lS = 1 / 0, J0 = 500, _a = null;
    function Fl() {
      lS = Bt() + J0;
    }
    function sS() {
      return lS;
    }
    var Kc = !1, nh = null, Ko = null, $i = !1, ni = null, Hl = F, rh = [], ah = null, Z0 = 50, Vl = 0, ih = null, oh = !1, Xc = !1, eO = 50, Xo = 0, Jc = null, Bl = Je, Zc = F, cS = !1;
    function ef() {
      return wn;
    }
    function Dn() {
      return (Ne & (on | dr)) !== kt ? Bt() : (Bl !== Je || (Bl = Bt()), Bl);
    }
    function ri(e) {
      var t = e.mode;
      if ((t & Le) === se)
        return me;
      if ((Ne & on) !== kt && Lt !== F)
        return Lu(Lt);
      var n = Qw() !== Ww;
      if (n) {
        if (an.transition !== null) {
          var r = an.transition;
          r._updatedFibers || (r._updatedFibers = /* @__PURE__ */ new Set()), r._updatedFibers.add(e);
        }
        return Zc === $t && (Zc = Im()), Zc;
      }
      var a = Tr();
      if (a !== $t)
        return a;
      var i = L_();
      return i;
    }
    function tO(e) {
      var t = e.mode;
      return (t & Le) === se ? me : rT();
    }
    function Ut(e, t, n, r) {
      xO(), cS && d("useInsertionEffect must not schedule updates."), oh && (Xc = !0), Nu(e, n, r), (Ne & on) !== F && e === wn ? DO(t) : (Rr && Wm(e, t, n), OO(t), e === wn && ((Ne & on) === kt && (zl = xe(zl, n)), Nt === Nl && ai(e, Lt)), Hn(e, r), n === me && Ne === kt && (t.mode & Le) === se && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ur.isBatchingLegacy && (Fl(), cg()));
    }
    function nO(e, t, n) {
      var r = e.current;
      r.lanes = t, Nu(e, t, n), Hn(e, n);
    }
    function rO(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ne & on) !== kt
      );
    }
    function Hn(e, t) {
      var n = e.callbackNode;
      XR(e, t);
      var r = Es(e, e === wn ? Lt : F);
      if (r === F) {
        n !== null && _S(n), e.callbackNode = null, e.callbackPriority = $t;
        return;
      }
      var a = wi(r), i = e.callbackPriority;
      if (i === a && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ur.current !== null && n !== vh)) {
        n == null && i !== me && d("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      n != null && _S(n);
      var o;
      if (a === me)
        e.tag === qa ? (Ur.isBatchingLegacy !== null && (Ur.didScheduleLegacyUpdate = !0), Aw(vS.bind(null, e))) : sg(vS.bind(null, e)), Ur.current !== null ? Ur.current.push(Ga) : U_(function() {
          (Ne & (on | dr)) === kt && Ga();
        }), o = null;
      else {
        var l;
        switch (Xm(r)) {
          case Wn:
            l = ys;
            break;
          case ma:
            l = nd;
            break;
          case ya:
            l = Ti;
            break;
          case Ts:
            l = rd;
            break;
          default:
            l = Ti;
            break;
        }
        o = ph(l, fS.bind(null, e));
      }
      e.callbackPriority = a, e.callbackNode = o;
    }
    function fS(e, t) {
      if (ED(), Bl = Je, Zc = F, (Ne & (on | dr)) !== kt)
        throw new Error("Should not already be working.");
      var n = e.callbackNode, r = Da();
      if (r && e.callbackNode !== n)
        return null;
      var a = Es(e, e === wn ? Lt : F);
      if (a === F)
        return null;
      var i = !Cs(e, a) && !nT(e, a) && !t, o = i ? vO(e, a) : nf(e, a);
      if (o !== xa) {
        if (o === Pi) {
          var l = xd(e);
          l !== F && (a = l, o = uh(e, l));
        }
        if (o === Ll) {
          var c = Ul;
          throw Yi(e, F), ai(e, a), Hn(e, Bt()), c;
        }
        if (o === Zp)
          ai(e, a);
        else {
          var v = !Cs(e, a), h = e.current.alternate;
          if (v && !iO(h)) {
            if (o = nf(e, a), o === Pi) {
              var S = xd(e);
              S !== F && (a = S, o = uh(e, S));
            }
            if (o === Ll) {
              var b = Ul;
              throw Yi(e, F), ai(e, a), Hn(e, Bt()), b;
            }
          }
          e.finishedWork = h, e.finishedLanes = a, aO(e, o, a);
        }
      }
      return Hn(e, Bt()), e.callbackNode === n ? fS.bind(null, e) : null;
    }
    function uh(e, t) {
      var n = jl;
      if (xs(e)) {
        var r = Yi(e, t);
        r.flags |= da, Tw(e.containerInfo);
      }
      var a = nf(e, t);
      if (a !== Pi) {
        var i = Fn;
        Fn = n, i !== null && dS(i);
      }
      return a;
    }
    function dS(e) {
      Fn === null ? Fn = e : Fn.push.apply(Fn, e);
    }
    function aO(e, t, n) {
      switch (t) {
        case xa:
        case Ll:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case Pi: {
          Ii(e, Fn, _a);
          break;
        }
        case Gc: {
          if (ai(e, n), $m(n) && // do not delay if we're inside an act() scope
          !wS()) {
            var r = th + uS - Bt();
            if (r > 10) {
              var a = Es(e, F);
              if (a !== F)
                break;
              var i = e.suspendedLanes;
              if (!Eo(i, n)) {
                Dn(), Gm(e, i);
                break;
              }
              e.timeoutHandle = av(Ii.bind(null, e, Fn, _a), r);
              break;
            }
          }
          Ii(e, Fn, _a);
          break;
        }
        case Nl: {
          if (ai(e, n), tT(n))
            break;
          if (!wS()) {
            var o = QR(e, n), l = o, c = Bt() - l, v = TO(c) - c;
            if (v > 10) {
              e.timeoutHandle = av(Ii.bind(null, e, Fn, _a), v);
              break;
            }
          }
          Ii(e, Fn, _a);
          break;
        }
        case oS: {
          Ii(e, Fn, _a);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function iO(e) {
      for (var t = e; ; ) {
        if (t.flags & Qf) {
          var n = t.updateQueue;
          if (n !== null) {
            var r = n.stores;
            if (r !== null)
              for (var a = 0; a < r.length; a++) {
                var i = r[a], o = i.getSnapshot, l = i.value;
                try {
                  if (!Kn(o(), l))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var c = t.child;
        if (t.subtreeFlags & Qf && c !== null) {
          c.return = t, t = c;
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
    function ai(e, t) {
      t = Rs(t, Qc), t = Rs(t, zl), iT(e, t);
    }
    function vS(e) {
      if (CD(), (Ne & (on | dr)) !== kt)
        throw new Error("Should not already be working.");
      Da();
      var t = Es(e, F);
      if (!Gn(t, me))
        return Hn(e, Bt()), null;
      var n = nf(e, t);
      if (e.tag !== qa && n === Pi) {
        var r = xd(e);
        r !== F && (t = r, n = uh(e, r));
      }
      if (n === Ll) {
        var a = Ul;
        throw Yi(e, F), ai(e, t), Hn(e, Bt()), a;
      }
      if (n === Zp)
        throw new Error("Root did not complete. This is a bug in React.");
      var i = e.current.alternate;
      return e.finishedWork = i, e.finishedLanes = t, Ii(e, Fn, _a), Hn(e, Bt()), null;
    }
    function oO(e, t) {
      t !== F && (Od(e, xe(t, me)), Hn(e, Bt()), (Ne & (on | dr)) === kt && (Fl(), Ga()));
    }
    function lh(e, t) {
      var n = Ne;
      Ne |= iS;
      try {
        return e(t);
      } finally {
        Ne = n, Ne === kt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ur.isBatchingLegacy && (Fl(), cg());
      }
    }
    function uO(e, t, n, r, a) {
      var i = Tr(), o = an.transition;
      try {
        return an.transition = null, Yt(Wn), e(t, n, r, a);
      } finally {
        Yt(i), an.transition = o, Ne === kt && Fl();
      }
    }
    function wa(e) {
      ni !== null && ni.tag === qa && (Ne & (on | dr)) === kt && Da();
      var t = Ne;
      Ne |= iS;
      var n = an.transition, r = Tr();
      try {
        return an.transition = null, Yt(Wn), e ? e() : void 0;
      } finally {
        Yt(r), an.transition = n, Ne = t, (Ne & (on | dr)) === kt && Ga();
      }
    }
    function pS() {
      return (Ne & (on | dr)) !== kt;
    }
    function tf(e, t) {
      pn(eh, Jr, e), Jr = xe(Jr, t);
    }
    function sh(e) {
      Jr = eh.current, vn(eh, e);
    }
    function Yi(e, t) {
      e.finishedWork = null, e.finishedLanes = F;
      var n = e.timeoutHandle;
      if (n !== iv && (e.timeoutHandle = iv, N_(n)), ft !== null)
        for (var r = ft.return; r !== null; ) {
          var a = r.alternate;
          $b(a, r), r = r.return;
        }
      wn = e;
      var i = qi(e.current, null);
      return ft = i, Lt = Jr = t, Nt = xa, Ul = null, Wc = F, zl = F, Qc = F, jl = null, Fn = null, nD(), wr.discardPendingWarnings(), i;
    }
    function hS(e, t) {
      do {
        var n = ft;
        try {
          if (fc(), Hg(), Vt(), Jp.current = null, n === null || n.return === null) {
            Nt = Ll, Ul = t, ft = null;
            return;
          }
          if (gn && n.mode & Ie && Vc(n, !0), hr)
            if (yo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var r = t;
              jR(n, r, Lt);
            } else
              zR(n, t, Lt);
          AD(e, n.return, n, t, Lt), bS(n);
        } catch (a) {
          t = a, ft === n && n !== null ? (n = n.return, ft = n) : n = ft;
          continue;
        }
        return;
      } while (!0);
    }
    function mS() {
      var e = Xp.current;
      return Xp.current = Uc, e === null ? Uc : e;
    }
    function yS(e) {
      Xp.current = e;
    }
    function lO() {
      th = Bt();
    }
    function Pl(e) {
      Wc = xe(e, Wc);
    }
    function sO() {
      Nt === xa && (Nt = Gc);
    }
    function ch() {
      (Nt === xa || Nt === Gc || Nt === Pi) && (Nt = Nl), wn !== null && (_d(Wc) || _d(zl)) && ai(wn, Lt);
    }
    function cO(e) {
      Nt !== Nl && (Nt = Pi), jl === null ? jl = [e] : jl.push(e);
    }
    function fO() {
      return Nt === xa;
    }
    function nf(e, t) {
      var n = Ne;
      Ne |= on;
      var r = mS();
      if (wn !== e || Lt !== t) {
        if (Rr) {
          var a = e.memoizedUpdaters;
          a.size > 0 && ($l(e, Lt), a.clear()), Qm(e, t);
        }
        _a = Km(), Yi(e, t);
      }
      Fm(t);
      do
        try {
          dO();
          break;
        } catch (i) {
          hS(e, i);
        }
      while (!0);
      if (fc(), Ne = n, yS(r), ft !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Hm(), wn = null, Lt = F, Nt;
    }
    function dO() {
      for (; ft !== null; )
        gS(ft);
    }
    function vO(e, t) {
      var n = Ne;
      Ne |= on;
      var r = mS();
      if (wn !== e || Lt !== t) {
        if (Rr) {
          var a = e.memoizedUpdaters;
          a.size > 0 && ($l(e, Lt), a.clear()), Qm(e, t);
        }
        _a = Km(), Fl(), Yi(e, t);
      }
      Fm(t);
      do
        try {
          pO();
          break;
        } catch (i) {
          hS(e, i);
        }
      while (!0);
      return fc(), yS(r), Ne = n, ft !== null ? (PR(), xa) : (Hm(), wn = null, Lt = F, Nt);
    }
    function pO() {
      for (; ft !== null && !mR(); )
        gS(ft);
    }
    function gS(e) {
      var t = e.alternate;
      ot(e);
      var n;
      (e.mode & Ie) !== se ? (vp(e), n = fh(t, e, Jr), Vc(e, !0)) : n = fh(t, e, Jr), Vt(), e.memoizedProps = e.pendingProps, n === null ? bS(e) : ft = n, Jp.current = null;
    }
    function bS(e) {
      var t = e;
      do {
        var n = t.alternate, r = t.return;
        if ((t.flags & ms) === fe) {
          ot(t);
          var a = void 0;
          if ((t.mode & Ie) === se ? a = Pb(n, t, Jr) : (vp(t), a = Pb(n, t, Jr), Vc(t, !1)), Vt(), a !== null) {
            ft = a;
            return;
          }
        } else {
          var i = s0(n, t);
          if (i !== null) {
            i.flags &= cR, ft = i;
            return;
          }
          if ((t.mode & Ie) !== se) {
            Vc(t, !1);
            for (var o = t.actualDuration, l = t.child; l !== null; )
              o += l.actualDuration, l = l.sibling;
            t.actualDuration = o;
          }
          if (r !== null)
            r.flags |= ms, r.subtreeFlags = fe, r.deletions = null;
          else {
            Nt = Zp, ft = null;
            return;
          }
        }
        var c = t.sibling;
        if (c !== null) {
          ft = c;
          return;
        }
        t = r, ft = t;
      } while (t !== null);
      Nt === xa && (Nt = oS);
    }
    function Ii(e, t, n) {
      var r = Tr(), a = an.transition;
      try {
        an.transition = null, Yt(Wn), hO(e, t, n, r);
      } finally {
        an.transition = a, Yt(r);
      }
      return null;
    }
    function hO(e, t, n, r) {
      do
        Da();
      while (ni !== null);
      if (_O(), (Ne & (on | dr)) !== kt)
        throw new Error("Should not already be working.");
      var a = e.finishedWork, i = e.finishedLanes;
      if (OR(i), a === null)
        return Um(), null;
      if (i === F && d("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = F, a === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = $t;
      var o = xe(a.lanes, a.childLanes);
      oT(e, o), e === wn && (wn = null, ft = null, Lt = F), ((a.subtreeFlags & ho) !== fe || (a.flags & ho) !== fe) && ($i || ($i = !0, ah = n, ph(Ti, function() {
        return Da(), null;
      })));
      var l = (a.subtreeFlags & (ed | td | _u | ho)) !== fe, c = (a.flags & (ed | td | _u | ho)) !== fe;
      if (l || c) {
        var v = an.transition;
        an.transition = null;
        var h = Tr();
        Yt(Wn);
        var S = Ne;
        Ne |= dr, Jp.current = null, p0(e, a), cb(), D0(e, a, i), w_(e.containerInfo), e.current = a, FR(i), O0(a, e, i), HR(), yR(), Ne = S, Yt(h), an.transition = v;
      } else
        e.current = a, cb();
      var b = $i;
      if ($i ? ($i = !1, ni = e, Hl = i) : (Xo = 0, Jc = null), o = e.pendingLanes, o === F && (Ko = null), b || RS(e.current, !1), TR(a.stateNode, r), Rr && e.memoizedUpdaters.clear(), W0(), Hn(e, Bt()), t !== null)
        for (var x = e.onRecoverableError, w = 0; w < t.length; w++) {
          var M = t[w], q = M.stack, oe = M.digest;
          x(M.value, {
            componentStack: q,
            digest: oe
          });
        }
      if (Kc) {
        Kc = !1;
        var re = nh;
        throw nh = null, re;
      }
      return Gn(Hl, me) && e.tag !== qa && Da(), o = e.pendingLanes, Gn(o, me) ? (SD(), e === ih ? Vl++ : (Vl = 0, ih = e)) : Vl = 0, Ga(), Um(), null;
    }
    function Da() {
      if (ni !== null) {
        var e = Xm(Hl), t = cT(ya, e), n = an.transition, r = Tr();
        try {
          return an.transition = null, Yt(t), yO();
        } finally {
          Yt(r), an.transition = n;
        }
      }
      return !1;
    }
    function mO(e) {
      rh.push(e), $i || ($i = !0, ph(Ti, function() {
        return Da(), null;
      }));
    }
    function yO() {
      if (ni === null)
        return !1;
      var e = ah;
      ah = null;
      var t = ni, n = Hl;
      if (ni = null, Hl = F, (Ne & (on | dr)) !== kt)
        throw new Error("Cannot flush passive effects while already rendering.");
      oh = !0, Xc = !1, VR(n);
      var r = Ne;
      Ne |= dr, z0(t.current), k0(t, t.current, n, e);
      {
        var a = rh;
        rh = [];
        for (var i = 0; i < a.length; i++) {
          var o = a[i];
          g0(t, o);
        }
      }
      BR(), RS(t.current, !0), Ne = r, Ga(), Xc ? t === Jc ? Xo++ : (Xo = 0, Jc = t) : Xo = 0, oh = !1, Xc = !1, xR(t);
      {
        var l = t.current.stateNode;
        l.effectDuration = 0, l.passiveEffectDuration = 0;
      }
      return !0;
    }
    function SS(e) {
      return Ko !== null && Ko.has(e);
    }
    function gO(e) {
      Ko === null ? Ko = /* @__PURE__ */ new Set([e]) : Ko.add(e);
    }
    function bO(e) {
      Kc || (Kc = !0, nh = e);
    }
    var SO = bO;
    function ES(e, t, n) {
      var r = Vi(n, t), a = gb(e, r, me), i = Qa(e, a, me), o = Dn();
      i !== null && (Nu(i, me, o), Hn(i, o));
    }
    function Qe(e, t, n) {
      if (f0(n), Yl(!1), e.tag === U) {
        ES(e, e, n);
        return;
      }
      var r = null;
      for (r = t; r !== null; ) {
        if (r.tag === U) {
          ES(r, e, n);
          return;
        } else if (r.tag === k) {
          var a = r.type, i = r.stateNode;
          if (typeof a.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && !SS(i)) {
            var o = Vi(n, e), l = Ap(r, o, me), c = Qa(r, l, me), v = Dn();
            c !== null && (Nu(c, me, v), Hn(c, v));
            return;
          }
        }
        r = r.return;
      }
      d(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, n);
    }
    function EO(e, t, n) {
      var r = e.pingCache;
      r !== null && r.delete(t);
      var a = Dn();
      Gm(e, n), MO(e), wn === e && Eo(Lt, n) && (Nt === Nl || Nt === Gc && $m(Lt) && Bt() - th < uS ? Yi(e, F) : Qc = xe(Qc, n)), Hn(e, a);
    }
    function CS(e, t) {
      t === $t && (t = tO(e));
      var n = Dn(), r = zn(e, t);
      r !== null && (Nu(r, t, n), Hn(r, n));
    }
    function CO(e) {
      var t = e.memoizedState, n = $t;
      t !== null && (n = t.retryLane), CS(e, n);
    }
    function RO(e, t) {
      var n = $t, r;
      switch (e.tag) {
        case Z:
          r = e.stateNode;
          var a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case Rt:
          r = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      r !== null && r.delete(t), CS(e, n);
    }
    function TO(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : X0(e / 1960) * 1960;
    }
    function xO() {
      if (Vl > Z0)
        throw Vl = 0, ih = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Xo > eO && (Xo = 0, Jc = null, d("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function _O() {
      wr.flushLegacyContextWarning(), wr.flushPendingUnsafeLifecycleWarnings();
    }
    function RS(e, t) {
      ot(e), rf(e, ja, I0), t && rf(e, Zf, q0), rf(e, ja, $0), t && rf(e, Zf, Y0), Vt();
    }
    function rf(e, t, n) {
      for (var r = e, a = null; r !== null; ) {
        var i = r.subtreeFlags & t;
        r !== a && r.child !== null && i !== fe ? r = r.child : ((r.flags & t) !== fe && n(r), r.sibling !== null ? r = r.sibling : r = a = r.return);
      }
    }
    var af = null;
    function TS(e) {
      {
        if ((Ne & on) !== kt || !(e.mode & Le))
          return;
        var t = e.tag;
        if (t !== j && t !== U && t !== k && t !== D && t !== ee && t !== Ee && t !== ue)
          return;
        var n = Se(e) || "ReactComponent";
        if (af !== null) {
          if (af.has(n))
            return;
          af.add(n);
        } else
          af = /* @__PURE__ */ new Set([n]);
        var r = Cn;
        try {
          ot(e), d("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          r ? ot(e) : Vt();
        }
      }
    }
    var fh;
    {
      var wO = null;
      fh = function(e, t, n) {
        var r = kS(wO, t);
        try {
          return jb(e, t, n);
        } catch (i) {
          if (Hw() || i !== null && typeof i == "object" && typeof i.then == "function")
            throw i;
          if (fc(), Hg(), $b(e, t), kS(t, r), t.mode & Ie && vp(t), Gf(null, jb, null, e, t, n), uR()) {
            var a = Wf();
            typeof a == "object" && a !== null && a._suppressLogging && typeof i == "object" && i !== null && !i._suppressLogging && (i._suppressLogging = !0);
          }
          throw i;
        }
      };
    }
    var xS = !1, dh;
    dh = /* @__PURE__ */ new Set();
    function DO(e) {
      if (hi && !yD())
        switch (e.tag) {
          case D:
          case ee:
          case ue: {
            var t = ft && Se(ft) || "Unknown", n = t;
            if (!dh.has(n)) {
              dh.add(n);
              var r = Se(e) || "Unknown";
              d("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", r, t, t);
            }
            break;
          }
          case k: {
            xS || (d("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), xS = !0);
            break;
          }
        }
    }
    function $l(e, t) {
      if (Rr) {
        var n = e.memoizedUpdaters;
        n.forEach(function(r) {
          Wm(e, r, t);
        });
      }
    }
    var vh = {};
    function ph(e, t) {
      {
        var n = Ur.current;
        return n !== null ? (n.push(t), vh) : Nm(e, t);
      }
    }
    function _S(e) {
      if (e !== vh)
        return hR(e);
    }
    function wS() {
      return Ur.current !== null;
    }
    function OO(e) {
      {
        if (e.mode & Le) {
          if (!aS())
            return;
        } else if (!K0() || Ne !== kt || e.tag !== D && e.tag !== ee && e.tag !== ue)
          return;
        if (Ur.current === null) {
          var t = Cn;
          try {
            ot(e), d(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Se(e));
          } finally {
            t ? ot(e) : Vt();
          }
        }
      }
    }
    function MO(e) {
      e.tag !== qa && aS() && Ur.current === null && d(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Yl(e) {
      cS = e;
    }
    var vr = null, Jo = null, AO = function(e) {
      vr = e;
    };
    function Zo(e) {
      {
        if (vr === null)
          return e;
        var t = vr(e);
        return t === void 0 ? e : t.current;
      }
    }
    function hh(e) {
      return Zo(e);
    }
    function mh(e) {
      {
        if (vr === null)
          return e;
        var t = vr(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var n = Zo(e.render);
            if (e.render !== n) {
              var r = {
                $$typeof: ie,
                render: n
              };
              return e.displayName !== void 0 && (r.displayName = e.displayName), r;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function DS(e, t) {
      {
        if (vr === null)
          return !1;
        var n = e.elementType, r = t.type, a = !1, i = typeof r == "object" && r !== null ? r.$$typeof : null;
        switch (e.tag) {
          case k: {
            typeof r == "function" && (a = !0);
            break;
          }
          case D: {
            (typeof r == "function" || i === le) && (a = !0);
            break;
          }
          case ee: {
            (i === ie || i === le) && (a = !0);
            break;
          }
          case Ee:
          case ue: {
            (i === Te || i === le) && (a = !0);
            break;
          }
          default:
            return !1;
        }
        if (a) {
          var o = vr(n);
          if (o !== void 0 && o === vr(r))
            return !0;
        }
        return !1;
      }
    }
    function OS(e) {
      {
        if (vr === null || typeof WeakSet != "function")
          return;
        Jo === null && (Jo = /* @__PURE__ */ new WeakSet()), Jo.add(e);
      }
    }
    var kO = function(e, t) {
      {
        if (vr === null)
          return;
        var n = t.staleFamilies, r = t.updatedFamilies;
        Da(), wa(function() {
          yh(e.current, r, n);
        });
      }
    }, LO = function(e, t) {
      {
        if (e.context !== Xn)
          return;
        Da(), wa(function() {
          Il(t, e, null, null);
        });
      }
    };
    function yh(e, t, n) {
      {
        var r = e.alternate, a = e.child, i = e.sibling, o = e.tag, l = e.type, c = null;
        switch (o) {
          case D:
          case ue:
          case k:
            c = l;
            break;
          case ee:
            c = l.render;
            break;
        }
        if (vr === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var v = !1, h = !1;
        if (c !== null) {
          var S = vr(c);
          S !== void 0 && (n.has(S) ? h = !0 : t.has(S) && (o === k ? h = !0 : v = !0));
        }
        if (Jo !== null && (Jo.has(e) || r !== null && Jo.has(r)) && (h = !0), h && (e._debugNeedsRemount = !0), h || v) {
          var b = zn(e, me);
          b !== null && Ut(b, e, me, Je);
        }
        a !== null && !h && yh(a, t, n), i !== null && yh(i, t, n);
      }
    }
    var NO = function(e, t) {
      {
        var n = /* @__PURE__ */ new Set(), r = new Set(t.map(function(a) {
          return a.current;
        }));
        return gh(e.current, r, n), n;
      }
    };
    function gh(e, t, n) {
      {
        var r = e.child, a = e.sibling, i = e.tag, o = e.type, l = null;
        switch (i) {
          case D:
          case ue:
          case k:
            l = o;
            break;
          case ee:
            l = o.render;
            break;
        }
        var c = !1;
        l !== null && t.has(l) && (c = !0), c ? UO(e, n) : r !== null && gh(r, t, n), a !== null && gh(a, t, n);
      }
    }
    function UO(e, t) {
      {
        var n = zO(e, t);
        if (n)
          return;
        for (var r = e; ; ) {
          switch (r.tag) {
            case z:
              t.add(r.stateNode);
              return;
            case B:
              t.add(r.stateNode.containerInfo);
              return;
            case U:
              t.add(r.stateNode.containerInfo);
              return;
          }
          if (r.return === null)
            throw new Error("Expected to reach root first.");
          r = r.return;
        }
      }
    }
    function zO(e, t) {
      for (var n = e, r = !1; ; ) {
        if (n.tag === z)
          r = !0, t.add(n.stateNode);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === e)
          return r;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e)
            return r;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      return !1;
    }
    var bh;
    {
      bh = !1;
      try {
        var MS = Object.preventExtensions({});
      } catch {
        bh = !0;
      }
    }
    function jO(e, t, n, r) {
      this.tag = e, this.key = n, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = r, this.flags = fe, this.subtreeFlags = fe, this.deletions = null, this.lanes = F, this.childLanes = F, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !bh && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Jn = function(e, t, n, r) {
      return new jO(e, t, n, r);
    };
    function Sh(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function FO(e) {
      return typeof e == "function" && !Sh(e) && e.defaultProps === void 0;
    }
    function HO(e) {
      if (typeof e == "function")
        return Sh(e) ? k : D;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ie)
          return ee;
        if (t === Te)
          return Ee;
      }
      return j;
    }
    function qi(e, t) {
      var n = e.alternate;
      n === null ? (n = Jn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugSource = e._debugSource, n._debugOwner = e._debugOwner, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = fe, n.subtreeFlags = fe, n.deletions = null, n.actualDuration = 0, n.actualStartTime = -1), n.flags = e.flags & pa, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue;
      var r = e.dependencies;
      switch (n.dependencies = r === null ? null : {
        lanes: r.lanes,
        firstContext: r.firstContext
      }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
        case j:
        case D:
        case ue:
          n.type = Zo(e.type);
          break;
        case k:
          n.type = hh(e.type);
          break;
        case ee:
          n.type = mh(e.type);
          break;
      }
      return n;
    }
    function VO(e, t) {
      e.flags &= pa | Et;
      var n = e.alternate;
      if (n === null)
        e.childLanes = F, e.lanes = t, e.child = null, e.subtreeFlags = fe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = fe, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type;
        var r = n.dependencies;
        e.dependencies = r === null ? null : {
          lanes: r.lanes,
          firstContext: r.firstContext
        }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration;
      }
      return e;
    }
    function BO(e, t, n) {
      var r;
      return e === tc ? (r = Le, t === !0 && (r |= pt, r |= Pr)) : r = se, Rr && (r |= Ie), Jn(U, null, null, r);
    }
    function Eh(e, t, n, r, a, i) {
      var o = j, l = e;
      if (typeof e == "function")
        Sh(e) ? (o = k, l = hh(l)) : l = Zo(l);
      else if (typeof e == "string")
        o = z;
      else
        e: switch (e) {
          case Fr:
            return ii(n.children, a, i, t);
          case si:
            o = ve, a |= pt, (a & Le) !== se && (a |= Pr);
            break;
          case g:
            return PO(n, a, i, t);
          case Ae:
            return $O(n, a, i, t);
          case he:
            return YO(n, a, i, t);
          case nt:
            return AS(n, a, i, t);
          case fn:
          // eslint-disable-next-line no-fallthrough
          case _t:
          // eslint-disable-next-line no-fallthrough
          case Hr:
          // eslint-disable-next-line no-fallthrough
          case Sr:
          // eslint-disable-next-line no-fallthrough
          case tt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case H:
                  o = G;
                  break e;
                case I:
                  o = Re;
                  break e;
                case ie:
                  o = ee, l = mh(l);
                  break e;
                case Te:
                  o = Ee;
                  break e;
                case le:
                  o = qt, l = null;
                  break e;
              }
            var c = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var v = r ? Se(r) : null;
              v && (c += `

Check the render method of \`` + v + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + c));
          }
        }
      var h = Jn(o, n, t, a);
      return h.elementType = e, h.type = l, h.lanes = i, h._debugOwner = r, h;
    }
    function Ch(e, t, n) {
      var r = null;
      r = e._owner;
      var a = e.type, i = e.key, o = e.props, l = Eh(a, i, o, r, t, n);
      return l._debugSource = e._source, l._debugOwner = e._owner, l;
    }
    function ii(e, t, n, r) {
      var a = Jn(ze, e, r, t);
      return a.lanes = n, a;
    }
    function PO(e, t, n, r) {
      typeof e.id != "string" && d('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var a = Jn(pe, e, r, t | Ie);
      return a.elementType = g, a.lanes = n, a.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, a;
    }
    function $O(e, t, n, r) {
      var a = Jn(Z, e, r, t);
      return a.elementType = Ae, a.lanes = n, a;
    }
    function YO(e, t, n, r) {
      var a = Jn(Rt, e, r, t);
      return a.elementType = he, a.lanes = n, a;
    }
    function AS(e, t, n, r) {
      var a = Jn(Ce, e, r, t);
      a.elementType = nt, a.lanes = n;
      var i = {
        isHidden: !1
      };
      return a.stateNode = i, a;
    }
    function Rh(e, t, n) {
      var r = Jn(J, e, null, t);
      return r.lanes = n, r;
    }
    function IO() {
      var e = Jn(z, null, null, se);
      return e.elementType = "DELETED", e;
    }
    function qO(e) {
      var t = Jn(gt, null, null, se);
      return t.stateNode = e, t;
    }
    function Th(e, t, n) {
      var r = e.children !== null ? e.children : [], a = Jn(B, r, e.key, t);
      return a.lanes = n, a.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, a;
    }
    function kS(e, t) {
      return e === null && (e = Jn(j, null, null, se)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function GO(e, t, n, r, a) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = iv, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = $t, this.eventTimes = Dd(F), this.expirationTimes = Dd(Je), this.pendingLanes = F, this.suspendedLanes = F, this.pingedLanes = F, this.expiredLanes = F, this.mutableReadLanes = F, this.finishedLanes = F, this.entangledLanes = F, this.entanglements = Dd(F), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var i = this.pendingUpdatersLaneMap = [], o = 0; o < id; o++)
          i.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case tc:
          this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
          break;
        case qa:
          this._debugRootType = n ? "hydrate()" : "render()";
          break;
      }
    }
    function LS(e, t, n, r, a, i, o, l, c, v) {
      var h = new GO(e, t, n, l, c), S = BO(t, i);
      h.current = S, S.stateNode = h;
      {
        var b = {
          element: r,
          isDehydrated: n,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        S.memoizedState = b;
      }
      return jv(S), h;
    }
    var xh = "18.3.1";
    function WO(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return rr(r), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: In,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
      };
    }
    var _h, wh;
    _h = !1, wh = {};
    function NS(e) {
      if (!e)
        return Xn;
      var t = fo(e), n = Mw(t);
      if (t.tag === k) {
        var r = t.type;
        if (Ir(r))
          return ug(t, r, n);
      }
      return n;
    }
    function QO(e, t) {
      {
        var n = fo(e);
        if (n === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var r = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + r);
        }
        var a = Am(n);
        if (a === null)
          return null;
        if (a.mode & pt) {
          var i = Se(n) || "Component";
          if (!wh[i]) {
            wh[i] = !0;
            var o = Cn;
            try {
              ot(a), n.mode & pt ? d("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, i) : d("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, i);
            } finally {
              o ? ot(o) : Vt();
            }
          }
        }
        return a.stateNode;
      }
    }
    function US(e, t, n, r, a, i, o, l) {
      var c = !1, v = null;
      return LS(e, t, c, v, n, r, a, i, o);
    }
    function zS(e, t, n, r, a, i, o, l, c, v) {
      var h = !0, S = LS(n, r, h, e, a, i, o, l, c);
      S.context = NS(null);
      var b = S.current, x = Dn(), w = ri(b), M = Ra(x, w);
      return M.callback = t ?? null, Qa(b, M, w), nO(S, w, x), S;
    }
    function Il(e, t, n, r) {
      RR(t, e);
      var a = t.current, i = Dn(), o = ri(a);
      $R(o);
      var l = NS(n);
      t.context === null ? t.context = l : t.pendingContext = l, hi && Cn !== null && !_h && (_h = !0, d(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Se(Cn) || "Unknown"));
      var c = Ra(i, o);
      c.payload = {
        element: e
      }, r = r === void 0 ? null : r, r !== null && (typeof r != "function" && d("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", r), c.callback = r);
      var v = Qa(a, c, o);
      return v !== null && (Ut(v, a, o, i), mc(v, a, o)), o;
    }
    function of(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case z:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function KO(e) {
      switch (e.tag) {
        case U: {
          var t = e.stateNode;
          if (xs(t)) {
            var n = JR(t);
            oO(t, n);
          }
          break;
        }
        case Z: {
          wa(function() {
            var a = zn(e, me);
            if (a !== null) {
              var i = Dn();
              Ut(a, e, me, i);
            }
          });
          var r = me;
          Dh(e, r);
          break;
        }
      }
    }
    function jS(e, t) {
      var n = e.memoizedState;
      n !== null && n.dehydrated !== null && (n.retryLane = aT(n.retryLane, t));
    }
    function Dh(e, t) {
      jS(e, t);
      var n = e.alternate;
      n && jS(n, t);
    }
    function XO(e) {
      if (e.tag === Z) {
        var t = Mu, n = zn(e, t);
        if (n !== null) {
          var r = Dn();
          Ut(n, e, t, r);
        }
        Dh(e, t);
      }
    }
    function JO(e) {
      if (e.tag === Z) {
        var t = ri(e), n = zn(e, t);
        if (n !== null) {
          var r = Dn();
          Ut(n, e, t, r);
        }
        Dh(e, t);
      }
    }
    function FS(e) {
      var t = pR(e);
      return t === null ? null : t.stateNode;
    }
    var HS = function(e) {
      return null;
    };
    function ZO(e) {
      return HS(e);
    }
    var VS = function(e) {
      return !1;
    };
    function eM(e) {
      return VS(e);
    }
    var BS = null, PS = null, $S = null, YS = null, IS = null, qS = null, GS = null, WS = null, QS = null;
    {
      var KS = function(e, t, n) {
        var r = t[n], a = Oe(e) ? e.slice() : De({}, e);
        return n + 1 === t.length ? (Oe(a) ? a.splice(r, 1) : delete a[r], a) : (a[r] = KS(e[r], t, n + 1), a);
      }, XS = function(e, t) {
        return KS(e, t, 0);
      }, JS = function(e, t, n, r) {
        var a = t[r], i = Oe(e) ? e.slice() : De({}, e);
        if (r + 1 === t.length) {
          var o = n[r];
          i[o] = i[a], Oe(i) ? i.splice(a, 1) : delete i[a];
        } else
          i[a] = JS(
            // $FlowFixMe number or string is fine here
            e[a],
            t,
            n,
            r + 1
          );
        return i;
      }, ZS = function(e, t, n) {
        if (t.length !== n.length) {
          T("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var r = 0; r < n.length - 1; r++)
            if (t[r] !== n[r]) {
              T("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return JS(e, t, n, 0);
      }, eE = function(e, t, n, r) {
        if (n >= t.length)
          return r;
        var a = t[n], i = Oe(e) ? e.slice() : De({}, e);
        return i[a] = eE(e[a], t, n + 1, r), i;
      }, tE = function(e, t, n) {
        return eE(e, t, 0, n);
      }, Oh = function(e, t) {
        for (var n = e.memoizedState; n !== null && t > 0; )
          n = n.next, t--;
        return n;
      };
      BS = function(e, t, n, r) {
        var a = Oh(e, t);
        if (a !== null) {
          var i = tE(a.memoizedState, n, r);
          a.memoizedState = i, a.baseState = i, e.memoizedProps = De({}, e.memoizedProps);
          var o = zn(e, me);
          o !== null && Ut(o, e, me, Je);
        }
      }, PS = function(e, t, n) {
        var r = Oh(e, t);
        if (r !== null) {
          var a = XS(r.memoizedState, n);
          r.memoizedState = a, r.baseState = a, e.memoizedProps = De({}, e.memoizedProps);
          var i = zn(e, me);
          i !== null && Ut(i, e, me, Je);
        }
      }, $S = function(e, t, n, r) {
        var a = Oh(e, t);
        if (a !== null) {
          var i = ZS(a.memoizedState, n, r);
          a.memoizedState = i, a.baseState = i, e.memoizedProps = De({}, e.memoizedProps);
          var o = zn(e, me);
          o !== null && Ut(o, e, me, Je);
        }
      }, YS = function(e, t, n) {
        e.pendingProps = tE(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var r = zn(e, me);
        r !== null && Ut(r, e, me, Je);
      }, IS = function(e, t) {
        e.pendingProps = XS(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var n = zn(e, me);
        n !== null && Ut(n, e, me, Je);
      }, qS = function(e, t, n) {
        e.pendingProps = ZS(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var r = zn(e, me);
        r !== null && Ut(r, e, me, Je);
      }, GS = function(e) {
        var t = zn(e, me);
        t !== null && Ut(t, e, me, Je);
      }, WS = function(e) {
        HS = e;
      }, QS = function(e) {
        VS = e;
      };
    }
    function tM(e) {
      var t = Am(e);
      return t === null ? null : t.stateNode;
    }
    function nM(e) {
      return null;
    }
    function rM() {
      return Cn;
    }
    function aM(e) {
      var t = e.findFiberByHostInstance, n = p.ReactCurrentDispatcher;
      return CR({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: BS,
        overrideHookStateDeletePath: PS,
        overrideHookStateRenamePath: $S,
        overrideProps: YS,
        overridePropsDeletePath: IS,
        overridePropsRenamePath: qS,
        setErrorHandler: WS,
        setSuspenseHandler: QS,
        scheduleUpdate: GS,
        currentDispatcherRef: n,
        findHostInstanceByFiber: tM,
        findFiberByHostInstance: t || nM,
        // React Refresh
        findHostInstancesForRefresh: NO,
        scheduleRefresh: kO,
        scheduleRoot: LO,
        setRefreshHandler: AO,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: rM,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: xh
      });
    }
    var nE = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function Mh(e) {
      this._internalRoot = e;
    }
    uf.prototype.render = Mh.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? d("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : lf(arguments[1]) ? d("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && d("You passed a second argument to root.render(...) but it only accepts one argument.");
        var n = t.containerInfo;
        if (n.nodeType !== St) {
          var r = FS(t.current);
          r && r.parentNode !== n && d("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Il(e, t, null, null);
    }, uf.prototype.unmount = Mh.prototype.unmount = function() {
      typeof arguments[0] == "function" && d("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        pS() && d("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), wa(function() {
          Il(null, e, null, null);
        }), ng(t);
      }
    };
    function iM(e, t) {
      if (!lf(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      rE(e);
      var n = !1, r = !1, a = "", i = nE;
      t != null && (t.hydrate ? T("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ir && d(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var o = US(e, tc, null, n, r, a, i);
      Ws(o.current, e);
      var l = e.nodeType === St ? e.parentNode : e;
      return Xu(l), new Mh(o);
    }
    function uf(e) {
      this._internalRoot = e;
    }
    function oM(e) {
      e && ET(e);
    }
    uf.prototype.unstable_scheduleHydration = oM;
    function uM(e, t, n) {
      if (!lf(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      rE(e), t === void 0 && d("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var r = n ?? null, a = n != null && n.hydratedSources || null, i = !1, o = !1, l = "", c = nE;
      n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (c = n.onRecoverableError));
      var v = zS(t, null, e, tc, r, i, o, l, c);
      if (Ws(v.current, e), Xu(e), a)
        for (var h = 0; h < a.length; h++) {
          var S = a[h];
          fD(v, S);
        }
      return new uf(v);
    }
    function lf(e) {
      return !!(e && (e.nodeType === Nn || e.nodeType === fa || e.nodeType === zf));
    }
    function ql(e) {
      return !!(e && (e.nodeType === Nn || e.nodeType === fa || e.nodeType === zf || e.nodeType === St && e.nodeValue === " react-mount-point-unstable "));
    }
    function rE(e) {
      e.nodeType === Nn && e.tagName && e.tagName.toUpperCase() === "BODY" && d("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), ll(e) && (e._reactRootContainer ? d("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : d("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var lM = p.ReactCurrentOwner, aE;
    aE = function(e) {
      if (e._reactRootContainer && e.nodeType !== St) {
        var t = FS(e._reactRootContainer.current);
        t && t.parentNode !== e && d("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var n = !!e._reactRootContainer, r = Ah(e), a = !!(r && Ya(r));
      a && !n && d("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Nn && e.tagName && e.tagName.toUpperCase() === "BODY" && d("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Ah(e) {
      return e ? e.nodeType === fa ? e.documentElement : e.firstChild : null;
    }
    function iE() {
    }
    function sM(e, t, n, r, a) {
      if (a) {
        if (typeof r == "function") {
          var i = r;
          r = function() {
            var b = of(o);
            i.call(b);
          };
        }
        var o = zS(
          t,
          r,
          e,
          qa,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          iE
        );
        e._reactRootContainer = o, Ws(o.current, e);
        var l = e.nodeType === St ? e.parentNode : e;
        return Xu(l), wa(), o;
      } else {
        for (var c; c = e.lastChild; )
          e.removeChild(c);
        if (typeof r == "function") {
          var v = r;
          r = function() {
            var b = of(h);
            v.call(b);
          };
        }
        var h = US(
          e,
          qa,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          iE
        );
        e._reactRootContainer = h, Ws(h.current, e);
        var S = e.nodeType === St ? e.parentNode : e;
        return Xu(S), wa(function() {
          Il(t, h, n, r);
        }), h;
      }
    }
    function cM(e, t) {
      e !== null && typeof e != "function" && d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function sf(e, t, n, r, a) {
      aE(n), cM(a === void 0 ? null : a, "render");
      var i = n._reactRootContainer, o;
      if (!i)
        o = sM(n, t, e, a, r);
      else {
        if (o = i, typeof a == "function") {
          var l = a;
          a = function() {
            var c = of(o);
            l.call(c);
          };
        }
        Il(t, o, e, a);
      }
      return of(o);
    }
    var oE = !1;
    function fM(e) {
      {
        oE || (oE = !0, d("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = lM.current;
        if (t !== null && t.stateNode !== null) {
          var n = t.stateNode._warnedAboutRefsInRender;
          n || d("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", He(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Nn ? e : QO(e, "findDOMNode");
    }
    function dM(e, t, n) {
      if (d("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ql(t))
        throw new Error("Target container is not a DOM element.");
      {
        var r = ll(t) && t._reactRootContainer === void 0;
        r && d("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return sf(null, e, t, !0, n);
    }
    function vM(e, t, n) {
      if (d("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ql(t))
        throw new Error("Target container is not a DOM element.");
      {
        var r = ll(t) && t._reactRootContainer === void 0;
        r && d("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return sf(null, e, t, !1, n);
    }
    function pM(e, t, n, r) {
      if (d("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ql(n))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !lR(e))
        throw new Error("parentComponent must be a valid React Component");
      return sf(e, t, n, !1, r);
    }
    var uE = !1;
    function hM(e) {
      if (uE || (uE = !0, d("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !ql(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = ll(e) && e._reactRootContainer === void 0;
        t && d("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var n = Ah(e), r = n && !Ya(n);
          r && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return wa(function() {
          sf(null, null, e, !1, function() {
            e._reactRootContainer = null, ng(e);
          });
        }), !0;
      } else {
        {
          var a = Ah(e), i = !!(a && Ya(a)), o = e.nodeType === Nn && ql(e.parentNode) && !!e.parentNode._reactRootContainer;
          i && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", o ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    fT(KO), vT(XO), pT(JO), hT(Tr), mT(lT), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && d("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), XC(y_), eR(lh, uO, wa);
    function mM(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!lf(t))
        throw new Error("Target container is not a DOM element.");
      return WO(e, t, null, n);
    }
    function yM(e, t, n, r) {
      return pM(e, t, n, r);
    }
    var kh = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Ya, Mo, Qs, gm, bm, lh]
    };
    function gM(e, t) {
      return kh.usingClientEntryPoint || d('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), iM(e, t);
    }
    function bM(e, t, n) {
      return kh.usingClientEntryPoint || d('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), uM(e, t, n);
    }
    function SM(e) {
      return pS() && d("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), wa(e);
    }
    var EM = aM({
      findFiberByHostInstance: Ai,
      bundleType: 1,
      version: xh,
      rendererPackageName: "react-dom"
    });
    if (!EM && Kt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var lE = window.location.protocol;
      /^(https?|file):$/.test(lE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (lE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kh, Vn.createPortal = mM, Vn.createRoot = gM, Vn.findDOMNode = fM, Vn.flushSync = SM, Vn.hydrate = dM, Vn.hydrateRoot = bM, Vn.render = vM, Vn.unmountComponentAtNode = hM, Vn.unstable_batchedUpdates = lh, Vn.unstable_renderSubtreeIntoContainer = yM, Vn.version = xh, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Vn;
}
var mE;
function AM() {
  return mE || (mE = 1, Uh.exports = MM()), Uh.exports;
}
var yE;
function kM() {
  if (yE) return ff;
  yE = 1;
  var u = AM();
  {
    var s = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    ff.createRoot = function(p, m) {
      s.usingClientEntryPoint = !0;
      try {
        return u.createRoot(p, m);
      } finally {
        s.usingClientEntryPoint = !1;
      }
    }, ff.hydrateRoot = function(p, m, E) {
      s.usingClientEntryPoint = !0;
      try {
        return u.hydrateRoot(p, m, E);
      } finally {
        s.usingClientEntryPoint = !1;
      }
    };
  }
  return ff;
}
var LM = kM();
const NM = /* @__PURE__ */ zE(LM);
var Fh = { exports: {} }, Hh = {}, gE;
function UM() {
  if (gE) return Hh;
  gE = 1;
  /**
   * @license React
   * use-sync-external-store-with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return function() {
    function u(D, k) {
      return D === k && (D !== 0 || 1 / D === 1 / k) || D !== D && k !== k;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var s = bf(), p = typeof Object.is == "function" ? Object.is : u, m = s.useSyncExternalStore, E = s.useRef, T = s.useEffect, d = s.useMemo, L = s.useDebugValue;
    Hh.useSyncExternalStoreWithSelector = function(D, k, j, U, B) {
      var z = E(null);
      if (z.current === null) {
        var J = { hasValue: !1, value: null };
        z.current = J;
      } else J = z.current;
      z = d(
        function() {
          function ve(Z) {
            if (!Re) {
              if (Re = !0, G = Z, Z = U(Z), B !== void 0 && J.hasValue) {
                var Ee = J.value;
                if (B(Ee, Z))
                  return ee = Ee;
              }
              return ee = Z;
            }
            if (Ee = ee, p(G, Z))
              return Ee;
            var ue = U(Z);
            return B !== void 0 && B(Ee, ue) ? (G = Z, Ee) : (G = Z, ee = ue);
          }
          var Re = !1, G, ee, pe = j === void 0 ? null : j;
          return [
            function() {
              return ve(k());
            },
            pe === null ? void 0 : function() {
              return ve(pe());
            }
          ];
        },
        [k, j, U, B]
      );
      var ze = m(D, z[0], z[1]);
      return T(
        function() {
          J.hasValue = !0, J.value = ze;
        },
        [ze]
      ), L(ze), ze;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }(), Hh;
}
var bE;
function zM() {
  return bE || (bE = 1, Fh.exports = UM()), Fh.exports;
}
var jM = zM();
function FM(u) {
  u();
}
function HM() {
  let u = null, s = null;
  return {
    clear() {
      u = null, s = null;
    },
    notify() {
      FM(() => {
        let p = u;
        for (; p; )
          p.callback(), p = p.next;
      });
    },
    get() {
      const p = [];
      let m = u;
      for (; m; )
        p.push(m), m = m.next;
      return p;
    },
    subscribe(p) {
      let m = !0;
      const E = s = {
        callback: p,
        next: null,
        prev: s
      };
      return E.prev ? E.prev.next = E : u = E, function() {
        !m || u === null || (m = !1, E.next ? E.next.prev = E.prev : s = E.prev, E.prev ? E.prev.next = E.next : u = E.next);
      };
    }
  };
}
var SE = {
  notify() {
  },
  get: () => []
};
function VM(u, s) {
  let p, m = SE, E = 0, T = !1;
  function d(ze) {
    j();
    const ve = m.subscribe(ze);
    let Re = !1;
    return () => {
      Re || (Re = !0, ve(), U());
    };
  }
  function L() {
    m.notify();
  }
  function D() {
    J.onStateChange && J.onStateChange();
  }
  function k() {
    return T;
  }
  function j() {
    E++, p || (p = u.subscribe(D), m = HM());
  }
  function U() {
    E--, p && E === 0 && (p(), p = void 0, m.clear(), m = SE);
  }
  function B() {
    T || (T = !0, j());
  }
  function z() {
    T && (T = !1, U());
  }
  const J = {
    addNestedSub: d,
    notifyNestedSubs: L,
    handleChangeWrapper: D,
    isSubscribed: k,
    trySubscribe: B,
    tryUnsubscribe: z,
    getListeners: () => m
  };
  return J;
}
var BM = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", PM = /* @__PURE__ */ BM(), $M = () => typeof navigator < "u" && navigator.product === "ReactNative", YM = /* @__PURE__ */ $M(), IM = () => PM || YM ? Pn.useLayoutEffect : Pn.useEffect, qM = /* @__PURE__ */ IM(), GM = /* @__PURE__ */ Symbol.for("react-redux-context"), WM = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function QM() {
  if (!Pn.createContext) return {};
  const u = WM[GM] ??= /* @__PURE__ */ new Map();
  let s = u.get(Pn.createContext);
  return s || (s = Pn.createContext(
    null
  ), s.displayName = "ReactRedux", u.set(Pn.createContext, s)), s;
}
var pf = /* @__PURE__ */ QM();
function KM(u) {
  const { children: s, context: p, serverState: m, store: E } = u, T = Pn.useMemo(() => {
    const D = VM(E), k = {
      store: E,
      subscription: D,
      getServerState: m ? () => m : void 0
    };
    {
      const { identityFunctionCheck: j = "once", stabilityCheck: U = "once" } = u;
      return /* @__PURE__ */ Object.assign(k, {
        stabilityCheck: U,
        identityFunctionCheck: j
      });
    }
  }, [E, m]), d = Pn.useMemo(() => E.getState(), [E]);
  qM(() => {
    const { subscription: D } = T;
    return D.onStateChange = D.notifyNestedSubs, D.trySubscribe(), d !== E.getState() && D.notifyNestedSubs(), () => {
      D.tryUnsubscribe(), D.onStateChange = void 0;
    };
  }, [T, d]);
  const L = p || pf;
  return /* @__PURE__ */ Pn.createElement(L.Provider, { value: T }, s);
}
var XM = KM;
function jE(u = pf) {
  return function() {
    const p = Pn.useContext(u);
    if (!p)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return p;
  };
}
var JM = /* @__PURE__ */ jE(), ZM = (u, s) => u === s;
function eA(u = pf) {
  const s = u === pf ? JM : jE(u), p = (m, E = {}) => {
    const { equalityFn: T = ZM } = typeof E == "function" ? { equalityFn: E } : E;
    {
      if (!m)
        throw new Error("You must pass a selector to useSelector");
      if (typeof m != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof T != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const d = s(), { store: L, subscription: D, getServerState: k } = d, j = Pn.useRef(!0), U = Pn.useCallback(
      {
        [m.name](z) {
          const J = m(z);
          {
            const { devModeChecks: ze = {} } = typeof E == "function" ? {} : E, { identityFunctionCheck: ve, stabilityCheck: Re } = d, {
              identityFunctionCheck: G,
              stabilityCheck: ee
            } = {
              stabilityCheck: Re,
              identityFunctionCheck: ve,
              ...ze
            };
            if (ee === "always" || ee === "once" && j.current) {
              const pe = m(z);
              if (!T(J, pe)) {
                let Z;
                try {
                  throw new Error();
                } catch (Ee) {
                  ({ stack: Z } = Ee);
                }
                console.warn(
                  "Selector " + (m.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: z,
                    selected: J,
                    selected2: pe,
                    stack: Z
                  }
                );
              }
            }
            if ((G === "always" || G === "once" && j.current) && J === z) {
              let pe;
              try {
                throw new Error();
              } catch (Z) {
                ({ stack: pe } = Z);
              }
              console.warn(
                "Selector " + (m.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: pe }
              );
            }
            j.current && (j.current = !1);
          }
          return J;
        }
      }[m.name],
      [m]
    ), B = jM.useSyncExternalStoreWithSelector(
      D.addNestedSub,
      L.getState,
      k || L.getState,
      U,
      T
    );
    return Pn.useDebugValue(B), B;
  };
  return Object.assign(p, {
    withTypes: () => p
  }), p;
}
var FE = /* @__PURE__ */ eA(), ea = /* @__PURE__ */ ((u) => (u.Message = "Message", u.SkipAlert = "SkipAlert", u.ReplayAlert = "ReplayAlert", u.AlertPlaying = "AlertPlaying", u.AlertPlayed = "AlertPlayed", u.MediaPlaying = "MediaPlaying", u.SkipPlayingMedia = "SkipPlayingMedia", u.SkipPlayingAlert = "SkipPlayingAlert", u.MediaEnd = "MediaEnd", u.MediaError = "MediaError", u.MediaPaused = "MediaPaused", u.PauseMedia = "PauseMedia", u.MediaPlayed = "MediaPlayed", u.PlayMedia = "PlayMedia", u.SkipMedia = "SkipMedia", u.ReplayMedia = "ReplayMedia", u.Alerts = "Alerts", u.MakeAudioError = "MakeAudioError", u.Settings = "Settings", u.MediaSettings = "MediaSettings", u.AlertConnected = "AlertConnected", u.StartAucFighterMatch = "StartAucFighterMatch", u.AucFighterMatchEnd = "AucFighterMatchEnd", u.PauseAucFighterMatch = "PauseAucFighterMatch", u.ResumeAucFighterMatch = "ResumeAucFighterMatch", u.AucFighterMatchPlaying = "AucFighterMatchPlaying", u.AucFighterMatchPaused = "AucFighterMatchPaused", u.UpdateAucFighterMatch = "UpdateAucFighterMatch", u.CancelAucFighterMatch = "CancelAucFighterMatch", u.AucFighterSettings = "AucFighterSettings", u))(ea || {}), tA = typeof Symbol == "function" && Symbol.observable || "@@observable", EE = tA, Vh = () => Math.random().toString(36).substring(7).split("").join("."), nA = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Vh()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Vh()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Vh()}`
}, Wi = nA;
function Jl(u) {
  if (typeof u != "object" || u === null)
    return !1;
  let s = u;
  for (; Object.getPrototypeOf(s) !== null; )
    s = Object.getPrototypeOf(s);
  return Object.getPrototypeOf(u) === s || Object.getPrototypeOf(u) === null;
}
function rA(u) {
  if (u === void 0)
    return "undefined";
  if (u === null)
    return "null";
  const s = typeof u;
  switch (s) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return s;
  }
  if (Array.isArray(u))
    return "array";
  if (oA(u))
    return "date";
  if (iA(u))
    return "error";
  const p = aA(u);
  switch (p) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return p;
  }
  return Object.prototype.toString.call(u).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function aA(u) {
  return typeof u.constructor == "function" ? u.constructor.name : null;
}
function iA(u) {
  return u instanceof Error || typeof u.message == "string" && u.constructor && typeof u.constructor.stackTraceLimit == "number";
}
function oA(u) {
  return u instanceof Date ? !0 : typeof u.toDateString == "function" && typeof u.getDate == "function" && typeof u.setDate == "function";
}
function oi(u) {
  let s = typeof u;
  return s = rA(u), s;
}
function HE(u, s, p) {
  if (typeof u != "function")
    throw new Error(`Expected the root reducer to be a function. Instead, received: '${oi(u)}'`);
  if (typeof s == "function" && typeof p == "function" || typeof p == "function" && typeof arguments[3] == "function")
    throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof s == "function" && typeof p > "u" && (p = s, s = void 0), typeof p < "u") {
    if (typeof p != "function")
      throw new Error(`Expected the enhancer to be a function. Instead, received: '${oi(p)}'`);
    return p(HE)(u, s);
  }
  let m = u, E = s, T = /* @__PURE__ */ new Map(), d = T, L = 0, D = !1;
  function k() {
    d === T && (d = /* @__PURE__ */ new Map(), T.forEach((ve, Re) => {
      d.set(Re, ve);
    }));
  }
  function j() {
    if (D)
      throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return E;
  }
  function U(ve) {
    if (typeof ve != "function")
      throw new Error(`Expected the listener to be a function. Instead, received: '${oi(ve)}'`);
    if (D)
      throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let Re = !0;
    k();
    const G = L++;
    return d.set(G, ve), function() {
      if (Re) {
        if (D)
          throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        Re = !1, k(), d.delete(G), T = null;
      }
    };
  }
  function B(ve) {
    if (!Jl(ve))
      throw new Error(`Actions must be plain objects. Instead, the actual type was: '${oi(ve)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof ve.type > "u")
      throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof ve.type != "string")
      throw new Error(`Action "type" property must be a string. Instead, the actual type was: '${oi(ve.type)}'. Value was: '${ve.type}' (stringified)`);
    if (D)
      throw new Error("Reducers may not dispatch actions.");
    try {
      D = !0, E = m(E, ve);
    } finally {
      D = !1;
    }
    return (T = d).forEach((G) => {
      G();
    }), ve;
  }
  function z(ve) {
    if (typeof ve != "function")
      throw new Error(`Expected the nextReducer to be a function. Instead, received: '${oi(ve)}`);
    m = ve, B({
      type: Wi.REPLACE
    });
  }
  function J() {
    const ve = U;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(Re) {
        if (typeof Re != "object" || Re === null)
          throw new Error(`Expected the observer to be an object. Instead, received: '${oi(Re)}'`);
        function G() {
          const pe = Re;
          pe.next && pe.next(j());
        }
        return G(), {
          unsubscribe: ve(G)
        };
      },
      [EE]() {
        return this;
      }
    };
  }
  return B({
    type: Wi.INIT
  }), {
    dispatch: B,
    subscribe: U,
    getState: j,
    replaceReducer: z,
    [EE]: J
  };
}
function CE(u) {
  typeof console < "u" && typeof console.error == "function" && console.error(u);
  try {
    throw new Error(u);
  } catch {
  }
}
function uA(u, s, p, m) {
  const E = Object.keys(s), T = p && p.type === Wi.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (E.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Jl(u))
    return `The ${T} has unexpected type of "${oi(u)}". Expected argument to be an object with the following keys: "${E.join('", "')}"`;
  const d = Object.keys(u).filter((L) => !s.hasOwnProperty(L) && !m[L]);
  if (d.forEach((L) => {
    m[L] = !0;
  }), !(p && p.type === Wi.REPLACE) && d.length > 0)
    return `Unexpected ${d.length > 1 ? "keys" : "key"} "${d.join('", "')}" found in ${T}. Expected to find one of the known reducer keys instead: "${E.join('", "')}". Unexpected keys will be ignored.`;
}
function lA(u) {
  Object.keys(u).forEach((s) => {
    const p = u[s];
    if (typeof p(void 0, {
      type: Wi.INIT
    }) > "u")
      throw new Error(`The slice reducer for key "${s}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof p(void 0, {
      type: Wi.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(`The slice reducer for key "${s}" returned undefined when probed with a random type. Don't try to handle '${Wi.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function VE(u) {
  const s = Object.keys(u), p = {};
  for (let d = 0; d < s.length; d++) {
    const L = s[d];
    typeof u[L] > "u" && CE(`No reducer provided for key "${L}"`), typeof u[L] == "function" && (p[L] = u[L]);
  }
  const m = Object.keys(p);
  let E;
  E = {};
  let T;
  try {
    lA(p);
  } catch (d) {
    T = d;
  }
  return function(L = {}, D) {
    if (T)
      throw T;
    {
      const U = uA(L, p, D, E);
      U && CE(U);
    }
    let k = !1;
    const j = {};
    for (let U = 0; U < m.length; U++) {
      const B = m[U], z = p[B], J = L[B], ze = z(J, D);
      if (typeof ze > "u") {
        const ve = D && D.type;
        throw new Error(`When called with an action of type ${ve ? `"${String(ve)}"` : "(unknown type)"}, the slice reducer for key "${B}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      j[B] = ze, k = k || ze !== J;
    }
    return k = k || m.length !== Object.keys(L).length, k ? j : L;
  };
}
function hf(...u) {
  return u.length === 0 ? (s) => s : u.length === 1 ? u[0] : u.reduce((s, p) => (...m) => s(p(...m)));
}
function sA(...u) {
  return (s) => (p, m) => {
    const E = s(p, m);
    let T = () => {
      throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const d = {
      getState: E.getState,
      dispatch: (D, ...k) => T(D, ...k)
    }, L = u.map((D) => D(d));
    return T = hf(...L)(E.dispatch), {
      ...E,
      dispatch: T
    };
  };
}
function BE(u) {
  return Jl(u) && "type" in u && typeof u.type == "string";
}
var PE = Symbol.for("immer-nothing"), RE = Symbol.for("immer-draftable"), er = Symbol.for("immer-state"), cA = [
  // All error codes, starting by 0:
  function(u) {
    return `The plugin for '${u}' has not been loaded into Immer. To enable the plugin, import and call \`enable${u}()\` when initializing your application.`;
  },
  function(u) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${u}'`;
  },
  "This object has been frozen and should not be mutated",
  function(u) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + u;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(u) {
    return `'current' expects a draft, got: ${u}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(u) {
    return `'original' expects a draft, got: ${u}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
];
function Bn(u, ...s) {
  {
    const p = cA[u], m = typeof p == "function" ? p.apply(null, s) : p;
    throw new Error(`[Immer] ${m}`);
  }
}
var tu = Object.getPrototypeOf;
function Qi(u) {
  return !!u && !!u[er];
}
function Ma(u) {
  return u ? $E(u) || Array.isArray(u) || !!u[RE] || !!u.constructor?.[RE] || Ef(u) || Cf(u) : !1;
}
var fA = Object.prototype.constructor.toString();
function $E(u) {
  if (!u || typeof u != "object")
    return !1;
  const s = tu(u);
  if (s === null)
    return !0;
  const p = Object.hasOwnProperty.call(s, "constructor") && s.constructor;
  return p === Object ? !0 : typeof p == "function" && Function.toString.call(p) === fA;
}
function mf(u, s) {
  Sf(u) === 0 ? Reflect.ownKeys(u).forEach((p) => {
    s(p, u[p], u);
  }) : u.forEach((p, m) => s(m, p, u));
}
function Sf(u) {
  const s = u[er];
  return s ? s.type_ : Array.isArray(u) ? 1 : Ef(u) ? 2 : Cf(u) ? 3 : 0;
}
function $h(u, s) {
  return Sf(u) === 2 ? u.has(s) : Object.prototype.hasOwnProperty.call(u, s);
}
function YE(u, s, p) {
  const m = Sf(u);
  m === 2 ? u.set(s, p) : m === 3 ? u.add(p) : u[s] = p;
}
function dA(u, s) {
  return u === s ? u !== 0 || 1 / u === 1 / s : u !== u && s !== s;
}
function Ef(u) {
  return u instanceof Map;
}
function Cf(u) {
  return u instanceof Set;
}
function Gi(u) {
  return u.copy_ || u.base_;
}
function Yh(u, s) {
  if (Ef(u))
    return new Map(u);
  if (Cf(u))
    return new Set(u);
  if (Array.isArray(u))
    return Array.prototype.slice.call(u);
  const p = $E(u);
  if (s === !0 || s === "class_only" && !p) {
    const m = Object.getOwnPropertyDescriptors(u);
    delete m[er];
    let E = Reflect.ownKeys(m);
    for (let T = 0; T < E.length; T++) {
      const d = E[T], L = m[d];
      L.writable === !1 && (L.writable = !0, L.configurable = !0), (L.get || L.set) && (m[d] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: L.enumerable,
        value: u[d]
      });
    }
    return Object.create(tu(u), m);
  } else {
    const m = tu(u);
    if (m !== null && p)
      return { ...u };
    const E = Object.create(m);
    return Object.assign(E, u);
  }
}
function Kh(u, s = !1) {
  return Rf(u) || Qi(u) || !Ma(u) || (Sf(u) > 1 && (u.set = u.add = u.clear = u.delete = vA), Object.freeze(u), s && Object.entries(u).forEach(([p, m]) => Kh(m, !0))), u;
}
function vA() {
  Bn(2);
}
function Rf(u) {
  return Object.isFrozen(u);
}
var pA = {};
function Ki(u) {
  const s = pA[u];
  return s || Bn(0, u), s;
}
var Kl;
function IE() {
  return Kl;
}
function hA(u, s) {
  return {
    drafts_: [],
    parent_: u,
    immer_: s,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function TE(u, s) {
  s && (Ki("Patches"), u.patches_ = [], u.inversePatches_ = [], u.patchListener_ = s);
}
function Ih(u) {
  qh(u), u.drafts_.forEach(mA), u.drafts_ = null;
}
function qh(u) {
  u === Kl && (Kl = u.parent_);
}
function xE(u) {
  return Kl = hA(Kl, u);
}
function mA(u) {
  const s = u[er];
  s.type_ === 0 || s.type_ === 1 ? s.revoke_() : s.revoked_ = !0;
}
function _E(u, s) {
  s.unfinalizedDrafts_ = s.drafts_.length;
  const p = s.drafts_[0];
  return u !== void 0 && u !== p ? (p[er].modified_ && (Ih(s), Bn(4)), Ma(u) && (u = yf(s, u), s.parent_ || gf(s, u)), s.patches_ && Ki("Patches").generateReplacementPatches_(
    p[er].base_,
    u,
    s.patches_,
    s.inversePatches_
  )) : u = yf(s, p, []), Ih(s), s.patches_ && s.patchListener_(s.patches_, s.inversePatches_), u !== PE ? u : void 0;
}
function yf(u, s, p) {
  if (Rf(s))
    return s;
  const m = s[er];
  if (!m)
    return mf(
      s,
      (E, T) => wE(u, m, s, E, T, p)
    ), s;
  if (m.scope_ !== u)
    return s;
  if (!m.modified_)
    return gf(u, m.base_, !0), m.base_;
  if (!m.finalized_) {
    m.finalized_ = !0, m.scope_.unfinalizedDrafts_--;
    const E = m.copy_;
    let T = E, d = !1;
    m.type_ === 3 && (T = new Set(E), E.clear(), d = !0), mf(
      T,
      (L, D) => wE(u, m, E, L, D, p, d)
    ), gf(u, E, !1), p && u.patches_ && Ki("Patches").generatePatches_(
      m,
      p,
      u.patches_,
      u.inversePatches_
    );
  }
  return m.copy_;
}
function wE(u, s, p, m, E, T, d) {
  if (E === p && Bn(5), Qi(E)) {
    const L = T && s && s.type_ !== 3 && // Set objects are atomic since they have no keys.
    !$h(s.assigned_, m) ? T.concat(m) : void 0, D = yf(u, E, L);
    if (YE(p, m, D), Qi(D))
      u.canAutoFreeze_ = !1;
    else
      return;
  } else d && p.add(E);
  if (Ma(E) && !Rf(E)) {
    if (!u.immer_.autoFreeze_ && u.unfinalizedDrafts_ < 1)
      return;
    yf(u, E), (!s || !s.scope_.parent_) && typeof m != "symbol" && Object.prototype.propertyIsEnumerable.call(p, m) && gf(u, E);
  }
}
function gf(u, s, p = !1) {
  !u.parent_ && u.immer_.autoFreeze_ && u.canAutoFreeze_ && Kh(s, p);
}
function yA(u, s) {
  const p = Array.isArray(u), m = {
    type_: p ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: s ? s.scope_ : IE(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: s,
    // The base state.
    base_: u,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let E = m, T = Xh;
  p && (E = [m], T = Xl);
  const { revoke: d, proxy: L } = Proxy.revocable(E, T);
  return m.draft_ = L, m.revoke_ = d, L;
}
var Xh = {
  get(u, s) {
    if (s === er)
      return u;
    const p = Gi(u);
    if (!$h(p, s))
      return gA(u, p, s);
    const m = p[s];
    return u.finalized_ || !Ma(m) ? m : m === Bh(u.base_, s) ? (Ph(u), u.copy_[s] = Wh(m, u)) : m;
  },
  has(u, s) {
    return s in Gi(u);
  },
  ownKeys(u) {
    return Reflect.ownKeys(Gi(u));
  },
  set(u, s, p) {
    const m = qE(Gi(u), s);
    if (m?.set)
      return m.set.call(u.draft_, p), !0;
    if (!u.modified_) {
      const E = Bh(Gi(u), s), T = E?.[er];
      if (T && T.base_ === p)
        return u.copy_[s] = p, u.assigned_[s] = !1, !0;
      if (dA(p, E) && (p !== void 0 || $h(u.base_, s)))
        return !0;
      Ph(u), Gh(u);
    }
    return u.copy_[s] === p && // special case: handle new props with value 'undefined'
    (p !== void 0 || s in u.copy_) || // special case: NaN
    Number.isNaN(p) && Number.isNaN(u.copy_[s]) || (u.copy_[s] = p, u.assigned_[s] = !0), !0;
  },
  deleteProperty(u, s) {
    return Bh(u.base_, s) !== void 0 || s in u.base_ ? (u.assigned_[s] = !1, Ph(u), Gh(u)) : delete u.assigned_[s], u.copy_ && delete u.copy_[s], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(u, s) {
    const p = Gi(u), m = Reflect.getOwnPropertyDescriptor(p, s);
    return m && {
      writable: !0,
      configurable: u.type_ !== 1 || s !== "length",
      enumerable: m.enumerable,
      value: p[s]
    };
  },
  defineProperty() {
    Bn(11);
  },
  getPrototypeOf(u) {
    return tu(u.base_);
  },
  setPrototypeOf() {
    Bn(12);
  }
}, Xl = {};
mf(Xh, (u, s) => {
  Xl[u] = function() {
    return arguments[0] = arguments[0][0], s.apply(this, arguments);
  };
});
Xl.deleteProperty = function(u, s) {
  return isNaN(parseInt(s)) && Bn(13), Xl.set.call(this, u, s, void 0);
};
Xl.set = function(u, s, p) {
  return s !== "length" && isNaN(parseInt(s)) && Bn(14), Xh.set.call(this, u[0], s, p, u[0]);
};
function Bh(u, s) {
  const p = u[er];
  return (p ? Gi(p) : u)[s];
}
function gA(u, s, p) {
  const m = qE(s, p);
  return m ? "value" in m ? m.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    m.get?.call(u.draft_)
  ) : void 0;
}
function qE(u, s) {
  if (!(s in u))
    return;
  let p = tu(u);
  for (; p; ) {
    const m = Object.getOwnPropertyDescriptor(p, s);
    if (m)
      return m;
    p = tu(p);
  }
}
function Gh(u) {
  u.modified_ || (u.modified_ = !0, u.parent_ && Gh(u.parent_));
}
function Ph(u) {
  u.copy_ || (u.copy_ = Yh(
    u.base_,
    u.scope_.immer_.useStrictShallowCopy_
  ));
}
var bA = class {
  constructor(u) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (s, p, m) => {
      if (typeof s == "function" && typeof p != "function") {
        const T = p;
        p = s;
        const d = this;
        return function(D = T, ...k) {
          return d.produce(D, (j) => p.call(this, j, ...k));
        };
      }
      typeof p != "function" && Bn(6), m !== void 0 && typeof m != "function" && Bn(7);
      let E;
      if (Ma(s)) {
        const T = xE(this), d = Wh(s, void 0);
        let L = !0;
        try {
          E = p(d), L = !1;
        } finally {
          L ? Ih(T) : qh(T);
        }
        return TE(T, m), _E(E, T);
      } else if (!s || typeof s != "object") {
        if (E = p(s), E === void 0 && (E = s), E === PE && (E = void 0), this.autoFreeze_ && Kh(E, !0), m) {
          const T = [], d = [];
          Ki("Patches").generateReplacementPatches_(s, E, T, d), m(T, d);
        }
        return E;
      } else
        Bn(1, s);
    }, this.produceWithPatches = (s, p) => {
      if (typeof s == "function")
        return (d, ...L) => this.produceWithPatches(d, (D) => s(D, ...L));
      let m, E;
      return [this.produce(s, p, (d, L) => {
        m = d, E = L;
      }), m, E];
    }, typeof u?.autoFreeze == "boolean" && this.setAutoFreeze(u.autoFreeze), typeof u?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(u.useStrictShallowCopy);
  }
  createDraft(u) {
    Ma(u) || Bn(8), Qi(u) && (u = SA(u));
    const s = xE(this), p = Wh(u, void 0);
    return p[er].isManual_ = !0, qh(s), p;
  }
  finishDraft(u, s) {
    const p = u && u[er];
    (!p || !p.isManual_) && Bn(9);
    const { scope_: m } = p;
    return TE(m, s), _E(void 0, m);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(u) {
    this.autoFreeze_ = u;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(u) {
    this.useStrictShallowCopy_ = u;
  }
  applyPatches(u, s) {
    let p;
    for (p = s.length - 1; p >= 0; p--) {
      const E = s[p];
      if (E.path.length === 0 && E.op === "replace") {
        u = E.value;
        break;
      }
    }
    p > -1 && (s = s.slice(p + 1));
    const m = Ki("Patches").applyPatches_;
    return Qi(u) ? m(u, s) : this.produce(
      u,
      (E) => m(E, s)
    );
  }
};
function Wh(u, s) {
  const p = Ef(u) ? Ki("MapSet").proxyMap_(u, s) : Cf(u) ? Ki("MapSet").proxySet_(u, s) : yA(u, s);
  return (s ? s.scope_ : IE()).drafts_.push(p), p;
}
function SA(u) {
  return Qi(u) || Bn(10, u), GE(u);
}
function GE(u) {
  if (!Ma(u) || Rf(u))
    return u;
  const s = u[er];
  let p;
  if (s) {
    if (!s.modified_)
      return s.base_;
    s.finalized_ = !0, p = Yh(u, s.scope_.immer_.useStrictShallowCopy_);
  } else
    p = Yh(u, !0);
  return mf(p, (m, E) => {
    YE(p, m, GE(E));
  }), s && (s.finalized_ = !1), p;
}
var tr = new bA(), WE = tr.produce;
tr.produceWithPatches.bind(
  tr
);
tr.setAutoFreeze.bind(tr);
tr.setUseStrictShallowCopy.bind(tr);
tr.applyPatches.bind(tr);
tr.createDraft.bind(tr);
tr.finishDraft.bind(tr);
function QE(u) {
  return ({ dispatch: p, getState: m }) => (E) => (T) => typeof T == "function" ? T(p, m, u) : E(T);
}
var EA = QE(), CA = QE, KE = { NODE_ENV: "development" }, RA = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? hf : hf.apply(null, arguments);
}, TA = (u) => u && typeof u.match == "function";
function DE(u, s) {
  function p(...m) {
    if (s) {
      let E = s(...m);
      if (!E)
        throw new Error("prepareAction did not return an object");
      return {
        type: u,
        payload: E.payload,
        ..."meta" in E && {
          meta: E.meta
        },
        ..."error" in E && {
          error: E.error
        }
      };
    }
    return {
      type: u,
      payload: m[0]
    };
  }
  return p.toString = () => `${u}`, p.type = u, p.match = (m) => BE(m) && m.type === u, p;
}
function xA(u) {
  return typeof u == "function" && "type" in u && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  TA(u);
}
function _A(u) {
  const s = u ? `${u}`.split("/") : [], p = s[s.length - 1] || "actionCreator";
  return `Detected an action creator with type "${u || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${p}())\` instead of \`dispatch(${p})\`. This is necessary even if the action has no payload.`;
}
function wA(u = {}) {
  const {
    isActionCreator: s = xA
  } = u;
  return () => (p) => (m) => (s(m) && console.warn(_A(m.type)), p(m));
}
function XE(u, s) {
  let p = 0;
  return {
    measureTime(m) {
      const E = Date.now();
      try {
        return m();
      } finally {
        const T = Date.now();
        p += T - E;
      }
    },
    warnIfExceeded() {
      p > u && console.warn(`${s} took ${p}ms, which is more than the warning threshold of ${u}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var JE = class Ql extends Array {
  constructor(...s) {
    super(...s), Object.setPrototypeOf(this, Ql.prototype);
  }
  static get [Symbol.species]() {
    return Ql;
  }
  concat(...s) {
    return super.concat.apply(this, s);
  }
  prepend(...s) {
    return s.length === 1 && Array.isArray(s[0]) ? new Ql(...s[0].concat(this)) : new Ql(...s.concat(this));
  }
};
function OE(u) {
  return Ma(u) ? WE(u, () => {
  }) : u;
}
function ME(u, s, p) {
  return u.has(s) ? u.get(s) : u.set(s, p(s)).get(s);
}
function DA(u) {
  return typeof u != "object" || u == null || Object.isFrozen(u);
}
function OA(u, s, p) {
  const m = ZE(u, s, p);
  return {
    detectMutations() {
      return eC(u, s, m, p);
    }
  };
}
function ZE(u, s = [], p, m = "", E = /* @__PURE__ */ new Set()) {
  const T = {
    value: p
  };
  if (!u(p) && !E.has(p)) {
    E.add(p), T.children = {};
    for (const d in p) {
      const L = m ? m + "." + d : d;
      s.length && s.indexOf(L) !== -1 || (T.children[d] = ZE(u, s, p[d], L));
    }
  }
  return T;
}
function eC(u, s = [], p, m, E = !1, T = "") {
  const d = p ? p.value : void 0, L = d === m;
  if (E && !L && !Number.isNaN(m))
    return {
      wasMutated: !0,
      path: T
    };
  if (u(d) || u(m))
    return {
      wasMutated: !1
    };
  const D = {};
  for (let j in p.children)
    D[j] = !0;
  for (let j in m)
    D[j] = !0;
  const k = s.length > 0;
  for (let j in D) {
    const U = T ? T + "." + j : j;
    if (k && s.some((J) => J instanceof RegExp ? J.test(U) : U === J))
      continue;
    const B = eC(u, s, p.children[j], m[j], L, U);
    if (B.wasMutated)
      return B;
  }
  return {
    wasMutated: !1
  };
}
function MA(u = {}) {
  {
    let s = function(L, D, k, j) {
      return JSON.stringify(L, p(D, j), k);
    }, p = function(L, D) {
      let k = [], j = [];
      return D || (D = function(U, B) {
        return k[0] === B ? "[Circular ~]" : "[Circular ~." + j.slice(0, k.indexOf(B)).join(".") + "]";
      }), function(U, B) {
        if (k.length > 0) {
          var z = k.indexOf(this);
          ~z ? k.splice(z + 1) : k.push(this), ~z ? j.splice(z, 1 / 0, U) : j.push(U), ~k.indexOf(B) && (B = D.call(this, U, B));
        } else k.push(B);
        return L == null ? B : L.call(this, U, B);
      };
    }, {
      isImmutable: m = DA,
      ignoredPaths: E,
      warnAfter: T = 32
    } = u;
    const d = OA.bind(null, m, E);
    return ({
      getState: L
    }) => {
      let D = L(), k = d(D), j;
      return (U) => (B) => {
        const z = XE(T, "ImmutableStateInvariantMiddleware");
        z.measureTime(() => {
          if (D = L(), j = k.detectMutations(), k = d(D), j.wasMutated)
            throw new Error(`A state mutation was detected between dispatches, in the path '${j.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const J = U(B);
        return z.measureTime(() => {
          if (D = L(), j = k.detectMutations(), k = d(D), j.wasMutated)
            throw new Error(`A state mutation was detected inside a dispatch, in the path: ${j.path || ""}. Take a look at the reducer(s) handling the action ${s(B)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), z.warnIfExceeded(), J;
      };
    };
  }
}
function tC(u) {
  const s = typeof u;
  return u == null || s === "string" || s === "boolean" || s === "number" || Array.isArray(u) || Jl(u);
}
function Qh(u, s = "", p = tC, m, E = [], T) {
  let d;
  if (!p(u))
    return {
      keyPath: s || "<root>",
      value: u
    };
  if (typeof u != "object" || u === null || T?.has(u)) return !1;
  const L = m != null ? m(u) : Object.entries(u), D = E.length > 0;
  for (const [k, j] of L) {
    const U = s ? s + "." + k : k;
    if (!(D && E.some((z) => z instanceof RegExp ? z.test(U) : U === z))) {
      if (!p(j))
        return {
          keyPath: U,
          value: j
        };
      if (typeof j == "object" && (d = Qh(j, U, p, m, E, T), d))
        return d;
    }
  }
  return T && nC(u) && T.add(u), !1;
}
function nC(u) {
  if (!Object.isFrozen(u)) return !1;
  for (const s of Object.values(u))
    if (!(typeof s != "object" || s === null) && !nC(s))
      return !1;
  return !0;
}
function AA(u = {}) {
  {
    const {
      isSerializable: s = tC,
      getEntries: p,
      ignoredActions: m = [],
      ignoredActionPaths: E = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: T = [],
      warnAfter: d = 32,
      ignoreState: L = !1,
      ignoreActions: D = !1,
      disableCache: k = !1
    } = u, j = !k && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (U) => (B) => (z) => {
      if (!BE(z))
        return B(z);
      const J = B(z), ze = XE(d, "SerializableStateInvariantMiddleware");
      return !D && !(m.length && m.indexOf(z.type) !== -1) && ze.measureTime(() => {
        const ve = Qh(z, "", s, p, E, j);
        if (ve) {
          const {
            keyPath: Re,
            value: G
          } = ve;
          console.error(`A non-serializable value was detected in an action, in the path: \`${Re}\`. Value:`, G, `
Take a look at the logic that dispatched this action: `, z, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), L || (ze.measureTime(() => {
        const ve = U.getState(), Re = Qh(ve, "", s, p, T, j);
        if (Re) {
          const {
            keyPath: G,
            value: ee
          } = Re;
          console.error(`A non-serializable value was detected in the state, in the path: \`${G}\`. Value:`, ee, `
Take a look at the reducer(s) handling this action type: ${z.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), ze.warnIfExceeded()), J;
    };
  }
}
function df(u) {
  return typeof u == "boolean";
}
var kA = () => function(s) {
  const {
    thunk: p = !0,
    immutableCheck: m = !0,
    serializableCheck: E = !0,
    actionCreatorCheck: T = !0
  } = s ?? {};
  let d = new JE();
  p && (df(p) ? d.push(EA) : d.push(CA(p.extraArgument)));
  {
    if (m) {
      let L = {};
      df(m) || (L = m), d.unshift(MA(L));
    }
    if (E) {
      let L = {};
      df(E) || (L = E), d.push(AA(L));
    }
    if (T) {
      let L = {};
      df(T) || (L = T), d.unshift(wA(L));
    }
  }
  return d;
}, LA = "RTK_autoBatch", AE = (u) => (s) => {
  setTimeout(s, u);
}, NA = (u = {
  type: "raf"
}) => (s) => (...p) => {
  const m = s(...p);
  let E = !0, T = !1, d = !1;
  const L = /* @__PURE__ */ new Set(), D = u.type === "tick" ? queueMicrotask : u.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : AE(10)
  ) : u.type === "callback" ? u.queueNotification : AE(u.timeout), k = () => {
    d = !1, T && (T = !1, L.forEach((j) => j()));
  };
  return Object.assign({}, m, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(j) {
      const U = () => E && j(), B = m.subscribe(U);
      return L.add(j), () => {
        B(), L.delete(j);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(j) {
      try {
        return E = !j?.meta?.[LA], T = !E, T && (d || (d = !0, D(k))), m.dispatch(j);
      } finally {
        E = !0;
      }
    }
  });
}, UA = (u) => function(p) {
  const {
    autoBatch: m = !0
  } = p ?? {};
  let E = new JE(u);
  return m && E.push(NA(typeof m == "object" ? m : void 0)), E;
};
function zA(u) {
  const s = kA(), {
    reducer: p = void 0,
    middleware: m,
    devTools: E = !0,
    preloadedState: T = void 0,
    enhancers: d = void 0
  } = u || {};
  let L;
  if (typeof p == "function")
    L = p;
  else if (Jl(p))
    L = VE(p);
  else
    throw new Error("`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (m && typeof m != "function")
    throw new Error("`middleware` field must be a callback");
  let D;
  if (typeof m == "function") {
    if (D = m(s), !Array.isArray(D))
      throw new Error("when using a middleware builder function, an array of middleware must be returned");
  } else
    D = s();
  if (D.some((J) => typeof J != "function"))
    throw new Error("each middleware provided to configureStore must be a function");
  let k = hf;
  E && (k = RA({
    // Enable capture of stack traces for dispatched Redux actions
    trace: KE.NODE_ENV !== "production",
    ...typeof E == "object" && E
  }));
  const j = sA(...D), U = UA(j);
  if (d && typeof d != "function")
    throw new Error("`enhancers` field must be a callback");
  let B = typeof d == "function" ? d(U) : U();
  if (!Array.isArray(B))
    throw new Error("`enhancers` callback must return an array");
  if (B.some((J) => typeof J != "function"))
    throw new Error("each enhancer provided to configureStore must be a function");
  D.length && !B.includes(j) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const z = k(...B);
  return HE(L, T, z);
}
function rC(u) {
  const s = {}, p = [];
  let m;
  const E = {
    addCase(T, d) {
      {
        if (p.length > 0)
          throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (m)
          throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const L = typeof T == "string" ? T : T.type;
      if (!L)
        throw new Error("`builder.addCase` cannot be called with an empty action type");
      if (L in s)
        throw new Error(`\`builder.addCase\` cannot be called with two reducers for the same action type '${L}'`);
      return s[L] = d, E;
    },
    addMatcher(T, d) {
      if (m)
        throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return p.push({
        matcher: T,
        reducer: d
      }), E;
    },
    addDefaultCase(T) {
      if (m)
        throw new Error("`builder.addDefaultCase` can only be called once");
      return m = T, E;
    }
  };
  return u(E), [s, p, m];
}
function jA(u) {
  return typeof u == "function";
}
function FA(u, s) {
  if (typeof s == "object")
    throw new Error("The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [p, m, E] = rC(s), T;
  if (jA(u))
    T = () => OE(u());
  else {
    const L = OE(u);
    T = () => L;
  }
  function d(L = T(), D) {
    let k = [p[D.type], ...m.filter(({
      matcher: j
    }) => j(D)).map(({
      reducer: j
    }) => j)];
    return k.filter((j) => !!j).length === 0 && (k = [E]), k.reduce((j, U) => {
      if (U)
        if (Qi(j)) {
          const z = U(j, D);
          return z === void 0 ? j : z;
        } else {
          if (Ma(j))
            return WE(j, (B) => U(B, D));
          {
            const B = U(j, D);
            if (B === void 0) {
              if (j === null)
                return j;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return B;
          }
        }
      return j;
    }, L);
  }
  return d.getInitialState = T, d;
}
var HA = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function VA(u, s) {
  return `${u}/${s}`;
}
function BA({
  creators: u
} = {}) {
  const s = u?.asyncThunk?.[HA];
  return function(m) {
    const {
      name: E,
      reducerPath: T = E
    } = m;
    if (!E)
      throw new Error("`name` is a required option for createSlice");
    typeof process < "u" && KE.NODE_ENV === "development" && m.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const d = (typeof m.reducers == "function" ? m.reducers($A()) : m.reducers) || {}, L = Object.keys(d), D = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, k = {
      addCase(G, ee) {
        const pe = typeof G == "string" ? G : G.type;
        if (!pe)
          throw new Error("`context.addCase` cannot be called with an empty action type");
        if (pe in D.sliceCaseReducersByType)
          throw new Error("`context.addCase` cannot be called with two reducers for the same action type: " + pe);
        return D.sliceCaseReducersByType[pe] = ee, k;
      },
      addMatcher(G, ee) {
        return D.sliceMatchers.push({
          matcher: G,
          reducer: ee
        }), k;
      },
      exposeAction(G, ee) {
        return D.actionCreators[G] = ee, k;
      },
      exposeCaseReducer(G, ee) {
        return D.sliceCaseReducersByName[G] = ee, k;
      }
    };
    L.forEach((G) => {
      const ee = d[G], pe = {
        reducerName: G,
        type: VA(E, G),
        createNotation: typeof m.reducers == "function"
      };
      IA(ee) ? GA(pe, ee, k, s) : YA(pe, ee, k);
    });
    function j() {
      if (typeof m.extraReducers == "object")
        throw new Error("The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [G = {}, ee = [], pe = void 0] = typeof m.extraReducers == "function" ? rC(m.extraReducers) : [m.extraReducers], Z = {
        ...G,
        ...D.sliceCaseReducersByType
      };
      return FA(m.initialState, (Ee) => {
        for (let ue in Z)
          Ee.addCase(ue, Z[ue]);
        for (let ue of D.sliceMatchers)
          Ee.addMatcher(ue.matcher, ue.reducer);
        for (let ue of ee)
          Ee.addMatcher(ue.matcher, ue.reducer);
        pe && Ee.addDefaultCase(pe);
      });
    }
    const U = (G) => G, B = /* @__PURE__ */ new Map();
    let z;
    function J(G, ee) {
      return z || (z = j()), z(G, ee);
    }
    function ze() {
      return z || (z = j()), z.getInitialState();
    }
    function ve(G, ee = !1) {
      function pe(Ee) {
        let ue = Ee[G];
        if (typeof ue > "u")
          if (ee)
            ue = ze();
          else
            throw new Error("selectSlice returned undefined for an uninjected slice reducer");
        return ue;
      }
      function Z(Ee = U) {
        const ue = ME(B, ee, () => /* @__PURE__ */ new WeakMap());
        return ME(ue, Ee, () => {
          const qt = {};
          for (const [Ze, gt] of Object.entries(m.selectors ?? {}))
            qt[Ze] = PA(gt, Ee, ze, ee);
          return qt;
        });
      }
      return {
        reducerPath: G,
        getSelectors: Z,
        get selectors() {
          return Z(pe);
        },
        selectSlice: pe
      };
    }
    const Re = {
      name: E,
      reducer: J,
      actions: D.actionCreators,
      caseReducers: D.sliceCaseReducersByName,
      getInitialState: ze,
      ...ve(T),
      injectInto(G, {
        reducerPath: ee,
        ...pe
      } = {}) {
        const Z = ee ?? T;
        return G.inject({
          reducerPath: Z,
          reducer: J
        }, pe), {
          ...Re,
          ...ve(Z, !0)
        };
      }
    };
    return Re;
  };
}
function PA(u, s, p, m) {
  function E(T, ...d) {
    let L = s(T);
    if (typeof L > "u")
      if (m)
        L = p();
      else
        throw new Error("selectState returned undefined for an uninjected slice reducer");
    return u(L, ...d);
  }
  return E.unwrapped = u, E;
}
var aC = /* @__PURE__ */ BA();
function $A() {
  function u(s, p) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: s,
      ...p
    };
  }
  return u.withTypes = () => u, {
    reducer(s) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [s.name](...p) {
          return s(...p);
        }
      }[s.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(s, p) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: s,
        reducer: p
      };
    },
    asyncThunk: u
  };
}
function YA({
  type: u,
  reducerName: s,
  createNotation: p
}, m, E) {
  let T, d;
  if ("reducer" in m) {
    if (p && !qA(m))
      throw new Error("Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    T = m.reducer, d = m.prepare;
  } else
    T = m;
  E.addCase(u, T).exposeCaseReducer(s, T).exposeAction(s, d ? DE(u, d) : DE(u));
}
function IA(u) {
  return u._reducerDefinitionType === "asyncThunk";
}
function qA(u) {
  return u._reducerDefinitionType === "reducerWithPrepare";
}
function GA({
  type: u,
  reducerName: s
}, p, m, E) {
  if (!E)
    throw new Error("Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: T,
    fulfilled: d,
    pending: L,
    rejected: D,
    settled: k,
    options: j
  } = p, U = E(u, T, j);
  m.exposeAction(s, U), d && m.addCase(U.fulfilled, d), L && m.addCase(U.pending, L), D && m.addCase(U.rejected, D), k && m.addMatcher(U.settled, k), m.exposeCaseReducer(s, {
    fulfilled: d || vf,
    pending: L || vf,
    rejected: D || vf,
    settled: k || vf
  });
}
function vf() {
}
const WA = {
  time: 600 * 1e3,
  currentIntervalId: void 0,
  isStopped: !0
}, Jh = (u) => aC({
  name: u,
  initialState: WA,
  reducers: {
    setIsStopped: (s, p) => {
      s.isStopped = p.payload;
    },
    setTime: (s, p) => {
      s.time = p.payload;
    },
    addTime: (s, p) => {
      s.time = s.time + p.payload;
    },
    subtractTime: (s, p) => {
      const m = s.time - p.payload;
      m > 0 ? s.time = m : (clearInterval(s.currentIntervalId), s.time = 0, s.isStopped = !0);
    },
    setCurrentIntervalId: (s, p) => {
      s.currentIntervalId = p.payload;
    }
  }
});
Jh("auction-timer");
Jh("maption-timer");
const iC = Jh("fighter-timer"), kE = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  width: "90%",
  textAlign: "center"
}, QA = () => {
  const { isShowAnnouncer: u, match: s } = FE(
    (p) => p.mainState
  );
  return /* @__PURE__ */ It.jsxDEV(It.Fragment, { children: u && s && /* @__PURE__ */ It.jsxDEV(
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
        /* @__PURE__ */ It.jsxDEV("div", { style: kE, children: [
          "#",
          s.teams[0].id,
          " ",
          s.teams[0].name
        ] }, void 0, !0, {
          fileName: "D:/projects/tribute-donation/scr-auc-fighter-adapter/components/Announcer.tsx",
          lineNumber: 34,
          columnNumber: 6
        }, void 0),
        /* @__PURE__ */ It.jsxDEV("span", { children: " VS " }, void 0, !1, {
          fileName: "D:/projects/tribute-donation/scr-auc-fighter-adapter/components/Announcer.tsx",
          lineNumber: 37,
          columnNumber: 6
        }, void 0),
        /* @__PURE__ */ It.jsxDEV("div", { style: kE, children: [
          "#",
          s.teams[1].id,
          " ",
          s.teams[1].name
        ] }, void 0, !0, {
          fileName: "D:/projects/tribute-donation/scr-auc-fighter-adapter/components/Announcer.tsx",
          lineNumber: 38,
          columnNumber: 6
        }, void 0)
      ]
    },
    void 0,
    !0,
    {
      fileName: "D:/projects/tribute-donation/scr-auc-fighter-adapter/components/Announcer.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    void 0
  ) }, void 0, !1, {
    fileName: "D:/projects/tribute-donation/scr-auc-fighter-adapter/components/Announcer.tsx",
    lineNumber: 17,
    columnNumber: 3
  }, void 0);
}, LE = {
  fontSize: 41,
  color: "red",
  fontStyle: "italic",
  fontWeight: "bold",
  position: "absolute",
  whiteSpace: "nowrap",
  overflow: "hidden"
}, KA = () => {
  const { isNewRoundStart: u, match: s } = FE(
    (p) => p.mainState
  );
  return /* @__PURE__ */ It.jsxDEV(It.Fragment, { children: s && u && /* @__PURE__ */ It.jsxDEV(It.Fragment, { children: [
    /* @__PURE__ */ It.jsxDEV("div", { style: { ...LE, transform: "translate(170px, 0px)" }, children: [
      "#",
      s.teams[0].id
    ] }, void 0, !0, {
      fileName: "D:/projects/tribute-donation/scr-auc-fighter-adapter/components/TeamsIds.tsx",
      lineNumber: 24,
      columnNumber: 6
    }, void 0),
    /* @__PURE__ */ It.jsxDEV("div", { style: { ...LE, transform: "translate(540px, 0px)" }, children: [
      "#",
      s.teams[1].id
    ] }, void 0, !0, {
      fileName: "D:/projects/tribute-donation/scr-auc-fighter-adapter/components/TeamsIds.tsx",
      lineNumber: 27,
      columnNumber: 6
    }, void 0)
  ] }, void 0, !0, {
    fileName: "D:/projects/tribute-donation/scr-auc-fighter-adapter/components/TeamsIds.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, void 0) }, void 0, !1, {
    fileName: "D:/projects/tribute-donation/scr-auc-fighter-adapter/components/TeamsIds.tsx",
    lineNumber: 21,
    columnNumber: 3
  }, void 0);
}, XA = () => /* @__PURE__ */ It.jsxDEV(
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
      /* @__PURE__ */ It.jsxDEV(QA, {}, void 0, !1, {
        fileName: "D:/projects/tribute-donation/scr-auc-fighter-adapter/App.tsx",
        lineNumber: 16,
        columnNumber: 4
      }, void 0),
      /* @__PURE__ */ It.jsxDEV(KA, {}, void 0, !1, {
        fileName: "D:/projects/tribute-donation/scr-auc-fighter-adapter/App.tsx",
        lineNumber: 17,
        columnNumber: 4
      }, void 0)
    ]
  },
  void 0,
  !0,
  {
    fileName: "D:/projects/tribute-donation/scr-auc-fighter-adapter/App.tsx",
    lineNumber: 6,
    columnNumber: 3
  },
  void 0
), JA = ({
  match: u,
  oldMatch: s
}) => {
  const p = game_.getMatch();
  if (!p) return;
  const m = u.teams[0], E = u.teams[1], T = s.teams[0], d = s.teams[1];
  p.getTeamA().getEnergybar().change(m.amount > T.amount ? 1e3 : -1e3), p.getTeamB().getEnergybar().change(E.amount > d.amount ? 1e3 : -1e3);
}, NE = ({
  amount: u,
  match: s,
  oldAmount: p,
  oldMatch: m
}) => {
  const E = u / (s.teams[0].amount + s.teams[1].amount), T = HEALTHBAR.MAX - HEALTHBAR.MAX * E;
  if (p && m) {
    const d = p / (m.teams[0].amount + m.teams[1].amount), L = HEALTHBAR.MAX - HEALTHBAR.MAX * d;
    return T - L;
  }
  return T;
}, oC = ({
  match: u,
  oldMatch: s
}) => {
  const p = u.teams[0], m = u.teams[1];
  game_.getMatch().getTeamA().getHealthbar().change(
    NE({
      amount: p.amount,
      match: u,
      oldMatch: s,
      oldAmount: s?.teams[0].amount
    })
  ), game_.getMatch().getTeamB().getHealthbar().change(
    NE({
      amount: m.amount,
      match: u,
      oldMatch: s,
      oldAmount: s?.teams[1].amount
    })
  );
}, ZA = (u) => {
  if (!u.length) return 0;
  const s = u.reduce((E, T) => E + T, 0), p = Math.random() * s;
  let m = 0;
  for (let E = 0; E < u.length; E++)
    if (m += u[E], p < m)
      return E;
  return u.length - 1;
}, ek = {
  isGameStarted: !1,
  isNewRoundStart: !1,
  isShowAnnouncer: !1,
  isShowMatchWinner: !1,
  winnerIndex: null,
  match: null,
  aucFighterSettings: null
}, uC = aC({
  name: "main",
  initialState: ek,
  reducers: {
    setAucFighterSettings: (u, s) => {
      u.aucFighterSettings = s.payload;
    },
    setIsShowMatchWinner: (u, s) => {
      u.isShowMatchWinner = s.payload;
    },
    setIsShowAnnouncer: (u, s) => {
      u.isShowAnnouncer = s.payload;
    },
    setAucFighterMatch: (u, s) => {
      u.match = s.payload;
    },
    updateAucFighterMatch: (u, s) => {
      u.match = s.payload;
    },
    setIsGameStarted: (u, s) => {
      u.isGameStarted = s.payload;
    },
    setWinnerIndex: (u, s) => {
      u.winnerIndex = s.payload;
    },
    setIsNewRoundStart: (u, s) => {
      u.isNewRoundStart = s.payload;
    }
  }
}), {
  setAucFighterSettings: tk,
  setIsGameStarted: Zh,
  setIsNewRoundStart: em,
  setWinnerIndex: nk,
  setAucFighterMatch: rk,
  updateAucFighterMatch: ak,
  setIsShowAnnouncer: Tf,
  setIsShowMatchWinner: Sk
} = uC.actions;
var ik = { NODE_ENV: "development" };
const ok = VE({
  mainState: uC.reducer,
  fighterTimerState: iC.reducer
}), uk = (u) => zA({
  reducer: ok,
  preloadedState: u,
  devTools: ik.NODE_ENV !== "production"
}), lt = uk(), lC = (u) => {
  const s = u.teams[0], p = u.teams[1], m = ZA([s.amount, p.amount]);
  lt.dispatch(nk(m));
}, lk = ({
  match: u,
  oldMatch: s
}) => {
  const p = game_.getMatch();
  if (!p) return;
  const m = u.teams[0], E = u.teams[1], T = s.teams[0], d = s.teams[1], L = p.getTeamA().getPlayers(), D = p.getTeamB().getPlayers();
  L.length < 3 && m.amount / T.amount >= 2 && p.getTeamA().addPlayer(
    p.getTeamA().getPlayer(0).User.getPlayer(),
    !0,
    !0
  ), D.length < 3 && E.amount / d.amount >= 2 && p.getTeamB().addPlayer(
    p.getTeamB().getPlayer(0).User.getPlayer(),
    !0,
    !0
  );
};
class sk {
  subscribers;
  constructor() {
    this.subscribers = [];
  }
  notifySubscribers(s, p) {
    for (const m of this.subscribers)
      m.id === s && m.callback(p);
  }
  subscribe(s, p) {
    return this.subscribers.push({ id: s, callback: p }), () => {
      this.subscribers = this.subscribers.filter(
        (m) => m.callback !== p
      );
    };
  }
}
class ck {
  constructor(s) {
    s.addEventListener("open", () => {
      localStorage.getItem("isHotReload") === "true" && (localStorage.removeItem("isHotReload"), location.reload());
    }), s.addEventListener("error", () => {
      localStorage.setItem("isHotReload", "true");
    });
  }
}
class fk extends sk {
  socket;
  url;
  hotReload;
  constructor(s) {
    super(), this.url = s, this.socket = null, this.hotReload = null;
  }
  connect() {
    (!this.socket || this.socket.readyState !== WebSocket.OPEN) && (this.socket = new WebSocket(this.url), this.hotReload = new ck(this.socket), this.socket.onmessage = (s) => {
      const p = JSON.parse(
        s.data
      );
      this.notifySubscribers(p.event, p.data);
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
      } catch (p) {
        console.error(p);
      }
  }
}
const ta = new fk("ws://localhost:12553/ws"), UE = [
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
ta.connect();
const { setTime: dk, subtractTime: vk, setCurrentIntervalId: pk } = iC.actions, hk = HitSystem.prototype.register;
HitSystem.prototype.register = function(u) {
  const s = game_.getMatch();
  if (!s) return;
  const p = lt.getState(), m = p.mainState.winnerIndex, E = s.getTeamA().getPlayers()[0], T = s.getTeamB().getPlayers()[0], d = m === 1 ? E.Id : T.Id;
  hk.call(this, u), p.fighterTimerState.time === 0 && u.PlayerID === d && (m === 0 ? s.getTeamB().getHealthbar().change(100) : s.getTeamA().getHealthbar().change(100));
};
const sC = () => {
  const u = setInterval(() => {
    lt.dispatch(vk(10));
  }, 10);
  lt.dispatch(pk(u));
}, cC = () => {
  const u = lt.getState();
  clearInterval(u.fighterTimerState.currentIntervalId);
};
$$init();
ta.subscribe(
  ea.StartAucFighterMatch,
  (u) => {
    lt.dispatch(Tf(!0));
    const s = u.teams[0], p = u.teams[1], m = stages_[UE[Math.floor(Math.random() * UE.length)]];
    lt.dispatch(rk(u)), game_.end(), __noDamage = !0, user1_.resetChar(s.character, !1, !0), user2_.resetChar(p.character, !0, !0), game_.startMatch(0, [0], [1], m, () => {
      ta.send({
        event: ea.AucFighterMatchPlaying,
        data: u.id
      });
    });
  }
);
announcer_.onNewRoundAnnounced = () => {
  const u = lt.getState(), { match: s, aucFighterSettings: p } = u.mainState;
  s && p && (oC({ match: s }), lC(s), cC(), lt.dispatch(Zh(!0)), lt.dispatch(dk(p.round_duration)), lt.dispatch(em(!0)), lt.dispatch(Tf(!1)), sC());
};
game_.onMatchEnd = () => {
  const u = lt.getState(), { winnerIndex: s, isGameStarted: p, match: m } = u.mainState;
  m && p && s !== null && (lt.dispatch(Zh(!1)), lt.dispatch(em(!1)), lt.dispatch(Tf(!1)), ta.send({
    event: ea.AucFighterMatchEnd,
    data: {
      matchId: m.id,
      winnerIndex: s
    }
  }));
};
ta.subscribe(ea.PauseAucFighterMatch, () => {
  const u = lt.getState(), { match: s } = u.mainState;
  game_.pause(), cC(), s && ta.send({
    event: ea.AucFighterMatchPaused,
    data: s.id
  });
});
ta.subscribe(ea.ResumeAucFighterMatch, () => {
  game_.resume(), sC();
});
ta.subscribe(ea.CancelAucFighterMatch, () => {
  lt.dispatch(Zh(!1)), lt.dispatch(em(!1)), lt.dispatch(Tf(!1)), game_.end();
});
ta.subscribe(
  ea.UpdateAucFighterMatch,
  (u) => {
    const s = lt.getState(), { match: p, aucFighterSettings: m } = s.mainState;
    m && p && p.id === u.id && (oC({ match: u, oldMatch: p }), JA({ match: u, oldMatch: p }), m.is_add_players && lk({ match: u, oldMatch: p }), lC(u), lt.dispatch(ak(u)));
  }
);
ta.subscribe(
  ea.AucFighterSettings,
  (u) => {
    lt.dispatch(tk(u));
  }
);
document.addEventListener("keydown", function(u) {
  u.ctrlKey && u.key === "1" && (u.preventDefault(), game_.getMatch()?.getTeamA().getPlayer(0).Ai.release());
});
document.addEventListener("keydown", function(u) {
  u.ctrlKey && u.key === "2" && (u.preventDefault(), game_.getMatch()?.getTeamA().getPlayer(0).enableAI());
});
NM.createRoot(
  document.getElementById("auc-fighter-adapter")
).render(
  /* @__PURE__ */ It.jsxDEV(wM.StrictMode, { children: /* @__PURE__ */ It.jsxDEV(XM, { store: lt, children: /* @__PURE__ */ It.jsxDEV(XA, {}, void 0, !1, {
    fileName: "D:/projects/tribute-donation/scr-auc-fighter-adapter/main.tsx",
    lineNumber: 204,
    columnNumber: 4
  }, void 0) }, void 0, !1, {
    fileName: "D:/projects/tribute-donation/scr-auc-fighter-adapter/main.tsx",
    lineNumber: 203,
    columnNumber: 3
  }, void 0) }, void 0, !1, {
    fileName: "D:/projects/tribute-donation/scr-auc-fighter-adapter/main.tsx",
    lineNumber: 202,
    columnNumber: 2
  }, void 0)
);
