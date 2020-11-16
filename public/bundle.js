/*! For license information please see bundle.js.LICENSE.txt */
!(function () {
    'use strict'
    var e = {
            121: function (e, t, n) {
                n.d(t, {
                    Z: function () {
                        return r
                    },
                }),
                    (e = n.hmd(e))
                var r = (function (e) {
                    var t,
                        n = e.Symbol
                    return (
                        'function' == typeof n
                            ? n.observable
                                ? (t = n.observable)
                                : ((t = n('observable')), (n.observable = t))
                            : (t = '@@observable'),
                        t
                    )
                })(
                    'undefined' != typeof self
                        ? self
                        : 'undefined' != typeof window
                        ? window
                        : void 0 !== n.g
                        ? n.g
                        : e
                )
            },
        },
        t = {}
    function n(r) {
        if (t[r]) return t[r].exports
        var o = (t[r] = { id: r, loaded: !1, exports: {} })
        return e[r](o, o.exports, n), (o.loaded = !0), o.exports
    }
    ;(n.d = function (e, t) {
        for (var r in t)
            n.o(t, r) &&
                !n.o(e, r) &&
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
    }),
        (n.g = (function () {
            if ('object' == typeof globalThis) return globalThis
            try {
                return this || new Function('return this')()
            } catch (e) {
                if ('object' == typeof window) return window
            }
        })()),
        (n.hmd = function (e) {
            return (
                (e = Object.create(e)).children || (e.children = []),
                Object.defineProperty(e, 'exports', {
                    enumerable: !0,
                    set: function () {
                        throw new Error(
                            'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' +
                                e.id
                        )
                    },
                }),
                e
            )
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }),
        (function () {
            function e(e) {
                for (
                    var t = arguments.length,
                        n = Array(t > 1 ? t - 1 : 0),
                        r = 1;
                    r < t;
                    r++
                )
                    n[r - 1] = arguments[r]
                throw Error(
                    '[Immer] minified error nr: ' +
                        e +
                        (n.length ? ' ' + n.join(',') : '') +
                        '. Find the full error at: https://bit.ly/3cXEKWf'
                )
            }
            function t(e) {
                return !!e && !!e[U]
            }
            function r(e) {
                return (
                    !!e &&
                    ((function (e) {
                        if (!e || 'object' != typeof e) return !1
                        var t = Object.getPrototypeOf(e)
                        return !t || t === Object.prototype
                    })(e) ||
                        Array.isArray(e) ||
                        !!e[K] ||
                        !!e.constructor[K] ||
                        f(e) ||
                        l(e))
                )
            }
            function o(e, t, n) {
                void 0 === n && (n = !1),
                    0 === i(e)
                        ? (n ? Object.keys : W)(e).forEach(function (r) {
                              ;(n && 'symbol' == typeof r) || t(r, e[r], e)
                          })
                        : e.forEach(function (n, r) {
                              return t(r, n, e)
                          })
            }
            function i(e) {
                var t = e[U]
                return t
                    ? t.i > 3
                        ? t.i - 4
                        : t.i
                    : Array.isArray(e)
                    ? 1
                    : f(e)
                    ? 2
                    : l(e)
                    ? 3
                    : 0
            }
            function a(e, t) {
                return 2 === i(e)
                    ? e.has(t)
                    : Object.prototype.hasOwnProperty.call(e, t)
            }
            function c(e, t, n) {
                var r = i(e)
                2 === r
                    ? e.set(t, n)
                    : 3 === r
                    ? (e.delete(t), e.add(n))
                    : (e[t] = n)
            }
            function u(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
            }
            function f(e) {
                return L && e instanceof Map
            }
            function l(e) {
                return F && e instanceof Set
            }
            function s(e) {
                return e.o || e.t
            }
            function d(e) {
                if (Array.isArray(e)) return Array.prototype.slice.call(e)
                var t = H(e)
                delete t[U]
                for (var n = W(t), r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = t[o]
                    !1 === i.writable &&
                        ((i.writable = !0), (i.configurable = !0)),
                        (i.get || i.set) &&
                            (t[o] = {
                                configurable: !0,
                                writable: !0,
                                enumerable: i.enumerable,
                                value: e[o],
                            })
                }
                return Object.create(Object.getPrototypeOf(e), t)
            }
            function p(e, n) {
                y(e) ||
                    t(e) ||
                    !r(e) ||
                    (i(e) > 1 && (e.set = e.add = e.clear = e.delete = h),
                    Object.freeze(e),
                    n &&
                        o(
                            e,
                            function (e, t) {
                                return p(t, !0)
                            },
                            !0
                        ))
            }
            function h() {
                e(2)
            }
            function y(e) {
                return null == e || 'object' != typeof e || Object.isFrozen(e)
            }
            function v(t) {
                var n = Y[t]
                return n || e(19, t), n
            }
            function m() {
                return M
            }
            function b(e, t) {
                t && (v('Patches'), (e.u = []), (e.s = []), (e.v = t))
            }
            function g(e) {
                w(e), e.p.forEach(P), (e.p = null)
            }
            function w(e) {
                e === M && (M = e.l)
            }
            function O(e) {
                return (M = { p: [], l: M, h: e, m: !0, _: 0 })
            }
            function P(e) {
                var t = e[U]
                0 === t.i || 1 === t.i ? t.j() : (t.g = !0)
            }
            function j(t, n) {
                n._ = n.p.length
                var o = n.p[0],
                    i = void 0 !== t && t !== o
                return (
                    n.h.O || v('ES5').S(n, t, i),
                    i
                        ? (o[U].P && (g(n), e(4)),
                          r(t) && ((t = E(n, t)), n.l || A(n, t)),
                          n.u && v('Patches').M(o[U], t, n.u, n.s))
                        : (t = E(n, o, [])),
                    g(n),
                    n.u && n.v(n.u, n.s),
                    t !== B ? t : void 0
                )
            }
            function E(e, t, n) {
                if (y(t)) return t
                var r = t[U]
                if (!r)
                    return (
                        o(
                            t,
                            function (o, i) {
                                return x(e, r, t, o, i, n)
                            },
                            !0
                        ),
                        t
                    )
                if (r.A !== e) return t
                if (!r.P) return A(e, r.t, !0), r.t
                if (!r.I) {
                    ;(r.I = !0), r.A._--
                    var i = 4 === r.i || 5 === r.i ? (r.o = d(r.k)) : r.o
                    o(3 === r.i ? new Set(i) : i, function (t, o) {
                        return x(e, r, i, t, o, n)
                    }),
                        A(e, i, !1),
                        n && e.u && v('Patches').R(r, n, e.u, e.s)
                }
                return r.o
            }
            function x(e, n, o, i, u, f) {
                if (t(u)) {
                    var l = E(
                        e,
                        u,
                        f && n && 3 !== n.i && !a(n.D, i) ? f.concat(i) : void 0
                    )
                    if ((c(o, i, l), !t(l))) return
                    e.m = !1
                }
                if (r(u) && !y(u)) {
                    if (!e.h.N && e._ < 1) return
                    E(e, u), (n && n.A.l) || A(e, u)
                }
            }
            function A(e, t, n) {
                void 0 === n && (n = !1), e.h.N && e.m && p(t, n)
            }
            function S(e, t) {
                var n = e[U]
                return (n ? s(n) : e)[t]
            }
            function D(e, t) {
                if (t in e)
                    for (var n = Object.getPrototypeOf(e); n; ) {
                        var r = Object.getOwnPropertyDescriptor(n, t)
                        if (r) return r
                        n = Object.getPrototypeOf(n)
                    }
            }
            function C(e) {
                e.P || ((e.P = !0), e.l && C(e.l))
            }
            function N(e) {
                e.o || (e.o = d(e.t))
            }
            function k(e, t, n) {
                var r = f(t)
                    ? v('MapSet').T(t, n)
                    : l(t)
                    ? v('MapSet').F(t, n)
                    : e.O
                    ? (function (e, t) {
                          var n = Array.isArray(e),
                              r = {
                                  i: n ? 1 : 0,
                                  A: t ? t.A : m(),
                                  P: !1,
                                  I: !1,
                                  D: {},
                                  l: t,
                                  t: e,
                                  k: null,
                                  o: null,
                                  j: null,
                                  C: !1,
                              },
                              o = r,
                              i = X
                          n && ((o = [r]), (i = Z))
                          var a = Proxy.revocable(o, i),
                              c = a.revoke,
                              u = a.proxy
                          return (r.k = u), (r.j = c), u
                      })(t, n)
                    : v('ES5').J(t, n)
                return (n ? n.A : m()).p.push(r), r
            }
            function T(n) {
                return (
                    t(n) || e(22, n),
                    (function e(t) {
                        if (!r(t)) return t
                        var n,
                            a = t[U],
                            u = i(t)
                        if (a) {
                            if (!a.P && (a.i < 4 || !v('ES5').K(a))) return a.t
                            ;(a.I = !0), (n = _(t, u)), (a.I = !1)
                        } else n = _(t, u)
                        return (
                            o(n, function (t, r) {
                                ;(a &&
                                    (function (e, t) {
                                        return 2 === i(e) ? e.get(t) : e[t]
                                    })(a.t, t) === r) ||
                                    c(n, t, e(r))
                            }),
                            3 === u ? new Set(n) : n
                        )
                    })(n)
                )
            }
            function _(e, t) {
                switch (t) {
                    case 2:
                        return new Map(e)
                    case 3:
                        return Array.from(e)
                }
                return d(e)
            }
            var I,
                M,
                R =
                    'undefined' != typeof Symbol &&
                    'symbol' == typeof Symbol('x'),
                L = 'undefined' != typeof Map,
                F = 'undefined' != typeof Set,
                z =
                    'undefined' != typeof Proxy &&
                    void 0 !== Proxy.revocable &&
                    'undefined' != typeof Reflect,
                B = R
                    ? Symbol.for('immer-nothing')
                    : (((I = {})['immer-nothing'] = !0), I),
                K = R ? Symbol.for('immer-draftable') : '__$immer_draftable',
                U = R ? Symbol.for('immer-state') : '__$immer_state',
                W =
                    ('undefined' != typeof Symbol && Symbol.iterator,
                    'undefined' != typeof Reflect && Reflect.ownKeys
                        ? Reflect.ownKeys
                        : void 0 !== Object.getOwnPropertySymbols
                        ? function (e) {
                              return Object.getOwnPropertyNames(e).concat(
                                  Object.getOwnPropertySymbols(e)
                              )
                          }
                        : Object.getOwnPropertyNames),
                H =
                    Object.getOwnPropertyDescriptors ||
                    function (e) {
                        var t = {}
                        return (
                            W(e).forEach(function (n) {
                                t[n] = Object.getOwnPropertyDescriptor(e, n)
                            }),
                            t
                        )
                    },
                Y = {},
                X = {
                    get: function (e, t) {
                        if (t === U) return e
                        var n = s(e)
                        if (!a(n, t))
                            return (function (e, t, n) {
                                var r,
                                    o = D(t, n)
                                return o
                                    ? 'value' in o
                                        ? o.value
                                        : null === (r = o.get) || void 0 === r
                                        ? void 0
                                        : r.call(e.k)
                                    : void 0
                            })(e, n, t)
                        var o = n[t]
                        return e.I || !r(o)
                            ? o
                            : o === S(e.t, t)
                            ? (N(e), (e.o[t] = k(e.A.h, o, e)))
                            : o
                    },
                    has: function (e, t) {
                        return t in s(e)
                    },
                    ownKeys: function (e) {
                        return Reflect.ownKeys(s(e))
                    },
                    set: function (e, t, n) {
                        var r = D(s(e), t)
                        if (null == r ? void 0 : r.set)
                            return r.set.call(e.k, n), !0
                        if (!e.P) {
                            var o = S(s(e), t),
                                i = null == o ? void 0 : o[U]
                            if (i && i.t === n)
                                return (e.o[t] = n), (e.D[t] = !1), !0
                            if (u(n, o) && (void 0 !== n || a(e.t, t)))
                                return !0
                            N(e), C(e)
                        }
                        return (e.o[t] = n), (e.D[t] = !0), !0
                    },
                    deleteProperty: function (e, t) {
                        return (
                            void 0 !== S(e.t, t) || t in e.t
                                ? ((e.D[t] = !1), N(e), C(e))
                                : delete e.D[t],
                            e.o && delete e.o[t],
                            !0
                        )
                    },
                    getOwnPropertyDescriptor: function (e, t) {
                        var n = s(e),
                            r = Reflect.getOwnPropertyDescriptor(n, t)
                        return r
                            ? {
                                  writable: !0,
                                  configurable: 1 !== e.i || 'length' !== t,
                                  enumerable: r.enumerable,
                                  value: n[t],
                              }
                            : r
                    },
                    defineProperty: function () {
                        e(11)
                    },
                    getPrototypeOf: function (e) {
                        return Object.getPrototypeOf(e.t)
                    },
                    setPrototypeOf: function () {
                        e(12)
                    },
                },
                Z = {}
            o(X, function (e, t) {
                Z[e] = function () {
                    return (
                        (arguments[0] = arguments[0][0]),
                        t.apply(this, arguments)
                    )
                }
            }),
                (Z.deleteProperty = function (e, t) {
                    return X.deleteProperty.call(this, e[0], t)
                }),
                (Z.set = function (e, t, n) {
                    return X.set.call(this, e[0], t, n, e[0])
                })
            var q = new ((function () {
                    function n(e) {
                        ;(this.O = z),
                            (this.N = !1),
                            'boolean' ==
                                typeof (null == e ? void 0 : e.useProxies) &&
                                this.setUseProxies(e.useProxies),
                            'boolean' ==
                                typeof (null == e ? void 0 : e.autoFreeze) &&
                                this.setAutoFreeze(e.autoFreeze),
                            (this.produce = this.produce.bind(this)),
                            (this.produceWithPatches = this.produceWithPatches.bind(
                                this
                            ))
                    }
                    var o = n.prototype
                    return (
                        (o.produce = function (t, n, o) {
                            if (
                                'function' == typeof t &&
                                'function' != typeof n
                            ) {
                                var i = n
                                n = t
                                var a = this
                                return function (e) {
                                    var t = this
                                    void 0 === e && (e = i)
                                    for (
                                        var r = arguments.length,
                                            o = Array(r > 1 ? r - 1 : 0),
                                            c = 1;
                                        c < r;
                                        c++
                                    )
                                        o[c - 1] = arguments[c]
                                    return a.produce(e, function (e) {
                                        var r
                                        return (r = n).call.apply(
                                            r,
                                            [t, e].concat(o)
                                        )
                                    })
                                }
                            }
                            var c
                            if (
                                ('function' != typeof n && e(6),
                                void 0 !== o && 'function' != typeof o && e(7),
                                r(t))
                            ) {
                                var u = O(this),
                                    f = k(this, t, void 0),
                                    l = !0
                                try {
                                    ;(c = n(f)), (l = !1)
                                } finally {
                                    l ? g(u) : w(u)
                                }
                                return 'undefined' != typeof Promise &&
                                    c instanceof Promise
                                    ? c.then(
                                          function (e) {
                                              return b(u, o), j(e, u)
                                          },
                                          function (e) {
                                              throw (g(u), e)
                                          }
                                      )
                                    : (b(u, o), j(c, u))
                            }
                            if (!t || 'object' != typeof t) {
                                if ((c = n(t)) === B) return
                                return (
                                    void 0 === c && (c = t),
                                    this.N && p(c, !0),
                                    c
                                )
                            }
                            e(21, t)
                        }),
                        (o.produceWithPatches = function (e, t) {
                            var n,
                                r,
                                o = this
                            return 'function' == typeof e
                                ? function (t) {
                                      for (
                                          var n = arguments.length,
                                              r = Array(n > 1 ? n - 1 : 0),
                                              i = 1;
                                          i < n;
                                          i++
                                      )
                                          r[i - 1] = arguments[i]
                                      return o.produceWithPatches(t, function (
                                          t
                                      ) {
                                          return e.apply(void 0, [t].concat(r))
                                      })
                                  }
                                : [
                                      this.produce(e, t, function (e, t) {
                                          ;(n = e), (r = t)
                                      }),
                                      n,
                                      r,
                                  ]
                        }),
                        (o.createDraft = function (n) {
                            r(n) || e(8), t(n) && (n = T(n))
                            var o = O(this),
                                i = k(this, n, void 0)
                            return (i[U].C = !0), w(o), i
                        }),
                        (o.finishDraft = function (e, t) {
                            var n = (e && e[U]).A
                            return b(n, t), j(void 0, n)
                        }),
                        (o.setAutoFreeze = function (e) {
                            this.N = e
                        }),
                        (o.setUseProxies = function (t) {
                            t && !z && e(20), (this.O = t)
                        }),
                        (o.applyPatches = function (e, n) {
                            var r
                            for (r = n.length - 1; r >= 0; r--) {
                                var o = n[r]
                                if (0 === o.path.length && 'replace' === o.op) {
                                    e = o.value
                                    break
                                }
                            }
                            var i = v('Patches').$
                            return t(e)
                                ? i(e, n)
                                : this.produce(e, function (e) {
                                      return i(e, n.slice(r + 1))
                                  })
                        }),
                        n
                    )
                })())(),
                V = q.produce,
                $ =
                    (q.produceWithPatches.bind(q),
                    q.setAutoFreeze.bind(q),
                    q.setUseProxies.bind(q),
                    q.applyPatches.bind(q),
                    q.createDraft.bind(q),
                    q.finishDraft.bind(q),
                    V),
                G = n(121),
                J = function () {
                    return Math.random()
                        .toString(36)
                        .substring(7)
                        .split('')
                        .join('.')
                },
                Q = {
                    INIT: '@@redux/INIT' + J(),
                    REPLACE: '@@redux/REPLACE' + J(),
                    PROBE_UNKNOWN_ACTION: function () {
                        return '@@redux/PROBE_UNKNOWN_ACTION' + J()
                    },
                }
            function ee(e) {
                if ('object' != typeof e || null === e) return !1
                for (var t = e; null !== Object.getPrototypeOf(t); )
                    t = Object.getPrototypeOf(t)
                return Object.getPrototypeOf(e) === t
            }
            function te(e, t, n) {
                var r
                if (
                    ('function' == typeof t && 'function' == typeof n) ||
                    ('function' == typeof n &&
                        'function' == typeof arguments[3])
                )
                    throw new Error(
                        'It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.'
                    )
                if (
                    ('function' == typeof t &&
                        void 0 === n &&
                        ((n = t), (t = void 0)),
                    void 0 !== n)
                ) {
                    if ('function' != typeof n)
                        throw new Error(
                            'Expected the enhancer to be a function.'
                        )
                    return n(te)(e, t)
                }
                if ('function' != typeof e)
                    throw new Error('Expected the reducer to be a function.')
                var o = e,
                    i = t,
                    a = [],
                    c = a,
                    u = !1
                function f() {
                    c === a && (c = a.slice())
                }
                function l() {
                    if (u)
                        throw new Error(
                            'You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.'
                        )
                    return i
                }
                function s(e) {
                    if ('function' != typeof e)
                        throw new Error(
                            'Expected the listener to be a function.'
                        )
                    if (u)
                        throw new Error(
                            'You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.'
                        )
                    var t = !0
                    return (
                        f(),
                        c.push(e),
                        function () {
                            if (t) {
                                if (u)
                                    throw new Error(
                                        'You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.'
                                    )
                                ;(t = !1), f()
                                var n = c.indexOf(e)
                                c.splice(n, 1), (a = null)
                            }
                        }
                    )
                }
                function d(e) {
                    if (!ee(e))
                        throw new Error(
                            'Actions must be plain objects. Use custom middleware for async actions.'
                        )
                    if (void 0 === e.type)
                        throw new Error(
                            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
                        )
                    if (u) throw new Error('Reducers may not dispatch actions.')
                    try {
                        ;(u = !0), (i = o(i, e))
                    } finally {
                        u = !1
                    }
                    for (var t = (a = c), n = 0; n < t.length; n++) (0, t[n])()
                    return e
                }
                function p(e) {
                    if ('function' != typeof e)
                        throw new Error(
                            'Expected the nextReducer to be a function.'
                        )
                    ;(o = e), d({ type: Q.REPLACE })
                }
                function h() {
                    var e,
                        t = s
                    return (
                        ((e = {
                            subscribe: function (e) {
                                if ('object' != typeof e || null === e)
                                    throw new TypeError(
                                        'Expected the observer to be an object.'
                                    )
                                function n() {
                                    e.next && e.next(l())
                                }
                                return n(), { unsubscribe: t(n) }
                            },
                        })[G.Z] = function () {
                            return this
                        }),
                        e
                    )
                }
                return (
                    d({ type: Q.INIT }),
                    ((r = {
                        dispatch: d,
                        subscribe: s,
                        getState: l,
                        replaceReducer: p,
                    })[G.Z] = h),
                    r
                )
            }
            function ne(e, t) {
                var n = t && t.type
                return (
                    'Given ' +
                    ((n && 'action "' + String(n) + '"') || 'an action') +
                    ', reducer "' +
                    e +
                    '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
                )
            }
            function re(e) {
                for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                    var o = t[r]
                    'function' == typeof e[o] && (n[o] = e[o])
                }
                var i,
                    a = Object.keys(n)
                try {
                    !(function (e) {
                        Object.keys(e).forEach(function (t) {
                            var n = e[t]
                            if (void 0 === n(void 0, { type: Q.INIT }))
                                throw new Error(
                                    'Reducer "' +
                                        t +
                                        '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don\'t want to set a value for this reducer, you can use null instead of undefined.'
                                )
                            if (
                                void 0 ===
                                n(void 0, { type: Q.PROBE_UNKNOWN_ACTION() })
                            )
                                throw new Error(
                                    'Reducer "' +
                                        t +
                                        '" returned undefined when probed with a random type. Don\'t try to handle ' +
                                        Q.INIT +
                                        ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
                                )
                        })
                    })(n)
                } catch (e) {
                    i = e
                }
                return function (e, t) {
                    if ((void 0 === e && (e = {}), i)) throw i
                    for (var r = !1, o = {}, c = 0; c < a.length; c++) {
                        var u = a[c],
                            f = n[u],
                            l = e[u],
                            s = f(l, t)
                        if (void 0 === s) {
                            var d = ne(u, t)
                            throw new Error(d)
                        }
                        ;(o[u] = s), (r = r || s !== l)
                    }
                    return (r = r || a.length !== Object.keys(e).length) ? o : e
                }
            }
            function oe(e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n),
                    e
                )
            }
            function ie(e, t) {
                var n = Object.keys(e)
                return (
                    Object.getOwnPropertySymbols &&
                        n.push.apply(n, Object.getOwnPropertySymbols(e)),
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t
                            ).enumerable
                        })),
                    n
                )
            }
            function ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? ie(n, !0).forEach(function (t) {
                              oe(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                          )
                        : ie(n).forEach(function (t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                              )
                          })
                }
                return e
            }
            function ce() {
                for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                )
                    t[n] = arguments[n]
                return 0 === t.length
                    ? function (e) {
                          return e
                      }
                    : 1 === t.length
                    ? t[0]
                    : t.reduce(function (e, t) {
                          return function () {
                              return e(t.apply(void 0, arguments))
                          }
                      })
            }
            function ue() {
                for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                )
                    t[n] = arguments[n]
                return function (e) {
                    return function () {
                        var n = e.apply(void 0, arguments),
                            r = function () {
                                throw new Error(
                                    'Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.'
                                )
                            },
                            o = {
                                getState: n.getState,
                                dispatch: function () {
                                    return r.apply(void 0, arguments)
                                },
                            },
                            i = t.map(function (e) {
                                return e(o)
                            })
                        return ae({}, n, {
                            dispatch: (r = ce.apply(void 0, i)(n.dispatch)),
                        })
                    }
                }
            }
            function fe(e, t) {
                return e === t
            }
            function le(e, t, n) {
                if (null === t || null === n || t.length !== n.length) return !1
                for (var r = t.length, o = 0; o < r; o++)
                    if (!e(t[o], n[o])) return !1
                return !0
            }
            function se(e) {
                return function (t) {
                    var n = t.dispatch,
                        r = t.getState
                    return function (t) {
                        return function (o) {
                            return 'function' == typeof o ? o(n, r, e) : t(o)
                        }
                    }
                }
            }
            !(function (e) {
                for (
                    var t = arguments.length,
                        n = Array(t > 1 ? t - 1 : 0),
                        r = 1;
                    r < t;
                    r++
                )
                    n[r - 1] = arguments[r]
            })(function (e) {
                var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : fe,
                    n = null,
                    r = null
                return function () {
                    return (
                        le(t, n, arguments) || (r = e.apply(null, arguments)),
                        (n = arguments),
                        r
                    )
                }
            })
            var de = se()
            de.withExtraArgument = se
            var pe = de
            function he() {
                return (he =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t]
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) &&
                                    (e[r] = n[r])
                        }
                        return e
                    }).apply(this, arguments)
            }
            function ye(e) {
                return (ye = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e)
                      })(e)
            }
            function ve(e, t) {
                return (ve =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e
                    })(e, t)
            }
            function me() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                    return (
                        Date.prototype.toString.call(
                            Reflect.construct(Date, [], function () {})
                        ),
                        !0
                    )
                } catch (e) {
                    return !1
                }
            }
            function be(e, t, n) {
                return (be = me()
                    ? Reflect.construct
                    : function (e, t, n) {
                          var r = [null]
                          r.push.apply(r, t)
                          var o = new (Function.bind.apply(e, r))()
                          return n && ve(o, n.prototype), o
                      }).apply(null, arguments)
            }
            function ge(e) {
                var t = 'function' == typeof Map ? new Map() : void 0
                return (ge = function (e) {
                    if (
                        null === e ||
                        ((n = e),
                        -1 ===
                            Function.toString.call(n).indexOf('[native code]'))
                    )
                        return e
                    var n
                    if ('function' != typeof e)
                        throw new TypeError(
                            'Super expression must either be null or a function'
                        )
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e)
                        t.set(e, r)
                    }
                    function r() {
                        return be(e, arguments, ye(this).constructor)
                    }
                    return (
                        (r.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: r,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0,
                            },
                        })),
                        ve(r, e)
                    )
                })(e)
            }
            var we =
                'undefined' != typeof window &&
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                    : function () {
                          if (0 !== arguments.length)
                              return 'object' == typeof arguments[0]
                                  ? ce
                                  : ce.apply(null, arguments)
                      }
            var Oe = (function (e) {
                var t, n
                function r() {
                    return e.apply(this, arguments) || this
                }
                ;(n = e),
                    ((t = r).prototype = Object.create(n.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = n)
                var o = r.prototype
                return (
                    (o.concat = function () {
                        for (
                            var t,
                                n = arguments.length,
                                o = new Array(n),
                                i = 0;
                            i < n;
                            i++
                        )
                            o[i] = arguments[i]
                        return be(
                            r,
                            (t = e.prototype.concat).call.apply(
                                t,
                                [this].concat(o)
                            )
                        )
                    }),
                    (o.prepend = function () {
                        for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                        )
                            t[n] = arguments[n]
                        return 1 === t.length && Array.isArray(t[0])
                            ? be(r, t[0].concat(this))
                            : be(r, t.concat(this))
                    }),
                    r
                )
            })(ge(Array))
            function Pe(e, t) {
                function n() {
                    if (t) {
                        var n = t.apply(void 0, arguments)
                        if (!n)
                            throw new Error(
                                'prepareAction did not return an object'
                            )
                        return he(
                            { type: e, payload: n.payload },
                            'meta' in n && { meta: n.meta },
                            {},
                            'error' in n && { error: n.error }
                        )
                    }
                    return {
                        type: e,
                        payload: arguments.length <= 0 ? void 0 : arguments[0],
                    }
                }
                return (
                    (n.toString = function () {
                        return '' + e
                    }),
                    (n.type = e),
                    (n.match = function (t) {
                        return t.type === e
                    }),
                    n
                )
            }
            function je(e) {
                var t,
                    n = {},
                    r = [],
                    o = {
                        addCase: function (e, t) {
                            var r = 'string' == typeof e ? e : e.type
                            if (r in n)
                                throw new Error(
                                    'addCase cannot be called with two reducers for the same action type'
                                )
                            return (n[r] = t), o
                        },
                        addMatcher: function (e, t) {
                            return r.push({ matcher: e, reducer: t }), o
                        },
                        addDefaultCase: function (e) {
                            return (t = e), o
                        },
                    }
                return e(o), [n, r, t]
            }
            'undefined' != typeof Symbol &&
                (Symbol.iterator ||
                    (Symbol.iterator = Symbol('Symbol.iterator'))),
                'undefined' != typeof Symbol &&
                    (Symbol.asyncIterator ||
                        (Symbol.asyncIterator = Symbol(
                            'Symbol.asyncIterator'
                        ))),
                (function () {
                    function e(e, t) {
                        var n = c[e]
                        return (
                            n
                                ? (n.enumerable = t)
                                : (c[e] = n = {
                                      configurable: !0,
                                      enumerable: t,
                                      get: function () {
                                          var t = this[U]
                                          return X.get(t, e)
                                      },
                                      set: function (t) {
                                          var n = this[U]
                                          X.set(n, e, t)
                                      },
                                  }),
                            n
                        )
                    }
                    function n(e) {
                        for (var t = e.length - 1; t >= 0; t--) {
                            var n = e[t][U]
                            if (!n.P)
                                switch (n.i) {
                                    case 5:
                                        i(n) && C(n)
                                        break
                                    case 4:
                                        r(n) && C(n)
                                }
                        }
                    }
                    function r(e) {
                        for (
                            var t = e.t, n = e.k, r = W(n), o = r.length - 1;
                            o >= 0;
                            o--
                        ) {
                            var i = r[o]
                            if (i !== U) {
                                var c = t[i]
                                if (void 0 === c && !a(t, i)) return !0
                                var f = n[i],
                                    l = f && f[U]
                                if (l ? l.t !== c : !u(f, c)) return !0
                            }
                        }
                        var s = !!t[U]
                        return r.length !== W(t).length + (s ? 0 : 1)
                    }
                    function i(e) {
                        var t = e.k
                        if (t.length !== e.t.length) return !0
                        var n = Object.getOwnPropertyDescriptor(t, t.length - 1)
                        return !(!n || n.get)
                    }
                    var c = {}
                    !(function (e, t) {
                        Y[e] = t
                    })('ES5', {
                        J: function (t, n) {
                            var r = Array.isArray(t),
                                o = (function (t, n) {
                                    if (t) {
                                        for (
                                            var r = Array(n.length), o = 0;
                                            o < n.length;
                                            o++
                                        )
                                            Object.defineProperty(
                                                r,
                                                '' + o,
                                                e(o, !0)
                                            )
                                        return r
                                    }
                                    var i = H(n)
                                    delete i[U]
                                    for (
                                        var a = W(i), c = 0;
                                        c < a.length;
                                        c++
                                    ) {
                                        var u = a[c]
                                        i[u] = e(u, t || !!i[u].enumerable)
                                    }
                                    return Object.create(
                                        Object.getPrototypeOf(n),
                                        i
                                    )
                                })(r, t),
                                i = {
                                    i: r ? 5 : 4,
                                    A: n ? n.A : m(),
                                    P: !1,
                                    I: !1,
                                    D: {},
                                    l: n,
                                    t: t,
                                    k: o,
                                    o: null,
                                    g: !1,
                                    C: !1,
                                }
                            return (
                                Object.defineProperty(o, U, {
                                    value: i,
                                    writable: !0,
                                }),
                                o
                            )
                        },
                        S: function (e, r, c) {
                            c
                                ? t(r) && r[U].A === e && n(e.p)
                                : (e.u &&
                                      (function e(t) {
                                          if (t && 'object' == typeof t) {
                                              var n = t[U]
                                              if (n) {
                                                  var r = n.t,
                                                      c = n.k,
                                                      u = n.D,
                                                      f = n.i
                                                  if (4 === f)
                                                      o(c, function (t) {
                                                          t !== U &&
                                                              (void 0 !==
                                                                  r[t] ||
                                                              a(r, t)
                                                                  ? u[t] ||
                                                                    e(c[t])
                                                                  : ((u[
                                                                        t
                                                                    ] = !0),
                                                                    C(n)))
                                                      }),
                                                          o(r, function (e) {
                                                              void 0 !== c[e] ||
                                                                  a(c, e) ||
                                                                  ((u[e] = !1),
                                                                  C(n))
                                                          })
                                                  else if (5 === f) {
                                                      if (
                                                          (i(n) &&
                                                              (C(n),
                                                              (u.length = !0)),
                                                          c.length < r.length)
                                                      )
                                                          for (
                                                              var l = c.length;
                                                              l < r.length;
                                                              l++
                                                          )
                                                              u[l] = !1
                                                      else
                                                          for (
                                                              var s = r.length;
                                                              s < c.length;
                                                              s++
                                                          )
                                                              u[s] = !0
                                                      for (
                                                          var d = Math.min(
                                                                  c.length,
                                                                  r.length
                                                              ),
                                                              p = 0;
                                                          p < d;
                                                          p++
                                                      )
                                                          void 0 === u[p] &&
                                                              e(c[p])
                                                  }
                                              }
                                          }
                                      })(e.p[0]),
                                  n(e.p))
                        },
                        K: function (e) {
                            return 4 === e.i ? r(e) : i(e)
                        },
                    })
                })()
            var Ee = (function (e) {
                    var n = e.name,
                        o = e.initialState
                    if (!n)
                        throw new Error(
                            '`name` is a required option for createSlice'
                        )
                    var i = e.reducers || {},
                        a =
                            void 0 === e.extraReducers
                                ? []
                                : 'function' == typeof e.extraReducers
                                ? je(e.extraReducers)
                                : [e.extraReducers],
                        c = a[0],
                        u = void 0 === c ? {} : c,
                        f = a[1],
                        l = void 0 === f ? [] : f,
                        s = a[2],
                        d = void 0 === s ? void 0 : s,
                        p = Object.keys(i),
                        h = {},
                        y = {},
                        v = {}
                    p.forEach(function (e) {
                        var t,
                            r,
                            o = i[e],
                            a = n + '/' + e
                        'reducer' in o
                            ? ((t = o.reducer), (r = o.prepare))
                            : (t = o),
                            (h[e] = t),
                            (y[a] = t),
                            (v[e] = r ? Pe(a, r) : Pe(a))
                    })
                    var m = (function (e, n, o, i) {
                        void 0 === o && (o = [])
                        var a = 'function' == typeof n ? je(n) : [n, o, i],
                            c = a[0],
                            u = a[1],
                            f = a[2]
                        return function (n, o) {
                            void 0 === n && (n = e)
                            var i = [c[o.type]].concat(
                                u
                                    .filter(function (e) {
                                        return (0, e.matcher)(o)
                                    })
                                    .map(function (e) {
                                        return e.reducer
                                    })
                            )
                            return (
                                0 ===
                                    i.filter(function (e) {
                                        return !!e
                                    }).length && (i = [f]),
                                i.reduce(function (e, n) {
                                    if (n) {
                                        if (t(e)) {
                                            var i = n(e, o)
                                            return void 0 === i ? e : i
                                        }
                                        if (r(e))
                                            return $(e, function (e) {
                                                return n(e, o)
                                            })
                                        var a = n(e, o)
                                        if (void 0 === a)
                                            throw Error(
                                                'A case reducer on a non-draftable value must not return undefined'
                                            )
                                        return a
                                    }
                                    return e
                                }, n)
                            )
                        }
                    })(o, he({}, u, {}, y), l, d)
                    return { name: n, reducer: m, actions: v, caseReducers: h }
                })({
                    name: 'testInitialData',
                    initialState: { displayData: 0 },
                    reducers: {
                        increment: function (e) {
                            e.displayData += 1
                        },
                        decrement: function (e) {
                            e.displayData -= 1
                        },
                        clearAll: function (e) {
                            e.displayData = 0
                        },
                    },
                }),
                xe = Ee.actions,
                Ae = xe.increment,
                Se = xe.decrement,
                De = xe.clearAll,
                Ce = (function (e) {
                    var t,
                        n = function (e) {
                            return (function (e) {
                                void 0 === e && (e = {})
                                var t = e,
                                    n = t.thunk,
                                    r = void 0 === n || n,
                                    o =
                                        (t.immutableCheck,
                                        t.serializableCheck,
                                        new Oe())
                                return (
                                    r &&
                                        ((function (e) {
                                            return 'boolean' == typeof e
                                        })(r)
                                            ? o.push(pe)
                                            : o.push(
                                                  pe.withExtraArgument(
                                                      r.extraArgument
                                                  )
                                              )),
                                    o
                                )
                            })(e)
                        },
                        r = e || {},
                        o = r.reducer,
                        i = void 0 === o ? void 0 : o,
                        a = r.middleware,
                        c = void 0 === a ? n() : a,
                        u = r.devTools,
                        f = void 0 === u || u,
                        l = r.preloadedState,
                        s = void 0 === l ? void 0 : l,
                        d = r.enhancers,
                        p = void 0 === d ? void 0 : d
                    if ('function' == typeof i) t = i
                    else {
                        if (
                            !(function (e) {
                                if ('object' != typeof e || null === e)
                                    return !1
                                for (
                                    var t = e;
                                    null !== Object.getPrototypeOf(t);

                                )
                                    t = Object.getPrototypeOf(t)
                                return Object.getPrototypeOf(e) === t
                            })(i)
                        )
                            throw new Error(
                                '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
                            )
                        t = re(i)
                    }
                    var h = ue.apply(void 0, 'function' == typeof c ? c(n) : c),
                        y = ce
                    f && (y = we(he({ trace: !1 }, 'object' == typeof f && f)))
                    var v = [h]
                    return (
                        Array.isArray(p)
                            ? (v = [h].concat(p))
                            : 'function' == typeof p && (v = p(v)),
                        te(t, s, y.apply(void 0, v))
                    )
                })({ reducer: re({ incrementDecrement: Ee.reducer }) }),
                Ne = new (function e() {
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                )
                        })(this, e),
                        (this.incrementDecrement = {
                            increment: function () {
                                return Ce.dispatch(Ae())
                            },
                            decrement: function () {
                                return Ce.dispatch(Se())
                            },
                            clearAll: function () {
                                return Ce.dispatch(De())
                            },
                        }),
                        e.mapAllDispatch || (e.mapAllDispatch = this),
                        e.mapAllDispatch
                    )
                })()
            Object.freeze(Ne)
            var ke,
                Te = Ne,
                _e = ['checked', 'selected', 'value'],
                Ie = {},
                Me = !1,
                Re = function (e) {
                    return Object.prototype.toString
                        .call(e)
                        .slice(8, -1)
                        .toLowerCase()
                }
            Ie.trueTypeOf = Re
            var Le = function (e) {
                if (Me) throw new Error(e)
            }
            Ie.err = Le
            var Fe = function (e, t) {
                    var n = Re(e)
                    if ('object' === n) {
                        var r = {}
                        for (var o in e)
                            e.hasOwnProperty(o) && (r[o] = Fe(e[o], t))
                        return r
                    }
                    return 'array' === n
                        ? e.map(function (e) {
                              return Fe(e, t)
                          })
                        : 'string' !== n || t
                        ? e
                        : e.replace(/[^\w. ]/gi, function (e) {
                              return '&#' + e.charCodeAt(0) + ';'
                          })
                },
                ze = function (e) {
                    e.debounce && window.cancelAnimationFrame(e.debounce),
                        (e.debounce = window.requestAnimationFrame(function () {
                            e.render()
                        }))
                },
                Be = function (e) {
                    return {
                        get: function (t, n) {
                            return ['object', 'array'].indexOf(Re(t[n])) > -1
                                ? new Proxy(t[n], Be(e))
                                : t[n]
                        },
                        set: function (t, n, r) {
                            return t[n] === r || ((t[n] = r), ze(e)), !0
                        },
                    }
                },
                Ke = function (e, t) {
                    var n = e.filter(t)
                    return n.length < 1 ? null : n[0]
                },
                Ue = function (e, t) {
                    if (!(e || (t && t.lagoon)))
                        return Le(
                            'You did not provide an element to make into a component.'
                        )
                    if (!t || (!t.template && !t.lagoon))
                        return Le(
                            'You did not provide a template for this component.'
                        )
                    var n = this,
                        r = (function (e, t) {
                            return e.setters
                                ? e.store
                                    ? null
                                    : e.data
                                : e.data && !e.store
                                ? new Proxy(e.data, Be(t))
                                : null
                        })(t, n),
                        o = t.store,
                        i = t.router,
                        a = t.setters,
                        c = t.getters
                    ;(n.debounce = null),
                        Object.defineProperties(n, {
                            elem: { value: e },
                            template: { value: t.template },
                            allowHTML: { value: t.allowHTML },
                            lagoon: { value: t.lagoon },
                            store: { value: o },
                            attached: { value: [] },
                            router: { value: i },
                        }),
                        Object.defineProperty(n, 'data', {
                            get: function () {
                                return a ? Fe(r, !0) : r
                            },
                            set: function (e) {
                                return (
                                    o ||
                                        a ||
                                        ((r = new Proxy(e, Be(n))), ze(n)),
                                    !0
                                )
                            },
                        }),
                        a &&
                            !o &&
                            Object.defineProperty(n, 'do', {
                                value: function (e) {
                                    if (!a[e])
                                        return Le(
                                            'There is no setter with this name.'
                                        )
                                    var t = Array.prototype.slice.call(
                                        arguments
                                    )
                                    ;(t[0] = r), a[e].apply(n, t), ze(n)
                                },
                            }),
                        c &&
                            !o &&
                            Object.defineProperty(n, 'get', {
                                value: function (e) {
                                    return c[e]
                                        ? c[e](r)
                                        : Le(
                                              'There is no getter with this name.'
                                          )
                                },
                            }),
                        i && 'addComponent' in i && i.addComponent(n),
                        o && 'attach' in o && o.attach(n),
                        t.attachTo &&
                            ('array' === Re(t.attachTo)
                                ? t.attachTo
                                : [t.attachTo]
                            ).forEach(function (e) {
                                'attach' in e && e.attach(n)
                            })
                }
            Ue.Store = function (e) {
                return (e.lagoon = !0), new Ue(null, e)
            }
            var We = function (e, t) {
                    t.forEach(function (t) {
                        e.style[t] = ''
                    })
                },
                He = function (e, t) {
                    t.forEach(function (t) {
                        if ('class' === t.att) e.className = t.value
                        else if ('style' === t.att)
                            !(function (e, t) {
                                var n = (function (e) {
                                        return e
                                            .split(';')
                                            .reduce(function (e, t) {
                                                var n = t.indexOf(':')
                                                return (
                                                    n &&
                                                        e.push({
                                                            name: t
                                                                .slice(0, n)
                                                                .trim(),
                                                            value: t
                                                                .slice(n + 1)
                                                                .trim(),
                                                        }),
                                                    e
                                                )
                                            }, [])
                                    })(t),
                                    r = Array.prototype.filter.call(
                                        e.style,
                                        function (t) {
                                            return (
                                                null ===
                                                Ke(n, function (n) {
                                                    return (
                                                        n.name === t &&
                                                        n.value === e.style[t]
                                                    )
                                                })
                                            )
                                        }
                                    )
                                We(e, r),
                                    (function (e, t) {
                                        t.forEach(function (t) {
                                            e.style[t.name] = t.value
                                        })
                                    })(e, n)
                            })(e, t.value)
                        else {
                            if (t.att in e)
                                try {
                                    ;(e[t.att] = t.value),
                                        e[t.att] ||
                                            0 === e[t.att] ||
                                            (e[t.att] = !0)
                                } catch (e) {}
                            try {
                                e.setAttribute(t.att, t.value)
                            } catch (e) {}
                        }
                    })
                },
                Ye = function (e, t) {
                    t.forEach(function (t) {
                        if ('class' === t.att) e.className = ''
                        else if ('style' === t.att)
                            We(e, Array.prototype.slice.call(e.style))
                        else {
                            if (t.att in e)
                                try {
                                    e[t.att] = ''
                                } catch (e) {}
                            try {
                                e.removeAttribute(t.att)
                            } catch (e) {}
                        }
                    })
                },
                Xe = function (e, t) {
                    return { att: e, value: t }
                },
                Ze = function (e, t) {
                    if (1 !== e.nodeType) return []
                    var n = (function (e, t) {
                        return Array.prototype.reduce.call(
                            e.attributes,
                            function (e, n) {
                                return (
                                    !(
                                        _e.indexOf(n.name) < 0 ||
                                        (t && 'selected' === n.name)
                                    ) ||
                                        (n.name.length > 7 &&
                                            'default' === n.name.slice(0, 7)) ||
                                        e.push(Xe(n.name, n.value)),
                                    e
                                )
                            },
                            []
                        )
                    })(e, t)
                    return (
                        (function (e, t, n) {
                            _e.forEach(function (r) {
                                ;(!e[r] && 0 !== e[r]) ||
                                    (n &&
                                        'option' === e.tagName.toLowerCase() &&
                                        'selected' === r) ||
                                    (n &&
                                        'select' === e.tagName.toLowerCase() &&
                                        'value' === r) ||
                                    t.push(Xe(r, e[r]))
                            })
                        })(e, n, t),
                        n
                    )
                },
                qe = function (e) {
                    return 3 === e.nodeType
                        ? 'text'
                        : 8 === e.nodeType
                        ? 'comment'
                        : e.tagName.toLowerCase()
                },
                Ve = function (e) {
                    return e.childNodes && e.childNodes.length > 0
                        ? null
                        : e.textContent
                },
                $e = function (e) {
                    1 === e.nodeType &&
                        (Array.prototype.forEach.call(e.attributes, function (
                            t
                        ) {
                            t.name.length < 8 ||
                                'default' !== t.name.slice(0, 7) ||
                                (He(e, [
                                    Xe(t.name.slice(7).toLowerCase(), t.value),
                                ]),
                                Ye(e, [Xe(t.name, t.value)]))
                        }),
                        e.childNodes &&
                            Array.prototype.forEach.call(
                                e.childNodes,
                                function (e) {
                                    $e(e)
                                }
                            ))
                },
                Ge = function (e, t, n) {
                    var r = Array.prototype.slice.call(t.childNodes),
                        o = Array.prototype.slice.call(e.childNodes),
                        i = r.length - o.length
                    if (i > 0)
                        for (; i > 0; i--)
                            r[r.length - i].parentNode.removeChild(
                                r[r.length - i]
                            )
                    o.forEach(function (e, o) {
                        if (!r[o])
                            return $e(e), void t.appendChild(e.cloneNode(!0))
                        if (qe(e) === qe(r[o])) {
                            if (
                                ((function (e, t) {
                                    var n = Ze(e, !0),
                                        r = Ze(t),
                                        o = r.filter(function (e) {
                                            return (
                                                !(_e.indexOf(e.att) > -1) &&
                                                null ===
                                                    Ke(n, function (t) {
                                                        return e.att === t.att
                                                    })
                                            )
                                        }),
                                        i = n.filter(function (e) {
                                            var t = Ke(r, function (t) {
                                                return e.att === t.att
                                            })
                                            return (
                                                null === t ||
                                                t.value !== e.value
                                            )
                                        })
                                    He(t, i), Ye(t, o)
                                })(e, r[o]),
                                !(
                                    n.filter(function (t) {
                                        return (
                                            3 !== e.nodeType &&
                                            (function (e, t) {
                                                return (
                                                    (Element.prototype
                                                        .matches &&
                                                        e.matches(t)) ||
                                                    (Element.prototype
                                                        .msMatchesSelector &&
                                                        e.msMatchesSelector(
                                                            t
                                                        )) ||
                                                    (Element.prototype
                                                        .webkitMatchesSelector &&
                                                        e.webkitMatchesSelector(
                                                            t
                                                        ))
                                                )
                                            })(e, t)
                                        )
                                    }).length > 0
                                ))
                            ) {
                                var i = Ve(e)
                                if (
                                    (i &&
                                        i !== Ve(r[o]) &&
                                        (r[o].textContent = i),
                                    r[o].childNodes.length > 0 &&
                                        e.childNodes.length < 1)
                                )
                                    r[o].innerHTML = ''
                                else {
                                    if (
                                        r[o].childNodes.length < 1 &&
                                        e.childNodes.length > 0
                                    ) {
                                        var a = document.createDocumentFragment()
                                        return (
                                            Ge(e, a, n),
                                            void r[o].appendChild(a)
                                        )
                                    }
                                    e.childNodes.length > 0 && Ge(e, r[o], n)
                                }
                            }
                        } else r[o].parentNode.replaceChild(e.cloneNode(!0), r[o])
                    })
                },
                Je = function (e, t) {
                    e &&
                        e.forEach(function (e) {
                            if (e.attached.indexOf(t) > -1)
                                return Le(
                                    t.elem +
                                        ' has attached nodes that it is also attached to, creating an infinite loop.'
                                )
                            'render' in e && e.render()
                        })
                }
            ;(Ue.emit = function (e, t, n) {
                var r
                if (!e || !t)
                    return Le('You did not provide an element or event name.')
                ;(r = new CustomEvent(t, { bubbles: !0, detail: n })),
                    e.dispatchEvent(r)
            }),
                (Ue.prototype.render = function () {
                    if (this.lagoon) Je(this.attached, this)
                    else {
                        if (!this.template)
                            return Le('No template was provided.')
                        var e =
                            'string' === Re(this.elem)
                                ? document.querySelector(this.elem)
                                : this.elem
                        if (!e)
                            return Le(
                                'The DOM element to render your template into was not found.'
                            )
                        var t = Fe(
                                (this.store ? this.store.data : this.data) ||
                                    {},
                                this.allowHTML
                            ),
                            n =
                                'function' === Re(this.template)
                                    ? this.template(
                                          t,
                                          this.router
                                              ? this.router.current
                                              : null
                                      )
                                    : this.template
                        if (!(['string', 'number'].indexOf(Re(n)) < 0)) {
                            var r = this.attached.map(function (e) {
                                return e.elem
                            })
                            return (
                                Ge(
                                    (function (e) {
                                        if (ke) {
                                            var t = new DOMParser().parseFromString(
                                                e,
                                                'text/html'
                                            )
                                            return (
                                                'head' in t &&
                                                    'childNodes' in t.head &&
                                                    t.head.childNodes.length >
                                                        0 &&
                                                    Array.prototype.slice
                                                        .call(t.head.childNodes)
                                                        .reverse()
                                                        .forEach(function (e) {
                                                            t.body.insertBefore(
                                                                e,
                                                                t.body
                                                                    .firstChild
                                                            )
                                                        }),
                                                t.body
                                            )
                                        }
                                        var n = document.createElement('div')
                                        return (n.innerHTML = e), n
                                    })(n),
                                    e,
                                    r
                                ),
                                Ue.emit(e, 'render', t),
                                Je(this.attached, this),
                                e
                            )
                        }
                    }
                }),
                (Ue.prototype.attach = function (e) {
                    'array' === Re(e)
                        ? this.attached.concat(e)
                        : this.attached.push(e)
                }),
                (Ue.prototype.detach = function (e) {
                    var t = 'array' === Re(e) ? e : [e],
                        n = this
                    t.forEach(function (e) {
                        var t = n.attached.indexOf(e)
                        t < 0 || n.attached.splice(t, 1)
                    })
                }),
                (Ue.debug = function (e) {
                    Me = !!e
                }),
                (Ue.clone = Fe),
                (Ue._ = Ie),
                (ke = (function () {
                    if (!window.DOMParser) return !1
                    var e = new DOMParser()
                    try {
                        e.parseFromString('x', 'text/html')
                    } catch (e) {
                        return !1
                    }
                    return !0
                })())
            var Qe = function (e) {
                    var t = e.role,
                        n = void 0 === t ? '' : t,
                        r = e.className,
                        o = void 0 === r ? 'fooBar' : r,
                        i = e.eventType,
                        a = void 0 === i ? 'onclick' : i,
                        c = e.event,
                        u = void 0 === c ? 'window.alert()' : c,
                        f = e.nodeText,
                        l = void 0 === f ? 'testButton' : f
                    return '<div class="col">\n    <button\n        role="'
                        .concat(n, '"\n        class="')
                        .concat(o, '"\n        ')
                        .concat(a, '="')
                        .concat(u, '"\n    >\n        ')
                        .concat(l, '\n    </button>\n</div> ')
                },
                et = new Ue('#root', {
                    template: function () {
                        return '<div>\n    \n        '
                            .concat(
                                '<div class="container disable-dbl-tap-zoom">\n    '
                                    .concat(
                                        '<div class="row">\n    <div\n        class="col appScreen"\n        role="appMainScreen"\n    >'.concat(
                                            Ce.getState().incrementDecrement
                                                .displayData,
                                            '</div>\n</div>'
                                        ),
                                        '\n    <hr />\n    '
                                    )
                                    .concat(
                                        '<div class="row">\n        \x3c!-- component like in React  --\x3e\n        '
                                            .concat(
                                                Qe({
                                                    role: 'appButtonIncrement',
                                                    className:
                                                        'app-btn btn btn-outline-success btn-lg btn-block',
                                                    event:
                                                        'window.mapAllDispatch.incrementDecrement.increment()',
                                                    nodeText: '+',
                                                }),
                                                '\n\n        \x3c!-- component like in React  --\x3e\n        '
                                            )
                                            .concat(
                                                Qe({
                                                    role: 'appButtonDecrement',
                                                    className:
                                                        'app-btn btn btn-outline-warning btn-lg btn-block',
                                                    event:
                                                        'window.mapAllDispatch.incrementDecrement.decrement()',
                                                    nodeText: '-',
                                                }),
                                                '\n\n        \x3c!-- plain html --\x3e\n        <div class="col">\n            <button\n                role="appButtonClear"\n                class="app-btn btn btn-outline-danger btn-lg btn-block"\n                onclick="window.mapAllDispatch.incrementDecrement.clearAll()"\n            >\n                Clear\n            </button>\n        </div>\x3c!-- .col --\x3e\n</div>'
                                            ),
                                        ' \n    '
                                    )
                                    .concat(
                                        0 ===
                                            Ce.getState().incrementDecrement
                                                .displayData
                                            ? ''
                                            : '\n    <hr />\n    <div class="row">    \n        <div class="col">\n            <span \n                role="infoBoard"\n                class="badge badge-info"                \n            >\n                Try Keyboard:\n                <br />\n                +, -, Delete, Backspace\n            </span>\n        </div>\x3c!-- .col --\x3e \n    </div>',
                                        ' \n</div>'
                                    ),
                                '\n\n        '
                            )
                            .concat(
                                (function () {
                                    return '<div>    \n        \x3c!-- github-corner svg logo-link --\x3e        \n        <a\n            role="githubCorner"\n            href='.concat(
                                        arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                            ? arguments[0]
                                            : 'https://github.com/zloid/modern-vanilla-js-starter-kit',
                                        '\n            target="_blank"\n            class="github-corner"\n            aria-label="View source on GitHub"\n            ><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>\n</div>'
                                    )
                                })(
                                    'https://github.com/zloid/modern-vanilla-js-starter-kit'
                                ),
                                '\n\n    </div>'
                            )
                    },
                })
            ;(window.mapAllDispatch = Te),
                (document.body.innerHTML = '<div id="root"></div>'),
                et.render(),
                window.addEventListener('DOMContentLoaded', function () {
                    document.addEventListener(
                        'keydown',
                        function (e) {
                            if (
                                !e.defaultPrevented &&
                                !/f[0-9]/gi.test(e.key)
                            ) {
                                switch (!0) {
                                    case /\+/.test(e.key):
                                        window.mapAllDispatch.incrementDecrement.increment()
                                        break
                                    case /-/.test(e.key):
                                        window.mapAllDispatch.incrementDecrement.decrement()
                                        break
                                    case /delete|backspace/i.test(e.key):
                                        window.mapAllDispatch.incrementDecrement.clearAll()
                                        break
                                    default:
                                        return
                                }
                                e.preventDefault()
                            }
                        },
                        !0
                    )
                }),
                Ce.subscribe(function () {
                    return et.render()
                })
        })()
})()
