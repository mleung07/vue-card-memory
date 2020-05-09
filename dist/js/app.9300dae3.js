(function(e) {
  function t(t) {
    for (
      var r, a, i = t[0], u = t[1], s = t[2], d = 0, f = [];
      d < i.length;
      d++
    )
      (a = i[d]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && f.push(o[a][0]),
        (o[a] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    l && l(t);
    while (f.length) f.shift()();
    return c.push.apply(c, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], r = !0, i = 1; i < n.length; i++) {
        const u = n[i];
        0 !== o[u] && (r = !1);
      }
      r && (c.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { app: 0 },
    c = [];
  function a(t) {
    if (r[t]) return r[t].exports;
    const n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = r),
    (a.d = function(e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function(e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      const n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (const r in e)
          a.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function(e) {
      const t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = "/");
  let i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (let s = 0; s < i.length; s++) t(i[s]);
  var l = u;
  c.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    e.exports = n("cd49");
  },
  1426: function(e, t, n) {},
  "239b": function(e, t, n) {
    "use strict";
    const r = n("1426"),
      o = n.n(r);
    o.a;
  },
  "5c0b": function(e, t, n) {
    "use strict";
    const r = n("9c0c"),
      o = n.n(r);
    o.a;
  },
  "5fb5": function(e, t, n) {
    "use strict";
    const r = n("8259"),
      o = n.n(r);
    o.a;
  },
  8259: function(e, t, n) {},
  "8c63": function(e, t, n) {
    "use strict";
    const r = n("9d03"),
      o = n.n(r);
    o.a;
  },
  "9c0c": function(e, t, n) {},
  "9d03": function(e, t, n) {},
  aee2: function(e, t, n) {},
  cd49: function(e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    const r = n("2b0e"),
      o = function() {
        const e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n("Modal", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.getWin,
                  expression: "getWin"
                }
              ]
            }),
            [n("h1", [e._v("Vue card memory game")]), n("Game")]
          ],
          2
        );
      },
      c = [],
      a = n("5530"),
      i = function() {
        const e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "box" }, [
          e.getRow
            ? n(
                "div",
                { staticClass: "game" },
                [
                  e._l(e.getRow, function(e) {
                    return [n("Row", { key: e, attrs: { y: e } })];
                  })
                ],
                2
              )
            : e._e()
        ]);
      },
      u = [],
      s = n("2f62"),
      l = function() {
        const e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.getCol
          ? n(
              "div",
              { staticClass: "row" },
              e._l(e.getCol, function(t) {
                return n("Card", { key: t, attrs: { y: e.y, x: t } });
              }),
              1
            )
          : e._e();
      },
      d = [],
      f =
        (n("a9e3"),
        function() {
          const e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return e.myCard
            ? n("div", { staticClass: "cell" }, [
                n(
                  "div",
                  {
                    staticClass: "card",
                    class: {
                      flipped: e.myCard.flipped,
                      matched: e.myCard.matched
                    },
                    on: { click: e.handleClick }
                  },
                  [
                    n("div", { staticClass: "back" }),
                    n("div", { staticClass: "front" }, [
                      n("div", { staticClass: "face" }, [
                        e._v(e._s(e.myCard.value))
                      ])
                    ])
                  ]
                )
              ])
            : e._e();
        }),
      p = [],
      m = r["a"].extend({
        name: "Card",
        props: { x: Number, y: Number },
        computed: Object(a["a"])({}, Object(s["c"])(["getCellById"]), {
          myCard: function() {
            return this.getCellById(this.x, this.y);
          }
        }),
        methods: Object(a["a"])({}, Object(s["b"])(["flipCard"]), {
          handleClick: function() {
            this.myCard &&
              (this.myCard.flipped ||
                this.myCard.matched ||
                this.flipCard({ x: this.x, y: this.y }));
          }
        })
      }),
      b = m,
      h = (n("8c63"), n("2877")),
      v = Object(h["a"])(b, f, p, !1, null, "829bc6f0", null),
      g = v.exports,
      y = r["a"].extend({
        name: "Row",
        components: { Card: g },
        props: { y: Number },
        computed: Object(a["a"])({}, Object(s["c"])(["getCol"]))
      }),
      C = y,
      w = (n("5fb5"), Object(h["a"])(C, l, d, !1, null, "2a8394e2", null)),
      O = w.exports,
      j = r["a"].extend({
        name: "Game",
        components: { Row: O },
        computed: Object(a["a"])({}, Object(s["c"])(["getRow"])),
        mounted: function() {
          this.distributeCard();
        },
        methods: Object(a["a"])({}, Object(s["b"])(["distributeCard"]))
      }),
      x = j,
      _ = (n("239b"), Object(h["a"])(x, i, u, !1, null, "74b1ffa2", null)),
      k = _.exports,
      M = function() {
        const e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "modal" }, [
          n("div", { staticClass: "modal-content" }, [
            n("h2", [e._v("You win!")]),
            n("div", { staticClass: "restart", on: { click: e.restartGame } }, [
              e._v("Restart")
            ])
          ])
        ]);
      },
      E = [],
      R = r["a"].extend({
        name: "Modal",
        methods: Object(a["a"])({}, Object(s["b"])(["restartGame"]))
      }),
      S = R,
      N = (n("e557"), Object(h["a"])(S, M, E, !1, null, "e90e7096", null)),
      P = N.exports,
      A = {
        name: "App",
        components: { Game: k, Modal: P },
        computed: Object(a["a"])({}, Object(s["c"])(["getWin"]))
      },
      G = A,
      W = (n("5c0b"), Object(h["a"])(G, o, c, !1, null, null, null)),
      $ = W.exports,
      B = n("9483");
    Object(B["a"])("".concat("/", "service-worker.js"), {
      ready: function() {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function() {
        console.log("Service worker has been registered.");
      },
      cached: function() {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function() {
        console.log("New content is downloading.");
      },
      updated: function() {
        console.log("New content is available; please refresh.");
      },
      offline: function() {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function(e) {
        console.error("Error during service worker registration:", e);
      }
    });
    n("7db0");
    const T = {
        getRow: function(e) {
          return e.row;
        },
        getCol: function(e) {
          return e.column;
        },
        getBoard: function(e) {
          return e.board;
        },
        getCellById: function(e) {
          return function(t, n) {
            return e.board.find(function(e) {
              return e.x === t && e.y === n;
            });
          };
        },
        getWin: function(e) {
          return e.win;
        }
      },
      I =
        (n("a623"),
        n("4de4"),
        n("0481"),
        n("a630"),
        n("d81d"),
        n("4069"),
        n("3ca3"),
        n("2ef0")),
      J = function(e, t) {
        return Array.from({ length: t }, function() {
          return e;
        }).flat();
      },
      F = function(e, t, n) {
        return {
          value: e,
          x: t % n || n,
          y: Math.ceil(t / n),
          matched: !1,
          flipped: !1
        };
      },
      q = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"],
      z = {
        distributeCard: function(e) {
          for (
            var t = Object(I["sampleSize"])(q, e.noOfEachCards),
              n = Object(I["shuffle"])(J(t, 4)),
              r = [],
              o = 0;
            o < n.length;
            o++
          )
            r.push(F(n[o], o + 1, e.column));
          e.board = r;
        },
        flipCard: function(e, t) {
          const n = t.x,
            r = t.y,
            o = e.board.find(function(e) {
              return e.x === n && e.y === r;
            });
          o && (o.flipped = !0);
        },
        checkMatched: function(e) {
          const t = e.board.filter(function(e) {
            return !0 === e.flipped;
          });
          2 === t.length &&
            (t[0].value === t[1].value &&
              t.map(function(e) {
                return (e.matched = !0);
              }),
            setTimeout(function() {
              t.map(function(e) {
                return (e.flipped = !1);
              });
            }, 500));
        },
        checkWin: function(e) {
          const t = e.board.every(function(e) {
            return e.matched;
          });
          t && (e.win = !0);
        },
        restart: function(e) {
          e.win = !1;
        }
      },
      K = {
        distributeCard: function(e) {
          e.commit("distributeCard");
        },
        flipCard: function(e, t) {
          const n = t.x,
            r = t.y;
          Object(I["throttle"])(function() {
            e.commit("flipCard", { x: n, y: r }),
              e.commit("checkMatched"),
              e.commit("checkWin");
          }, 500)();
        },
        restartGame: function(e) {
          e.commit("restart"), e.commit("distributeCard");
        }
      };
    r["a"].use(s["a"]);
    const Q = new s["a"].Store({
      state: { row: 4, column: 6, noOfEachCards: 6, win: !1, board: [] },
      getters: T,
      mutations: z,
      actions: K,
      modules: {}
    });
    (r["a"].config.productionTip = !1),
      new r["a"]({
        store: Q,
        render: function(e) {
          return e($);
        }
      }).$mount("#app");
  },
  e557: function(e, t, n) {
    "use strict";
    const r = n("aee2"),
      o = n.n(r);
    o.a;
  }
});
//# sourceMappingURL=app.9300dae3.js.map
