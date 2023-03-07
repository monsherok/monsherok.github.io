/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  "use strict";
  let e = !0,
    t = (e = 500) => {
      document.documentElement.classList.contains("lock") ? n(e) : r(e);
    },
    n = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let r = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < r.length; e++) {
            r[e].style.paddingRight = "0px";
          }
          (n.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    },
    r = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let r = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < r.length; e++) {
          r[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (n.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    };
  var i;
  function o(e) {
    this.type = e;
  }
  !(function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : void 0, function (e, t) {
    var n = [],
      r = Object.getPrototypeOf,
      i = n.slice,
      o = n.flat
        ? function (e) {
            return n.flat.call(e);
          }
        : function (e) {
            return n.concat.apply([], e);
          },
      s = n.push,
      a = n.indexOf,
      u = {},
      c = u.toString,
      l = u.hasOwnProperty,
      f = l.toString,
      d = f.call(Object),
      p = {},
      h = function (e) {
        return (
          "function" == typeof e &&
          "number" != typeof e.nodeType &&
          "function" != typeof e.item
        );
      },
      g = function (e) {
        return null != e && e === e.window;
      },
      m = e.document,
      v = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function y(e, t, n) {
      var r,
        i,
        o = (n = n || m).createElement("script");
      if (((o.text = e), t))
        for (r in v)
          (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
            o.setAttribute(r, i);
      n.head.appendChild(o).parentNode.removeChild(o);
    }
    function b(e) {
      return null == e
        ? e + ""
        : "object" == typeof e || "function" == typeof e
        ? u[c.call(e)] || "object"
        : typeof e;
    }
    var x = "3.6.3",
      w = function (e, t) {
        return new w.fn.init(e, t);
      };
    function C(e) {
      var t = !!e && "length" in e && e.length,
        n = b(e);
      return (
        !h(e) &&
        !g(e) &&
        ("array" === n ||
          0 === t ||
          ("number" == typeof t && 0 < t && t - 1 in e))
      );
    }
    (w.fn = w.prototype =
      {
        jquery: x,
        constructor: w,
        length: 0,
        toArray: function () {
          return i.call(this);
        },
        get: function (e) {
          return null == e
            ? i.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = w.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return w.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            w.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(i.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            w.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            w.grep(this, function (e, t) {
              return t % 2;
            })
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: s,
        sort: n.sort,
        splice: n.splice,
      }),
      (w.extend = w.fn.extend =
        function () {
          var e,
            t,
            n,
            r,
            i,
            o,
            s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            c = !1;
          for (
            "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
              "object" == typeof s || h(s) || (s = {}),
              a === u && ((s = this), a--);
            a < u;
            a++
          )
            if (null != (e = arguments[a]))
              for (t in e)
                (r = e[t]),
                  "__proto__" !== t &&
                    s !== r &&
                    (c && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                      ? ((n = s[t]),
                        (o =
                          i && !Array.isArray(n)
                            ? []
                            : i || w.isPlainObject(n)
                            ? n
                            : {}),
                        (i = !1),
                        (s[t] = w.extend(c, o, r)))
                      : void 0 !== r && (s[t] = r));
          return s;
        }),
      w.extend({
        expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
          var t, n;
          return !(
            !e ||
            "[object Object]" !== c.call(e) ||
            ((t = r(e)) &&
              ("function" !=
                typeof (n = l.call(t, "constructor") && t.constructor) ||
                f.call(n) !== d))
          );
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        globalEval: function (e, t, n) {
          y(e, { nonce: t && t.nonce }, n);
        },
        each: function (e, t) {
          var n,
            r = 0;
          if (C(e))
            for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
          else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
          return e;
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            null != e &&
              (C(Object(e))
                ? w.merge(n, "string" == typeof e ? [e] : e)
                : s.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : a.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++)
            e[i++] = t[r];
          return (e.length = i), e;
        },
        grep: function (e, t, n) {
          for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
            !t(e[i], i) !== s && r.push(e[i]);
          return r;
        },
        map: function (e, t, n) {
          var r,
            i,
            s = 0,
            a = [];
          if (C(e))
            for (r = e.length; s < r; s++)
              null != (i = t(e[s], s, n)) && a.push(i);
          else for (s in e) null != (i = t(e[s], s, n)) && a.push(i);
          return o(a);
        },
        guid: 1,
        support: p,
      }),
      "function" == typeof Symbol &&
        (w.fn[Symbol.iterator] = n[Symbol.iterator]),
      w.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          u["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var S = (function (e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        a,
        u,
        c,
        l,
        f,
        d,
        p,
        h,
        g,
        m,
        v,
        y,
        b,
        x = "sizzle" + 1 * new Date(),
        w = e.document,
        C = 0,
        S = 0,
        T = ue(),
        E = ue(),
        k = ue(),
        A = ue(),
        D = function (e, t) {
          return e === t && (f = !0), 0;
        },
        j = {}.hasOwnProperty,
        N = [],
        L = N.pop,
        P = N.push,
        q = N.push,
        M = N.slice,
        O = function (e, t) {
          for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1;
        },
        H =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        _ = "[\\x20\\t\\r\\n\\f]",
        R =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          _ +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        I =
          "\\[" +
          _ +
          "*(" +
          R +
          ")(?:" +
          _ +
          "*([*^$|!~]?=)" +
          _ +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          R +
          "))|)" +
          _ +
          "*\\]",
        F =
          ":(" +
          R +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          I +
          ")*)|.*)\\)|)",
        W = new RegExp(_ + "+", "g"),
        B = new RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
        $ = new RegExp("^" + _ + "*," + _ + "*"),
        z = new RegExp("^" + _ + "*([>+~]|" + _ + ")" + _ + "*"),
        X = new RegExp(_ + "|>"),
        U = new RegExp(F),
        G = new RegExp("^" + R + "$"),
        V = {
          ID: new RegExp("^#(" + R + ")"),
          CLASS: new RegExp("^\\.(" + R + ")"),
          TAG: new RegExp("^(" + R + "|[*])"),
          ATTR: new RegExp("^" + I),
          PSEUDO: new RegExp("^" + F),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              _ +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              _ +
              "*(?:([+-]|)" +
              _ +
              "*(\\d+)|))" +
              _ +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + H + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              _ +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              _ +
              "*((?:-\\d)?\\d*)" +
              _ +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        Q = /HTML$/i,
        Y = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp(
          "\\\\[\\da-fA-F]{1,6}" + _ + "?|\\\\([^\\r\\n\\f])",
          "g"
        ),
        ne = function (e, t) {
          var n = "0x" + e.slice(1) - 65536;
          return (
            t ||
            (n < 0
              ? String.fromCharCode(n + 65536)
              : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
          );
        },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function (e, t) {
          return t
            ? "\0" === e
              ? "�"
              : e.slice(0, -1) +
                "\\" +
                e.charCodeAt(e.length - 1).toString(16) +
                " "
            : "\\" + e;
        },
        oe = function () {
          d();
        },
        se = xe(
          function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        q.apply((N = M.call(w.childNodes)), w.childNodes),
          N[w.childNodes.length].nodeType;
      } catch (t) {
        q = {
          apply: N.length
            ? function (e, t) {
                P.apply(e, M.call(t));
              }
            : function (e, t) {
                for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                e.length = n - 1;
              },
        };
      }
      function ae(e, t, r, i) {
        var o,
          a,
          c,
          l,
          f,
          h,
          v,
          y = t && t.ownerDocument,
          w = t ? t.nodeType : 9;
        if (
          ((r = r || []),
          "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
        )
          return r;
        if (!i && (d(t), (t = t || p), g)) {
          if (11 !== w && (f = Z.exec(e)))
            if ((o = f[1])) {
              if (9 === w) {
                if (!(c = t.getElementById(o))) return r;
                if (c.id === o) return r.push(c), r;
              } else if (
                y &&
                (c = y.getElementById(o)) &&
                b(t, c) &&
                c.id === o
              )
                return r.push(c), r;
            } else {
              if (f[2]) return q.apply(r, t.getElementsByTagName(e)), r;
              if (
                (o = f[3]) &&
                n.getElementsByClassName &&
                t.getElementsByClassName
              )
                return q.apply(r, t.getElementsByClassName(o)), r;
            }
          if (
            n.qsa &&
            !A[e + " "] &&
            (!m || !m.test(e)) &&
            (1 !== w || "object" !== t.nodeName.toLowerCase())
          ) {
            if (((v = e), (y = t), 1 === w && (X.test(e) || z.test(e)))) {
              for (
                ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                  n.scope) ||
                  ((l = t.getAttribute("id"))
                    ? (l = l.replace(re, ie))
                    : t.setAttribute("id", (l = x))),
                  a = (h = s(e)).length;
                a--;

              )
                h[a] = (l ? "#" + l : ":scope") + " " + be(h[a]);
              v = h.join(",");
            }
            try {
              if (
                n.cssSupportsSelector &&
                !CSS.supports("selector(:is(" + v + "))")
              )
                throw new Error();
              return q.apply(r, y.querySelectorAll(v)), r;
            } catch (t) {
              A(e, !0);
            } finally {
              l === x && t.removeAttribute("id");
            }
          }
        }
        return u(e.replace(B, "$1"), t, r, i);
      }
      function ue() {
        var e = [];
        return function t(n, i) {
          return (
            e.push(n + " ") > r.cacheLength && delete t[e.shift()],
            (t[n + " "] = i)
          );
        };
      }
      function ce(e) {
        return (e[x] = !0), e;
      }
      function le(e) {
        var t = p.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function fe(e, t) {
        for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
      }
      function de(e, t) {
        var n = t && e,
          r =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function pe(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }
      function he(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }
      function ge(e) {
        return function (t) {
          return "form" in t
            ? t.parentNode && !1 === t.disabled
              ? "label" in t
                ? "label" in t.parentNode
                  ? t.parentNode.disabled === e
                  : t.disabled === e
                : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
              : t.disabled === e
            : "label" in t && t.disabled === e;
        };
      }
      function me(e) {
        return ce(function (t) {
          return (
            (t = +t),
            ce(function (n, r) {
              for (var i, o = e([], n.length, t), s = o.length; s--; )
                n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
            })
          );
        });
      }
      function ve(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }
      for (t in ((n = ae.support = {}),
      (o = ae.isXML =
        function (e) {
          var t = e && e.namespaceURI,
            n = e && (e.ownerDocument || e).documentElement;
          return !Q.test(t || (n && n.nodeName) || "HTML");
        }),
      (d = ae.setDocument =
        function (e) {
          var t,
            i,
            s = e ? e.ownerDocument || e : w;
          return (
            s != p &&
              9 === s.nodeType &&
              s.documentElement &&
              ((h = (p = s).documentElement),
              (g = !o(p)),
              w != p &&
                (i = p.defaultView) &&
                i.top !== i &&
                (i.addEventListener
                  ? i.addEventListener("unload", oe, !1)
                  : i.attachEvent && i.attachEvent("onunload", oe)),
              (n.scope = le(function (e) {
                return (
                  h.appendChild(e).appendChild(p.createElement("div")),
                  void 0 !== e.querySelectorAll &&
                    !e.querySelectorAll(":scope fieldset div").length
                );
              })),
              (n.cssSupportsSelector = le(function () {
                return (
                  CSS.supports("selector(*)") &&
                  p.querySelectorAll(":is(:jqfake)") &&
                  !CSS.supports("selector(:is(*,:jqfake))")
                );
              })),
              (n.attributes = le(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (n.getElementsByTagName = le(function (e) {
                return (
                  e.appendChild(p.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (n.getElementsByClassName = K.test(p.getElementsByClassName)),
              (n.getById = le(function (e) {
                return (
                  (h.appendChild(e).id = x),
                  !p.getElementsByName || !p.getElementsByName(x).length
                );
              })),
              n.getById
                ? ((r.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (r.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && g) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((r.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                      var n =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  }),
                  (r.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && g) {
                      var n,
                        r,
                        i,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                        for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (r.find.TAG = n.getElementsByTagName
                ? function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : n.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (r.find.CLASS =
                n.getElementsByClassName &&
                function (e, t) {
                  if (void 0 !== t.getElementsByClassName && g)
                    return t.getElementsByClassName(e);
                }),
              (v = []),
              (m = []),
              (n.qsa = K.test(p.querySelectorAll)) &&
                (le(function (e) {
                  var t;
                  (h.appendChild(e).innerHTML =
                    "<a id='" +
                    x +
                    "'></a><select id='" +
                    x +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      m.push("[*^$]=" + _ + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      m.push("\\[" + _ + "*(?:value|" + H + ")"),
                    e.querySelectorAll("[id~=" + x + "-]").length ||
                      m.push("~="),
                    (t = p.createElement("input")).setAttribute("name", ""),
                    e.appendChild(t),
                    e.querySelectorAll("[name='']").length ||
                      m.push(
                        "\\[" + _ + "*name" + _ + "*=" + _ + "*(?:''|\"\")"
                      ),
                    e.querySelectorAll(":checked").length || m.push(":checked"),
                    e.querySelectorAll("a#" + x + "+*").length ||
                      m.push(".#.+[+~]"),
                    e.querySelectorAll("\\\f"),
                    m.push("[\\r\\n\\f]");
                }),
                le(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = p.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      m.push("name" + _ + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      m.push(":enabled", ":disabled"),
                    (h.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      m.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    m.push(",.*:");
                })),
              (n.matchesSelector = K.test(
                (y =
                  h.matches ||
                  h.webkitMatchesSelector ||
                  h.mozMatchesSelector ||
                  h.oMatchesSelector ||
                  h.msMatchesSelector)
              )) &&
                le(function (e) {
                  (n.disconnectedMatch = y.call(e, "*")),
                    y.call(e, "[s!='']:x"),
                    v.push("!=", F);
                }),
              n.cssSupportsSelector || m.push(":has"),
              (m = m.length && new RegExp(m.join("|"))),
              (v = v.length && new RegExp(v.join("|"))),
              (t = K.test(h.compareDocumentPosition)),
              (b =
                t || K.test(h.contains)
                  ? function (e, t) {
                      var n = (9 === e.nodeType && e.documentElement) || e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (D = t
                ? function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var r =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      r ||
                      (1 &
                        (r =
                          (e.ownerDocument || e) == (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!n.sortDetached && t.compareDocumentPosition(e) === r)
                        ? e == p || (e.ownerDocument == w && b(w, e))
                          ? -1
                          : t == p || (t.ownerDocument == w && b(w, t))
                          ? 1
                          : l
                          ? O(l, e) - O(l, t)
                          : 0
                        : 4 & r
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      s = [e],
                      a = [t];
                    if (!i || !o)
                      return e == p
                        ? -1
                        : t == p
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : l
                        ? O(l, e) - O(l, t)
                        : 0;
                    if (i === o) return de(e, t);
                    for (n = e; (n = n.parentNode); ) s.unshift(n);
                    for (n = t; (n = n.parentNode); ) a.unshift(n);
                    for (; s[r] === a[r]; ) r++;
                    return r
                      ? de(s[r], a[r])
                      : s[r] == w
                      ? -1
                      : a[r] == w
                      ? 1
                      : 0;
                  })),
            p
          );
        }),
      (ae.matches = function (e, t) {
        return ae(e, null, null, t);
      }),
      (ae.matchesSelector = function (e, t) {
        if (
          (d(e),
          n.matchesSelector &&
            g &&
            !A[t + " "] &&
            (!v || !v.test(t)) &&
            (!m || !m.test(t)))
        )
          try {
            var r = y.call(e, t);
            if (
              r ||
              n.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (e) {
            A(t, !0);
          }
        return 0 < ae(t, p, null, [e]).length;
      }),
      (ae.contains = function (e, t) {
        return (e.ownerDocument || e) != p && d(e), b(e, t);
      }),
      (ae.attr = function (e, t) {
        (e.ownerDocument || e) != p && d(e);
        var i = r.attrHandle[t.toLowerCase()],
          o = i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
        return void 0 !== o
          ? o
          : n.attributes || !g
          ? e.getAttribute(t)
          : (o = e.getAttributeNode(t)) && o.specified
          ? o.value
          : null;
      }),
      (ae.escape = function (e) {
        return (e + "").replace(re, ie);
      }),
      (ae.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (ae.uniqueSort = function (e) {
        var t,
          r = [],
          i = 0,
          o = 0;
        if (
          ((f = !n.detectDuplicates),
          (l = !n.sortStable && e.slice(0)),
          e.sort(D),
          f)
        ) {
          for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
          for (; i--; ) e.splice(r[i], 1);
        }
        return (l = null), e;
      }),
      (i = ae.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += i(t);
          return n;
        }),
      ((r = ae.selectors =
        {
          cacheLength: 50,
          createPseudo: ce,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(te, ne)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || ae.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && ae.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return V.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      U.test(n) &&
                      (t = s(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(te, ne).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = T[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) &&
                  T(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (void 0 !== e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, t, n) {
              return function (r) {
                var i = ae.attr(r, e);
                return null == i
                  ? "!=" === t
                  : !t ||
                      ((i += ""),
                      "=" === t
                        ? i === n
                        : "!=" === t
                        ? i !== n
                        : "^=" === t
                        ? n && 0 === i.indexOf(n)
                        : "*=" === t
                        ? n && -1 < i.indexOf(n)
                        : "$=" === t
                        ? n && i.slice(-n.length) === n
                        : "~=" === t
                        ? -1 < (" " + i.replace(W, " ") + " ").indexOf(n)
                        : "|=" === t &&
                          (i === n || i.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function (e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                a = "of-type" === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, u) {
                    var c,
                      l,
                      f,
                      d,
                      p,
                      h,
                      g = o !== s ? "nextSibling" : "previousSibling",
                      m = t.parentNode,
                      v = a && t.nodeName.toLowerCase(),
                      y = !u && !a,
                      b = !1;
                    if (m) {
                      if (o) {
                        for (; g; ) {
                          for (d = t; (d = d[g]); )
                            if (
                              a
                                ? d.nodeName.toLowerCase() === v
                                : 1 === d.nodeType
                            )
                              return !1;
                          h = g = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [s ? m.firstChild : m.lastChild]), s && y)) {
                        for (
                          b =
                            (p =
                              (c =
                                (l =
                                  (f = (d = m)[x] || (d[x] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] || [])[0] === C &&
                              c[1]) && c[2],
                            d = p && m.childNodes[p];
                          (d = (++p && d && d[g]) || (b = p = 0) || h.pop());

                        )
                          if (1 === d.nodeType && ++b && d === t) {
                            l[e] = [C, p, b];
                            break;
                          }
                      } else if (
                        (y &&
                          (b = p =
                            (c =
                              (l =
                                (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] ||
                                (f[d.uniqueID] = {}))[e] || [])[0] === C &&
                            c[1]),
                        !1 === b)
                      )
                        for (
                          ;
                          (d = (++p && d && d[g]) || (b = p = 0) || h.pop()) &&
                          ((a
                            ? d.nodeName.toLowerCase() !== v
                            : 1 !== d.nodeType) ||
                            !++b ||
                            (y &&
                              ((l =
                                (f = d[x] || (d[x] = {}))[d.uniqueID] ||
                                (f[d.uniqueID] = {}))[e] = [C, b]),
                            d !== t));

                        );
                      return (b -= i) === r || (b % r == 0 && 0 <= b / r);
                    }
                  };
            },
            PSEUDO: function (e, t) {
              var n,
                i =
                  r.pseudos[e] ||
                  r.setFilters[e.toLowerCase()] ||
                  ae.error("unsupported pseudo: " + e);
              return i[x]
                ? i(t)
                : 1 < i.length
                ? ((n = [e, e, "", t]),
                  r.setFilters.hasOwnProperty(e.toLowerCase())
                    ? ce(function (e, n) {
                        for (var r, o = i(e, t), s = o.length; s--; )
                          e[(r = O(e, o[s]))] = !(n[r] = o[s]);
                      })
                    : function (e) {
                        return i(e, 0, n);
                      })
                : i;
            },
          },
          pseudos: {
            not: ce(function (e) {
              var t = [],
                n = [],
                r = a(e.replace(B, "$1"));
              return r[x]
                ? ce(function (e, t, n, i) {
                    for (var o, s = r(e, null, i, []), a = e.length; a--; )
                      (o = s[a]) && (e[a] = !(t[a] = o));
                  })
                : function (e, i, o) {
                    return (
                      (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: ce(function (e) {
              return function (t) {
                return 0 < ae(e, t).length;
              };
            }),
            contains: ce(function (e) {
              return (
                (e = e.replace(te, ne)),
                function (t) {
                  return -1 < (t.textContent || i(t)).indexOf(e);
                }
              );
            }),
            lang: ce(function (e) {
              return (
                G.test(e || "") || ae.error("unsupported lang: " + e),
                (e = e.replace(te, ne).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if (
                      (n = g
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === h;
            },
            focus: function (e) {
              return (
                e === p.activeElement &&
                (!p.hasFocus || p.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: ge(!1),
            disabled: ge(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !r.pseudos.empty(e);
            },
            header: function (e) {
              return J.test(e.nodeName);
            },
            input: function (e) {
              return Y.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: me(function () {
              return [0];
            }),
            last: me(function (e, t) {
              return [t - 1];
            }),
            eq: me(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: me(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: me(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: me(function (e, t, n) {
              for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
              return e;
            }),
            gt: me(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = r.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        r.pseudos[t] = pe(t);
      for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
      function ye() {}
      function be(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r;
      }
      function xe(e, t, n) {
        var r = t.dir,
          i = t.next,
          o = i || r,
          s = n && "parentNode" === o,
          a = S++;
        return t.first
          ? function (t, n, i) {
              for (; (t = t[r]); ) if (1 === t.nodeType || s) return e(t, n, i);
              return !1;
            }
          : function (t, n, u) {
              var c,
                l,
                f,
                d = [C, a];
              if (u) {
                for (; (t = t[r]); )
                  if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
              } else
                for (; (t = t[r]); )
                  if (1 === t.nodeType || s)
                    if (
                      ((l =
                        (f = t[x] || (t[x] = {}))[t.uniqueID] ||
                        (f[t.uniqueID] = {})),
                      i && i === t.nodeName.toLowerCase())
                    )
                      t = t[r] || t;
                    else {
                      if ((c = l[o]) && c[0] === C && c[1] === a)
                        return (d[2] = c[2]);
                      if (((l[o] = d)[2] = e(t, n, u))) return !0;
                    }
              return !1;
            };
      }
      function we(e) {
        return 1 < e.length
          ? function (t, n, r) {
              for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
              return !0;
            }
          : e[0];
      }
      function Ce(e, t, n, r, i) {
        for (var o, s = [], a = 0, u = e.length, c = null != t; a < u; a++)
          (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), c && t.push(a)));
        return s;
      }
      function Se(e, t, n, r, i, o) {
        return (
          r && !r[x] && (r = Se(r)),
          i && !i[x] && (i = Se(i, o)),
          ce(function (o, s, a, u) {
            var c,
              l,
              f,
              d = [],
              p = [],
              h = s.length,
              g =
                o ||
                (function (e, t, n) {
                  for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                  return n;
                })(t || "*", a.nodeType ? [a] : a, []),
              m = !e || (!o && t) ? g : Ce(g, d, e, a, u),
              v = n ? (i || (o ? e : h || r) ? [] : s) : m;
            if ((n && n(m, v, a, u), r))
              for (c = Ce(v, p), r(c, [], a, u), l = c.length; l--; )
                (f = c[l]) && (v[p[l]] = !(m[p[l]] = f));
            if (o) {
              if (i || e) {
                if (i) {
                  for (c = [], l = v.length; l--; )
                    (f = v[l]) && c.push((m[l] = f));
                  i(null, (v = []), c, u);
                }
                for (l = v.length; l--; )
                  (f = v[l]) &&
                    -1 < (c = i ? O(o, f) : d[l]) &&
                    (o[c] = !(s[c] = f));
              }
            } else (v = Ce(v === s ? v.splice(h, v.length) : v)), i ? i(null, s, v, u) : q.apply(s, v);
          })
        );
      }
      function Te(e) {
        for (
          var t,
            n,
            i,
            o = e.length,
            s = r.relative[e[0].type],
            a = s || r.relative[" "],
            u = s ? 1 : 0,
            l = xe(
              function (e) {
                return e === t;
              },
              a,
              !0
            ),
            f = xe(
              function (e) {
                return -1 < O(t, e);
              },
              a,
              !0
            ),
            d = [
              function (e, n, r) {
                var i =
                  (!s && (r || n !== c)) ||
                  ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                return (t = null), i;
              },
            ];
          u < o;
          u++
        )
          if ((n = r.relative[e[u].type])) d = [xe(we(d), n)];
          else {
            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
              for (i = ++u; i < o && !r.relative[e[i].type]; i++);
              return Se(
                1 < u && we(d),
                1 < u &&
                  be(
                    e
                      .slice(0, u - 1)
                      .concat({ value: " " === e[u - 2].type ? "*" : "" })
                  ).replace(B, "$1"),
                n,
                u < i && Te(e.slice(u, i)),
                i < o && Te((e = e.slice(i))),
                i < o && be(e)
              );
            }
            d.push(n);
          }
        return we(d);
      }
      return (
        (ye.prototype = r.filters = r.pseudos),
        (r.setFilters = new ye()),
        (s = ae.tokenize =
          function (e, t) {
            var n,
              i,
              o,
              s,
              a,
              u,
              c,
              l = E[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (a = e, u = [], c = r.preFilter; a; ) {
              for (s in ((n && !(i = $.exec(a))) ||
                (i && (a = a.slice(i[0].length) || a), u.push((o = []))),
              (n = !1),
              (i = z.exec(a)) &&
                ((n = i.shift()),
                o.push({ value: n, type: i[0].replace(B, " ") }),
                (a = a.slice(n.length))),
              r.filter))
                !(i = V[s].exec(a)) ||
                  (c[s] && !(i = c[s](i))) ||
                  ((n = i.shift()),
                  o.push({ value: n, type: s, matches: i }),
                  (a = a.slice(n.length)));
              if (!n) break;
            }
            return t ? a.length : a ? ae.error(e) : E(e, u).slice(0);
          }),
        (a = ae.compile =
          function (e, t) {
            var n,
              i,
              o,
              a,
              u,
              l,
              f = [],
              h = [],
              m = k[e + " "];
            if (!m) {
              for (t || (t = s(e)), n = t.length; n--; )
                (m = Te(t[n]))[x] ? f.push(m) : h.push(m);
              (m = k(
                e,
                ((i = h),
                (a = 0 < (o = f).length),
                (u = 0 < i.length),
                (l = function (e, t, n, s, l) {
                  var f,
                    h,
                    m,
                    v = 0,
                    y = "0",
                    b = e && [],
                    x = [],
                    w = c,
                    S = e || (u && r.find.TAG("*", l)),
                    T = (C += null == w ? 1 : Math.random() || 0.1),
                    E = S.length;
                  for (
                    l && (c = t == p || t || l);
                    y !== E && null != (f = S[y]);
                    y++
                  ) {
                    if (u && f) {
                      for (
                        h = 0, t || f.ownerDocument == p || (d(f), (n = !g));
                        (m = i[h++]);

                      )
                        if (m(f, t || p, n)) {
                          s.push(f);
                          break;
                        }
                      l && (C = T);
                    }
                    a && ((f = !m && f) && v--, e && b.push(f));
                  }
                  if (((v += y), a && y !== v)) {
                    for (h = 0; (m = o[h++]); ) m(b, x, t, n);
                    if (e) {
                      if (0 < v)
                        for (; y--; ) b[y] || x[y] || (x[y] = L.call(s));
                      x = Ce(x);
                    }
                    q.apply(s, x),
                      l &&
                        !e &&
                        0 < x.length &&
                        1 < v + o.length &&
                        ae.uniqueSort(s);
                  }
                  return l && ((C = T), (c = w)), b;
                }),
                a ? ce(l) : l)
              )).selector = e;
            }
            return m;
          }),
        (u = ae.select =
          function (e, t, n, i) {
            var o,
              u,
              c,
              l,
              f,
              d = "function" == typeof e && e,
              p = !i && s((e = d.selector || e));
            if (((n = n || []), 1 === p.length)) {
              if (
                2 < (u = p[0] = p[0].slice(0)).length &&
                "ID" === (c = u[0]).type &&
                9 === t.nodeType &&
                g &&
                r.relative[u[1].type]
              ) {
                if (
                  !(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])
                )
                  return n;
                d && (t = t.parentNode), (e = e.slice(u.shift().value.length));
              }
              for (
                o = V.needsContext.test(e) ? 0 : u.length;
                o-- && ((c = u[o]), !r.relative[(l = c.type)]);

              )
                if (
                  (f = r.find[l]) &&
                  (i = f(
                    c.matches[0].replace(te, ne),
                    (ee.test(u[0].type) && ve(t.parentNode)) || t
                  ))
                ) {
                  if ((u.splice(o, 1), !(e = i.length && be(u))))
                    return q.apply(n, i), n;
                  break;
                }
            }
            return (
              (d || a(e, p))(
                i,
                t,
                !g,
                n,
                !t || (ee.test(e) && ve(t.parentNode)) || t
              ),
              n
            );
          }),
        (n.sortStable = x.split("").sort(D).join("") === x),
        (n.detectDuplicates = !!f),
        d(),
        (n.sortDetached = le(function (e) {
          return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
        })),
        le(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          fe("type|href|height|width", function (e, t, n) {
            if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (n.attributes &&
          le(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue;
          }),
        le(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          fe(H, function (e, t, n) {
            var r;
            if (!n)
              return !0 === e[t]
                ? t.toLowerCase()
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
          }),
        ae
      );
    })(e);
    (w.find = S),
      (w.expr = S.selectors),
      (w.expr[":"] = w.expr.pseudos),
      (w.uniqueSort = w.unique = S.uniqueSort),
      (w.text = S.getText),
      (w.isXMLDoc = S.isXML),
      (w.contains = S.contains),
      (w.escapeSelector = S.escape);
    var T = function (e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (i && w(e).is(n)) break;
            r.push(e);
          }
        return r;
      },
      E = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      k = w.expr.match.needsContext;
    function A(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, t, n) {
      return h(t)
        ? w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n;
          })
        : t.nodeType
        ? w.grep(e, function (e) {
            return (e === t) !== n;
          })
        : "string" != typeof t
        ? w.grep(e, function (e) {
            return -1 < a.call(t, e) !== n;
          })
        : w.filter(t, e, n);
    }
    (w.filter = function (e, t, n) {
      var r = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType
          ? w.find.matchesSelector(r, e)
            ? [r]
            : []
          : w.find.matches(
              e,
              w.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      w.fn.extend({
        find: function (e) {
          var t,
            n,
            r = this.length,
            i = this;
          if ("string" != typeof e)
            return this.pushStack(
              w(e).filter(function () {
                for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
          return 1 < r ? w.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(j(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(j(this, e || [], !0));
        },
        is: function (e) {
          return !!j(
            this,
            "string" == typeof e && k.test(e) ? w(e) : e || [],
            !1
          ).length;
        },
      });
    var N,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((w.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;
      if (((n = n || N), "string" == typeof e)) {
        if (
          !(r =
            "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
              ? [null, e, null]
              : L.exec(e)) ||
          (!r[1] && t)
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (r[1]) {
          if (
            ((t = t instanceof w ? t[0] : t),
            w.merge(
              this,
              w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : m, !0)
            ),
            D.test(r[1]) && w.isPlainObject(t))
          )
            for (r in t) h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return (
          (i = m.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
          this
        );
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : h(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(w)
        : w.makeArray(e, this);
    }).prototype = w.fn),
      (N = w(m));
    var P = /^(?:parents|prev(?:Until|All))/,
      q = { children: !0, contents: !0, next: !0, prev: !0 };
    function M(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    w.fn.extend({
      has: function (e) {
        var t = w(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          r = 0,
          i = this.length,
          o = [],
          s = "string" != typeof e && w(e);
        if (!k.test(e))
          for (; r < i; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (s
                  ? -1 < s.index(n)
                  : 1 === n.nodeType && w.find.matchesSelector(n, e))
              ) {
                o.push(n);
                break;
              }
        return this.pushStack(1 < o.length ? w.uniqueSort(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? a.call(w(e), this[0])
            : a.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
      w.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return T(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return T(e, "parentNode", n);
          },
          next: function (e) {
            return M(e, "nextSibling");
          },
          prev: function (e) {
            return M(e, "previousSibling");
          },
          nextAll: function (e) {
            return T(e, "nextSibling");
          },
          prevAll: function (e) {
            return T(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return T(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return T(e, "previousSibling", n);
          },
          siblings: function (e) {
            return E((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return E(e.firstChild);
          },
          contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument)
              ? e.contentDocument
              : (A(e, "template") && (e = e.content || e),
                w.merge([], e.childNodes));
          },
        },
        function (e, t) {
          w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return (
              "Until" !== e.slice(-5) && (r = n),
              r && "string" == typeof r && (i = w.filter(r, i)),
              1 < this.length &&
                (q[e] || w.uniqueSort(i), P.test(e) && i.reverse()),
              this.pushStack(i)
            );
          };
        }
      );
    var O = /[^\x20\t\r\n\f]+/g;
    function H(e) {
      return e;
    }
    function _(e) {
      throw e;
    }
    function R(e, t, n, r) {
      var i;
      try {
        e && h((i = e.promise))
          ? i.call(e).done(t).fail(n)
          : e && h((i = e.then))
          ? i.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }
    (w.Callbacks = function (e) {
      var t, n;
      e =
        "string" == typeof e
          ? ((t = e),
            (n = {}),
            w.each(t.match(O) || [], function (e, t) {
              n[t] = !0;
            }),
            n)
          : w.extend({}, e);
      var r,
        i,
        o,
        s,
        a = [],
        u = [],
        c = -1,
        l = function () {
          for (s = s || e.once, o = r = !0; u.length; c = -1)
            for (i = u.shift(); ++c < a.length; )
              !1 === a[c].apply(i[0], i[1]) &&
                e.stopOnFalse &&
                ((c = a.length), (i = !1));
          e.memory || (i = !1), (r = !1), s && (a = i ? [] : "");
        },
        f = {
          add: function () {
            return (
              a &&
                (i && !r && ((c = a.length - 1), u.push(i)),
                (function t(n) {
                  w.each(n, function (n, r) {
                    h(r)
                      ? (e.unique && f.has(r)) || a.push(r)
                      : r && r.length && "string" !== b(r) && t(r);
                  });
                })(arguments),
                i && !r && l()),
              this
            );
          },
          remove: function () {
            return (
              w.each(arguments, function (e, t) {
                for (var n; -1 < (n = w.inArray(t, a, n)); )
                  a.splice(n, 1), n <= c && c--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? -1 < w.inArray(e, a) : 0 < a.length;
          },
          empty: function () {
            return a && (a = []), this;
          },
          disable: function () {
            return (s = u = []), (a = i = ""), this;
          },
          disabled: function () {
            return !a;
          },
          lock: function () {
            return (s = u = []), i || r || (a = i = ""), this;
          },
          locked: function () {
            return !!s;
          },
          fireWith: function (e, t) {
            return (
              s ||
                ((t = [e, (t = t || []).slice ? t.slice() : t]),
                u.push(t),
                r || l()),
              this
            );
          },
          fire: function () {
            return f.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!o;
          },
        };
      return f;
    }),
      w.extend({
        Deferred: function (t) {
          var n = [
              [
                "notify",
                "progress",
                w.Callbacks("memory"),
                w.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                w.Callbacks("once memory"),
                w.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                w.Callbacks("once memory"),
                w.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            r = "pending",
            i = {
              state: function () {
                return r;
              },
              always: function () {
                return o.done(arguments).fail(arguments), this;
              },
              catch: function (e) {
                return i.then(null, e);
              },
              pipe: function () {
                var e = arguments;
                return w
                  .Deferred(function (t) {
                    w.each(n, function (n, r) {
                      var i = h(e[r[4]]) && e[r[4]];
                      o[r[1]](function () {
                        var e = i && i.apply(this, arguments);
                        e && h(e.promise)
                          ? e
                              .promise()
                              .progress(t.notify)
                              .done(t.resolve)
                              .fail(t.reject)
                          : t[r[0] + "With"](this, i ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  })
                  .promise();
              },
              then: function (t, r, i) {
                var o = 0;
                function s(t, n, r, i) {
                  return function () {
                    var a = this,
                      u = arguments,
                      c = function () {
                        var e, c;
                        if (!(t < o)) {
                          if ((e = r.apply(a, u)) === n.promise())
                            throw new TypeError("Thenable self-resolution");
                          (c =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            h(c)
                              ? i
                                ? c.call(e, s(o, n, H, i), s(o, n, _, i))
                                : (o++,
                                  c.call(
                                    e,
                                    s(o, n, H, i),
                                    s(o, n, _, i),
                                    s(o, n, H, n.notifyWith)
                                  ))
                              : (r !== H && ((a = void 0), (u = [e])),
                                (i || n.resolveWith)(a, u));
                        }
                      },
                      l = i
                        ? c
                        : function () {
                            try {
                              c();
                            } catch (e) {
                              w.Deferred.exceptionHook &&
                                w.Deferred.exceptionHook(e, l.stackTrace),
                                o <= t + 1 &&
                                  (r !== _ && ((a = void 0), (u = [e])),
                                  n.rejectWith(a, u));
                            }
                          };
                    t
                      ? l()
                      : (w.Deferred.getStackHook &&
                          (l.stackTrace = w.Deferred.getStackHook()),
                        e.setTimeout(l));
                  };
                }
                return w
                  .Deferred(function (e) {
                    n[0][3].add(s(0, e, h(i) ? i : H, e.notifyWith)),
                      n[1][3].add(s(0, e, h(t) ? t : H)),
                      n[2][3].add(s(0, e, h(r) ? r : _));
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? w.extend(e, i) : i;
              },
            },
            o = {};
          return (
            w.each(n, function (e, t) {
              var s = t[2],
                a = t[5];
              (i[t[1]] = s.add),
                a &&
                  s.add(
                    function () {
                      r = a;
                    },
                    n[3 - e][2].disable,
                    n[3 - e][3].disable,
                    n[0][2].lock,
                    n[0][3].lock
                  ),
                s.add(t[3].fire),
                (o[t[0]] = function () {
                  return (
                    o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                  );
                }),
                (o[t[0] + "With"] = s.fireWith);
            }),
            i.promise(o),
            t && t.call(o, o),
            o
          );
        },
        when: function (e) {
          var t = arguments.length,
            n = t,
            r = Array(n),
            o = i.call(arguments),
            s = w.Deferred(),
            a = function (e) {
              return function (n) {
                (r[e] = this),
                  (o[e] = 1 < arguments.length ? i.call(arguments) : n),
                  --t || s.resolveWith(r, o);
              };
            };
          if (
            t <= 1 &&
            (R(e, s.done(a(n)).resolve, s.reject, !t),
            "pending" === s.state() || h(o[n] && o[n].then))
          )
            return s.then();
          for (; n--; ) R(o[n], a(n), s.reject);
          return s.promise();
        },
      });
    var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (w.Deferred.exceptionHook = function (t, n) {
      e.console &&
        e.console.warn &&
        t &&
        I.test(t.name) &&
        e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
      (w.readyException = function (t) {
        e.setTimeout(function () {
          throw t;
        });
      });
    var F = w.Deferred();
    function W() {
      m.removeEventListener("DOMContentLoaded", W),
        e.removeEventListener("load", W),
        w.ready();
    }
    (w.fn.ready = function (e) {
      return (
        F.then(e).catch(function (e) {
          w.readyException(e);
        }),
        this
      );
    }),
      w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (!0 === e ? --w.readyWait : w.isReady) ||
            ((w.isReady = !0) !== e && 0 < --w.readyWait) ||
            F.resolveWith(m, [w]);
        },
      }),
      (w.ready.then = F.then),
      "complete" === m.readyState ||
      ("loading" !== m.readyState && !m.documentElement.doScroll)
        ? e.setTimeout(w.ready)
        : (m.addEventListener("DOMContentLoaded", W),
          e.addEventListener("load", W));
    var B = function (e, t, n, r, i, o, s) {
        var a = 0,
          u = e.length,
          c = null == n;
        if ("object" === b(n))
          for (a in ((i = !0), n)) B(e, t, a, n[a], !0, o, s);
        else if (
          void 0 !== r &&
          ((i = !0),
          h(r) || (s = !0),
          c &&
            (s
              ? (t.call(e, r), (t = null))
              : ((c = t),
                (t = function (e, t, n) {
                  return c.call(w(e), n);
                }))),
          t)
        )
          for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : c ? t.call(e) : u ? t(e[0], n) : o;
      },
      $ = /^-ms-/,
      z = /-([a-z])/g;
    function X(e, t) {
      return t.toUpperCase();
    }
    function U(e) {
      return e.replace($, "ms-").replace(z, X);
    }
    var G = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function V() {
      this.expando = w.expando + V.uid++;
    }
    (V.uid = 1),
      (V.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              G(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var r,
            i = this.cache(e);
          if ("string" == typeof t) i[U(t)] = n;
          else for (r in t) i[U(r)] = t[r];
          return i;
        },
        get: function (e, t) {
          return void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][U(t)];
        },
        access: function (e, t, n) {
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? this.get(e, t)
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            r = e[this.expando];
          if (void 0 !== r) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t)
                ? t.map(U)
                : (t = U(t)) in r
                ? [t]
                : t.match(O) || []).length;
              for (; n--; ) delete r[t[n]];
            }
            (void 0 === t || w.isEmptyObject(r)) &&
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !w.isEmptyObject(t);
        },
      });
    var Q = new V(),
      Y = new V(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;
    function Z(e, t, n) {
      var r, i;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
          "string" == typeof (n = e.getAttribute(r)))
        ) {
          try {
            n =
              "true" === (i = n) ||
              ("false" !== i &&
                ("null" === i
                  ? null
                  : i === +i + ""
                  ? +i
                  : J.test(i)
                  ? JSON.parse(i)
                  : i));
          } catch (e) {}
          Y.set(e, t, n);
        } else n = void 0;
      return n;
    }
    w.extend({
      hasData: function (e) {
        return Y.hasData(e) || Q.hasData(e);
      },
      data: function (e, t, n) {
        return Y.access(e, t, n);
      },
      removeData: function (e, t) {
        Y.remove(e, t);
      },
      _data: function (e, t, n) {
        return Q.access(e, t, n);
      },
      _removeData: function (e, t) {
        Q.remove(e, t);
      },
    }),
      w.fn.extend({
        data: function (e, t) {
          var n,
            r,
            i,
            o = this[0],
            s = o && o.attributes;
          if (void 0 === e) {
            if (
              this.length &&
              ((i = Y.get(o)), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
            ) {
              for (n = s.length; n--; )
                s[n] &&
                  0 === (r = s[n].name).indexOf("data-") &&
                  ((r = U(r.slice(5))), Z(o, r, i[r]));
              Q.set(o, "hasDataAttrs", !0);
            }
            return i;
          }
          return "object" == typeof e
            ? this.each(function () {
                Y.set(this, e);
              })
            : B(
                this,
                function (t) {
                  var n;
                  if (o && void 0 === t)
                    return void 0 !== (n = Y.get(o, e)) ||
                      void 0 !== (n = Z(o, e))
                      ? n
                      : void 0;
                  this.each(function () {
                    Y.set(this, e, t);
                  });
                },
                null,
                t,
                1 < arguments.length,
                null,
                !0
              );
        },
        removeData: function (e) {
          return this.each(function () {
            Y.remove(this, e);
          });
        },
      }),
      w.extend({
        queue: function (e, t, n) {
          var r;
          if (e)
            return (
              (t = (t || "fx") + "queue"),
              (r = Q.get(e, t)),
              n &&
                (!r || Array.isArray(n)
                  ? (r = Q.access(e, t, w.makeArray(n)))
                  : r.push(n)),
              r || []
            );
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = w.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = w._queueHooks(e, t);
          "inprogress" === i && ((i = n.shift()), r--),
            i &&
              ("fx" === t && n.unshift("inprogress"),
              delete o.stop,
              i.call(
                e,
                function () {
                  w.dequeue(e, t);
                },
                o
              )),
            !r && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            Q.get(e, n) ||
            Q.access(e, n, {
              empty: w.Callbacks("once memory").add(function () {
                Q.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      w.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return (
            "string" != typeof e && ((t = e), (e = "fx"), n--),
            arguments.length < n
              ? w.queue(this[0], e)
              : void 0 === t
              ? this
              : this.each(function () {
                  var n = w.queue(this, e, t);
                  w._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            w.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            r = 1,
            i = w.Deferred(),
            o = this,
            s = this.length,
            a = function () {
              --r || i.resolveWith(o, [o]);
            };
          for (
            "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
            s--;

          )
            (n = Q.get(o[s], e + "queueHooks")) &&
              n.empty &&
              (r++, n.empty.add(a));
          return a(), i.promise(t);
        },
      });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = m.documentElement,
      ie = function (e) {
        return w.contains(e.ownerDocument, e);
      },
      oe = { composed: !0 };
    re.getRootNode &&
      (ie = function (e) {
        return (
          w.contains(e.ownerDocument, e) ||
          e.getRootNode(oe) === e.ownerDocument
        );
      });
    var se = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && ie(e) && "none" === w.css(e, "display"))
      );
    };
    function ae(e, t, n, r) {
      var i,
        o,
        s = 20,
        a = r
          ? function () {
              return r.cur();
            }
          : function () {
              return w.css(e, t, "");
            },
        u = a(),
        c = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
        l =
          e.nodeType &&
          (w.cssNumber[t] || ("px" !== c && +u)) &&
          te.exec(w.css(e, t));
      if (l && l[3] !== c) {
        for (u /= 2, c = c || l[3], l = +u || 1; s--; )
          w.style(e, t, l + c),
            (1 - o) * (1 - (o = a() / u || 0.5)) <= 0 && (s = 0),
            (l /= o);
        (l *= 2), w.style(e, t, l + c), (n = n || []);
      }
      return (
        n &&
          ((l = +l || +u || 0),
          (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
          r && ((r.unit = c), (r.start = l), (r.end = i))),
        i
      );
    }
    var ue = {};
    function ce(e, t) {
      for (var n, r, i, o, s, a, u, c = [], l = 0, f = e.length; l < f; l++)
        (r = e[l]).style &&
          ((n = r.style.display),
          t
            ? ("none" === n &&
                ((c[l] = Q.get(r, "display") || null),
                c[l] || (r.style.display = "")),
              "" === r.style.display &&
                se(r) &&
                (c[l] =
                  ((u = s = o = void 0),
                  (s = (i = r).ownerDocument),
                  (a = i.nodeName),
                  (u = ue[a]) ||
                    ((o = s.body.appendChild(s.createElement(a))),
                    (u = w.css(o, "display")),
                    o.parentNode.removeChild(o),
                    "none" === u && (u = "block"),
                    (ue[a] = u)))))
            : "none" !== n && ((c[l] = "none"), Q.set(r, "display", n)));
      for (l = 0; l < f; l++) null != c[l] && (e[l].style.display = c[l]);
      return e;
    }
    w.fn.extend({
      show: function () {
        return ce(this, !0);
      },
      hide: function () {
        return ce(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              se(this) ? w(this).show() : w(this).hide();
            });
      },
    });
    var le,
      fe,
      de = /^(?:checkbox|radio)$/i,
      pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
    (le = m.createDocumentFragment().appendChild(m.createElement("div"))),
      (fe = m.createElement("input")).setAttribute("type", "radio"),
      fe.setAttribute("checked", "checked"),
      fe.setAttribute("name", "t"),
      le.appendChild(fe),
      (p.checkClone = le.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (le.innerHTML = "<textarea>x</textarea>"),
      (p.noCloneChecked = !!le.cloneNode(!0).lastChild.defaultValue),
      (le.innerHTML = "<option></option>"),
      (p.option = !!le.lastChild);
    var ge = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
    function me(e, t) {
      var n;
      return (
        (n =
          void 0 !== e.getElementsByTagName
            ? e.getElementsByTagName(t || "*")
            : void 0 !== e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
        void 0 === t || (t && A(e, t)) ? w.merge([e], n) : n
      );
    }
    function ve(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
      (ge.th = ge.td),
      p.option ||
        (ge.optgroup = ge.option =
          [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;
    function be(e, t, n, r, i) {
      for (
        var o,
          s,
          a,
          u,
          c,
          l,
          f = t.createDocumentFragment(),
          d = [],
          p = 0,
          h = e.length;
        p < h;
        p++
      )
        if ((o = e[p]) || 0 === o)
          if ("object" === b(o)) w.merge(d, o.nodeType ? [o] : o);
          else if (ye.test(o)) {
            for (
              s = s || f.appendChild(t.createElement("div")),
                a = (pe.exec(o) || ["", ""])[1].toLowerCase(),
                u = ge[a] || ge._default,
                s.innerHTML = u[1] + w.htmlPrefilter(o) + u[2],
                l = u[0];
              l--;

            )
              s = s.lastChild;
            w.merge(d, s.childNodes), ((s = f.firstChild).textContent = "");
          } else d.push(t.createTextNode(o));
      for (f.textContent = "", p = 0; (o = d[p++]); )
        if (r && -1 < w.inArray(o, r)) i && i.push(o);
        else if (
          ((c = ie(o)), (s = me(f.appendChild(o), "script")), c && ve(s), n)
        )
          for (l = 0; (o = s[l++]); ) he.test(o.type || "") && n.push(o);
      return f;
    }
    var xe = /^([^.]*)(?:\.(.+)|)/;
    function we() {
      return !0;
    }
    function Ce() {
      return !1;
    }
    function Se(e, t) {
      return (
        (e ===
          (function () {
            try {
              return m.activeElement;
            } catch (e) {}
          })()) ==
        ("focus" === t)
      );
    }
    function Te(e, t, n, r, i, o) {
      var s, a;
      if ("object" == typeof t) {
        for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
          Te(e, a, n, r, t[a], o);
        return e;
      }
      if (
        (null == r && null == i
          ? ((i = n), (r = n = void 0))
          : null == i &&
            ("string" == typeof n
              ? ((i = r), (r = void 0))
              : ((i = r), (r = n), (n = void 0))),
        !1 === i)
      )
        i = Ce;
      else if (!i) return e;
      return (
        1 === o &&
          ((s = i),
          ((i = function (e) {
            return w().off(e), s.apply(this, arguments);
          }).guid = s.guid || (s.guid = w.guid++))),
        e.each(function () {
          w.event.add(this, t, i, r, n);
        })
      );
    }
    function Ee(e, t, n) {
      n
        ? (Q.set(e, t, !1),
          w.event.add(e, t, {
            namespace: !1,
            handler: function (e) {
              var r,
                o,
                s = Q.get(this, t);
              if (1 & e.isTrigger && this[t]) {
                if (s.length)
                  (w.event.special[t] || {}).delegateType &&
                    e.stopPropagation();
                else if (
                  ((s = i.call(arguments)),
                  Q.set(this, t, s),
                  (r = n(this, t)),
                  this[t](),
                  s !== (o = Q.get(this, t)) || r
                    ? Q.set(this, t, !1)
                    : (o = {}),
                  s !== o)
                )
                  return (
                    e.stopImmediatePropagation(),
                    e.preventDefault(),
                    o && o.value
                  );
              } else
                s.length &&
                  (Q.set(this, t, {
                    value: w.event.trigger(
                      w.extend(s[0], w.Event.prototype),
                      s.slice(1),
                      this
                    ),
                  }),
                  e.stopImmediatePropagation());
            },
          }))
        : void 0 === Q.get(e, t) && w.event.add(e, t, we);
    }
    (w.event = {
      global: {},
      add: function (e, t, n, r, i) {
        var o,
          s,
          a,
          u,
          c,
          l,
          f,
          d,
          p,
          h,
          g,
          m = Q.get(e);
        if (G(e))
          for (
            n.handler && ((n = (o = n).handler), (i = o.selector)),
              i && w.find.matchesSelector(re, i),
              n.guid || (n.guid = w.guid++),
              (u = m.events) || (u = m.events = Object.create(null)),
              (s = m.handle) ||
                (s = m.handle =
                  function (t) {
                    return void 0 !== w && w.event.triggered !== t.type
                      ? w.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
              c = (t = (t || "").match(O) || [""]).length;
            c--;

          )
            (p = g = (a = xe.exec(t[c]) || [])[1]),
              (h = (a[2] || "").split(".").sort()),
              p &&
                ((f = w.event.special[p] || {}),
                (p = (i ? f.delegateType : f.bindType) || p),
                (f = w.event.special[p] || {}),
                (l = w.extend(
                  {
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join("."),
                  },
                  o
                )),
                (d = u[p]) ||
                  (((d = u[p] = []).delegateCount = 0),
                  (f.setup && !1 !== f.setup.call(e, r, h, s)) ||
                    (e.addEventListener && e.addEventListener(p, s))),
                f.add &&
                  (f.add.call(e, l),
                  l.handler.guid || (l.handler.guid = n.guid)),
                i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                (w.event.global[p] = !0));
      },
      remove: function (e, t, n, r, i) {
        var o,
          s,
          a,
          u,
          c,
          l,
          f,
          d,
          p,
          h,
          g,
          m = Q.hasData(e) && Q.get(e);
        if (m && (u = m.events)) {
          for (c = (t = (t || "").match(O) || [""]).length; c--; )
            if (
              ((p = g = (a = xe.exec(t[c]) || [])[1]),
              (h = (a[2] || "").split(".").sort()),
              p)
            ) {
              for (
                f = w.event.special[p] || {},
                  d = u[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  s = o = d.length;
                o--;

              )
                (l = d[o]),
                  (!i && g !== l.origType) ||
                    (n && n.guid !== l.guid) ||
                    (a && !a.test(l.namespace)) ||
                    (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                    (d.splice(o, 1),
                    l.selector && d.delegateCount--,
                    f.remove && f.remove.call(e, l));
              s &&
                !d.length &&
                ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) ||
                  w.removeEvent(e, p, m.handle),
                delete u[p]);
            } else for (p in u) w.event.remove(e, p + t[c], n, r, !0);
          w.isEmptyObject(u) && Q.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a = new Array(arguments.length),
          u = w.event.fix(e),
          c = (Q.get(this, "events") || Object.create(null))[u.type] || [],
          l = w.event.special[u.type] || {};
        for (a[0] = u, t = 1; t < arguments.length; t++) a[t] = arguments[t];
        if (
          ((u.delegateTarget = this),
          !l.preDispatch || !1 !== l.preDispatch.call(this, u))
        ) {
          for (
            s = w.event.handlers.call(this, u, c), t = 0;
            (i = s[t++]) && !u.isPropagationStopped();

          )
            for (
              u.currentTarget = i.elem, n = 0;
              (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

            )
              (u.rnamespace &&
                !1 !== o.namespace &&
                !u.rnamespace.test(o.namespace)) ||
                ((u.handleObj = o),
                (u.data = o.data),
                void 0 !==
                  (r = (
                    (w.event.special[o.origType] || {}).handle || o.handler
                  ).apply(i.elem, a)) &&
                  !1 === (u.result = r) &&
                  (u.preventDefault(), u.stopPropagation()));
          return l.postDispatch && l.postDispatch.call(this, u), u.result;
        }
      },
      handlers: function (e, t) {
        var n,
          r,
          i,
          o,
          s,
          a = [],
          u = t.delegateCount,
          c = e.target;
        if (u && c.nodeType && !("click" === e.type && 1 <= e.button))
          for (; c !== this; c = c.parentNode || this)
            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
              for (o = [], s = {}, n = 0; n < u; n++)
                void 0 === s[(i = (r = t[n]).selector + " ")] &&
                  (s[i] = r.needsContext
                    ? -1 < w(i, this).index(c)
                    : w.find(i, this, null, [c]).length),
                  s[i] && o.push(r);
              o.length && a.push({ elem: c, handlers: o });
            }
        return (
          (c = this),
          u < t.length && a.push({ elem: c, handlers: t.slice(u) }),
          a
        );
      },
      addProp: function (e, t) {
        Object.defineProperty(w.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: h(t)
            ? function () {
                if (this.originalEvent) return t(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[e];
              },
          set: function (t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            });
          },
        });
      },
      fix: function (e) {
        return e[w.expando] ? e : new w.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (e) {
            var t = this || e;
            return (
              de.test(t.type) && t.click && A(t, "input") && Ee(t, "click", we),
              !1
            );
          },
          trigger: function (e) {
            var t = this || e;
            return (
              de.test(t.type) && t.click && A(t, "input") && Ee(t, "click"), !0
            );
          },
          _default: function (e) {
            var t = e.target;
            return (
              (de.test(t.type) &&
                t.click &&
                A(t, "input") &&
                Q.get(t, "click")) ||
              A(t, "a")
            );
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (void 0 === e.defaultPrevented && !1 === e.returnValue)
                ? we
                : Ce),
            (this.target =
              e.target && 3 === e.target.nodeType
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && w.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[w.expando] = !0);
      }),
      (w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Ce,
        isPropagationStopped: Ce,
        isImmediatePropagationStopped: Ce,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = we),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = we),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = we),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      w.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: !0,
        },
        w.event.addProp
      ),
      w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        w.event.special[e] = {
          setup: function () {
            return Ee(this, e, Se), !1;
          },
          trigger: function () {
            return Ee(this, e), !0;
          },
          _default: function (t) {
            return Q.get(t.target, e);
          },
          delegateType: t,
        };
      }),
      w.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, t) {
          w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var n,
                r = e.relatedTarget,
                i = e.handleObj;
              return (
                (r && (r === this || w.contains(this, r))) ||
                  ((e.type = i.origType),
                  (n = i.handler.apply(this, arguments)),
                  (e.type = t)),
                n
              );
            },
          };
        }
      ),
      w.fn.extend({
        on: function (e, t, n, r) {
          return Te(this, e, t, n, r);
        },
        one: function (e, t, n, r) {
          return Te(this, e, t, n, r, 1);
        },
        off: function (e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj)
            return (
              (r = e.handleObj),
              w(e.delegateTarget).off(
                r.namespace ? r.origType + "." + r.namespace : r.origType,
                r.selector,
                r.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (i in e) this.off(i, t, e[i]);
            return this;
          }
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = Ce),
            this.each(function () {
              w.event.remove(this, e, n, t);
            })
          );
        },
      });
    var ke = /<script|<style|<link/i,
      Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
      De = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function je(e, t) {
      return (
        (A(e, "table") &&
          A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
          w(e).children("tbody")[0]) ||
        e
      );
    }
    function Ne(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Le(e) {
      return (
        "true/" === (e.type || "").slice(0, 5)
          ? (e.type = e.type.slice(5))
          : e.removeAttribute("type"),
        e
      );
    }
    function Pe(e, t) {
      var n, r, i, o, s, a;
      if (1 === t.nodeType) {
        if (Q.hasData(e) && (a = Q.get(e).events))
          for (i in (Q.remove(t, "handle events"), a))
            for (n = 0, r = a[i].length; n < r; n++) w.event.add(t, i, a[i][n]);
        Y.hasData(e) && ((o = Y.access(e)), (s = w.extend({}, o)), Y.set(t, s));
      }
    }
    function qe(e, t, n, r) {
      t = o(t);
      var i,
        s,
        a,
        u,
        c,
        l,
        f = 0,
        d = e.length,
        g = d - 1,
        m = t[0],
        v = h(m);
      if (v || (1 < d && "string" == typeof m && !p.checkClone && Ae.test(m)))
        return e.each(function (i) {
          var o = e.eq(i);
          v && (t[0] = m.call(this, i, o.html())), qe(o, t, n, r);
        });
      if (
        d &&
        ((s = (i = be(t, e[0].ownerDocument, !1, e, r)).firstChild),
        1 === i.childNodes.length && (i = s),
        s || r)
      ) {
        for (u = (a = w.map(me(i, "script"), Ne)).length; f < d; f++)
          (c = i),
            f !== g &&
              ((c = w.clone(c, !0, !0)), u && w.merge(a, me(c, "script"))),
            n.call(e[f], c, f);
        if (u)
          for (
            l = a[a.length - 1].ownerDocument, w.map(a, Le), f = 0;
            f < u;
            f++
          )
            (c = a[f]),
              he.test(c.type || "") &&
                !Q.access(c, "globalEval") &&
                w.contains(l, c) &&
                (c.src && "module" !== (c.type || "").toLowerCase()
                  ? w._evalUrl &&
                    !c.noModule &&
                    w._evalUrl(
                      c.src,
                      { nonce: c.nonce || c.getAttribute("nonce") },
                      l
                    )
                  : y(c.textContent.replace(De, ""), c, l));
      }
      return e;
    }
    function Me(e, t, n) {
      for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
        n || 1 !== r.nodeType || w.cleanData(me(r)),
          r.parentNode &&
            (n && ie(r) && ve(me(r, "script")), r.parentNode.removeChild(r));
      return e;
    }
    w.extend({
      htmlPrefilter: function (e) {
        return e;
      },
      clone: function (e, t, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          c,
          l = e.cloneNode(!0),
          f = ie(e);
        if (
          !(
            p.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            w.isXMLDoc(e)
          )
        )
          for (s = me(l), r = 0, i = (o = me(e)).length; r < i; r++)
            (a = o[r]),
              "input" === (c = (u = s[r]).nodeName.toLowerCase()) &&
              de.test(a.type)
                ? (u.checked = a.checked)
                : ("input" !== c && "textarea" !== c) ||
                  (u.defaultValue = a.defaultValue);
        if (t)
          if (n)
            for (
              o = o || me(e), s = s || me(l), r = 0, i = o.length;
              r < i;
              r++
            )
              Pe(o[r], s[r]);
          else Pe(e, l);
        return (
          0 < (s = me(l, "script")).length && ve(s, !f && me(e, "script")), l
        );
      },
      cleanData: function (e) {
        for (
          var t, n, r, i = w.event.special, o = 0;
          void 0 !== (n = e[o]);
          o++
        )
          if (G(n)) {
            if ((t = n[Q.expando])) {
              if (t.events)
                for (r in t.events)
                  i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
              n[Q.expando] = void 0;
            }
            n[Y.expando] && (n[Y.expando] = void 0);
          }
      },
    }),
      w.fn.extend({
        detach: function (e) {
          return Me(this, e, !0);
        },
        remove: function (e) {
          return Me(this, e);
        },
        text: function (e) {
          return B(
            this,
            function (e) {
              return void 0 === e
                ? w.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return qe(this, arguments, function (e) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              je(this, e).appendChild(e);
          });
        },
        prepend: function () {
          return qe(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = je(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return qe(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return qe(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (w.cleanData(me(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return w.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return B(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                r = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !ke.test(e) &&
                !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = w.htmlPrefilter(e);
                try {
                  for (; n < r; n++)
                    1 === (t = this[n] || {}).nodeType &&
                      (w.cleanData(me(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var e = [];
          return qe(
            this,
            arguments,
            function (t) {
              var n = this.parentNode;
              w.inArray(this, e) < 0 &&
                (w.cleanData(me(this)), n && n.replaceChild(t, this));
            },
            e
          );
        },
      }),
      w.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, t) {
          w.fn[e] = function (e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
              (n = a === o ? this : this.clone(!0)),
                w(i[a])[t](n),
                s.apply(r, n.get());
            return this.pushStack(r);
          };
        }
      );
    var Oe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      He = /^--/,
      _e = function (t) {
        var n = t.ownerDocument.defaultView;
        return (n && n.opener) || (n = e), n.getComputedStyle(t);
      },
      Re = function (e, t, n) {
        var r,
          i,
          o = {};
        for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
        return r;
      },
      Ie = new RegExp(ne.join("|"), "i"),
      Fe = "[\\x20\\t\\r\\n\\f]",
      We = new RegExp(
        "^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$",
        "g"
      );
    function Be(e, t, n) {
      var r,
        i,
        o,
        s,
        a = He.test(t),
        u = e.style;
      return (
        (n = n || _e(e)) &&
          ((s = n.getPropertyValue(t) || n[t]),
          a && s && (s = s.replace(We, "$1") || void 0),
          "" !== s || ie(e) || (s = w.style(e, t)),
          !p.pixelBoxStyles() &&
            Oe.test(s) &&
            Ie.test(t) &&
            ((r = u.width),
            (i = u.minWidth),
            (o = u.maxWidth),
            (u.minWidth = u.maxWidth = u.width = s),
            (s = n.width),
            (u.width = r),
            (u.minWidth = i),
            (u.maxWidth = o))),
        void 0 !== s ? s + "" : s
      );
    }
    function $e(e, t) {
      return {
        get: function () {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        },
      };
    }
    !(function () {
      function t() {
        if (l) {
          (c.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (l.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            re.appendChild(c).appendChild(l);
          var t = e.getComputedStyle(l);
          (r = "1%" !== t.top),
            (u = 12 === n(t.marginLeft)),
            (l.style.right = "60%"),
            (s = 36 === n(t.right)),
            (i = 36 === n(t.width)),
            (l.style.position = "absolute"),
            (o = 12 === n(l.offsetWidth / 3)),
            re.removeChild(c),
            (l = null);
        }
      }
      function n(e) {
        return Math.round(parseFloat(e));
      }
      var r,
        i,
        o,
        s,
        a,
        u,
        c = m.createElement("div"),
        l = m.createElement("div");
      l.style &&
        ((l.style.backgroundClip = "content-box"),
        (l.cloneNode(!0).style.backgroundClip = ""),
        (p.clearCloneStyle = "content-box" === l.style.backgroundClip),
        w.extend(p, {
          boxSizingReliable: function () {
            return t(), i;
          },
          pixelBoxStyles: function () {
            return t(), s;
          },
          pixelPosition: function () {
            return t(), r;
          },
          reliableMarginLeft: function () {
            return t(), u;
          },
          scrollboxSize: function () {
            return t(), o;
          },
          reliableTrDimensions: function () {
            var t, n, r, i;
            return (
              null == a &&
                ((t = m.createElement("table")),
                (n = m.createElement("tr")),
                (r = m.createElement("div")),
                (t.style.cssText =
                  "position:absolute;left:-11111px;border-collapse:separate"),
                (n.style.cssText = "border:1px solid"),
                (n.style.height = "1px"),
                (r.style.height = "9px"),
                (r.style.display = "block"),
                re.appendChild(t).appendChild(n).appendChild(r),
                (i = e.getComputedStyle(n)),
                (a =
                  parseInt(i.height, 10) +
                    parseInt(i.borderTopWidth, 10) +
                    parseInt(i.borderBottomWidth, 10) ===
                  n.offsetHeight),
                re.removeChild(t)),
              a
            );
          },
        }));
    })();
    var ze = ["Webkit", "Moz", "ms"],
      Xe = m.createElement("div").style,
      Ue = {};
    function Ge(e) {
      return (
        w.cssProps[e] ||
        Ue[e] ||
        (e in Xe
          ? e
          : (Ue[e] =
              (function (e) {
                for (
                  var t = e[0].toUpperCase() + e.slice(1), n = ze.length;
                  n--;

                )
                  if ((e = ze[n] + t) in Xe) return e;
              })(e) || e))
      );
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
      Qe = { position: "absolute", visibility: "hidden", display: "block" },
      Ye = { letterSpacing: "0", fontWeight: "400" };
    function Je(e, t, n) {
      var r = te.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ke(e, t, n, r, i, o) {
      var s = "width" === t ? 1 : 0,
        a = 0,
        u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; s < 4; s += 2)
        "margin" === n && (u += w.css(e, n + ne[s], !0, i)),
          r
            ? ("content" === n && (u -= w.css(e, "padding" + ne[s], !0, i)),
              "margin" !== n &&
                (u -= w.css(e, "border" + ne[s] + "Width", !0, i)))
            : ((u += w.css(e, "padding" + ne[s], !0, i)),
              "padding" !== n
                ? (u += w.css(e, "border" + ne[s] + "Width", !0, i))
                : (a += w.css(e, "border" + ne[s] + "Width", !0, i)));
      return (
        !r &&
          0 <= o &&
          (u +=
            Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - 0.5
              )
            ) || 0),
        u
      );
    }
    function Ze(e, t, n) {
      var r = _e(e),
        i =
          (!p.boxSizingReliable() || n) &&
          "border-box" === w.css(e, "boxSizing", !1, r),
        o = i,
        s = Be(e, t, r),
        a = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Oe.test(s)) {
        if (!n) return s;
        s = "auto";
      }
      return (
        ((!p.boxSizingReliable() && i) ||
          (!p.reliableTrDimensions() && A(e, "tr")) ||
          "auto" === s ||
          (!parseFloat(s) && "inline" === w.css(e, "display", !1, r))) &&
          e.getClientRects().length &&
          ((i = "border-box" === w.css(e, "boxSizing", !1, r)),
          (o = a in e) && (s = e[a])),
        (s = parseFloat(s) || 0) +
          Ke(e, t, n || (i ? "border" : "content"), o, r, s) +
          "px"
      );
    }
    function et(e, t, n, r, i) {
      return new et.prototype.init(e, t, n, r, i);
    }
    w.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = Be(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {},
      style: function (e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
            o,
            s,
            a = U(t),
            u = He.test(t),
            c = e.style;
          if (
            (u || (t = Ge(a)),
            (s = w.cssHooks[t] || w.cssHooks[a]),
            void 0 === n)
          )
            return s && "get" in s && void 0 !== (i = s.get(e, !1, r))
              ? i
              : c[t];
          "string" == (o = typeof n) &&
            (i = te.exec(n)) &&
            i[1] &&
            ((n = ae(e, t, i)), (o = "number")),
            null != n &&
              n == n &&
              ("number" !== o ||
                u ||
                (n += (i && i[3]) || (w.cssNumber[a] ? "" : "px")),
              p.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (c[t] = "inherit"),
              (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                (u ? c.setProperty(t, n) : (c[t] = n)));
        }
      },
      css: function (e, t, n, r) {
        var i,
          o,
          s,
          a = U(t);
        return (
          He.test(t) || (t = Ge(a)),
          (s = w.cssHooks[t] || w.cssHooks[a]) &&
            "get" in s &&
            (i = s.get(e, !0, n)),
          void 0 === i && (i = Be(e, t, r)),
          "normal" === i && t in Ye && (i = Ye[t]),
          "" === n || n
            ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
            : i
        );
      },
    }),
      w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
          get: function (e, n, r) {
            if (n)
              return !Ve.test(w.css(e, "display")) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? Ze(e, t, r)
                : Re(e, Qe, function () {
                    return Ze(e, t, r);
                  });
          },
          set: function (e, n, r) {
            var i,
              o = _e(e),
              s = !p.scrollboxSize() && "absolute" === o.position,
              a = (s || r) && "border-box" === w.css(e, "boxSizing", !1, o),
              u = r ? Ke(e, t, r, a, o) : 0;
            return (
              a &&
                s &&
                (u -= Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    parseFloat(o[t]) -
                    Ke(e, t, "border", !1, o) -
                    0.5
                )),
              u &&
                (i = te.exec(n)) &&
                "px" !== (i[3] || "px") &&
                ((e.style[t] = n), (n = w.css(e, t))),
              Je(0, n, u)
            );
          },
        };
      }),
      (w.cssHooks.marginLeft = $e(p.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(Be(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                Re(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        (w.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
              r < 4;
              r++
            )
              i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
            return i;
          },
        }),
          "margin" !== e && (w.cssHooks[e + t].set = Je);
      }),
      w.fn.extend({
        css: function (e, t) {
          return B(
            this,
            function (e, t, n) {
              var r,
                i,
                o = {},
                s = 0;
              if (Array.isArray(t)) {
                for (r = _e(e), i = t.length; s < i; s++)
                  o[t[s]] = w.css(e, t[s], !1, r);
                return o;
              }
              return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
            },
            e,
            t,
            1 < arguments.length
          );
        },
      }),
      (((w.Tween = et).prototype = {
        constructor: et,
        init: function (e, t, n, r, i, o) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = i || w.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = o || (w.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = et.propHooks[this.prop];
          return e && e.get ? e.get(this) : et.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = et.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  w.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
          );
        },
      }).init.prototype = et.prototype),
      ((et.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0;
          },
          set: function (e) {
            w.fx.step[e.prop]
              ? w.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (!w.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : w.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }).scrollTop = et.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (w.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (w.fx = et.prototype.init),
      (w.fx.step = {});
    var tt,
      nt,
      rt,
      it,
      ot = /^(?:toggle|show|hide)$/,
      st = /queueHooks$/;
    function at() {
      nt &&
        (!1 === m.hidden && e.requestAnimationFrame
          ? e.requestAnimationFrame(at)
          : e.setTimeout(at, w.fx.interval),
        w.fx.tick());
    }
    function ut() {
      return (
        e.setTimeout(function () {
          tt = void 0;
        }),
        (tt = Date.now())
      );
    }
    function ct(e, t) {
      var n,
        r = 0,
        i = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
        i["margin" + (n = ne[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i;
    }
    function lt(e, t, n) {
      for (
        var r,
          i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
          o = 0,
          s = i.length;
        o < s;
        o++
      )
        if ((r = i[o].call(n, t, e))) return r;
    }
    function ft(e, t, n) {
      var r,
        i,
        o = 0,
        s = ft.prefilters.length,
        a = w.Deferred().always(function () {
          delete u.elem;
        }),
        u = function () {
          if (i) return !1;
          for (
            var t = tt || ut(),
              n = Math.max(0, c.startTime + c.duration - t),
              r = 1 - (n / c.duration || 0),
              o = 0,
              s = c.tweens.length;
            o < s;
            o++
          )
            c.tweens[o].run(r);
          return (
            a.notifyWith(e, [c, r, n]),
            r < 1 && s
              ? n
              : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
          );
        },
        c = a.promise({
          elem: e,
          props: w.extend({}, t),
          opts: w.extend(
            !0,
            { specialEasing: {}, easing: w.easing._default },
            n
          ),
          originalProperties: t,
          originalOptions: n,
          startTime: tt || ut(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var r = w.Tween(
              e,
              c.opts,
              t,
              n,
              c.opts.specialEasing[t] || c.opts.easing
            );
            return c.tweens.push(r), r;
          },
          stop: function (t) {
            var n = 0,
              r = t ? c.tweens.length : 0;
            if (i) return this;
            for (i = !0; n < r; n++) c.tweens[n].run(1);
            return (
              t
                ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                : a.rejectWith(e, [c, t]),
              this
            );
          },
        }),
        l = c.props;
      for (
        (function (e, t) {
          var n, r, i, o, s;
          for (n in e)
            if (
              ((i = t[(r = U(n))]),
              (o = e[n]),
              Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
              n !== r && ((e[r] = o), delete e[n]),
              (s = w.cssHooks[r]) && ("expand" in s))
            )
              for (n in ((o = s.expand(o)), delete e[r], o))
                (n in e) || ((e[n] = o[n]), (t[n] = i));
            else t[r] = i;
        })(l, c.opts.specialEasing);
        o < s;
        o++
      )
        if ((r = ft.prefilters[o].call(c, e, l, c.opts)))
          return (
            h(r.stop) &&
              (w._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
            r
          );
      return (
        w.map(l, lt, c),
        h(c.opts.start) && c.opts.start.call(e, c),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always),
        w.fx.timer(w.extend(u, { elem: e, anim: c, queue: c.opts.queue })),
        c
      );
    }
    (w.Animation = w.extend(ft, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return ae(n.elem, e, te.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        h(e) ? ((t = e), (e = ["*"])) : (e = e.match(O));
        for (var n, r = 0, i = e.length; r < i; r++)
          (n = e[r]),
            (ft.tweeners[n] = ft.tweeners[n] || []),
            ft.tweeners[n].unshift(t);
      },
      prefilters: [
        function (e, t, n) {
          var r,
            i,
            o,
            s,
            a,
            u,
            c,
            l,
            f = "width" in t || "height" in t,
            d = this,
            p = {},
            h = e.style,
            g = e.nodeType && se(e),
            m = Q.get(e, "fxshow");
          for (r in (n.queue ||
            (null == (s = w._queueHooks(e, "fx")).unqueued &&
              ((s.unqueued = 0),
              (a = s.empty.fire),
              (s.empty.fire = function () {
                s.unqueued || a();
              })),
            s.unqueued++,
            d.always(function () {
              d.always(function () {
                s.unqueued--, w.queue(e, "fx").length || s.empty.fire();
              });
            })),
          t))
            if (((i = t[r]), ot.test(i))) {
              if (
                (delete t[r],
                (o = o || "toggle" === i),
                i === (g ? "hide" : "show"))
              ) {
                if ("show" !== i || !m || void 0 === m[r]) continue;
                g = !0;
              }
              p[r] = (m && m[r]) || w.style(e, r);
            }
          if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(p))
            for (r in (f &&
              1 === e.nodeType &&
              ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
              null == (c = m && m.display) && (c = Q.get(e, "display")),
              "none" === (l = w.css(e, "display")) &&
                (c
                  ? (l = c)
                  : (ce([e], !0),
                    (c = e.style.display || c),
                    (l = w.css(e, "display")),
                    ce([e]))),
              ("inline" === l || ("inline-block" === l && null != c)) &&
                "none" === w.css(e, "float") &&
                (u ||
                  (d.done(function () {
                    h.display = c;
                  }),
                  null == c && ((l = h.display), (c = "none" === l ? "" : l))),
                (h.display = "inline-block"))),
            n.overflow &&
              ((h.overflow = "hidden"),
              d.always(function () {
                (h.overflow = n.overflow[0]),
                  (h.overflowX = n.overflow[1]),
                  (h.overflowY = n.overflow[2]);
              })),
            (u = !1),
            p))
              u ||
                (m
                  ? "hidden" in m && (g = m.hidden)
                  : (m = Q.access(e, "fxshow", { display: c })),
                o && (m.hidden = !g),
                g && ce([e], !0),
                d.done(function () {
                  for (r in (g || ce([e]), Q.remove(e, "fxshow"), p))
                    w.style(e, r, p[r]);
                })),
                (u = lt(g ? m[r] : 0, r, d)),
                r in m ||
                  ((m[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
        },
      ],
      prefilter: function (e, t) {
        t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
      },
    })),
      (w.speed = function (e, t, n) {
        var r =
          e && "object" == typeof e
            ? w.extend({}, e)
            : {
                complete: n || (!n && t) || (h(e) && e),
                duration: e,
                easing: (n && t) || (t && !h(t) && t),
              };
        return (
          w.fx.off
            ? (r.duration = 0)
            : "number" != typeof r.duration &&
              (r.duration in w.fx.speeds
                ? (r.duration = w.fx.speeds[r.duration])
                : (r.duration = w.fx.speeds._default)),
          (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
          (r.old = r.complete),
          (r.complete = function () {
            h(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
          }),
          r
        );
      }),
      w.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(se)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (e, t, n, r) {
          var i = w.isEmptyObject(e),
            o = w.speed(t, n, r),
            s = function () {
              var t = ft(this, w.extend({}, e), o);
              (i || Q.get(this, "finish")) && t.stop(!0);
            };
          return (
            (s.finish = s),
            i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
          );
        },
        stop: function (e, t, n) {
          var r = function (e) {
            var t = e.stop;
            delete e.stop, t(n);
          };
          return (
            "string" != typeof e && ((n = t), (t = e), (e = void 0)),
            t && this.queue(e || "fx", []),
            this.each(function () {
              var t = !0,
                i = null != e && e + "queueHooks",
                o = w.timers,
                s = Q.get(this);
              if (i) s[i] && s[i].stop && r(s[i]);
              else for (i in s) s[i] && s[i].stop && st.test(i) && r(s[i]);
              for (i = o.length; i--; )
                o[i].elem !== this ||
                  (null != e && o[i].queue !== e) ||
                  (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
              (!t && n) || w.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            !1 !== e && (e = e || "fx"),
            this.each(function () {
              var t,
                n = Q.get(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = w.timers,
                s = r ? r.length : 0;
              for (
                n.finish = !0,
                  w.queue(this, e, []),
                  i && i.stop && i.stop.call(this, !0),
                  t = o.length;
                t--;

              )
                o[t].elem === this &&
                  o[t].queue === e &&
                  (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; t < s; t++)
                r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, r, i) {
          return null == e || "boolean" == typeof e
            ? n.apply(this, arguments)
            : this.animate(ct(t, !0), e, r, i);
        };
      }),
      w.each(
        {
          slideDown: ct("show"),
          slideUp: ct("hide"),
          slideToggle: ct("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
          w.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r);
          };
        }
      ),
      (w.timers = []),
      (w.fx.tick = function () {
        var e,
          t = 0,
          n = w.timers;
        for (tt = Date.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), (tt = void 0);
      }),
      (w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start();
      }),
      (w.fx.interval = 13),
      (w.fx.start = function () {
        nt || ((nt = !0), at());
      }),
      (w.fx.stop = function () {
        nt = null;
      }),
      (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (w.fn.delay = function (t, n) {
        return (
          (t = (w.fx && w.fx.speeds[t]) || t),
          (n = n || "fx"),
          this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
              e.clearTimeout(i);
            };
          })
        );
      }),
      (rt = m.createElement("input")),
      (it = m.createElement("select").appendChild(m.createElement("option"))),
      (rt.type = "checkbox"),
      (p.checkOn = "" !== rt.value),
      (p.optSelected = it.selected),
      ((rt = m.createElement("input")).value = "t"),
      (rt.type = "radio"),
      (p.radioValue = "t" === rt.value);
    var dt,
      pt = w.expr.attrHandle;
    w.fn.extend({
      attr: function (e, t) {
        return B(this, w.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function (e) {
        return this.each(function () {
          w.removeAttr(this, e);
        });
      },
    }),
      w.extend({
        attr: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return void 0 === e.getAttribute
              ? w.prop(e, t, n)
              : ((1 === o && w.isXMLDoc(e)) ||
                  (i =
                    w.attrHooks[t.toLowerCase()] ||
                    (w.expr.match.bool.test(t) ? dt : void 0)),
                void 0 !== n
                  ? null === n
                    ? void w.removeAttr(e, t)
                    : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e.setAttribute(t, n + ""), n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : null == (r = w.find.attr(e, t))
                  ? void 0
                  : r);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!p.radioValue && "radio" === t && A(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            r = 0,
            i = t && t.match(O);
          if (i && 1 === e.nodeType)
            for (; (n = i[r++]); ) e.removeAttribute(n);
        },
      }),
      (dt = {
        set: function (e, t, n) {
          return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = pt[t] || w.find.attr;
        pt[t] = function (e, t, r) {
          var i,
            o,
            s = t.toLowerCase();
          return (
            r ||
              ((o = pt[s]),
              (pt[s] = i),
              (i = null != n(e, t, r) ? s : null),
              (pt[s] = o)),
            i
          );
        };
      });
    var ht = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;
    function mt(e) {
      return (e.match(O) || []).join(" ");
    }
    function vt(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function yt(e) {
      return Array.isArray(e) ? e : ("string" == typeof e && e.match(O)) || [];
    }
    w.fn.extend({
      prop: function (e, t) {
        return B(this, w.prop, e, t, 1 < arguments.length);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[w.propFix[e] || e];
        });
      },
    }),
      w.extend({
        prop: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return (
              (1 === o && w.isXMLDoc(e)) ||
                ((t = w.propFix[t] || t), (i = w.propHooks[t])),
              void 0 !== n
                ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e[t] = n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = w.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      p.optSelected ||
        (w.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      w.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          w.propFix[this.toLowerCase()] = this;
        }
      ),
      w.fn.extend({
        addClass: function (e) {
          var t, n, r, i, o, s;
          return h(e)
            ? this.each(function (t) {
                w(this).addClass(e.call(this, t, vt(this)));
              })
            : (t = yt(e)).length
            ? this.each(function () {
                if (
                  ((r = vt(this)),
                  (n = 1 === this.nodeType && " " + mt(r) + " "))
                ) {
                  for (o = 0; o < t.length; o++)
                    (i = t[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                  (s = mt(n)), r !== s && this.setAttribute("class", s);
                }
              })
            : this;
        },
        removeClass: function (e) {
          var t, n, r, i, o, s;
          return h(e)
            ? this.each(function (t) {
                w(this).removeClass(e.call(this, t, vt(this)));
              })
            : arguments.length
            ? (t = yt(e)).length
              ? this.each(function () {
                  if (
                    ((r = vt(this)),
                    (n = 1 === this.nodeType && " " + mt(r) + " "))
                  ) {
                    for (o = 0; o < t.length; o++)
                      for (i = t[o]; -1 < n.indexOf(" " + i + " "); )
                        n = n.replace(" " + i + " ", " ");
                    (s = mt(n)), r !== s && this.setAttribute("class", s);
                  }
                })
              : this
            : this.attr("class", "");
        },
        toggleClass: function (e, t) {
          var n,
            r,
            i,
            o,
            s = typeof e,
            a = "string" === s || Array.isArray(e);
          return h(e)
            ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, vt(this), t), t);
              })
            : "boolean" == typeof t && a
            ? t
              ? this.addClass(e)
              : this.removeClass(e)
            : ((n = yt(e)),
              this.each(function () {
                if (a)
                  for (o = w(this), i = 0; i < n.length; i++)
                    (r = n[i]),
                      o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else
                  (void 0 !== e && "boolean" !== s) ||
                    ((r = vt(this)) && Q.set(this, "__className__", r),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        r || !1 === e ? "" : Q.get(this, "__className__") || ""
                      ));
              }));
        },
        hasClass: function (e) {
          var t,
            n,
            r = 0;
          for (t = " " + e + " "; (n = this[r++]); )
            if (1 === n.nodeType && -1 < (" " + mt(vt(n)) + " ").indexOf(t))
              return !0;
          return !1;
        },
      });
    var bt = /\r/g;
    w.fn.extend({
      val: function (e) {
        var t,
          n,
          r,
          i = this[0];
        return arguments.length
          ? ((r = h(e)),
            this.each(function (n) {
              var i;
              1 === this.nodeType &&
                (null == (i = r ? e.call(this, n, w(this).val()) : e)
                  ? (i = "")
                  : "number" == typeof i
                  ? (i += "")
                  : Array.isArray(i) &&
                    (i = w.map(i, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((t =
                  w.valHooks[this.type] ||
                  w.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  void 0 !== t.set(this, i, "value")) ||
                  (this.value = i));
            }))
          : i
          ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) &&
            "get" in t &&
            void 0 !== (n = t.get(i, "value"))
            ? n
            : "string" == typeof (n = i.value)
            ? n.replace(bt, "")
            : null == n
            ? ""
            : n
          : void 0;
      },
    }),
      w.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = w.find.attr(e, "value");
              return null != t ? t : mt(w.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                r,
                i = e.options,
                o = e.selectedIndex,
                s = "select-one" === e.type,
                a = s ? null : [],
                u = s ? o + 1 : i.length;
              for (r = o < 0 ? u : s ? o : 0; r < u; r++)
                if (
                  ((n = i[r]).selected || r === o) &&
                  !n.disabled &&
                  (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                ) {
                  if (((t = w(n).val()), s)) return t;
                  a.push(t);
                }
              return a;
            },
            set: function (e, t) {
              for (
                var n, r, i = e.options, o = w.makeArray(t), s = i.length;
                s--;

              )
                ((r = i[s]).selected =
                  -1 < w.inArray(w.valHooks.option.get(r), o)) && (n = !0);
              return n || (e.selectedIndex = -1), o;
            },
          },
        },
      }),
      w.each(["radio", "checkbox"], function () {
        (w.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = -1 < w.inArray(w(e).val(), t));
          },
        }),
          p.checkOn ||
            (w.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      }),
      (p.focusin = "onfocusin" in e);
    var xt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function (e) {
        e.stopPropagation();
      };
    w.extend(w.event, {
      trigger: function (t, n, r, i) {
        var o,
          s,
          a,
          u,
          c,
          f,
          d,
          p,
          v = [r || m],
          y = l.call(t, "type") ? t.type : t,
          b = l.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((s = p = a = r = r || m),
          3 !== r.nodeType &&
            8 !== r.nodeType &&
            !xt.test(y + w.event.triggered) &&
            (-1 < y.indexOf(".") &&
              ((y = (b = y.split(".")).shift()), b.sort()),
            (c = y.indexOf(":") < 0 && "on" + y),
            ((t = t[w.expando]
              ? t
              : new w.Event(y, "object" == typeof t && t)).isTrigger = i
              ? 2
              : 3),
            (t.namespace = b.join(".")),
            (t.rnamespace = t.namespace
              ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = r),
            (n = null == n ? [t] : w.makeArray(n, [t])),
            (d = w.event.special[y] || {}),
            i || !d.trigger || !1 !== d.trigger.apply(r, n)))
        ) {
          if (!i && !d.noBubble && !g(r)) {
            for (
              u = d.delegateType || y, xt.test(u + y) || (s = s.parentNode);
              s;
              s = s.parentNode
            )
              v.push(s), (a = s);
            a === (r.ownerDocument || m) &&
              v.push(a.defaultView || a.parentWindow || e);
          }
          for (o = 0; (s = v[o++]) && !t.isPropagationStopped(); )
            (p = s),
              (t.type = 1 < o ? u : d.bindType || y),
              (f =
                (Q.get(s, "events") || Object.create(null))[t.type] &&
                Q.get(s, "handle")) && f.apply(s, n),
              (f = c && s[c]) &&
                f.apply &&
                G(s) &&
                ((t.result = f.apply(s, n)),
                !1 === t.result && t.preventDefault());
          return (
            (t.type = y),
            i ||
              t.isDefaultPrevented() ||
              (d._default && !1 !== d._default.apply(v.pop(), n)) ||
              !G(r) ||
              (c &&
                h(r[y]) &&
                !g(r) &&
                ((a = r[c]) && (r[c] = null),
                (w.event.triggered = y),
                t.isPropagationStopped() && p.addEventListener(y, wt),
                r[y](),
                t.isPropagationStopped() && p.removeEventListener(y, wt),
                (w.event.triggered = void 0),
                a && (r[c] = a))),
            t.result
          );
        }
      },
      simulate: function (e, t, n) {
        var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
        w.event.trigger(r, null, t);
      },
    }),
      w.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            w.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return w.event.trigger(e, t, n, !0);
        },
      }),
      p.focusin ||
        w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e));
          };
          w.event.special[t] = {
            setup: function () {
              var r = this.ownerDocument || this.document || this,
                i = Q.access(r, t);
              i || r.addEventListener(e, n, !0), Q.access(r, t, (i || 0) + 1);
            },
            teardown: function () {
              var r = this.ownerDocument || this.document || this,
                i = Q.access(r, t) - 1;
              i
                ? Q.access(r, t, i)
                : (r.removeEventListener(e, n, !0), Q.remove(r, t));
            },
          };
        });
    var Ct = e.location,
      St = { guid: Date.now() },
      Tt = /\?/;
    w.parseXML = function (t) {
      var n, r;
      if (!t || "string" != typeof t) return null;
      try {
        n = new e.DOMParser().parseFromString(t, "text/xml");
      } catch (t) {}
      return (
        (r = n && n.getElementsByTagName("parsererror")[0]),
        (n && !r) ||
          w.error(
            "Invalid XML: " +
              (r
                ? w
                    .map(r.childNodes, function (e) {
                      return e.textContent;
                    })
                    .join("\n")
                : t)
          ),
        n
      );
    };
    var Et = /\[\]$/,
      kt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Dt = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t, n, r) {
      var i;
      if (Array.isArray(t))
        w.each(t, function (t, i) {
          n || Et.test(e)
            ? r(e, i)
            : jt(
                e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
                i,
                n,
                r
              );
        });
      else if (n || "object" !== b(t)) r(e, t);
      else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
    }
    (w.param = function (e, t) {
      var n,
        r = [],
        i = function (e, t) {
          var n = h(t) ? t() : t;
          r[r.length] =
            encodeURIComponent(e) +
            "=" +
            encodeURIComponent(null == n ? "" : n);
        };
      if (null == e) return "";
      if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
        w.each(e, function () {
          i(this.name, this.value);
        });
      else for (n in e) jt(n, e[n], t, i);
      return r.join("&");
    }),
      w.fn.extend({
        serialize: function () {
          return w.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = w.prop(this, "elements");
            return e ? w.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !w(this).is(":disabled") &&
                Dt.test(this.nodeName) &&
                !At.test(e) &&
                (this.checked || !de.test(e))
              );
            })
            .map(function (e, t) {
              var n = w(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? w.map(n, function (e) {
                    return { name: t.name, value: e.replace(kt, "\r\n") };
                  })
                : { name: t.name, value: n.replace(kt, "\r\n") };
            })
            .get();
        },
      });
    var Nt = /%20/g,
      Lt = /#.*$/,
      Pt = /([?&])_=[^&]*/,
      qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Mt = /^(?:GET|HEAD)$/,
      Ot = /^\/\//,
      Ht = {},
      _t = {},
      Rt = "*/".concat("*"),
      It = m.createElement("a");
    function Ft(e) {
      return function (t, n) {
        "string" != typeof t && ((n = t), (t = "*"));
        var r,
          i = 0,
          o = t.toLowerCase().match(O) || [];
        if (h(n))
          for (; (r = o[i++]); )
            "+" === r[0]
              ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
              : (e[r] = e[r] || []).push(n);
      };
    }
    function Wt(e, t, n, r) {
      var i = {},
        o = e === _t;
      function s(a) {
        var u;
        return (
          (i[a] = !0),
          w.each(e[a] || [], function (e, a) {
            var c = a(t, n, r);
            return "string" != typeof c || o || i[c]
              ? o
                ? !(u = c)
                : void 0
              : (t.dataTypes.unshift(c), s(c), !1);
          }),
          u
        );
      }
      return s(t.dataTypes[0]) || (!i["*"] && s("*"));
    }
    function Bt(e, t) {
      var n,
        r,
        i = w.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && w.extend(!0, e, r), e;
    }
    (It.href = Ct.href),
      w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Ct.href,
          type: "GET",
          isLocal:
            /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Ct.protocol
            ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Rt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": w.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? Bt(Bt(e, w.ajaxSettings), t) : Bt(w.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(Ht),
        ajaxTransport: Ft(_t),
        ajax: function (t, n) {
          "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
          var r,
            i,
            o,
            s,
            a,
            u,
            c,
            l,
            f,
            d,
            p = w.ajaxSetup({}, n),
            h = p.context || p,
            g = p.context && (h.nodeType || h.jquery) ? w(h) : w.event,
            v = w.Deferred(),
            y = w.Callbacks("once memory"),
            b = p.statusCode || {},
            x = {},
            C = {},
            S = "canceled",
            T = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (c) {
                  if (!s)
                    for (s = {}; (t = qt.exec(o)); )
                      s[t[1].toLowerCase() + " "] = (
                        s[t[1].toLowerCase() + " "] || []
                      ).concat(t[2]);
                  t = s[e.toLowerCase() + " "];
                }
                return null == t ? null : t.join(", ");
              },
              getAllResponseHeaders: function () {
                return c ? o : null;
              },
              setRequestHeader: function (e, t) {
                return (
                  null == c &&
                    ((e = C[e.toLowerCase()] = C[e.toLowerCase()] || e),
                    (x[e] = t)),
                  this
                );
              },
              overrideMimeType: function (e) {
                return null == c && (p.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (c) T.always(e[T.status]);
                  else for (t in e) b[t] = [b[t], e[t]];
                return this;
              },
              abort: function (e) {
                var t = e || S;
                return r && r.abort(t), E(0, t), this;
              },
            };
          if (
            (v.promise(T),
            (p.url = ((t || p.url || Ct.href) + "").replace(
              Ot,
              Ct.protocol + "//"
            )),
            (p.type = n.method || n.type || p.method || p.type),
            (p.dataTypes = (p.dataType || "*").toLowerCase().match(O) || [""]),
            null == p.crossDomain)
          ) {
            u = m.createElement("a");
            try {
              (u.href = p.url),
                (u.href = u.href),
                (p.crossDomain =
                  It.protocol + "//" + It.host != u.protocol + "//" + u.host);
            } catch (t) {
              p.crossDomain = !0;
            }
          }
          if (
            (p.data &&
              p.processData &&
              "string" != typeof p.data &&
              (p.data = w.param(p.data, p.traditional)),
            Wt(Ht, p, n, T),
            c)
          )
            return T;
          for (f in ((l = w.event && p.global) &&
            0 == w.active++ &&
            w.event.trigger("ajaxStart"),
          (p.type = p.type.toUpperCase()),
          (p.hasContent = !Mt.test(p.type)),
          (i = p.url.replace(Lt, "")),
          p.hasContent
            ? p.data &&
              p.processData &&
              0 ===
                (p.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (p.data = p.data.replace(Nt, "+"))
            : ((d = p.url.slice(i.length)),
              p.data &&
                (p.processData || "string" == typeof p.data) &&
                ((i += (Tt.test(i) ? "&" : "?") + p.data), delete p.data),
              !1 === p.cache &&
                ((i = i.replace(Pt, "$1")),
                (d = (Tt.test(i) ? "&" : "?") + "_=" + St.guid++ + d)),
              (p.url = i + d)),
          p.ifModified &&
            (w.lastModified[i] &&
              T.setRequestHeader("If-Modified-Since", w.lastModified[i]),
            w.etag[i] && T.setRequestHeader("If-None-Match", w.etag[i])),
          ((p.data && p.hasContent && !1 !== p.contentType) || n.contentType) &&
            T.setRequestHeader("Content-Type", p.contentType),
          T.setRequestHeader(
            "Accept",
            p.dataTypes[0] && p.accepts[p.dataTypes[0]]
              ? p.accepts[p.dataTypes[0]] +
                  ("*" !== p.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
              : p.accepts["*"]
          ),
          p.headers))
            T.setRequestHeader(f, p.headers[f]);
          if (p.beforeSend && (!1 === p.beforeSend.call(h, T, p) || c))
            return T.abort();
          if (
            ((S = "abort"),
            y.add(p.complete),
            T.done(p.success),
            T.fail(p.error),
            (r = Wt(_t, p, n, T)))
          ) {
            if (((T.readyState = 1), l && g.trigger("ajaxSend", [T, p]), c))
              return T;
            p.async &&
              0 < p.timeout &&
              (a = e.setTimeout(function () {
                T.abort("timeout");
              }, p.timeout));
            try {
              (c = !1), r.send(x, E);
            } catch (t) {
              if (c) throw t;
              E(-1, t);
            }
          } else E(-1, "No Transport");
          function E(t, n, s, u) {
            var f,
              d,
              m,
              x,
              C,
              S = n;
            c ||
              ((c = !0),
              a && e.clearTimeout(a),
              (r = void 0),
              (o = u || ""),
              (T.readyState = 0 < t ? 4 : 0),
              (f = (200 <= t && t < 300) || 304 === t),
              s &&
                (x = (function (e, t, n) {
                  for (
                    var r, i, o, s, a = e.contents, u = e.dataTypes;
                    "*" === u[0];

                  )
                    u.shift(),
                      void 0 === r &&
                        (r = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (r)
                    for (i in a)
                      if (a[i] && a[i].test(r)) {
                        u.unshift(i);
                        break;
                      }
                  if (u[0] in n) o = u[0];
                  else {
                    for (i in n) {
                      if (!u[0] || e.converters[i + " " + u[0]]) {
                        o = i;
                        break;
                      }
                      s || (s = i);
                    }
                    o = o || s;
                  }
                  if (o) return o !== u[0] && u.unshift(o), n[o];
                })(p, T, s)),
              !f &&
                -1 < w.inArray("script", p.dataTypes) &&
                w.inArray("json", p.dataTypes) < 0 &&
                (p.converters["text script"] = function () {}),
              (x = (function (e, t, n, r) {
                var i,
                  o,
                  s,
                  a,
                  u,
                  c = {},
                  l = e.dataTypes.slice();
                if (l[1])
                  for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                for (o = l.shift(); o; )
                  if (
                    (e.responseFields[o] && (n[e.responseFields[o]] = t),
                    !u &&
                      r &&
                      e.dataFilter &&
                      (t = e.dataFilter(t, e.dataType)),
                    (u = o),
                    (o = l.shift()))
                  )
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                      if (!(s = c[u + " " + o] || c["* " + o]))
                        for (i in c)
                          if (
                            (a = i.split(" "))[1] === o &&
                            (s = c[u + " " + a[0]] || c["* " + a[0]])
                          ) {
                            !0 === s
                              ? (s = c[i])
                              : !0 !== c[i] && ((o = a[0]), l.unshift(a[1]));
                            break;
                          }
                      if (!0 !== s)
                        if (s && e.throws) t = s(t);
                        else
                          try {
                            t = s(t);
                          } catch (e) {
                            return {
                              state: "parsererror",
                              error: s
                                ? e
                                : "No conversion from " + u + " to " + o,
                            };
                          }
                    }
                return { state: "success", data: t };
              })(p, x, T, f)),
              f
                ? (p.ifModified &&
                    ((C = T.getResponseHeader("Last-Modified")) &&
                      (w.lastModified[i] = C),
                    (C = T.getResponseHeader("etag")) && (w.etag[i] = C)),
                  204 === t || "HEAD" === p.type
                    ? (S = "nocontent")
                    : 304 === t
                    ? (S = "notmodified")
                    : ((S = x.state), (d = x.data), (f = !(m = x.error))))
                : ((m = S), (!t && S) || ((S = "error"), t < 0 && (t = 0))),
              (T.status = t),
              (T.statusText = (n || S) + ""),
              f ? v.resolveWith(h, [d, S, T]) : v.rejectWith(h, [T, S, m]),
              T.statusCode(b),
              (b = void 0),
              l &&
                g.trigger(f ? "ajaxSuccess" : "ajaxError", [T, p, f ? d : m]),
              y.fireWith(h, [T, S]),
              l &&
                (g.trigger("ajaxComplete", [T, p]),
                --w.active || w.event.trigger("ajaxStop")));
          }
          return T;
        },
        getJSON: function (e, t, n) {
          return w.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return w.get(e, void 0, t, "script");
        },
      }),
      w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, r, i) {
          return (
            h(n) && ((i = i || r), (r = n), (n = void 0)),
            w.ajax(
              w.extend(
                { url: e, type: t, dataType: i, data: n, success: r },
                w.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      w.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers)
          "content-type" === t.toLowerCase() &&
            (e.contentType = e.headers[t] || "");
      }),
      (w._evalUrl = function (e, t, n) {
        return w.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (e) {
            w.globalEval(e, t, n);
          },
        });
      }),
      w.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (h(e) && (e = e.call(this[0])),
              (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (e) {
          return h(e)
            ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = w(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = h(e);
          return this.each(function (n) {
            w(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not("body")
              .each(function () {
                w(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e);
      }),
      (w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (w.ajaxSettings.xhr = function () {
        try {
          return new e.XMLHttpRequest();
        } catch (e) {}
      });
    var $t = { 0: 200, 1223: 204 },
      zt = w.ajaxSettings.xhr();
    (p.cors = !!zt && "withCredentials" in zt),
      (p.ajax = zt = !!zt),
      w.ajaxTransport(function (t) {
        var n, r;
        if (p.cors || (zt && !t.crossDomain))
          return {
            send: function (i, o) {
              var s,
                a = t.xhr();
              if (
                (a.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (s in t.xhrFields) a[s] = t.xhrFields[s];
              for (s in (t.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(t.mimeType),
              t.crossDomain ||
                i["X-Requested-With"] ||
                (i["X-Requested-With"] = "XMLHttpRequest"),
              i))
                a.setRequestHeader(s, i[s]);
              (n = function (e) {
                return function () {
                  n &&
                    ((n =
                      r =
                      a.onload =
                      a.onerror =
                      a.onabort =
                      a.ontimeout =
                      a.onreadystatechange =
                        null),
                    "abort" === e
                      ? a.abort()
                      : "error" === e
                      ? "number" != typeof a.status
                        ? o(0, "error")
                        : o(a.status, a.statusText)
                      : o(
                          $t[a.status] || a.status,
                          a.statusText,
                          "text" !== (a.responseType || "text") ||
                            "string" != typeof a.responseText
                            ? { binary: a.response }
                            : { text: a.responseText },
                          a.getAllResponseHeaders()
                        ));
                };
              }),
                (a.onload = n()),
                (r = a.onerror = a.ontimeout = n("error")),
                void 0 !== a.onabort
                  ? (a.onabort = r)
                  : (a.onreadystatechange = function () {
                      4 === a.readyState &&
                        e.setTimeout(function () {
                          n && r();
                        });
                    }),
                (n = n("abort"));
              try {
                a.send((t.hasContent && t.data) || null);
              } catch (i) {
                if (n) throw i;
              }
            },
            abort: function () {
              n && n();
            },
          };
      }),
      w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      w.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return w.globalEval(e), e;
          },
        },
      }),
      w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      w.ajaxTransport("script", function (e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
          return {
            send: function (r, i) {
              (t = w("<script>")
                .attr(e.scriptAttrs || {})
                .prop({ charset: e.scriptCharset, src: e.url })
                .on(
                  "load error",
                  (n = function (e) {
                    t.remove(),
                      (n = null),
                      e && i("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                m.head.appendChild(t[0]);
            },
            abort: function () {
              n && n();
            },
          };
      });
    var Xt,
      Ut = [],
      Gt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Ut.pop() || w.expando + "_" + St.guid++;
        return (this[e] = !0), e;
      },
    }),
      w.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i,
          o,
          s,
          a =
            !1 !== t.jsonp &&
            (Gt.test(t.url)
              ? "url"
              : "string" == typeof t.data &&
                0 ===
                  (t.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Gt.test(t.data) &&
                "data");
        if (a || "jsonp" === t.dataTypes[0])
          return (
            (i = t.jsonpCallback =
              h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
            a
              ? (t[a] = t[a].replace(Gt, "$1" + i))
              : !1 !== t.jsonp &&
                (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            (t.converters["script json"] = function () {
              return s || w.error(i + " was not called"), s[0];
            }),
            (t.dataTypes[0] = "json"),
            (o = e[i]),
            (e[i] = function () {
              s = arguments;
            }),
            r.always(function () {
              void 0 === o ? w(e).removeProp(i) : (e[i] = o),
                t[i] && ((t.jsonpCallback = n.jsonpCallback), Ut.push(i)),
                s && h(o) && o(s[0]),
                (s = o = void 0);
            }),
            "script"
          );
      }),
      (p.createHTMLDocument =
        (((Xt = m.implementation.createHTMLDocument("").body).innerHTML =
          "<form></form><form></form>"),
        2 === Xt.childNodes.length)),
      (w.parseHTML = function (e, t, n) {
        return "string" != typeof e
          ? []
          : ("boolean" == typeof t && ((n = t), (t = !1)),
            t ||
              (p.createHTMLDocument
                ? (((r = (t =
                    m.implementation.createHTMLDocument("")).createElement(
                    "base"
                  )).href = m.location.href),
                  t.head.appendChild(r))
                : (t = m)),
            (o = !n && []),
            (i = D.exec(e))
              ? [t.createElement(i[1])]
              : ((i = be([e], t, o)),
                o && o.length && w(o).remove(),
                w.merge([], i.childNodes)));
        var r, i, o;
      }),
      (w.fn.load = function (e, t, n) {
        var r,
          i,
          o,
          s = this,
          a = e.indexOf(" ");
        return (
          -1 < a && ((r = mt(e.slice(a))), (e = e.slice(0, a))),
          h(t)
            ? ((n = t), (t = void 0))
            : t && "object" == typeof t && (i = "POST"),
          0 < s.length &&
            w
              .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
              .done(function (e) {
                (o = arguments),
                  s.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    s.each(function () {
                      n.apply(this, o || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
      (w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
      (w.offset = {
        setOffset: function (e, t, n) {
          var r,
            i,
            o,
            s,
            a,
            u,
            c = w.css(e, "position"),
            l = w(e),
            f = {};
          "static" === c && (e.style.position = "relative"),
            (a = l.offset()),
            (o = w.css(e, "top")),
            (u = w.css(e, "left")),
            ("absolute" === c || "fixed" === c) && -1 < (o + u).indexOf("auto")
              ? ((s = (r = l.position()).top), (i = r.left))
              : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
            h(t) && (t = t.call(e, n, w.extend({}, a))),
            null != t.top && (f.top = t.top - a.top + s),
            null != t.left && (f.left = t.left - a.left + i),
            "using" in t ? t.using.call(e, f) : l.css(f);
        },
      }),
      w.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return void 0 === e
              ? this
              : this.each(function (t) {
                  w.offset.setOffset(this, e, t);
                });
          var t,
            n,
            r = this[0];
          return r
            ? r.getClientRects().length
              ? ((t = r.getBoundingClientRect()),
                (n = r.ownerDocument.defaultView),
                { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n,
              r = this[0],
              i = { top: 0, left: 0 };
            if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
            else {
              for (
                t = this.offset(),
                  n = r.ownerDocument,
                  e = r.offsetParent || n.documentElement;
                e &&
                (e === n.body || e === n.documentElement) &&
                "static" === w.css(e, "position");

              )
                e = e.parentNode;
              e &&
                e !== r &&
                1 === e.nodeType &&
                (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
                (i.left += w.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - i.top - w.css(r, "marginTop", !0),
              left: t.left - i.left - w.css(r, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && "static" === w.css(e, "position");

            )
              e = e.offsetParent;
            return e || re;
          });
        },
      }),
      w.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, t) {
          var n = "pageYOffset" === t;
          w.fn[e] = function (r) {
            return B(
              this,
              function (e, r, i) {
                var o;
                if (
                  (g(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                  void 0 === i)
                )
                  return o ? o[t] : e[r];
                o
                  ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                  : (e[r] = i);
              },
              e,
              r,
              arguments.length
            );
          };
        }
      ),
      w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = $e(p.pixelPosition, function (e, n) {
          if (n)
            return (n = Be(e, t)), Oe.test(n) ? w(e).position()[t] + "px" : n;
        });
      }),
      w.each({ Height: "height", Width: "width" }, function (e, t) {
        w.each(
          { padding: "inner" + e, content: t, "": "outer" + e },
          function (n, r) {
            w.fn[r] = function (i, o) {
              var s = arguments.length && (n || "boolean" != typeof i),
                a = n || (!0 === i || !0 === o ? "margin" : "border");
              return B(
                this,
                function (t, n, i) {
                  var o;
                  return g(t)
                    ? 0 === r.indexOf("outer")
                      ? t["inner" + e]
                      : t.document.documentElement["client" + e]
                    : 9 === t.nodeType
                    ? ((o = t.documentElement),
                      Math.max(
                        t.body["scroll" + e],
                        o["scroll" + e],
                        t.body["offset" + e],
                        o["offset" + e],
                        o["client" + e]
                      ))
                    : void 0 === i
                    ? w.css(t, n, a)
                    : w.style(t, n, i, a);
                },
                t,
                s ? i : void 0,
                s
              );
            };
          }
        );
      }),
      w.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          w.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      w.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      w.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, t) {
          w.fn[t] = function (e, n) {
            return 0 < arguments.length
              ? this.on(t, null, e, n)
              : this.trigger(t);
          };
        }
      );
    var Vt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (w.proxy = function (e, t) {
      var n, r, o;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), h(e)))
        return (
          (r = i.call(arguments, 2)),
          ((o = function () {
            return e.apply(t || this, r.concat(i.call(arguments)));
          }).guid = e.guid =
            e.guid || w.guid++),
          o
        );
    }),
      (w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0);
      }),
      (w.isArray = Array.isArray),
      (w.parseJSON = JSON.parse),
      (w.nodeName = A),
      (w.isFunction = h),
      (w.isWindow = g),
      (w.camelCase = U),
      (w.type = b),
      (w.now = Date.now),
      (w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      (w.trim = function (e) {
        return null == e ? "" : (e + "").replace(Vt, "$1");
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return w;
        });
    var Qt = e.jQuery,
      Yt = e.$;
    return (
      (w.noConflict = function (t) {
        return (
          e.$ === w && (e.$ = Yt), t && e.jQuery === w && (e.jQuery = Qt), w
        );
      }),
      void 0 === t && (e.jQuery = e.$ = w),
      w
    );
  }),
    ((i = jQuery).fn.niceSelect = function (e) {
      function t(e) {
        e.after(
          i("<div></div>")
            .addClass("nice-select")
            .addClass(e.attr("class") || "")
            .addClass(e.attr("disabled") ? "disabled" : "")
            .attr("tabindex", e.attr("disabled") ? null : "0")
            .html('<span class="current"></span><ul class="list"></ul>')
        );
        var t = e.next(),
          n = e.find("option"),
          r = e.find("option:selected");
        t.find(".current").html(r.data("display") || r.text()),
          n.each(function (e) {
            var n = i(this),
              r = n.data("display");
            t.find("ul").append(
              i("<li></li>")
                .attr("data-value", n.val())
                .attr("data-display", r || null)
                .addClass(
                  "option" +
                    (n.is(":selected") ? " selected" : "") +
                    (n.is(":disabled") ? " disabled" : "")
                )
                .html(n.text())
            );
          });
      }
      if ("string" == typeof e)
        return (
          "update" == e
            ? this.each(function () {
                var e = i(this),
                  n = i(this).next(".nice-select"),
                  r = n.hasClass("open");
                n.length && (n.remove(), t(e), r && e.next().trigger("click"));
              })
            : "destroy" == e
            ? (this.each(function () {
                var e = i(this),
                  t = i(this).next(".nice-select");
                t.length && (t.remove(), e.css("display", ""));
              }),
              0 == i(".nice-select").length && i(document).off(".nice_select"))
            : console.log('Method "' + e + '" does not exist.'),
          this
        );
      this.hide(),
        this.each(function () {
          var e = i(this);
          e.next().hasClass("nice-select") || t(e);
        }),
        i(document).off(".nice_select"),
        i(document).on("click.nice_select", ".nice-select", function (e) {
          var t = i(this);
          i(".nice-select").not(t).removeClass("open"),
            t.toggleClass("open"),
            t.hasClass("open")
              ? (t.find(".option"),
                t.find(".focus").removeClass("focus"),
                t.find(".selected").addClass("focus"))
              : t.focus();
        }),
        i(document).on("click.nice_select", function (e) {
          0 === i(e.target).closest(".nice-select").length &&
            i(".nice-select").removeClass("open").find(".option");
        }),
        i(document).on(
          "click.nice_select",
          ".nice-select .option:not(.disabled)",
          function (e) {
            var t = i(this),
              n = t.closest(".nice-select");
            n.find(".selected").removeClass("selected"), t.addClass("selected");
            var r = t.data("display") || t.text();
            n.find(".current").text(r),
              n.prev("select").val(t.data("value")).trigger("change");
          }
        ),
        i(document).on("keydown.nice_select", ".nice-select", function (e) {
          var t = i(this),
            n = i(t.find(".focus") || t.find(".list .option.selected"));
          if (32 == e.keyCode || 13 == e.keyCode)
            return (
              t.hasClass("open") ? n.trigger("click") : t.trigger("click"), !1
            );
          if (40 == e.keyCode) {
            if (t.hasClass("open")) {
              var r = n.nextAll(".option:not(.disabled)").first();
              r.length > 0 &&
                (t.find(".focus").removeClass("focus"), r.addClass("focus"));
            } else t.trigger("click");
            return !1;
          }
          if (38 == e.keyCode) {
            if (t.hasClass("open")) {
              var o = n.prevAll(".option:not(.disabled)").first();
              o.length > 0 &&
                (t.find(".focus").removeClass("focus"), o.addClass("focus"));
            } else t.trigger("click");
            return !1;
          }
          if (27 == e.keyCode) t.hasClass("open") && t.trigger("click");
          else if (9 == e.keyCode && t.hasClass("open")) return !1;
        });
      var n = document.createElement("a").style;
      return (
        (n.cssText = "pointer-events:auto"),
        "auto" !== n.pointerEvents && i("html").addClass("no-csspointerevents"),
        this
      );
    }),
    (o.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          n = t.dataset.da.trim().split(","),
          r = {};
        (r.element = t),
          (r.parent = t.parentNode),
          (r.destination = document.querySelector(n[0].trim())),
          (r.breakpoint = n[1] ? n[1].trim() : "767"),
          (r.place = n[2] ? n[2].trim() : "last"),
          (r.index = this.indexInParent(r.parent, r.element)),
          this.оbjects.push(r);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, n) {
            return Array.prototype.indexOf.call(n, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const n = this.mediaQueries[t],
          r = String.prototype.split.call(n, ","),
          i = window.matchMedia(r[0]),
          o = r[1],
          s = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === o;
          });
        i.addListener(function () {
          e.mediaHandler(i, s);
        }),
          this.mediaHandler(i, s);
      }
    }),
    (o.prototype.mediaHandler = function (e, t) {
      if (e.matches)
        for (let e = 0; e < t.length; e++) {
          const n = t[e];
          (n.index = this.indexInParent(n.parent, n.element)),
            this.moveTo(n.place, n.element, n.destination);
        }
      else
        for (let e = t.length - 1; e >= 0; e--) {
          const n = t[e];
          n.element.classList.contains(this.daClassname) &&
            this.moveBack(n.parent, n.element, n.index);
        }
    }),
    (o.prototype.moveTo = function (e, t, n) {
      t.classList.add(this.daClassname),
        "last" === e || e >= n.children.length
          ? n.insertAdjacentElement("beforeend", t)
          : "first" !== e
          ? n.children[e].insertAdjacentElement("beforebegin", t)
          : n.insertAdjacentElement("afterbegin", t);
    }),
    (o.prototype.moveBack = function (e, t, n) {
      t.classList.remove(this.daClassname),
        void 0 !== e.children[n]
          ? e.children[n].insertAdjacentElement("beforebegin", t)
          : e.insertAdjacentElement("beforeend", t);
    }),
    (o.prototype.indexInParent = function (e, t) {
      const n = Array.prototype.slice.call(e.children);
      return Array.prototype.indexOf.call(n, t);
    }),
    (o.prototype.arraySort = function (e) {
      "min" === this.type
        ? Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? -1
                : "last" === e.place || "first" === t.place
                ? 1
                : e.place - t.place
              : e.breakpoint - t.breakpoint;
          })
        : Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? 1
                : "last" === e.place || "first" === t.place
                ? -1
                : t.place - e.place
              : t.breakpoint - e.breakpoint;
          });
    });
  function s(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function a(e, t, n) {
    t && s(e.prototype, t),
      n && s(e, n),
      Object.defineProperty(e, "prototype", { writable: !1 });
  }
  var u, c;
  (new o("max").init(),
  (u = void 0),
  (c = function () {
    var e = "(prefers-reduced-motion: reduce)",
      t = 4,
      n = 5,
      r = {
        CREATED: 1,
        MOUNTED: 2,
        IDLE: 3,
        MOVING: t,
        SCROLLING: n,
        DRAGGING: 6,
        DESTROYED: 7,
      };
    function i(e) {
      e.length = 0;
    }
    function o(e, t, n) {
      return Array.prototype.slice.call(e, t, n);
    }
    function s(e) {
      return e.bind.apply(e, [null].concat(o(arguments, 1)));
    }
    function u() {}
    var c = setTimeout;
    function l(e) {
      return requestAnimationFrame(e);
    }
    function f(e, t) {
      return typeof t === e;
    }
    function d(e) {
      return !v(e) && f("object", e);
    }
    var p = Array.isArray,
      h = s(f, "function"),
      g = s(f, "string"),
      m = s(f, "undefined");
    function v(e) {
      return null === e;
    }
    function y(e) {
      try {
        return e instanceof (e.ownerDocument.defaultView || window).HTMLElement;
      } catch (e) {
        return !1;
      }
    }
    function b(e) {
      return p(e) ? e : [e];
    }
    function x(e, t) {
      b(e).forEach(t);
    }
    function w(e, t) {
      return -1 < e.indexOf(t);
    }
    function C(e, t) {
      return e.push.apply(e, b(t)), e;
    }
    function S(e, t, n) {
      e &&
        x(t, function (t) {
          t && e.classList[n ? "add" : "remove"](t);
        });
    }
    function T(e, t) {
      S(e, g(t) ? t.split(" ") : t, !0);
    }
    function E(e, t) {
      x(t, e.appendChild.bind(e));
    }
    function k(e, t) {
      x(e, function (e) {
        var n = (t || e).parentNode;
        n && n.insertBefore(e, t);
      });
    }
    function A(e, t) {
      return y(e) && (e.msMatchesSelector || e.matches).call(e, t);
    }
    function D(e, t) {
      return (
        (e = e ? o(e.children) : []),
        t
          ? e.filter(function (e) {
              return A(e, t);
            })
          : e
      );
    }
    function j(e, t) {
      return t ? D(e, t)[0] : e.firstElementChild;
    }
    var N = Object.keys;
    function L(e, t, n) {
      e &&
        (n ? N(e).reverse() : N(e)).forEach(function (n) {
          "__proto__" !== n && t(e[n], n);
        });
    }
    function P(e) {
      return (
        o(arguments, 1).forEach(function (t) {
          L(t, function (n, r) {
            e[r] = t[r];
          });
        }),
        e
      );
    }
    function q(e) {
      return (
        o(arguments, 1).forEach(function (t) {
          L(t, function (t, n) {
            p(t)
              ? (e[n] = t.slice())
              : d(t)
              ? (e[n] = q({}, d(e[n]) ? e[n] : {}, t))
              : (e[n] = t);
          });
        }),
        e
      );
    }
    function M(e, t) {
      x(t || N(e), function (t) {
        delete e[t];
      });
    }
    function O(e, t) {
      x(e, function (e) {
        x(t, function (t) {
          e && e.removeAttribute(t);
        });
      });
    }
    function H(e, t, n) {
      d(t)
        ? L(t, function (t, n) {
            H(e, n, t);
          })
        : x(e, function (e) {
            v(n) || "" === n ? O(e, t) : e.setAttribute(t, String(n));
          });
    }
    function _(e, t, n) {
      return (
        (e = document.createElement(e)),
        t && (g(t) ? T : H)(e, t),
        n && E(n, e),
        e
      );
    }
    function R(e, t, n) {
      if (m(n)) return getComputedStyle(e)[t];
      v(n) || (e.style[t] = "" + n);
    }
    function I(e, t) {
      R(e, "display", t);
    }
    function F(e) {
      (e.setActive && e.setActive()) || e.focus({ preventScroll: !0 });
    }
    function W(e, t) {
      return e.getAttribute(t);
    }
    function B(e, t) {
      return e && e.classList.contains(t);
    }
    function $(e) {
      return e.getBoundingClientRect();
    }
    function z(e) {
      x(e, function (e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      });
    }
    function X(e) {
      return j(new DOMParser().parseFromString(e, "text/html").body);
    }
    function U(e, t) {
      e.preventDefault(),
        t && (e.stopPropagation(), e.stopImmediatePropagation());
    }
    function G(e, t) {
      return e && e.querySelector(t);
    }
    function V(e, t) {
      return t ? o(e.querySelectorAll(t)) : [];
    }
    function Q(e, t) {
      S(e, t, !1);
    }
    function Y(e) {
      return e.timeStamp;
    }
    function J(e) {
      return g(e) ? e : e ? e + "px" : "";
    }
    var K = "splide",
      Z = "data-" + K;
    function ee(e, t) {
      if (!e) throw new Error("[" + K + "] " + (t || ""));
    }
    var te = Math.min,
      ne = Math.max,
      re = Math.floor,
      ie = Math.ceil,
      oe = Math.abs;
    function se(e, t, n) {
      return oe(e - t) < n;
    }
    function ae(e, t, n, r) {
      var i = te(t, n);
      t = ne(t, n);
      return r ? i < e && e < t : i <= e && e <= t;
    }
    function ue(e, t, n) {
      var r = te(t, n);
      t = ne(t, n);
      return te(ne(r, e), t);
    }
    function ce(e) {
      return (0 < e) - (e < 0);
    }
    function le(e, t) {
      return (
        x(t, function (t) {
          e = e.replace("%s", "" + t);
        }),
        e
      );
    }
    function fe(e) {
      return e < 10 ? "0" + e : "" + e;
    }
    var de = {};
    function pe() {
      var e = [];
      function t(e, t, n) {
        x(e, function (e) {
          e &&
            x(t, function (t) {
              t.split(" ").forEach(function (t) {
                (t = t.split(".")), n(e, t[0], t[1]);
              });
            });
        });
      }
      return {
        bind: function (n, r, i, o) {
          t(n, r, function (t, n, r) {
            var s = "addEventListener" in t,
              a = s
                ? t.removeEventListener.bind(t, n, i, o)
                : t.removeListener.bind(t, i);
            s ? t.addEventListener(n, i, o) : t.addListener(i),
              e.push([t, n, r, i, a]);
          });
        },
        unbind: function (n, r, i) {
          t(n, r, function (t, n, r) {
            e = e.filter(function (e) {
              return (
                !!(
                  e[0] !== t ||
                  e[1] !== n ||
                  e[2] !== r ||
                  (i && e[3] !== i)
                ) || (e[4](), !1)
              );
            });
          });
        },
        dispatch: function (e, t, n) {
          var r;
          return (
            "function" == typeof CustomEvent
              ? (r = new CustomEvent(t, { bubbles: !0, detail: n }))
              : (r = document.createEvent("CustomEvent")).initCustomEvent(
                  t,
                  !0,
                  !1,
                  n
                ),
            e.dispatchEvent(r),
            r
          );
        },
        destroy: function () {
          e.forEach(function (e) {
            e[4]();
          }),
            i(e);
        },
      };
    }
    var he = "mounted",
      ge = "move",
      me = "moved",
      ve = "click",
      ye = "active",
      be = "inactive",
      xe = "visible",
      we = "hidden",
      Ce = "refresh",
      Se = "updated",
      Te = "resize",
      Ee = "resized",
      ke = "scroll",
      Ae = "scrolled",
      De = "destroy",
      je = "navigation:mounted",
      Ne = "autoplay:play",
      Le = "autoplay:pause",
      Pe = "lazyload:loaded",
      qe = "sk",
      Me = "sh";
    function Oe(e) {
      var t = e ? e.event.bus : document.createDocumentFragment(),
        n = pe();
      return (
        e && e.event.on(De, n.destroy),
        P(n, {
          bus: t,
          on: function (e, r) {
            n.bind(t, b(e).join(" "), function (e) {
              r.apply(r, p(e.detail) ? e.detail : []);
            });
          },
          off: s(n.unbind, t),
          emit: function (e) {
            n.dispatch(t, e, o(arguments, 1));
          },
        })
      );
    }
    function He(e, t, n, r) {
      var i,
        o,
        s = Date.now,
        a = 0,
        u = !0,
        c = 0;
      function f() {
        if (!u) {
          if (
            ((a = e ? te((s() - i) / e, 1) : 1),
            n && n(a),
            1 <= a && (t(), (i = s()), r && ++c >= r))
          )
            return d();
          o = l(f);
        }
      }
      function d() {
        u = !0;
      }
      function p() {
        o && cancelAnimationFrame(o), (u = !(o = a = 0));
      }
      return {
        start: function (t) {
          t || p(), (i = s() - (t ? a * e : 0)), (u = !1), (o = l(f));
        },
        rewind: function () {
          (i = s()), (a = 0), n && n(a);
        },
        pause: d,
        cancel: p,
        set: function (t) {
          e = t;
        },
        isPaused: function () {
          return u;
        },
      };
    }
    var _e,
      Re,
      Ie = (_e = "Arrow") + "Left",
      Fe = _e + "Right",
      We = _e + "Up",
      Be = "ttb",
      $e = {
        width: ["height"],
        left: ["top", "right"],
        right: ["bottom", "left"],
        x: ["y"],
        X: ["Y"],
        Y: ["X"],
        ArrowLeft: [We, Fe],
        ArrowRight: [(_e = _e + "Down"), Ie],
      },
      ze = "role",
      Xe = "tabindex",
      Ue = (Re = "aria-") + "controls",
      Ge = Re + "current",
      Ve = Re + "selected",
      Qe = Re + "label",
      Ye = Re + "labelledby",
      Je = Re + "hidden",
      Ke = Re + "orientation",
      Ze = Re + "roledescription",
      et = Re + "live",
      tt = Re + "busy",
      nt = Re + "atomic",
      rt = [ze, Xe, "disabled", Ue, Ge, Qe, Ye, Je, Ke, Ze],
      it = K,
      ot = (Re = K + "__") + "track",
      st = Re + "list",
      at = Re + "slide",
      ut = at + "--clone",
      ct = at + "__container",
      lt = Re + "arrows",
      ft = Re + "arrow",
      dt = ft + "--prev",
      pt = ft + "--next",
      ht = Re + "pagination",
      gt = ht + "__page",
      mt = Re + "progress__bar",
      vt = Re + "toggle",
      yt = Re + "sr",
      bt = "is-active",
      xt = "is-prev",
      wt = "is-next",
      Ct = "is-visible",
      St = "is-loading",
      Tt = "is-focus-in",
      Et = "is-overflow",
      kt = [bt, Ct, xt, wt, St, Tt, Et],
      At = "touchstart mousedown",
      Dt = "touchmove mousemove",
      jt = "touchend touchcancel mouseup click",
      Nt = "slide",
      Lt = "loop",
      Pt = "fade";
    var qt = Z + "-interval",
      Mt = { passive: !1, capture: !0 },
      Ot = { Spacebar: " ", Right: Fe, Left: Ie, Up: We, Down: _e };
    function Ht(e) {
      return (e = g(e) ? e : e.key), Ot[e] || e;
    }
    var _t = "keydown",
      Rt = Z + "-lazy",
      It = Rt + "-srcset",
      Ft = "[" + Rt + "], [" + It + "]",
      Wt = [" ", "Enter"],
      Bt = Object.freeze({
        __proto__: null,
        Media: function (t, n, r) {
          var i = t.state,
            o = r.breakpoints || {},
            s = r.reducedMotion || {},
            a = pe(),
            u = [];
          function c(e) {
            e && a.destroy();
          }
          function l(e, t) {
            (t = matchMedia(t)), a.bind(t, "change", f), u.push([e, t]);
          }
          function f() {
            var e = i.is(7),
              n = r.direction,
              o = u.reduce(function (e, t) {
                return q(e, t[1].matches ? t[0] : {});
              }, {});
            M(r),
              d(o),
              r.destroy
                ? t.destroy("completely" === r.destroy)
                : e
                ? (c(!0), t.mount())
                : n !== r.direction && t.refresh();
          }
          function d(e, n, o) {
            q(r, e),
              n && q(Object.getPrototypeOf(r), e),
              (!o && i.is(1)) || t.emit(Se, r);
          }
          return {
            setup: function () {
              var t = "min" === r.mediaQuery;
              N(o)
                .sort(function (e, n) {
                  return t ? +e - +n : +n - +e;
                })
                .forEach(function (e) {
                  l(o[e], "(" + (t ? "min" : "max") + "-width:" + e + "px)");
                }),
                l(s, e),
                f();
            },
            destroy: c,
            reduce: function (t) {
              matchMedia(e).matches && (t ? q(r, s) : M(r, N(s)));
            },
            set: d,
          };
        },
        Direction: function (e, t, n) {
          return {
            resolve: function (e, t, r) {
              var i =
                "rtl" !== (r = r || n.direction) || t ? (r === Be ? 0 : -1) : 1;
              return (
                ($e[e] && $e[e][i]) ||
                e.replace(/width|left|right/i, function (e, t) {
                  return (
                    (e = $e[e.toLowerCase()][i] || e),
                    0 < t ? e.charAt(0).toUpperCase() + e.slice(1) : e
                  );
                })
              );
            },
            orient: function (e) {
              return e * ("rtl" === n.direction ? 1 : -1);
            },
          };
        },
        Elements: function (e, t, n) {
          var r,
            o,
            s,
            a = Oe(e),
            u = a.on,
            c = a.bind,
            l = e.root,
            f = n.i18n,
            d = {},
            p = [],
            g = [],
            m = [];
          function v() {
            (r = x("." + ot)),
              (o = j(r, "." + st)),
              ee(r && o, "A track/list element is missing."),
              C(p, D(o, "." + at + ":not(." + ut + ")")),
              L(
                {
                  arrows: lt,
                  pagination: ht,
                  prev: dt,
                  next: pt,
                  bar: mt,
                  toggle: vt,
                },
                function (e, t) {
                  d[t] = x("." + e);
                }
              ),
              P(d, { root: l, track: r, list: o, slides: p });
            var e =
                l.id ||
                (function (e) {
                  return "" + e + fe((de[e] = (de[e] || 0) + 1));
                })(K),
              t = n.role;
            (l.id = e),
              (r.id = r.id || e + "-track"),
              (o.id = o.id || e + "-list"),
              !W(l, ze) && "SECTION" !== l.tagName && t && H(l, ze, t),
              H(l, Ze, f.carousel),
              H(o, ze, "presentation"),
              b();
          }
          function y(e) {
            var t = rt.concat("style");
            i(p), Q(l, g), Q(r, m), O([r, o], t), O(l, e ? t : ["style", Ze]);
          }
          function b() {
            Q(l, g),
              Q(r, m),
              (g = w(it)),
              (m = w(ot)),
              T(l, g),
              T(r, m),
              H(l, Qe, n.label),
              H(l, Ye, n.labelledby);
          }
          function x(e) {
            return (e = G(l, e)) &&
              (function (e, t) {
                if (h(e.closest)) return e.closest(t);
                for (var n = e; n && 1 === n.nodeType && !A(n, t); )
                  n = n.parentElement;
                return n;
              })(e, "." + it) === l
              ? e
              : void 0;
          }
          function w(e) {
            return [
              e + "--" + n.type,
              e + "--" + n.direction,
              n.drag && e + "--draggable",
              n.isNavigation && e + "--nav",
              e === it && bt,
            ];
          }
          return P(d, {
            setup: v,
            mount: function () {
              u(Ce, y),
                u(Ce, v),
                u(Se, b),
                c(
                  document,
                  At + " keydown",
                  function (e) {
                    s = "keydown" === e.type;
                  },
                  { capture: !0 }
                ),
                c(l, "focusin", function () {
                  S(l, Tt, !!s);
                });
            },
            destroy: y,
          });
        },
        Slides: function (e, r, o) {
          var a = Oe(e),
            u = a.on,
            c = a.emit,
            l = a.bind,
            f = (a = r.Elements).slides,
            d = a.list,
            p = [];
          function m() {
            f.forEach(function (e, t) {
              C(e, t, -1);
            });
          }
          function v() {
            N(function (e) {
              e.destroy();
            }),
              i(p);
          }
          function C(r, i, o) {
            (i = (function (e, r, i, o) {
              var a,
                u = Oe(e),
                c = u.on,
                l = u.emit,
                f = u.bind,
                d = e.Components,
                p = e.root,
                h = e.options,
                g = h.isNavigation,
                m = h.updateOnMove,
                v = h.i18n,
                y = h.pagination,
                b = h.slideFocus,
                x = d.Direction.resolve,
                w = W(o, "style"),
                C = W(o, Qe),
                T = -1 < i,
                E = j(o, "." + ct);
              function k() {
                var t = e.splides
                  .map(function (e) {
                    return (e = e.splide.Components.Slides.getAt(r))
                      ? e.slide.id
                      : "";
                  })
                  .join(" ");
                H(o, Qe, le(v.slideX, (T ? i : r) + 1)),
                  H(o, Ue, t),
                  H(o, ze, b ? "button" : ""),
                  b && O(o, Ze);
              }
              function A() {
                a || D();
              }
              function D() {
                var i, s, u;
                a ||
                  ((i = e.index),
                  (u = N()) !== B(o, bt) &&
                    (S(o, bt, u), H(o, Ge, (g && u) || ""), l(u ? ye : be, L)),
                  (u = (function () {
                    if (e.is(Pt)) return N();
                    var t = $(d.Elements.track),
                      n = $(o),
                      r = x("left", !0),
                      i = x("right", !0);
                    return re(t[r]) <= ie(n[r]) && re(n[i]) <= ie(t[i]);
                  })()),
                  (s = !u && (!N() || T)),
                  e.state.is([t, n]) || H(o, Je, s || ""),
                  H(V(o, h.focusableNodes || ""), Xe, s ? -1 : ""),
                  b && H(o, Xe, s ? -1 : 0),
                  u !== B(o, Ct) && (S(o, Ct, u), l(u ? xe : we, L)),
                  u ||
                    document.activeElement !== o ||
                    ((s = d.Slides.getAt(e.index)) && F(s.slide)),
                  S(o, xt, r === i - 1),
                  S(o, wt, r === i + 1));
              }
              function N() {
                var t = e.index;
                return t === r || (h.cloneStatus && t === i);
              }
              var L = {
                index: r,
                slideIndex: i,
                slide: o,
                container: E,
                isClone: T,
                mount: function () {
                  T ||
                    ((o.id = p.id + "-slide" + fe(r + 1)),
                    H(o, ze, y ? "tabpanel" : "group"),
                    H(o, Ze, v.slide),
                    H(o, Qe, C || le(v.slideLabel, [r + 1, e.length]))),
                    f(o, "click", s(l, ve, L)),
                    f(o, "keydown", s(l, qe, L)),
                    c([me, Me, Ae], D),
                    c(je, k),
                    m && c(ge, A);
                },
                destroy: function () {
                  (a = !0),
                    u.destroy(),
                    Q(o, kt),
                    O(o, rt),
                    H(o, "style", w),
                    H(o, Qe, C || "");
                },
                update: D,
                style: function (e, t, n) {
                  R((n && E) || o, e, t);
                },
                isWithin: function (t, n) {
                  return (
                    (t = oe(t - r)),
                    (t =
                      T || (!h.rewind && !e.is(Lt))
                        ? t
                        : te(t, e.length - t)) <= n
                  );
                },
              };
              return L;
            })(e, i, o, r)),
              i.mount(),
              p.push(i),
              p.sort(function (e, t) {
                return e.index - t.index;
              });
          }
          function D(e) {
            return e
              ? L(function (e) {
                  return !e.isClone;
                })
              : p;
          }
          function N(e, t) {
            D(t).forEach(e);
          }
          function L(e) {
            return p.filter(
              h(e)
                ? e
                : function (t) {
                    return g(e) ? A(t.slide, e) : w(b(e), t.index);
                  }
            );
          }
          return {
            mount: function () {
              m(), u(Ce, v), u(Ce, m);
            },
            destroy: v,
            update: function () {
              N(function (e) {
                e.update();
              });
            },
            register: C,
            get: D,
            getIn: function (e) {
              var t = r.Controller,
                n = t.toIndex(e),
                i = t.hasFocus() ? 1 : o.perPage;
              return L(function (e) {
                return ae(e.index, n, n + i - 1);
              });
            },
            getAt: function (e) {
              return L(e)[0];
            },
            add: function (e, t) {
              x(e, function (e) {
                var n, r, i;
                y((e = g(e) ? X(e) : e)) &&
                  ((n = f[t]) ? k(e, n) : E(d, e),
                  T(e, o.classes.slide),
                  (n = e),
                  (r = s(c, Te)),
                  (n = V(n, "img")),
                  (i = n.length)
                    ? n.forEach(function (e) {
                        l(e, "load error", function () {
                          --i || r();
                        });
                      })
                    : r());
              }),
                c(Ce);
            },
            remove: function (e) {
              z(
                L(e).map(function (e) {
                  return e.slide;
                })
              ),
                c(Ce);
            },
            forEach: N,
            filter: L,
            style: function (e, t, n) {
              N(function (r) {
                r.style(e, t, n);
              });
            },
            getLength: function (e) {
              return (e ? f : p).length;
            },
            isEnough: function () {
              return p.length > o.perPage;
            },
          };
        },
        Layout: function (e, t, n) {
          var r,
            i,
            o,
            a = (l = Oe(e)).on,
            u = l.bind,
            c = l.emit,
            l = t.Slides,
            f = t.Direction.resolve,
            p = (t = t.Elements).root,
            h = t.track,
            g = t.list,
            m = l.getAt,
            v = l.style;
          function y() {
            (r = n.direction === Be),
              R(p, "maxWidth", J(n.width)),
              R(h, f("paddingLeft"), x(!1)),
              R(h, f("paddingRight"), x(!0)),
              b(!0);
          }
          function b(e) {
            var t = $(p);
            (!e && i.width === t.width && i.height === t.height) ||
              (R(
                h,
                "height",
                (function () {
                  var e = "";
                  return (
                    r &&
                      (ee((e = w()), "height or heightRatio is missing."),
                      (e = "calc(" + e + " - " + x(!1) + " - " + x(!0) + ")")),
                    e
                  );
                })()
              ),
              v(f("marginRight"), J(n.gap)),
              v(
                "width",
                n.autoWidth ? null : J(n.fixedWidth) || (r ? "" : C())
              ),
              v(
                "height",
                J(n.fixedHeight) || (r ? (n.autoHeight ? null : C()) : w()),
                !0
              ),
              (i = t),
              c(Ee),
              o !== (o = j()) && (S(p, Et, o), c("overflow", o)));
          }
          function x(e) {
            var t = n.padding;
            e = f(e ? "right" : "left");
            return (t && J(t[e] || (d(t) ? 0 : t))) || "0px";
          }
          function w() {
            return J(n.height || $(g).width * n.heightRatio);
          }
          function C() {
            var e = J(n.gap);
            return (
              "calc((100%" +
              (e && " + " + e) +
              ")/" +
              (n.perPage || 1) +
              (e && " - " + e) +
              ")"
            );
          }
          function T() {
            return $(g)[f("width")];
          }
          function E(e, t) {
            return (e = m(e || 0)) ? $(e.slide)[f("width")] + (t ? 0 : D()) : 0;
          }
          function k(e, t) {
            var n;
            return (e = m(e))
              ? ((e = $(e.slide)[f("right")]),
                (n = $(g)[f("left")]),
                oe(e - n) + (t ? 0 : D()))
              : 0;
          }
          function A(t) {
            return k(e.length - 1) - k(0) + E(0, t);
          }
          function D() {
            var e = m(0);
            return (e && parseFloat(R(e.slide, f("marginRight")))) || 0;
          }
          function j() {
            return e.is(Pt) || A(!0) > T();
          }
          return {
            mount: function () {
              var e, t;
              y(),
                u(
                  window,
                  "resize load",
                  ((e = s(c, Te)),
                  (t = He(0, e, null, 1)),
                  function () {
                    t.isPaused() && t.start();
                  })
                ),
                a([Se, Ce], y),
                a(Te, b);
            },
            resize: b,
            listSize: T,
            slideSize: E,
            sliderSize: A,
            totalSize: k,
            getPadding: function (e) {
              return (
                parseFloat(R(h, f("padding" + (e ? "Right" : "Left")))) || 0
              );
            },
            isOverflow: j,
          };
        },
        Clones: function (e, t, n) {
          var r,
            o = Oe(e),
            s = o.on,
            a = t.Elements,
            u = t.Slides,
            c = t.Direction.resolve,
            l = [];
          function f() {
            if ((s(Ce, d), s([Se, Te], h), (r = g()))) {
              var i = r,
                o = u.get().slice(),
                c = o.length;
              if (c) {
                for (; o.length < i; ) C(o, o);
                C(o.slice(-i), o.slice(0, i)).forEach(function (t, r) {
                  var s = r < i,
                    f = (function (t, r) {
                      return (
                        T((t = t.cloneNode(!0)), n.classes.clone),
                        (t.id = e.root.id + "-clone" + fe(r + 1)),
                        t
                      );
                    })(t.slide, r);
                  s ? k(f, o[0].slide) : E(a.list, f),
                    C(l, f),
                    u.register(f, r - i + (s ? 0 : c), t.index);
                });
              }
              t.Layout.resize(!0);
            }
          }
          function d() {
            p(), f();
          }
          function p() {
            z(l), i(l), o.destroy();
          }
          function h() {
            var e = g();
            r !== e && (r < e || !e) && o.emit(Ce);
          }
          function g() {
            var r,
              i = n.clones;
            return (
              e.is(Lt)
                ? m(i) &&
                  (i =
                    ((r = n[c("fixedWidth")] && t.Layout.slideSize(0)) &&
                      ie($(a.track)[c("width")] / r)) ||
                    (n[c("autoWidth")] && e.length) ||
                    2 * n.perPage)
                : (i = 0),
              i
            );
          }
          return { mount: f, destroy: p };
        },
        Move: function (e, n, r) {
          var i,
            o = Oe(e),
            s = o.on,
            a = o.emit,
            u = e.state.set,
            c = (o = n.Layout).slideSize,
            l = o.getPadding,
            f = o.totalSize,
            d = o.listSize,
            p = o.sliderSize,
            h = (o = n.Direction).resolve,
            g = o.orient,
            v = (o = n.Elements).list,
            y = o.track;
          function b() {
            n.Controller.isBusy() ||
              (n.Scroll.cancel(), x(e.index), n.Slides.update());
          }
          function x(e) {
            w(E(e, !0));
          }
          function w(t, r) {
            e.is(Pt) ||
              ((r = r
                ? t
                : (function (t) {
                    var r, i;
                    return (
                      e.is(Lt) &&
                        ((i = (r = T(t)) > n.Controller.getEnd()),
                        (r < 0 || i) && (t = C(t, i))),
                      t
                    );
                  })(t)),
              R(v, "transform", "translate" + h("X") + "(" + r + "px)"),
              t !== r && a(Me));
          }
          function C(e, t) {
            var n = e - A(t),
              r = p();
            return e - g(r * (ie(oe(n) / r) || 1)) * (t ? 1 : -1);
          }
          function S() {
            w(k(), !0), i.cancel();
          }
          function T(e) {
            for (
              var t = n.Slides.get(), r = 0, i = 1 / 0, o = 0;
              o < t.length;
              o++
            ) {
              var s = t[o].index,
                a = oe(E(s, !0) - e);
              if (!(a <= i)) break;
              (i = a), (r = s);
            }
            return r;
          }
          function E(t, n) {
            var i = g(
              f(t - 1) -
                ("center" === (i = r.focus)
                  ? (d() - c(t, !0)) / 2
                  : +i * c(t) || 0)
            );
            return n
              ? ((t = i),
                (t = r.trimSpace && e.is(Nt) ? ue(t, 0, g(p(!0) - d())) : t))
              : i;
          }
          function k() {
            var e = h("left");
            return $(v)[e] - $(y)[e] + g(l(!1));
          }
          function A(e) {
            return E(e ? n.Controller.getEnd() : 0, !!r.trimSpace);
          }
          return {
            mount: function () {
              (i = n.Transition), s([he, Ee, Se, Ce], b);
            },
            move: function (e, n, r, o) {
              var s, c;
              e !== n &&
                ((s = r < e),
                (c = g(C(k(), s))),
                s ? 0 <= c : c <= v[h("scrollWidth")] - $(y)[h("width")]) &&
                (S(), w(C(k(), r < e), !0)),
                u(t),
                a(ge, n, r, e),
                i.start(n, function () {
                  u(3), a(me, n, r, e), o && o();
                });
            },
            jump: x,
            translate: w,
            shift: C,
            cancel: S,
            toIndex: T,
            toPosition: E,
            getPosition: k,
            getLimit: A,
            exceededLimit: function (e, t) {
              t = m(t) ? k() : t;
              var n = !0 !== e && g(t) < g(A(!1));
              e = !1 !== e && g(t) > g(A(!0));
              return n || e;
            },
            reposition: b,
          };
        },
        Controller: function (e, r, i) {
          var o,
            a,
            u,
            c,
            l = Oe(e),
            f = l.on,
            d = l.emit,
            p = r.Move,
            h = p.getPosition,
            v = p.getLimit,
            y = p.toPosition,
            b = (l = r.Slides).isEnough,
            x = l.getLength,
            w = i.omitEnd,
            C = e.is(Lt),
            S = e.is(Nt),
            T = s(N, !1),
            E = s(N, !0),
            k = i.start || 0,
            A = k;
          function D() {
            (a = x(!0)), (u = i.perMove), (c = i.perPage), (o = q());
            var e = ue(k, 0, w ? o : a - 1);
            e !== k && ((k = e), p.reposition());
          }
          function j() {
            o !== q() && d("ei");
          }
          function N(e, t) {
            var n = u || (_() ? 1 : c);
            return -1 === (n = L(k + n * (e ? -1 : 1), k, !(u || _()))) &&
              S &&
              !se(h(), v(!e), 1)
              ? e
                ? 0
                : o
              : t
              ? n
              : P(n);
          }
          function L(t, n, r) {
            var s;
            return (
              b() || _()
                ? ((s = (function (t) {
                    if (S && "move" === i.trimSpace && t !== k)
                      for (
                        var n = h();
                        n === y(t, !0) && ae(t, 0, e.length - 1, !i.rewind);

                      )
                        t < k ? --t : ++t;
                    return t;
                  })(t)) !== t && ((n = t), (t = s), (r = !1)),
                  t < 0 || o < t
                    ? (t =
                        u || (!ae(0, t, n, !0) && !ae(o, n, t, !0))
                          ? C
                            ? r
                              ? t < 0
                                ? -(a % c || c)
                                : a
                              : t
                            : i.rewind
                            ? t < 0
                              ? o
                              : 0
                            : -1
                          : M(O(t)))
                    : r && t !== n && (t = M(O(n) + (t < n ? -1 : 1))))
                : (t = -1),
              t
            );
          }
          function P(e) {
            return C ? (e + a) % a || 0 : e;
          }
          function q() {
            for (var e = a - (_() || (C && u) ? 1 : c); w && 0 < e--; )
              if (y(a - 1, !0) !== y(e, !0)) {
                e++;
                break;
              }
            return ue(e, 0, a - 1);
          }
          function M(e) {
            return ue(_() ? e : c * e, 0, o);
          }
          function O(e) {
            return _() ? te(e, o) : re((o <= e ? a - 1 : e) / c);
          }
          function H(e) {
            e !== k && ((A = k), (k = e));
          }
          function _() {
            return !m(i.focus) || i.isNavigation;
          }
          function R() {
            return e.state.is([t, n]) && !!i.waitForTransition;
          }
          return {
            mount: function () {
              D(), f([Se, Ce, "ei"], D), f(Ee, j);
            },
            go: function (e, t, n) {
              var r;
              R() ||
                (-1 <
                  (r = P(
                    (e = (function (e) {
                      var t,
                        n,
                        r = k;
                      return (
                        g(e)
                          ? ((t = (n = e.match(/([+\-<>])(\d+)?/) || [])[1]),
                            (n = n[2]),
                            "+" === t || "-" === t
                              ? (r = L(k + +("" + t + (+n || 1)), k))
                              : ">" === t
                              ? (r = n ? M(+n) : T(!0))
                              : "<" === t && (r = E(!0)))
                          : (r = C ? e : ue(e, 0, o)),
                        r
                      );
                    })(e))
                  )) &&
                  (t || r !== k) &&
                  (H(r), p.move(e, r, A, n)));
            },
            scroll: function (e, t, n, i) {
              r.Scroll.scroll(e, t, n, function () {
                var e = P(p.toIndex(h()));
                H(w ? te(e, o) : e), i && i();
              });
            },
            getNext: T,
            getPrev: E,
            getAdjacent: N,
            getEnd: q,
            setIndex: H,
            getIndex: function (e) {
              return e ? A : k;
            },
            toIndex: M,
            toPage: O,
            toDest: function (e) {
              return (e = p.toIndex(e)), S ? ue(e, 0, o) : e;
            },
            hasFocus: _,
            isBusy: R,
          };
        },
        Arrows: function (e, t, n) {
          var r,
            i,
            o = Oe(e),
            a = o.on,
            u = o.bind,
            c = o.emit,
            l = n.classes,
            f = n.i18n,
            d = t.Elements,
            p = t.Controller,
            h = d.arrows,
            g = d.track,
            m = h,
            v = d.prev,
            y = d.next,
            b = {};
          function x() {
            var e = n.arrows;
            !e ||
              (v && y) ||
              ((m = h || _("div", l.arrows)),
              (v = A(!0)),
              (y = A(!1)),
              (r = !0),
              E(m, [v, y]),
              h || k(m, g)),
              v &&
                y &&
                (P(b, { prev: v, next: y }),
                I(m, e ? "" : "none"),
                T(m, (i = lt + "--" + n.direction)),
                e &&
                  (a([he, me, Ce, Ae, "ei"], D),
                  u(y, "click", s(S, ">")),
                  u(v, "click", s(S, "<")),
                  D(),
                  H([v, y], Ue, g.id),
                  c("arrows:mounted", v, y))),
              a(Se, w);
          }
          function w() {
            C(), x();
          }
          function C() {
            o.destroy(),
              Q(m, i),
              r ? (z(h ? [v, y] : m), (v = y = null)) : O([v, y], rt);
          }
          function S(e) {
            p.go(e, !0);
          }
          function A(e) {
            return X(
              '<button class="' +
                l.arrow +
                " " +
                (e ? l.prev : l.next) +
                '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' +
                (n.arrowPath ||
                  "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") +
                '" />'
            );
          }
          function D() {
            var t, n, r, i;
            v &&
              y &&
              ((i = e.index),
              (t = p.getPrev()),
              (n = p.getNext()),
              (r = -1 < t && i < t ? f.last : f.prev),
              (i = -1 < n && n < i ? f.first : f.next),
              (v.disabled = t < 0),
              (y.disabled = n < 0),
              H(v, Qe, r),
              H(y, Qe, i),
              c("arrows:updated", v, y, t, n));
          }
          return { arrows: b, mount: x, destroy: C, update: D };
        },
        Autoplay: function (e, t, n) {
          var r,
            i,
            o = Oe(e),
            s = o.on,
            a = o.bind,
            u = o.emit,
            c = He(n.interval, e.go.bind(e, ">"), function (e) {
              var t = f.bar;
              t && R(t, "width", 100 * e + "%"), u("autoplay:playing", e);
            }),
            l = c.isPaused,
            f = t.Elements,
            d = (o = t.Elements).root,
            p = o.toggle,
            h = n.autoplay,
            g = "pause" === h;
          function m() {
            l() &&
              t.Slides.isEnough() &&
              (c.start(!n.resetProgress), (i = r = g = !1), b(), u(Ne));
          }
          function v(e) {
            (g = !!(e = void 0 === e || e)), b(), l() || (c.pause(), u(Le));
          }
          function y() {
            g || (r || i ? v(!1) : m());
          }
          function b() {
            p && (S(p, bt, !g), H(p, Qe, n.i18n[g ? "play" : "pause"]));
          }
          function x(e) {
            (e = t.Slides.getAt(e)),
              c.set((e && +W(e.slide, qt)) || n.interval);
          }
          return {
            mount: function () {
              h &&
                (n.pauseOnHover &&
                  a(d, "mouseenter mouseleave", function (e) {
                    (r = "mouseenter" === e.type), y();
                  }),
                n.pauseOnFocus &&
                  a(d, "focusin focusout", function (e) {
                    (i = "focusin" === e.type), y();
                  }),
                p &&
                  a(p, "click", function () {
                    g ? m() : v(!0);
                  }),
                s([ge, ke, Ce], c.rewind),
                s(ge, x),
                p && H(p, Ue, f.track.id),
                g || m(),
                b());
            },
            destroy: c.cancel,
            play: m,
            pause: v,
            isPaused: l,
          };
        },
        Cover: function (e, t, n) {
          var r = Oe(e).on;
          function i(e) {
            t.Slides.forEach(function (t) {
              var n = j(t.container || t.slide, "img");
              n && n.src && o(e, n, t);
            });
          }
          function o(e, t, n) {
            n.style(
              "background",
              e ? 'center/cover no-repeat url("' + t.src + '")' : "",
              !0
            ),
              I(t, e ? "none" : "");
          }
          return {
            mount: function () {
              n.cover && (r(Pe, s(o, !0)), r([he, Se, Ce], s(i, !0)));
            },
            destroy: s(i, !1),
          };
        },
        Scroll: function (e, t, r) {
          var i,
            o,
            a = Oe(e),
            u = a.on,
            c = a.emit,
            l = e.state.set,
            f = t.Move,
            d = f.getPosition,
            p = f.getLimit,
            h = f.exceededLimit,
            g = f.translate,
            m = e.is(Nt),
            v = 1;
          function y(e, r, a, u, p) {
            var g,
              y = d();
            w(),
              !a ||
                (m && h()) ||
                ((a = t.Layout.sliderSize()),
                (g = ce(e) * a * re(oe(e) / a) || 0),
                (e = f.toPosition(t.Controller.toDest(e % a)) + g)),
              (a = se(y, e, 1));
            (v = 1),
              (r = a ? 0 : r || ne(oe(e - y) / 1.5, 800)),
              (o = u),
              (i = He(r, b, s(x, y, e, p), 1)),
              l(n),
              c(ke),
              i.start();
          }
          function b() {
            l(3), o && o(), c(Ae);
          }
          function x(e, t, n, i) {
            var s = d();
            i =
              (e +
                (t - e) *
                  ((t = i),
                  (e = r.easingFunc) ? e(t) : 1 - Math.pow(1 - t, 4)) -
                s) *
              v;
            g(s + i),
              m &&
                !n &&
                h() &&
                ((v *= 0.6), oe(i) < 10 && y(p(h(!0)), 600, !1, o, !0));
          }
          function w() {
            i && i.cancel();
          }
          function C() {
            i && !i.isPaused() && (w(), b());
          }
          return {
            mount: function () {
              u(ge, w), u([Se, Ce], C);
            },
            destroy: w,
            scroll: y,
            cancel: C,
          };
        },
        Drag: function (e, r, i) {
          var o,
            s,
            a,
            c,
            l,
            f,
            p,
            h,
            g = Oe(e),
            m = g.on,
            v = g.emit,
            y = g.bind,
            b = g.unbind,
            x = e.state,
            w = r.Move,
            C = r.Scroll,
            S = r.Controller,
            T = r.Elements.track,
            E = r.Media.reduce,
            k = (g = r.Direction).resolve,
            D = g.orient,
            j = w.getPosition,
            N = w.exceededLimit,
            L = !1;
          function P() {
            var e = i.drag;
            $(!e), (c = "free" === e);
          }
          function q(e) {
            var r, o, s;
            (f = !1),
              p ||
                ((r = B(e)),
                (o = e.target),
                (s = i.noDrag),
                A(o, "." + gt + ", ." + ft) ||
                  (s && A(o, s)) ||
                  (!r && e.button) ||
                  (S.isBusy()
                    ? U(e, !0)
                    : ((h = r ? T : window),
                      (l = x.is([t, n])),
                      (a = null),
                      y(h, Dt, M, Mt),
                      y(h, jt, O, Mt),
                      w.cancel(),
                      C.cancel(),
                      _(e))));
          }
          function M(t) {
            var n, r, s, a, u;
            x.is(6) || (x.set(6), v("drag")),
              t.cancelable &&
                (l
                  ? (w.translate(o + R(t) / (L && e.is(Nt) ? 5 : 1)),
                    (u = 200 < I(t)),
                    (n = L !== (L = N())),
                    (u || n) && _(t),
                    (f = !0),
                    v("dragging"),
                    U(t))
                  : oe(R((u = t))) > oe(R(u, !0)) &&
                    ((n = t),
                    (a = ((s = d((r = i.dragMinThreshold))) && r.mouse) || 0),
                    (s = (s ? r.touch : +r) || 10),
                    (l = oe(R(n)) > (B(n) ? s : a)),
                    U(t)));
          }
          function O(t) {
            var n, o, s;
            x.is(6) && (x.set(3), v("dragged")),
              l &&
                ((o = (function (e) {
                  return (
                    j() +
                    ce(e) *
                      te(
                        oe(e) * (i.flickPower || 600),
                        c ? 1 / 0 : r.Layout.listSize() * (i.flickMaxPages || 1)
                      )
                  );
                })(
                  (n = (function (t) {
                    if (e.is(Lt) || !L) {
                      var n = I(t);
                      if (n && n < 200) return R(t) / n;
                    }
                    return 0;
                  })((n = t)))
                )),
                (s = i.rewind && i.rewindByDrag),
                E(!1),
                c
                  ? S.scroll(o, 0, i.snap)
                  : e.is(Pt)
                  ? S.go(D(ce(n)) < 0 ? (s ? "<" : "-") : s ? ">" : "+")
                  : e.is(Nt) && L && s
                  ? S.go(N(!0) ? ">" : "<")
                  : S.go(S.toDest(o), !0),
                E(!0),
                U(t)),
              b(h, Dt, M),
              b(h, jt, O),
              (l = !1);
          }
          function H(e) {
            !p && f && U(e, !0);
          }
          function _(e) {
            (a = s), (s = e), (o = j());
          }
          function R(e, t) {
            return W(e, t) - W(F(e), t);
          }
          function I(e) {
            return Y(e) - Y(F(e));
          }
          function F(e) {
            return (s === e && a) || s;
          }
          function W(e, t) {
            return (B(e) ? e.changedTouches[0] : e)["page" + k(t ? "Y" : "X")];
          }
          function B(e) {
            return "undefined" != typeof TouchEvent && e instanceof TouchEvent;
          }
          function $(e) {
            p = e;
          }
          return {
            mount: function () {
              y(T, Dt, u, Mt),
                y(T, jt, u, Mt),
                y(T, At, q, Mt),
                y(T, "click", H, { capture: !0 }),
                y(T, "dragstart", U),
                m([he, Se], P);
            },
            disable: $,
            isDragging: function () {
              return l;
            },
          };
        },
        Keyboard: function (e, t, n) {
          var r,
            i,
            o = Oe(e),
            s = o.on,
            a = o.bind,
            u = o.unbind,
            l = e.root,
            f = t.Direction.resolve;
          function d() {
            var e = n.keyboard;
            e && ((r = "global" === e ? window : l), a(r, _t, g));
          }
          function p() {
            u(r, _t);
          }
          function h() {
            var e = i;
            (i = !0),
              c(function () {
                i = e;
              });
          }
          function g(t) {
            i || ((t = Ht(t)) === f(Ie) ? e.go("<") : t === f(Fe) && e.go(">"));
          }
          return {
            mount: function () {
              d(), s(Se, p), s(Se, d), s(ge, h);
            },
            destroy: p,
            disable: function (e) {
              i = e;
            },
          };
        },
        LazyLoad: function (e, t, n) {
          var r = Oe(e),
            o = r.on,
            a = r.off,
            u = r.bind,
            c = r.emit,
            l = "sequential" === n.lazyLoad,
            f = [me, Ae],
            d = [];
          function p() {
            i(d),
              t.Slides.forEach(function (e) {
                V(e.slide, Ft).forEach(function (t) {
                  var r = W(t, Rt),
                    i = W(t, It);
                  (r === t.src && i === t.srcset) ||
                    ((r = n.classes.spinner),
                    (r = j((i = t.parentElement), "." + r) || _("span", r, i)),
                    d.push([t, e, r]),
                    t.src || I(t, "none"));
                });
              }),
              (l ? v : (a(f), o(f, h), h))();
          }
          function h() {
            (d = d.filter(function (t) {
              var r = n.perPage * ((n.preloadPages || 1) + 1) - 1;
              return !t[1].isWithin(e.index, r) || g(t);
            })).length || a(f);
          }
          function g(e) {
            var t = e[0];
            T(e[1].slide, St),
              u(t, "load error", s(m, e)),
              H(t, "src", W(t, Rt)),
              H(t, "srcset", W(t, It)),
              O(t, Rt),
              O(t, It);
          }
          function m(e, t) {
            var n = e[0],
              r = e[1];
            Q(r.slide, St),
              "error" !== t.type && (z(e[2]), I(n, ""), c(Pe, n, r), c(Te)),
              l && v();
          }
          function v() {
            d.length && g(d.shift());
          }
          return {
            mount: function () {
              n.lazyLoad && (p(), o(Ce, p));
            },
            destroy: s(i, d),
            check: h,
          };
        },
        Pagination: function (e, t, n) {
          var r,
            a,
            u = Oe(e),
            c = u.on,
            l = u.emit,
            f = u.bind,
            d = t.Slides,
            p = t.Elements,
            h = t.Controller,
            g = h.hasFocus,
            m = h.getIndex,
            v = h.go,
            y = t.Direction.resolve,
            b = p.pagination,
            x = [];
          function w() {
            r && (z(b ? o(r.children) : r), Q(r, a), i(x), (r = null)),
              u.destroy();
          }
          function C(e) {
            v(">" + e, !0);
          }
          function S(e, t) {
            var n = x.length,
              r = Ht(t),
              i = E(),
              o = -1;
            (i =
              (r === y(Fe, !1, i)
                ? (o = ++e % n)
                : r === y(Ie, !1, i)
                ? (o = (--e + n) % n)
                : "Home" === r
                ? (o = 0)
                : "End" === r && (o = n - 1),
              x[o])) && (F(i.button), v(">" + o), U(t, !0));
          }
          function E() {
            return n.paginationDirection || n.direction;
          }
          function k(e) {
            return x[h.toPage(e)];
          }
          function A() {
            var e,
              t = k(m(!0)),
              n = k(m());
            t && (Q((e = t.button), bt), O(e, Ve), H(e, Xe, -1)),
              n && (T((e = n.button), bt), H(e, Ve, !0), H(e, Xe, "")),
              l("pagination:updated", { list: r, items: x }, t, n);
          }
          return {
            items: x,
            mount: function t() {
              w(), c([Se, Ce, "ei"], t);
              var i = n.pagination;
              if ((b && I(b, i ? "" : "none"), i)) {
                c([ge, ke, Ae], A);
                i = e.length;
                var o = n.classes,
                  u = n.i18n,
                  m = n.perPage,
                  v = g() ? h.getEnd() + 1 : ie(i / m);
                T(
                  (r = b || _("ul", o.pagination, p.track.parentElement)),
                  (a = ht + "--" + E())
                ),
                  H(r, ze, "tablist"),
                  H(r, Qe, u.select),
                  H(r, Ke, E() === Be ? "vertical" : "");
                for (var y = 0; y < v; y++) {
                  var D = _("li", null, r),
                    j = _("button", { class: o.page, type: "button" }, D),
                    N = d.getIn(y).map(function (e) {
                      return e.slide.id;
                    }),
                    L = !g() && 1 < m ? u.pageX : u.slideX;
                  f(j, "click", s(C, y)),
                    n.paginationKeyboard && f(j, "keydown", s(S, y)),
                    H(D, ze, "presentation"),
                    H(j, ze, "tab"),
                    H(j, Ue, N.join(" ")),
                    H(j, Qe, le(L, y + 1)),
                    H(j, Xe, -1),
                    x.push({ li: D, button: j, page: y });
                }
                A(), l("pagination:mounted", { list: r, items: x }, k(e.index));
              }
            },
            destroy: w,
            getAt: k,
            update: A,
          };
        },
        Sync: function (e, t, n) {
          var r = n.isNavigation,
            o = n.slideFocus,
            a = [];
          function u() {
            var t, n;
            e.splides.forEach(function (t) {
              t.isParent || (l(e, t.splide), l(t.splide, e));
            }),
              r &&
                ((n = (t = Oe(e)).on)(ve, d),
                n(qe, p),
                n([he, Se], f),
                a.push(t),
                t.emit(je, e.splides));
          }
          function c() {
            a.forEach(function (e) {
              e.destroy();
            }),
              i(a);
          }
          function l(e, t) {
            (e = Oe(e)).on(ge, function (e, n, r) {
              t.go(t.is(Lt) ? r : e);
            }),
              a.push(e);
          }
          function f() {
            H(t.Elements.list, Ke, n.direction === Be ? "vertical" : "");
          }
          function d(t) {
            e.go(t.index);
          }
          function p(e, t) {
            w(Wt, Ht(t)) && (d(e), U(t));
          }
          return {
            setup: s(t.Media.set, { slideFocus: m(o) ? r : o }, !0),
            mount: u,
            destroy: c,
            remount: function () {
              c(), u();
            },
          };
        },
        Wheel: function (e, n, r) {
          var i = Oe(e).bind,
            o = 0;
          function s(i) {
            var s, a, u, c, l;
            i.cancelable &&
              ((s = (l = i.deltaY) < 0),
              (a = Y(i)),
              (u = r.wheelMinThreshold || 0),
              (c = r.wheelSleep || 0),
              oe(l) > u && c < a - o && (e.go(s ? "<" : ">"), (o = a)),
              (l = s),
              (r.releaseWheel &&
                !e.state.is(t) &&
                -1 === n.Controller.getAdjacent(l)) ||
                U(i));
          }
          return {
            mount: function () {
              r.wheel && i(n.Elements.track, "wheel", s, Mt);
            },
          };
        },
        Live: function (e, t, n) {
          var r = Oe(e).on,
            i = t.Elements.track,
            o = n.live && !n.isNavigation,
            a = _("span", yt),
            u = He(90, s(c, !1));
          function c(e) {
            H(i, tt, e), e ? (E(i, a), u.start()) : (z(a), u.cancel());
          }
          function l(e) {
            o && H(i, et, e ? "off" : "polite");
          }
          return {
            mount: function () {
              o &&
                (l(!t.Autoplay.isPaused()),
                H(i, nt, !0),
                (a.textContent = "…"),
                r(Ne, s(l, !0)),
                r(Le, s(l, !1)),
                r([me, Ae], s(c, !0)));
            },
            disable: l,
            destroy: function () {
              O(i, [et, nt, tt]), z(a);
            },
          };
        },
      }),
      $t = {
        type: "slide",
        role: "region",
        speed: 400,
        perPage: 1,
        cloneStatus: !0,
        arrows: !0,
        pagination: !0,
        paginationKeyboard: !0,
        interval: 5e3,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        resetProgress: !0,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        drag: !0,
        direction: "ltr",
        trimSpace: !0,
        focusableNodes: "a, button, textarea, input, select, iframe",
        live: !0,
        classes: {
          slide: at,
          clone: ut,
          arrows: lt,
          arrow: ft,
          prev: dt,
          next: pt,
          pagination: ht,
          page: gt,
          spinner: Re + "spinner",
        },
        i18n: {
          prev: "Previous slide",
          next: "Next slide",
          first: "Go to first slide",
          last: "Go to last slide",
          slideX: "Go to slide %s",
          pageX: "Go to page %s",
          play: "Start autoplay",
          pause: "Pause autoplay",
          carousel: "carousel",
          slide: "slide",
          select: "Select a slide to show",
          slideLabel: "%s of %s",
        },
        reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: "pause" },
      };
    function zt(e, t, n) {
      var r = t.Slides;
      function i() {
        r.forEach(function (e) {
          e.style("transform", "translateX(-" + 100 * e.index + "%)");
        });
      }
      return {
        mount: function () {
          Oe(e).on([he, Ce], i);
        },
        start: function (e, t) {
          r.style("transition", "opacity " + n.speed + "ms " + n.easing), c(t);
        },
        cancel: u,
      };
    }
    function Xt(e, t, n) {
      var r,
        i = t.Move,
        o = t.Controller,
        a = t.Scroll,
        u = t.Elements.list,
        c = s(R, u, "transition");
      function l() {
        c(""), a.cancel();
      }
      return {
        mount: function () {
          Oe(e).bind(u, "transitionend", function (e) {
            e.target === u && r && (l(), r());
          });
        },
        start: function (t, s) {
          var u = i.toPosition(t, !0),
            l = i.getPosition(),
            f = (function (t) {
              var r = n.rewindSpeed;
              if (e.is(Nt) && r) {
                var i = o.getIndex(!0),
                  s = o.getEnd();
                if ((0 === i && s <= t) || (s <= i && 0 === t)) return r;
              }
              return n.speed;
            })(t);
          1 <= oe(u - l) && 1 <= f
            ? n.useScroll
              ? a.scroll(u, f, !1, s)
              : (c("transform " + f + "ms " + n.easing),
                i.translate(u, !0),
                (r = s))
            : (i.jump(t), s());
        },
        cancel: l,
      };
    }
    return (
      (We = (function () {
        function e(t, n) {
          (this.event = Oe()),
            (this.Components = {}),
            (this.state = (function (e) {
              var t = e;
              return {
                set: function (e) {
                  t = e;
                },
                is: function (e) {
                  return w(b(e), t);
                },
              };
            })(1)),
            (this.splides = []),
            (this.n = {}),
            (this.t = {}),
            ee((t = g(t) ? G(document, t) : t), t + " is invalid."),
            (n = q(
              {
                label: W((this.root = t), Qe) || "",
                labelledby: W(t, Ye) || "",
              },
              $t,
              e.defaults,
              n || {}
            ));
          try {
            q(n, JSON.parse(W(t, Z)));
          } catch (t) {
            ee(!1, "Invalid JSON");
          }
          this.n = Object.create(q({}, n));
        }
        var t = e.prototype;
        return (
          (t.mount = function (e, t) {
            var n = this,
              r = this.state,
              i = this.Components;
            return (
              ee(r.is([1, 7]), "Already mounted!"),
              r.set(1),
              (this.i = i),
              (this.r = t || this.r || (this.is(Pt) ? zt : Xt)),
              (this.t = e || this.t),
              L(P({}, Bt, this.t, { Transition: this.r }), function (e, t) {
                (e = e(n, i, n.n)), (i[t] = e).setup && e.setup();
              }),
              L(i, function (e) {
                e.mount && e.mount();
              }),
              this.emit(he),
              T(this.root, "is-initialized"),
              r.set(3),
              this.emit("ready"),
              this
            );
          }),
          (t.sync = function (e) {
            return (
              this.splides.push({ splide: e }),
              e.splides.push({ splide: this, isParent: !0 }),
              this.state.is(3) &&
                (this.i.Sync.remount(), e.Components.Sync.remount()),
              this
            );
          }),
          (t.go = function (e) {
            return this.i.Controller.go(e), this;
          }),
          (t.on = function (e, t) {
            return this.event.on(e, t), this;
          }),
          (t.off = function (e) {
            return this.event.off(e), this;
          }),
          (t.emit = function (e) {
            var t;
            return (
              (t = this.event).emit.apply(t, [e].concat(o(arguments, 1))), this
            );
          }),
          (t.add = function (e, t) {
            return this.i.Slides.add(e, t), this;
          }),
          (t.remove = function (e) {
            return this.i.Slides.remove(e), this;
          }),
          (t.is = function (e) {
            return this.n.type === e;
          }),
          (t.refresh = function () {
            return this.emit(Ce), this;
          }),
          (t.destroy = function (e) {
            void 0 === e && (e = !0);
            var t = this.event,
              n = this.state;
            return (
              n.is(1)
                ? Oe(this).on("ready", this.destroy.bind(this, e))
                : (L(
                    this.i,
                    function (t) {
                      t.destroy && t.destroy(e);
                    },
                    !0
                  ),
                  t.emit(De),
                  t.destroy(),
                  e && i(this.splides),
                  n.set(7)),
              this
            );
          }),
          a(e, [
            {
              key: "options",
              get: function () {
                return this.n;
              },
              set: function (e) {
                this.i.Media.set(e, !0, !0);
              },
            },
            {
              key: "length",
              get: function () {
                return this.i.Slides.getLength(!0);
              },
            },
            {
              key: "index",
              get: function () {
                return this.i.Controller.getIndex();
              },
            },
          ]),
          e
        );
      })()),
      (We.defaults = {}),
      (We.STATES = r),
      We
    );
  }),
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = c())
    : "function" == typeof define && define.amd
    ? define(c)
    : ((u = "undefined" != typeof globalThis ? globalThis : u || self).Splide =
        c()),
  document.querySelector(".icon-menu") &&
    document.addEventListener("click", function (n) {
      e &&
        n.target.closest(".icon-menu") &&
        (t(), document.documentElement.classList.toggle("menu-open"));
    }),
  document.querySelector(".main-splide")) && new Splide(".main-splide").mount();
  if (document.querySelector(".reductors_splide")) {
    var l = new Splide(".reductors_splide", {
        type: "loop",
        perPage: 2,
        gap: 2,
        autoHeight: !1,
        autoWidth: !1,
        updateOnMove: !0,
        perMove: 1,
        clickable: !0,
        padding: { left: 100, right: 100 },
        pagination: !1,
        breakpoints: {
          1450: { perPage: 2, padding: { left: 0, right: 0 } },
          1050: { perPage: 1, arrows: !1 },
          800: { perPage: 1 },
          650: { perPage: 1 },
        },
      }),
      f = new Splide(".reductors_splide-nav", {
        rewind: !0,
        perPage: 6,
        fixedHeight: 80,
        isNavigation: !0,
        gap: 0,
        focus: "center",
        pagination: !1,
        cover: !0,
        dragMinThreshold: { mouse: 4, touch: 10 },
        breakpoints: {
          1450: { perPage: 5 },
          1050: { perPage: 4 },
          800: { perPage: 3 },
          650: { perPage: 6, fixedHeight: "auto", arrows: !1 },
        },
      });
    l.sync(f), l.mount(), f.mount();
  }
  if (document.querySelector(".shesterni_splide")) {
    var d = new Splide(".shesterni_splide", {
        type: "loop",
        perPage: 2,
        gap: 2,
        updateOnMove: !0,
        perMove: 1,
        clickable: !0,
        padding: { left: 100, right: 100 },
        pagination: !1,
        breakpoints: {
          1450: { perPage: 2, padding: { left: 0, right: 0 } },
          1050: { perPage: 1, arrows: !1 },
          800: { perPage: 1 },
          650: { perPage: 1 },
        },
      }),
      p = new Splide(".shesterni_splide-nav", {
        rewind: !0,
        perPage: 3,
        fixedHeight: 80,
        isNavigation: !0,
        gap: 0,
        focus: "center",
        pagination: !1,
        cover: !0,
        dragMinThreshold: { mouse: 4, touch: 10 },
        breakpoints: {
          1450: { perPage: 3 },
          1050: { perPage: 3 },
          800: { perPage: 2 },
        },
      });
    d.sync(p), d.mount(), p.mount();
  }
  if (
    (document.querySelector(".gimbal__splide") &&
      new Splide(".gimbal__splide", {
        type: "loop",
        perPage: 4,
        perMove: 1,
        pagination: !1,
        breakpoints: {
          1250: { perPage: 3, arrows: !1 },
          950: { perPage: 2 },
          800: { perPage: 1 },
        },
      }).mount(),
    document.querySelector(".reviews__splide"))
  ) {
    let m = new Splide(".reviews__splide", {
      type: "loop",
      perPage: 1,
      perMove: 1,
      gap: 20,
      pagination: !0,
    });
    function v(e) {
      if (document.querySelector(".splide-nums")) {
        let e = document.querySelectorAll(
            ".reviews__splide .splide__pagination button"
          ).length,
          t = y(
            [
              ...document.querySelectorAll(
                ".reviews__splide .splide__pagination button"
              ),
            ].findIndex((e) => e.classList.contains("is-active")) + 1
          ),
          n = y(e);
        document.querySelector(
          ".splide-nums"
        ).innerHTML = `<span class="splide-nums-active">${t}</span>/<span class="splide-nums-all">${n}</span>`;
      }
    }
    function y(e) {
      return e < 10 ? "0" + e : e;
    }
    m.mount(),
      m.on("move", (e, t, n) => {
        console.log(e, t, n), v(n);
      }),
      v();
  }
  if (
    (document.querySelectorAll(".map__dot") &&
      (document.querySelectorAll(".map__dot").forEach((e) => {
        e.addEventListener("click", (t) => {
          e.classList.toggle("open");
        });
      }),
      document.querySelectorAll(".map__dot-close").forEach((e) => {
        e.addEventListener("click", (t) => {
          t.stopPropagation(), e.closest(".map__dot").classList.remove("open");
        });
      })),
    $(document).ready(function () {
      $("select").niceSelect();
    }),
    document.querySelector(".product__splide"))
  ) {
    var h = new Splide(".product__splide", {
        type: "loop",
        pagination: !1,
        gap: 10,
      }),
      g = h.root.querySelector(".product__slider-progress-bar");
    h.on("mounted move", function () {
      var e = h.Components.Controller.getEnd() + 1,
        t = Math.min((h.index + 1) / e, 1);
      g.style.width = String(100 * t) + "%";
    }),
      h.mount();
  }
  document.querySelector(".product__sertificates-splide") &&
    new Splide(".product__sertificates-splide", {
      type: "loop",
      pagination: !1,
      perPage: 4,
      perMove: 1,
      gap: 30,
      breakpoints: {
        1440: { perPage: 3 },
        768: { perPage: 2 },
        425: { perPage: 1.3 },
      },
    }).mount();
  document.querySelector(".product__similar-products-splide") &&
    new Splide(".product__similar-products-splide", {
      type: "loop",
      pagination: !1,
      perPage: 4,
      perMove: 1,
    }).mount();
})();
