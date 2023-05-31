/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  "use strict";
  const t = {};
  let e = !0,
    n = (t = 500) => {
      document.documentElement.classList.contains("lock") ? i(t) : o(t);
    },
    i = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let i = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let t = 0; t < i.length; t++) {
            i[t].style.paddingRight = "0px";
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
    o = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let i = document.querySelectorAll("[data-lp]");
        for (let t = 0; t < i.length; t++) {
          i[t].style.paddingRight =
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
  function r(t) {
    setTimeout(() => {
      window.FLS && console.log(t);
    }, 0);
  }
  t.popup = new (class {
    constructor(t) {
      let e = {
        logging: !0,
        init: !0,
        attributeOpenButton: "data-popup",
        attributeCloseButton: "data-close",
        fixElementSelector: "[data-lp]",
        youtubeAttribute: "data-youtube",
        youtubePlaceAttribute: "data-youtube-place",
        setAutoplayYoutube: !0,
        classes: {
          popup: "popup",
          popupContent: "popup__content",
          popupActive: "popup_show",
          bodyActive: "popup-show",
        },
        focusCatch: !0,
        closeEsc: !0,
        bodyLock: !0,
        bodyLockDelay: 500,
        hashSettings: { location: !0, goHash: !0 },
        on: {
          beforeOpen: function () {},
          afterOpen: function () {},
          beforeClose: function () {},
          afterClose: function () {},
        },
      };
      (this.isOpen = !1),
        (this.targetOpen = { selector: !1, element: !1 }),
        (this.previousOpen = { selector: !1, element: !1 }),
        (this.lastClosed = { selector: !1, element: !1 }),
        (this._dataValue = !1),
        (this.hash = !1),
        (this._reopen = !1),
        (this._selectorOpen = !1),
        (this.lastFocusEl = !1),
        (this._focusEl = [
          "a[href]",
          'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
          "button:not([disabled]):not([aria-hidden])",
          "select:not([disabled]):not([aria-hidden])",
          "textarea:not([disabled]):not([aria-hidden])",
          "area[href]",
          "iframe",
          "object",
          "embed",
          "[contenteditable]",
          '[tabindex]:not([tabindex^="-"])',
        ]),
        (this.options = {
          ...e,
          ...t,
          classes: { ...e.classes, ...t?.classes },
          hashSettings: { ...e.hashSettings, ...t?.hashSettings },
          on: { ...e.on, ...t?.on },
        }),
        this.options.init && this.initPopups();
    }
    initPopups() {
      this.popupLogging("Проснулся"), this.eventsPopup();
    }
    eventsPopup() {
      document.addEventListener(
        "click",
        function (t) {
          const e = t.target.closest(`[${this.options.attributeOpenButton}]`);
          if (e)
            return (
              t.preventDefault(),
              (this._dataValue = e.getAttribute(
                this.options.attributeOpenButton
              )
                ? e.getAttribute(this.options.attributeOpenButton)
                : "error"),
              "error" !== this._dataValue
                ? (this.isOpen || (this.lastFocusEl = e),
                  (this.targetOpen.selector = `${this._dataValue}`),
                  (this._selectorOpen = !0),
                  void this.open())
                : void this.popupLogging(
                    `Ой ой, не заполнен атрибут у ${e.classList}`
                  )
            );
          return t.target.closest(`[${this.options.attributeCloseButton}]`) ||
            (!t.target.closest(`.${this.options.classes.popupContent}`) &&
              this.isOpen)
            ? (t.preventDefault(), void this.close())
            : void 0;
        }.bind(this)
      ),
        document.addEventListener(
          "keydown",
          function (t) {
            if (
              this.options.closeEsc &&
              27 == t.which &&
              "Escape" === t.code &&
              this.isOpen
            )
              return t.preventDefault(), void this.close();
            this.options.focusCatch &&
              9 == t.which &&
              this.isOpen &&
              this._focusCatch(t);
          }.bind(this)
        ),
        this.options.hashSettings.goHash &&
          (window.addEventListener(
            "hashchange",
            function () {
              window.location.hash
                ? this._openToHash()
                : this.close(this.targetOpen.selector);
            }.bind(this)
          ),
          window.addEventListener(
            "load",
            function () {
              window.location.hash && this._openToHash();
            }.bind(this)
          ));
    }
    open(t) {
      if (
        (t &&
          "string" == typeof t &&
          "" !== t.trim() &&
          ((this.targetOpen.selector = t), (this._selectorOpen = !0)),
        this.isOpen && ((this._reopen = !0), this.close()),
        this._selectorOpen ||
          (this.targetOpen.selector = this.lastClosed.selector),
        this._reopen || (this.previousActiveElement = document.activeElement),
        (this.targetOpen.element = document.querySelector(
          this.targetOpen.selector
        )),
        this.targetOpen.element)
      ) {
        if (
          this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
        ) {
          const t = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
              this.options.youtubeAttribute
            )}?rel=0&showinfo=0&autoplay=1`,
            e = document.createElement("iframe");
          e.setAttribute("allowfullscreen", "");
          const n = this.options.setAutoplayYoutube ? "autoplay;" : "";
          e.setAttribute("allow", `${n}; encrypted-media`),
            e.setAttribute("src", t),
            this.targetOpen.element.querySelector(
              `[${this.options.youtubePlaceAttribute}]`
            ) &&
              this.targetOpen.element
                .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                .appendChild(e);
        }
        this.options.hashSettings.location &&
          (this._getHash(), this._setHash()),
          this.options.on.beforeOpen(this),
          this.targetOpen.element.classList.add(
            this.options.classes.popupActive
          ),
          document.body.classList.add(this.options.classes.bodyActive),
          this._reopen ? (this._reopen = !1) : n(),
          this.targetOpen.element.setAttribute("aria-hidden", "false"),
          (this.previousOpen.selector = this.targetOpen.selector),
          (this.previousOpen.element = this.targetOpen.element),
          (this._selectorOpen = !1),
          (this.isOpen = !0),
          setTimeout(() => {
            this._focusTrap();
          }, 50),
          document.dispatchEvent(
            new CustomEvent("afterPopupOpen", { detail: { popup: this } })
          ),
          this.popupLogging("Открыл попап");
      } else
        this.popupLogging(
          "Ой ой, такого попапа нет. Проверьте корректность ввода. "
        );
    }
    close(t) {
      t &&
        "string" == typeof t &&
        "" !== t.trim() &&
        (this.previousOpen.selector = t),
        this.isOpen &&
          e &&
          (this.options.on.beforeClose(this),
          this.targetOpen.element.hasAttribute(this.options.youtubeAttribute) &&
            this.targetOpen.element.querySelector(
              `[${this.options.youtubePlaceAttribute}]`
            ) &&
            (this.targetOpen.element.querySelector(
              `[${this.options.youtubePlaceAttribute}]`
            ).innerHTML = ""),
          this.previousOpen.element.classList.remove(
            this.options.classes.popupActive
          ),
          this.previousOpen.element.setAttribute("aria-hidden", "true"),
          this._reopen ||
            (document.body.classList.remove(this.options.classes.bodyActive),
            n(),
            (this.isOpen = !1)),
          this._removeHash(),
          this._selectorOpen &&
            ((this.lastClosed.selector = this.previousOpen.selector),
            (this.lastClosed.element = this.previousOpen.element)),
          this.options.on.afterClose(this),
          setTimeout(() => {
            this._focusTrap();
          }, 50),
          this.popupLogging("Закрыл попап"));
    }
    _getHash() {
      this.options.hashSettings.location &&
        (this.hash = this.targetOpen.selector.includes("#")
          ? this.targetOpen.selector
          : this.targetOpen.selector.replace(".", "#"));
    }
    _openToHash() {
      let t = document.querySelector(
        `.${window.location.hash.replace("#", "")}`
      )
        ? `.${window.location.hash.replace("#", "")}`
        : document.querySelector(`${window.location.hash}`)
        ? `${window.location.hash}`
        : null;
      document.querySelector(`[${this.options.attributeOpenButton}="${t}"]`) &&
        t &&
        this.open(t);
    }
    _setHash() {
      history.pushState("", "", this.hash);
    }
    _removeHash() {
      history.pushState("", "", window.location.href.split("#")[0]);
    }
    _focusCatch(t) {
      const e = this.targetOpen.element.querySelectorAll(this._focusEl),
        n = Array.prototype.slice.call(e),
        i = n.indexOf(document.activeElement);
      t.shiftKey && 0 === i && (n[n.length - 1].focus(), t.preventDefault()),
        t.shiftKey || i !== n.length - 1 || (n[0].focus(), t.preventDefault());
    }
    _focusTrap() {
      const t = this.previousOpen.element.querySelectorAll(this._focusEl);
      !this.isOpen && this.lastFocusEl
        ? this.lastFocusEl.focus()
        : t[0].focus();
    }
    popupLogging(t) {
      this.options.logging && r(`[Попапос]: ${t}`);
    }
  })({});
  let s = (t, e = !1, n = 500, o = 0) => {
    const s = document.querySelector(t);
    if (s) {
      let u = "",
        a = 0;
      e &&
        ((u = "header.header"), (a = document.querySelector(u).offsetHeight));
      let c = {
        speedAsDuration: !0,
        speed: n,
        header: u,
        offset: o,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (i(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(s, "", c);
      else {
        let t = s.getBoundingClientRect().top + scrollY;
        (t = a ? t - a : t),
          (t = o ? t - o : t),
          window.scrollTo({ top: t, behavior: "smooth" });
      }
      r(`[gotoBlock]: Юхуу...едем к ${t}`);
    } else r(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${t}`);
  };
  let u = {
    getErrors(t) {
      let e = 0,
        n = t.querySelectorAll("*[data-required]");
      return (
        n.length &&
          n.forEach((t) => {
            (null === t.offsetParent && "SELECT" !== t.tagName) ||
              t.disabled ||
              (e += this.validateInput(t));
          }),
        e
      );
    },
    validateInput(t) {
      let e = 0;
      return (
        "email" === t.dataset.required
          ? ((t.value = t.value.replace(" ", "")),
            this.emailTest(t) ? (this.addError(t), e++) : this.removeError(t))
          : ("checkbox" !== t.type || t.checked) && t.value
          ? this.removeError(t)
          : (this.addError(t), e++),
        e
      );
    },
    addError(t) {
      t.classList.add("_form-error"),
        t.parentElement.classList.add("_form-error");
      let e = t.parentElement.querySelector(".form__error");
      e && t.parentElement.removeChild(e),
        t.dataset.error &&
          t.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="form__error">${t.dataset.error}</div>`
          );
    },
    removeError(t) {
      t.classList.remove("_form-error"),
        t.parentElement.classList.remove("_form-error"),
        t.parentElement.querySelector(".form__error") &&
          t.parentElement.removeChild(
            t.parentElement.querySelector(".form__error")
          );
    },
    formClean(e) {
      e.reset(),
        setTimeout(() => {
          let n = e.querySelectorAll("input,textarea");
          for (let t = 0; t < n.length; t++) {
            const e = n[t];
            e.parentElement.classList.remove("_form-focus"),
              e.classList.remove("_form-focus"),
              u.removeError(e);
          }
          let i = e.querySelectorAll(".checkbox__input");
          if (i.length > 0)
            for (let t = 0; t < i.length; t++) {
              i[t].checked = !1;
            }
          if (t.select) {
            let n = e.querySelectorAll(".select");
            if (n.length)
              for (let e = 0; e < n.length; e++) {
                const i = n[e].querySelector("select");
                t.select.selectBuild(i);
              }
          }
        }, 0);
    },
    emailTest: (t) =>
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(t.value),
  };
  let a = !1;
  function c(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  var l, d;
  setTimeout(() => {
    if (a) {
      let t = new Event("windowScroll");
      window.addEventListener("scroll", function (e) {
        document.dispatchEvent(t);
      });
    }
  }, 0),
    (l = void 0),
    (d = function () {
      var t = "(prefers-reduced-motion: reduce)",
        e = 4,
        n = 5,
        i = {
          CREATED: 1,
          MOUNTED: 2,
          IDLE: 3,
          MOVING: e,
          SCROLLING: n,
          DRAGGING: 6,
          DESTROYED: 7,
        };
      function o(t) {
        t.length = 0;
      }
      function r(t, e, n) {
        return Array.prototype.slice.call(t, e, n);
      }
      function s(t) {
        return t.bind.apply(t, [null].concat(r(arguments, 1)));
      }
      var u = setTimeout,
        a = function () {};
      function l(t) {
        return requestAnimationFrame(t);
      }
      function d(t, e) {
        return typeof e === t;
      }
      function f(t) {
        return !v(t) && d("object", t);
      }
      var p = Array.isArray,
        h = s(d, "function"),
        m = s(d, "string"),
        g = s(d, "undefined");
      function v(t) {
        return null === t;
      }
      function y(t) {
        try {
          return (
            t instanceof (t.ownerDocument.defaultView || window).HTMLElement
          );
        } catch (t) {
          return !1;
        }
      }
      function b(t) {
        return p(t) ? t : [t];
      }
      function w(t, e) {
        b(t).forEach(e);
      }
      function E(t, e) {
        return t.indexOf(e) > -1;
      }
      function S(t, e) {
        return t.push.apply(t, b(e)), t;
      }
      function A(t, e, n) {
        t &&
          w(e, function (e) {
            e && t.classList[n ? "add" : "remove"](e);
          });
      }
      function _(t, e) {
        A(t, m(e) ? e.split(" ") : e, !0);
      }
      function L(t, e) {
        w(e, t.appendChild.bind(t));
      }
      function O(t, e) {
        w(t, function (t) {
          var n = (e || t).parentNode;
          n && n.insertBefore(t, e);
        });
      }
      function x(t, e) {
        return y(t) && (t.msMatchesSelector || t.matches).call(t, e);
      }
      function C(t, e) {
        var n = t ? r(t.children) : [];
        return e
          ? n.filter(function (t) {
              return x(t, e);
            })
          : n;
      }
      function P(t, e) {
        return e ? C(t, e)[0] : t.firstElementChild;
      }
      var k = Object.keys;
      function T(t, e, n) {
        return (
          t &&
            (n ? k(t).reverse() : k(t)).forEach(function (n) {
              "__proto__" !== n && e(t[n], n);
            }),
          t
        );
      }
      function D(t) {
        return (
          r(arguments, 1).forEach(function (e) {
            T(e, function (n, i) {
              t[i] = e[i];
            });
          }),
          t
        );
      }
      function q(t) {
        return (
          r(arguments, 1).forEach(function (e) {
            T(e, function (e, n) {
              p(e)
                ? (t[n] = e.slice())
                : f(e)
                ? (t[n] = q({}, f(t[n]) ? t[n] : {}, e))
                : (t[n] = e);
            });
          }),
          t
        );
      }
      function M(t, e) {
        w(e || k(t), function (e) {
          delete t[e];
        });
      }
      function I(t, e) {
        w(t, function (t) {
          w(e, function (e) {
            t && t.removeAttribute(e);
          });
        });
      }
      function N(t, e, n) {
        f(e)
          ? T(e, function (e, n) {
              N(t, n, e);
            })
          : w(t, function (t) {
              v(n) || "" === n ? I(t, e) : t.setAttribute(e, String(n));
            });
      }
      function z(t, e, n) {
        var i = document.createElement(t);
        return e && (m(e) ? _(i, e) : N(i, e)), n && L(n, i), i;
      }
      function F(t, e, n) {
        if (g(n)) return getComputedStyle(t)[e];
        v(n) || (t.style[e] = "" + n);
      }
      function R(t, e) {
        F(t, "display", e);
      }
      function $(t) {
        (t.setActive && t.setActive()) || t.focus({ preventScroll: !0 });
      }
      function B(t, e) {
        return t.getAttribute(e);
      }
      function j(t, e) {
        return t && t.classList.contains(e);
      }
      function H(t) {
        return t.getBoundingClientRect();
      }
      function W(t) {
        w(t, function (t) {
          t && t.parentNode && t.parentNode.removeChild(t);
        });
      }
      function X(t) {
        return P(new DOMParser().parseFromString(t, "text/html").body);
      }
      function G(t, e) {
        t.preventDefault(),
          e && (t.stopPropagation(), t.stopImmediatePropagation());
      }
      function Y(t, e) {
        return t && t.querySelector(e);
      }
      function U(t, e) {
        return e ? r(t.querySelectorAll(e)) : [];
      }
      function V(t, e) {
        A(t, e, !1);
      }
      function K(t) {
        return t.timeStamp;
      }
      function J(t) {
        return m(t) ? t : t ? t + "px" : "";
      }
      var Q = "splide",
        Z = "data-" + Q;
      function tt(t, e) {
        if (!t) throw new Error("[" + Q + "] " + (e || ""));
      }
      var et = Math.min,
        nt = Math.max,
        it = Math.floor,
        ot = Math.ceil,
        rt = Math.abs;
      function st(t, e, n) {
        return rt(t - e) < n;
      }
      function ut(t, e, n, i) {
        var o = et(e, n),
          r = nt(e, n);
        return i ? o < t && t < r : o <= t && t <= r;
      }
      function at(t, e, n) {
        var i = et(e, n),
          o = nt(e, n);
        return et(nt(i, t), o);
      }
      function ct(t) {
        return +(t > 0) - +(t < 0);
      }
      function lt(t, e) {
        return (
          w(e, function (e) {
            t = t.replace("%s", "" + e);
          }),
          t
        );
      }
      function dt(t) {
        return t < 10 ? "0" + t : "" + t;
      }
      var ft = {};
      function pt() {
        var t = [];
        function e(t, e, n) {
          w(t, function (t) {
            t &&
              w(e, function (e) {
                e.split(" ").forEach(function (e) {
                  var i = e.split(".");
                  n(t, i[0], i[1]);
                });
              });
          });
        }
        return {
          bind: function (n, i, o, r) {
            e(n, i, function (e, n, i) {
              var s = "addEventListener" in e,
                u = s
                  ? e.removeEventListener.bind(e, n, o, r)
                  : e.removeListener.bind(e, o);
              s ? e.addEventListener(n, o, r) : e.addListener(o),
                t.push([e, n, i, o, u]);
            });
          },
          unbind: function (n, i, o) {
            e(n, i, function (e, n, i) {
              t = t.filter(function (t) {
                return (
                  !!(
                    t[0] !== e ||
                    t[1] !== n ||
                    t[2] !== i ||
                    (o && t[3] !== o)
                  ) || (t[4](), !1)
                );
              });
            });
          },
          dispatch: function (t, e, n) {
            var i;
            return (
              "function" == typeof CustomEvent
                ? (i = new CustomEvent(e, { bubbles: !0, detail: n }))
                : (i = document.createEvent("CustomEvent")).initCustomEvent(
                    e,
                    !0,
                    !1,
                    n
                  ),
              t.dispatchEvent(i),
              i
            );
          },
          destroy: function () {
            t.forEach(function (t) {
              t[4]();
            }),
              o(t);
          },
        };
      }
      var ht = "mounted",
        mt = "ready",
        gt = "move",
        vt = "moved",
        yt = "click",
        bt = "active",
        wt = "inactive",
        Et = "visible",
        St = "hidden",
        At = "refresh",
        _t = "updated",
        Lt = "resize",
        Ot = "resized",
        xt = "scroll",
        Ct = "scrolled",
        Pt = "destroy",
        kt = "arrows:mounted",
        Tt = "navigation:mounted",
        Dt = "autoplay:play",
        qt = "autoplay:pause",
        Mt = "lazyload:loaded",
        It = "sk",
        Nt = "sh",
        zt = "ei";
      function Ft(t) {
        var e = t ? t.event.bus : document.createDocumentFragment(),
          n = pt();
        return (
          t && t.event.on(Pt, n.destroy),
          D(n, {
            bus: e,
            on: function (t, i) {
              n.bind(e, b(t).join(" "), function (t) {
                i.apply(i, p(t.detail) ? t.detail : []);
              });
            },
            off: s(n.unbind, e),
            emit: function (t) {
              n.dispatch(e, t, r(arguments, 1));
            },
          })
        );
      }
      function Rt(t, e, n, i) {
        var o,
          r,
          s = Date.now,
          u = 0,
          a = !0,
          c = 0;
        function d() {
          if (!a) {
            if (
              ((u = t ? et((s() - o) / t, 1) : 1),
              n && n(u),
              u >= 1 && (e(), (o = s()), i && ++c >= i))
            )
              return f();
            r = l(d);
          }
        }
        function f() {
          a = !0;
        }
        function p() {
          r && cancelAnimationFrame(r), (u = 0), (r = 0), (a = !0);
        }
        return {
          start: function (e) {
            e || p(), (o = s() - (e ? u * t : 0)), (a = !1), (r = l(d));
          },
          rewind: function () {
            (o = s()), (u = 0), n && n(u);
          },
          pause: f,
          cancel: p,
          set: function (e) {
            t = e;
          },
          isPaused: function () {
            return a;
          },
        };
      }
      var $t = "Arrow",
        Bt = $t + "Left",
        jt = $t + "Right",
        Ht = $t + "Up",
        Wt = $t + "Down",
        Xt = "ttb",
        Gt = {
          width: ["height"],
          left: ["top", "right"],
          right: ["bottom", "left"],
          x: ["y"],
          X: ["Y"],
          Y: ["X"],
          ArrowLeft: [Ht, jt],
          ArrowRight: [Wt, Bt],
        },
        Yt = "role",
        Ut = "tabindex",
        Vt = "aria-",
        Kt = Vt + "controls",
        Jt = Vt + "current",
        Qt = Vt + "selected",
        Zt = Vt + "label",
        te = Vt + "labelledby",
        ee = Vt + "hidden",
        ne = Vt + "orientation",
        ie = Vt + "roledescription",
        oe = Vt + "live",
        re = Vt + "busy",
        se = Vt + "atomic",
        ue = [Yt, Ut, "disabled", Kt, Jt, Zt, te, ee, ne, ie],
        ae = Q + "__",
        ce = "is-",
        le = Q,
        de = ae + "track",
        fe = ae + "list",
        pe = ae + "slide",
        he = pe + "--clone",
        me = pe + "__container",
        ge = ae + "arrows",
        ve = ae + "arrow",
        ye = ve + "--prev",
        be = ve + "--next",
        we = ae + "pagination",
        Ee = we + "__page",
        Se = ae + "progress__bar",
        Ae = ae + "toggle",
        _e = ae + "sr",
        Le = ce + "initialized",
        Oe = ce + "active",
        xe = ce + "prev",
        Ce = ce + "next",
        Pe = ce + "visible",
        ke = ce + "loading",
        Te = ce + "focus-in",
        De = ce + "overflow",
        qe = [Oe, Pe, xe, Ce, ke, Te, De],
        Me = {
          slide: pe,
          clone: he,
          arrows: ge,
          arrow: ve,
          prev: ye,
          next: be,
          pagination: we,
          page: Ee,
          spinner: ae + "spinner",
        },
        Ie = "touchstart mousedown",
        Ne = "touchmove mousemove",
        ze = "touchend touchcancel mouseup click",
        Fe = "slide",
        Re = "loop",
        $e = "fade";
      function Be(t, i, o, r) {
        var u,
          a = Ft(t),
          c = a.on,
          l = a.emit,
          d = a.bind,
          f = t.Components,
          p = t.root,
          h = t.options,
          m = h.isNavigation,
          g = h.updateOnMove,
          v = h.i18n,
          y = h.pagination,
          b = h.slideFocus,
          w = f.Direction.resolve,
          E = B(r, "style"),
          S = B(r, Zt),
          _ = o > -1,
          L = P(r, "." + me);
        function O() {
          var e = t.splides
            .map(function (t) {
              var e = t.splide.Components.Slides.getAt(i);
              return e ? e.slide.id : "";
            })
            .join(" ");
          N(r, Zt, lt(v.slideX, (_ ? o : i) + 1)),
            N(r, Kt, e),
            N(r, Yt, b ? "button" : ""),
            b && I(r, ie);
        }
        function x() {
          u || C();
        }
        function C() {
          if (!u) {
            var o = t.index;
            (s = k()) !== j(r, Oe) &&
              (A(r, Oe, s), N(r, Jt, (m && s) || ""), l(s ? bt : wt, T)),
              (function () {
                var i = (function () {
                    if (t.is($e)) return k();
                    var e = H(f.Elements.track),
                      n = H(r),
                      i = w("left", !0),
                      o = w("right", !0);
                    return it(e[i]) <= ot(n[i]) && it(n[o]) <= ot(e[o]);
                  })(),
                  o = !i && (!k() || _);
                if (
                  (t.state.is([e, n]) || N(r, ee, o || ""),
                  N(U(r, h.focusableNodes || ""), Ut, o ? -1 : ""),
                  b && N(r, Ut, o ? -1 : 0),
                  i !== j(r, Pe) && (A(r, Pe, i), l(i ? Et : St, T)),
                  !i && document.activeElement === r)
                ) {
                  var s = f.Slides.getAt(t.index);
                  s && $(s.slide);
                }
              })(),
              A(r, xe, i === o - 1),
              A(r, Ce, i === o + 1);
          }
          var s;
        }
        function k() {
          var e = t.index;
          return e === i || (h.cloneStatus && e === o);
        }
        var T = {
          index: i,
          slideIndex: o,
          slide: r,
          container: L,
          isClone: _,
          mount: function () {
            _ ||
              ((r.id = p.id + "-slide" + dt(i + 1)),
              N(r, Yt, y ? "tabpanel" : "group"),
              N(r, ie, v.slide),
              N(r, Zt, S || lt(v.slideLabel, [i + 1, t.length]))),
              d(r, "click", s(l, yt, T)),
              d(r, "keydown", s(l, It, T)),
              c([vt, Nt, Ct], C),
              c(Tt, O),
              g && c(gt, x);
          },
          destroy: function () {
            (u = !0),
              a.destroy(),
              V(r, qe),
              I(r, ue),
              N(r, "style", E),
              N(r, Zt, S || "");
          },
          update: C,
          style: function (t, e, n) {
            F((n && L) || r, t, e);
          },
          isWithin: function (e, n) {
            var o = rt(e - i);
            return (
              _ || (!h.rewind && !t.is(Re)) || (o = et(o, t.length - o)), o <= n
            );
          },
        };
        return T;
      }
      var je = Z + "-interval",
        He = { passive: !1, capture: !0 },
        We = { Spacebar: " ", Right: jt, Left: Bt, Up: Ht, Down: Wt };
      function Xe(t) {
        return (t = m(t) ? t : t.key), We[t] || t;
      }
      var Ge = "keydown",
        Ye = Z + "-lazy",
        Ue = Ye + "-srcset",
        Ve = "[" + Ye + "], [" + Ue + "]",
        Ke = [" ", "Enter"],
        Je = Object.freeze({
          __proto__: null,
          Media: function (e, n, i) {
            var o = e.state,
              r = i.breakpoints || {},
              s = i.reducedMotion || {},
              u = pt(),
              a = [];
            function c(t) {
              t && u.destroy();
            }
            function l(t, e) {
              var n = matchMedia(e);
              u.bind(n, "change", d), a.push([t, n]);
            }
            function d() {
              var t = o.is(7),
                n = i.direction,
                r = a.reduce(function (t, e) {
                  return q(t, e[1].matches ? e[0] : {});
                }, {});
              M(i),
                f(r),
                i.destroy
                  ? e.destroy("completely" === i.destroy)
                  : t
                  ? (c(!0), e.mount())
                  : n !== i.direction && e.refresh();
            }
            function f(t, n, r) {
              q(i, t),
                n && q(Object.getPrototypeOf(i), t),
                (!r && o.is(1)) || e.emit(_t, i);
            }
            return {
              setup: function () {
                var e = "min" === i.mediaQuery;
                k(r)
                  .sort(function (t, n) {
                    return e ? +t - +n : +n - +t;
                  })
                  .forEach(function (t) {
                    l(r[t], "(" + (e ? "min" : "max") + "-width:" + t + "px)");
                  }),
                  l(s, t),
                  d();
              },
              destroy: c,
              reduce: function (e) {
                matchMedia(t).matches && (e ? q(i, s) : M(i, k(s)));
              },
              set: f,
            };
          },
          Direction: function (t, e, n) {
            return {
              resolve: function (t, e, i) {
                var o =
                  "rtl" !== (i = i || n.direction) || e
                    ? i === Xt
                      ? 0
                      : -1
                    : 1;
                return (
                  (Gt[t] && Gt[t][o]) ||
                  t.replace(/width|left|right/i, function (t, e) {
                    var n = Gt[t.toLowerCase()][o] || t;
                    return e > 0 ? n.charAt(0).toUpperCase() + n.slice(1) : n;
                  })
                );
              },
              orient: function (t) {
                return t * ("rtl" === n.direction ? 1 : -1);
              },
            };
          },
          Elements: function (t, e, n) {
            var i,
              r,
              s,
              u = Ft(t),
              a = u.on,
              c = u.bind,
              l = t.root,
              d = n.i18n,
              f = {},
              p = [],
              m = [],
              g = [];
            function v() {
              var t, e, o;
              (i = w("." + de)),
                (r = P(i, "." + fe)),
                tt(i && r, "A track/list element is missing."),
                S(p, C(r, "." + pe + ":not(." + he + ")")),
                T(
                  {
                    arrows: ge,
                    pagination: we,
                    prev: ye,
                    next: be,
                    bar: Se,
                    toggle: Ae,
                  },
                  function (t, e) {
                    f[e] = w("." + t);
                  }
                ),
                D(f, { root: l, track: i, list: r, slides: p }),
                (e = l.id || "" + (t = Q) + dt((ft[t] = (ft[t] || 0) + 1))),
                (o = n.role),
                (l.id = e),
                (i.id = i.id || e + "-track"),
                (r.id = r.id || e + "-list"),
                !B(l, Yt) && "SECTION" !== l.tagName && o && N(l, Yt, o),
                N(l, ie, d.carousel),
                N(r, Yt, "presentation"),
                b();
            }
            function y(t) {
              var e = ue.concat("style");
              o(p), V(l, m), V(i, g), I([i, r], e), I(l, t ? e : ["style", ie]);
            }
            function b() {
              V(l, m),
                V(i, g),
                (m = E(le)),
                (g = E(de)),
                _(l, m),
                _(i, g),
                N(l, Zt, n.label),
                N(l, te, n.labelledby);
            }
            function w(t) {
              var e = Y(l, t);
              return e &&
                (function (t, e) {
                  if (h(t.closest)) return t.closest(e);
                  for (var n = t; n && 1 === n.nodeType && !x(n, e); )
                    n = n.parentElement;
                  return n;
                })(e, "." + le) === l
                ? e
                : void 0;
            }
            function E(t) {
              return [
                t + "--" + n.type,
                t + "--" + n.direction,
                n.drag && t + "--draggable",
                n.isNavigation && t + "--nav",
                t === le && Oe,
              ];
            }
            return D(f, {
              setup: v,
              mount: function () {
                a(At, y),
                  a(At, v),
                  a(_t, b),
                  c(
                    document,
                    Ie + " keydown",
                    function (t) {
                      s = "keydown" === t.type;
                    },
                    { capture: !0 }
                  ),
                  c(l, "focusin", function () {
                    A(l, Te, !!s);
                  });
              },
              destroy: y,
            });
          },
          Slides: function (t, e, n) {
            var i = Ft(t),
              r = i.on,
              u = i.emit,
              a = i.bind,
              c = e.Elements,
              l = c.slides,
              d = c.list,
              f = [];
            function p() {
              l.forEach(function (t, e) {
                v(t, e, -1);
              });
            }
            function g() {
              A(function (t) {
                t.destroy();
              }),
                o(f);
            }
            function v(e, n, i) {
              var o = Be(t, n, i, e);
              o.mount(),
                f.push(o),
                f.sort(function (t, e) {
                  return t.index - e.index;
                });
            }
            function S(t) {
              return t
                ? C(function (t) {
                    return !t.isClone;
                  })
                : f;
            }
            function A(t, e) {
              S(e).forEach(t);
            }
            function C(t) {
              return f.filter(
                h(t)
                  ? t
                  : function (e) {
                      return m(t) ? x(e.slide, t) : E(b(t), e.index);
                    }
              );
            }
            return {
              mount: function () {
                p(), r(At, g), r(At, p);
              },
              destroy: g,
              update: function () {
                A(function (t) {
                  t.update();
                });
              },
              register: v,
              get: S,
              getIn: function (t) {
                var i = e.Controller,
                  o = i.toIndex(t),
                  r = i.hasFocus() ? 1 : n.perPage;
                return C(function (t) {
                  return ut(t.index, o, o + r - 1);
                });
              },
              getAt: function (t) {
                return C(t)[0];
              },
              add: function (t, e) {
                w(t, function (t) {
                  if ((m(t) && (t = X(t)), y(t))) {
                    var i = l[e];
                    i ? O(t, i) : L(d, t),
                      _(t, n.classes.slide),
                      (o = t),
                      (r = s(u, Lt)),
                      (c = U(o, "img")),
                      (f = c.length)
                        ? c.forEach(function (t) {
                            a(t, "load error", function () {
                              --f || r();
                            });
                          })
                        : r();
                  }
                  var o, r, c, f;
                }),
                  u(At);
              },
              remove: function (t) {
                W(
                  C(t).map(function (t) {
                    return t.slide;
                  })
                ),
                  u(At);
              },
              forEach: A,
              filter: C,
              style: function (t, e, n) {
                A(function (i) {
                  i.style(t, e, n);
                });
              },
              getLength: function (t) {
                return t ? l.length : f.length;
              },
              isEnough: function () {
                return f.length > n.perPage;
              },
            };
          },
          Layout: function (t, e, n) {
            var i,
              o,
              r,
              u = Ft(t),
              a = u.on,
              c = u.bind,
              l = u.emit,
              d = e.Slides,
              p = e.Direction.resolve,
              h = e.Elements,
              m = h.root,
              g = h.track,
              v = h.list,
              y = d.getAt,
              b = d.style;
            function w() {
              (i = n.direction === Xt),
                F(m, "maxWidth", J(n.width)),
                F(g, p("paddingLeft"), S(!1)),
                F(g, p("paddingRight"), S(!0)),
                E(!0);
            }
            function E(t) {
              var e,
                s = H(m);
              (t || o.width !== s.width || o.height !== s.height) &&
                (F(
                  g,
                  "height",
                  ((e = ""),
                  i &&
                    (tt((e = _()), "height or heightRatio is missing."),
                    (e = "calc(" + e + " - " + S(!1) + " - " + S(!0) + ")")),
                  e)
                ),
                b(p("marginRight"), J(n.gap)),
                b(
                  "width",
                  n.autoWidth ? null : J(n.fixedWidth) || (i ? "" : L())
                ),
                b(
                  "height",
                  J(n.fixedHeight) || (i ? (n.autoHeight ? null : L()) : _()),
                  !0
                ),
                (o = s),
                l(Ot),
                r !== (r = T()) && (A(m, De, r), l("overflow", r)));
            }
            function S(t) {
              var e = n.padding,
                i = p(t ? "right" : "left");
              return (e && J(e[i] || (f(e) ? 0 : e))) || "0px";
            }
            function _() {
              return J(n.height || H(v).width * n.heightRatio);
            }
            function L() {
              var t = J(n.gap);
              return (
                "calc((100%" +
                (t && " + " + t) +
                ")/" +
                (n.perPage || 1) +
                (t && " - " + t) +
                ")"
              );
            }
            function O() {
              return H(v)[p("width")];
            }
            function x(t, e) {
              var n = y(t || 0);
              return n ? H(n.slide)[p("width")] + (e ? 0 : k()) : 0;
            }
            function C(t, e) {
              var n = y(t);
              if (n) {
                var i = H(n.slide)[p("right")],
                  o = H(v)[p("left")];
                return rt(i - o) + (e ? 0 : k());
              }
              return 0;
            }
            function P(e) {
              return C(t.length - 1) - C(0) + x(0, e);
            }
            function k() {
              var t = y(0);
              return (t && parseFloat(F(t.slide, p("marginRight")))) || 0;
            }
            function T() {
              return t.is($e) || P(!0) > O();
            }
            return {
              mount: function () {
                var t, e, n;
                w(),
                  c(
                    window,
                    "resize load",
                    ((t = s(l, Lt)),
                    (n = Rt(e || 0, t, null, 1)),
                    function () {
                      n.isPaused() && n.start();
                    })
                  ),
                  a([_t, At], w),
                  a(Lt, E);
              },
              resize: E,
              listSize: O,
              slideSize: x,
              sliderSize: P,
              totalSize: C,
              getPadding: function (t) {
                return (
                  parseFloat(F(g, p("padding" + (t ? "Right" : "Left")))) || 0
                );
              },
              isOverflow: T,
            };
          },
          Clones: function (t, e, n) {
            var i,
              r = Ft(t),
              s = r.on,
              u = e.Elements,
              a = e.Slides,
              c = e.Direction.resolve,
              l = [];
            function d() {
              s(At, f),
                s([_t, Lt], h),
                (i = m()) &&
                  ((function (e) {
                    var i = a.get().slice(),
                      o = i.length;
                    if (o) {
                      for (; i.length < e; ) S(i, i);
                      S(i.slice(-e), i.slice(0, e)).forEach(function (r, s) {
                        var c = s < e,
                          d = (function (e, i) {
                            var o = e.cloneNode(!0);
                            return (
                              _(o, n.classes.clone),
                              (o.id = t.root.id + "-clone" + dt(i + 1)),
                              o
                            );
                          })(r.slide, s);
                        c ? O(d, i[0].slide) : L(u.list, d),
                          S(l, d),
                          a.register(d, s - e + (c ? 0 : o), r.index);
                      });
                    }
                  })(i),
                  e.Layout.resize(!0));
            }
            function f() {
              p(), d();
            }
            function p() {
              W(l), o(l), r.destroy();
            }
            function h() {
              var t = m();
              i !== t && (i < t || !t) && r.emit(At);
            }
            function m() {
              var i = n.clones;
              if (t.is(Re)) {
                if (g(i)) {
                  var o = n[c("fixedWidth")] && e.Layout.slideSize(0);
                  i =
                    (o && ot(H(u.track)[c("width")] / o)) ||
                    (n[c("autoWidth")] && t.length) ||
                    2 * n.perPage;
                }
              } else i = 0;
              return i;
            }
            return { mount: d, destroy: p };
          },
          Move: function (t, n, i) {
            var o,
              r = Ft(t),
              s = r.on,
              u = r.emit,
              a = t.state.set,
              c = n.Layout,
              l = c.slideSize,
              d = c.getPadding,
              f = c.totalSize,
              p = c.listSize,
              h = c.sliderSize,
              m = n.Direction,
              v = m.resolve,
              y = m.orient,
              b = n.Elements,
              w = b.list,
              E = b.track;
            function S() {
              n.Controller.isBusy() ||
                (n.Scroll.cancel(), A(t.index), n.Slides.update());
            }
            function A(t) {
              _(C(t, !0));
            }
            function _(e, i) {
              if (!t.is($e)) {
                var o = i
                  ? e
                  : (function (e) {
                      if (t.is(Re)) {
                        var i = x(e),
                          o = i > n.Controller.getEnd();
                        (i < 0 || o) && (e = L(e, o));
                      }
                      return e;
                    })(e);
                F(w, "transform", "translate" + v("X") + "(" + o + "px)"),
                  e !== o && u(Nt);
              }
            }
            function L(t, e) {
              var n = t - k(e),
                i = h();
              return (t -= y(i * (ot(rt(n) / i) || 1)) * (e ? 1 : -1));
            }
            function O() {
              _(P(), !0), o.cancel();
            }
            function x(t) {
              for (
                var e = n.Slides.get(), i = 0, o = 1 / 0, r = 0;
                r < e.length;
                r++
              ) {
                var s = e[r].index,
                  u = rt(C(s, !0) - t);
                if (!(u <= o)) break;
                (o = u), (i = s);
              }
              return i;
            }
            function C(e, n) {
              var o = y(
                f(e - 1) -
                  (function (t) {
                    var e = i.focus;
                    return "center" === e
                      ? (p() - l(t, !0)) / 2
                      : +e * l(t) || 0;
                  })(e)
              );
              return n
                ? (function (e) {
                    return (
                      i.trimSpace && t.is(Fe) && (e = at(e, 0, y(h(!0) - p()))),
                      e
                    );
                  })(o)
                : o;
            }
            function P() {
              var t = v("left");
              return H(w)[t] - H(E)[t] + y(d(!1));
            }
            function k(t) {
              return C(t ? n.Controller.getEnd() : 0, !!i.trimSpace);
            }
            return {
              mount: function () {
                (o = n.Transition), s([ht, Ot, _t, At], S);
              },
              move: function (t, n, i, r) {
                var s, c;
                t !== n &&
                  ((s = t > i),
                  (c = y(L(P(), s))),
                  s ? c >= 0 : c <= w[v("scrollWidth")] - H(E)[v("width")]) &&
                  (O(), _(L(P(), t > i), !0)),
                  a(e),
                  u(gt, n, i, t),
                  o.start(n, function () {
                    a(3), u(vt, n, i, t), r && r();
                  });
              },
              jump: A,
              translate: _,
              shift: L,
              cancel: O,
              toIndex: x,
              toPosition: C,
              getPosition: P,
              getLimit: k,
              exceededLimit: function (t, e) {
                e = g(e) ? P() : e;
                var n = !0 !== t && y(e) < y(k(!1)),
                  i = !1 !== t && y(e) > y(k(!0));
                return n || i;
              },
              reposition: S,
            };
          },
          Controller: function (t, i, o) {
            var r,
              u,
              a,
              c,
              l = Ft(t),
              d = l.on,
              f = l.emit,
              p = i.Move,
              h = p.getPosition,
              v = p.getLimit,
              y = p.toPosition,
              b = i.Slides,
              w = b.isEnough,
              E = b.getLength,
              S = o.omitEnd,
              A = t.is(Re),
              _ = t.is(Fe),
              L = s(T, !1),
              O = s(T, !0),
              x = o.start || 0,
              C = x;
            function P() {
              (u = E(!0)), (a = o.perMove), (c = o.perPage), (r = M());
              var t = at(x, 0, S ? r : u - 1);
              t !== x && ((x = t), p.reposition());
            }
            function k() {
              r !== M() && f(zt);
            }
            function T(t, e) {
              var n = a || (F() ? 1 : c),
                i = D(x + n * (t ? -1 : 1), x, !(a || F()));
              return -1 === i && _ && !st(h(), v(!t), 1)
                ? t
                  ? 0
                  : r
                : e
                ? i
                : q(i);
            }
            function D(e, n, i) {
              if (w() || F()) {
                var s = (function (e) {
                  if (_ && "move" === o.trimSpace && e !== x)
                    for (
                      var n = h();
                      n === y(e, !0) && ut(e, 0, t.length - 1, !o.rewind);

                    )
                      e < x ? --e : ++e;
                  return e;
                })(e);
                s !== e && ((n = e), (e = s), (i = !1)),
                  e < 0 || e > r
                    ? (e =
                        a || (!ut(0, e, n, !0) && !ut(r, n, e, !0))
                          ? A
                            ? i
                              ? e < 0
                                ? -(u % c || c)
                                : u
                              : e
                            : o.rewind
                            ? e < 0
                              ? r
                              : 0
                            : -1
                          : I(N(e)))
                    : i && e !== n && (e = I(N(n) + (e < n ? -1 : 1)));
              } else e = -1;
              return e;
            }
            function q(t) {
              return A ? (t + u) % u || 0 : t;
            }
            function M() {
              for (var t = u - (F() || (A && a) ? 1 : c); S && t-- > 0; )
                if (y(u - 1, !0) !== y(t, !0)) {
                  t++;
                  break;
                }
              return at(t, 0, u - 1);
            }
            function I(t) {
              return at(F() ? t : c * t, 0, r);
            }
            function N(t) {
              return F() ? et(t, r) : it((t >= r ? u - 1 : t) / c);
            }
            function z(t) {
              t !== x && ((C = x), (x = t));
            }
            function F() {
              return !g(o.focus) || o.isNavigation;
            }
            function R() {
              return t.state.is([e, n]) && !!o.waitForTransition;
            }
            return {
              mount: function () {
                P(), d([_t, At, zt], P), d(Ot, k);
              },
              go: function (t, e, n) {
                if (!R()) {
                  var i = (function (t) {
                      var e = x;
                      if (m(t)) {
                        var n = t.match(/([+\-<>])(\d+)?/) || [],
                          i = n[1],
                          o = n[2];
                        "+" === i || "-" === i
                          ? (e = D(x + +("" + i + (+o || 1)), x))
                          : ">" === i
                          ? (e = o ? I(+o) : L(!0))
                          : "<" === i && (e = O(!0));
                      } else e = A ? t : at(t, 0, r);
                      return e;
                    })(t),
                    o = q(i);
                  o > -1 && (e || o !== x) && (z(o), p.move(i, o, C, n));
                }
              },
              scroll: function (t, e, n, o) {
                i.Scroll.scroll(t, e, n, function () {
                  var t = q(p.toIndex(h()));
                  z(S ? et(t, r) : t), o && o();
                });
              },
              getNext: L,
              getPrev: O,
              getAdjacent: T,
              getEnd: M,
              setIndex: z,
              getIndex: function (t) {
                return t ? C : x;
              },
              toIndex: I,
              toPage: N,
              toDest: function (t) {
                var e = p.toIndex(t);
                return _ ? at(e, 0, r) : e;
              },
              hasFocus: F,
              isBusy: R,
            };
          },
          Arrows: function (t, e, n) {
            var i,
              o,
              r = Ft(t),
              u = r.on,
              a = r.bind,
              c = r.emit,
              l = n.classes,
              d = n.i18n,
              f = e.Elements,
              p = e.Controller,
              h = f.arrows,
              m = f.track,
              g = h,
              v = f.prev,
              y = f.next,
              b = {};
            function w() {
              var t;
              !(t = n.arrows) ||
                (v && y) ||
                ((g = h || z("div", l.arrows)),
                (v = x(!0)),
                (y = x(!1)),
                (i = !0),
                L(g, [v, y]),
                !h && O(g, m)),
                v &&
                  y &&
                  (D(b, { prev: v, next: y }),
                  R(g, t ? "" : "none"),
                  _(g, (o = ge + "--" + n.direction)),
                  t &&
                    (u([ht, vt, At, Ct, zt], C),
                    a(y, "click", s(A, ">")),
                    a(v, "click", s(A, "<")),
                    C(),
                    N([v, y], Kt, m.id),
                    c(kt, v, y))),
                u(_t, E);
            }
            function E() {
              S(), w();
            }
            function S() {
              r.destroy(),
                V(g, o),
                i ? (W(h ? [v, y] : g), (v = y = null)) : I([v, y], ue);
            }
            function A(t) {
              p.go(t, !0);
            }
            function x(t) {
              return X(
                '<button class="' +
                  l.arrow +
                  " " +
                  (t ? l.prev : l.next) +
                  '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' +
                  (n.arrowPath ||
                    "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") +
                  '" />'
              );
            }
            function C() {
              if (v && y) {
                var e = t.index,
                  n = p.getPrev(),
                  i = p.getNext(),
                  o = n > -1 && e < n ? d.last : d.prev,
                  r = i > -1 && e > i ? d.first : d.next;
                (v.disabled = n < 0),
                  (y.disabled = i < 0),
                  N(v, Zt, o),
                  N(y, Zt, r),
                  c("arrows:updated", v, y, n, i);
              }
            }
            return { arrows: b, mount: w, destroy: S, update: C };
          },
          Autoplay: function (t, e, n) {
            var i,
              o,
              r = Ft(t),
              s = r.on,
              u = r.bind,
              a = r.emit,
              c = Rt(n.interval, t.go.bind(t, ">"), function (t) {
                var e = d.bar;
                e && F(e, "width", 100 * t + "%"), a("autoplay:playing", t);
              }),
              l = c.isPaused,
              d = e.Elements,
              f = e.Elements,
              p = f.root,
              h = f.toggle,
              m = n.autoplay,
              g = "pause" === m;
            function v() {
              l() &&
                e.Slides.isEnough() &&
                (c.start(!n.resetProgress), (o = i = g = !1), w(), a(Dt));
            }
            function y(t) {
              void 0 === t && (t = !0),
                (g = !!t),
                w(),
                l() || (c.pause(), a(qt));
            }
            function b() {
              g || (i || o ? y(!1) : v());
            }
            function w() {
              h && (A(h, Oe, !g), N(h, Zt, n.i18n[g ? "play" : "pause"]));
            }
            function E(t) {
              var i = e.Slides.getAt(t);
              c.set((i && +B(i.slide, je)) || n.interval);
            }
            return {
              mount: function () {
                m &&
                  (n.pauseOnHover &&
                    u(p, "mouseenter mouseleave", function (t) {
                      (i = "mouseenter" === t.type), b();
                    }),
                  n.pauseOnFocus &&
                    u(p, "focusin focusout", function (t) {
                      (o = "focusin" === t.type), b();
                    }),
                  h &&
                    u(h, "click", function () {
                      g ? v() : y(!0);
                    }),
                  s([gt, xt, At], c.rewind),
                  s(gt, E),
                  h && N(h, Kt, d.track.id),
                  g || v(),
                  w());
              },
              destroy: c.cancel,
              play: v,
              pause: y,
              isPaused: l,
            };
          },
          Cover: function (t, e, n) {
            var i = Ft(t).on;
            function o(t) {
              e.Slides.forEach(function (e) {
                var n = P(e.container || e.slide, "img");
                n && n.src && r(t, n, e);
              });
            }
            function r(t, e, n) {
              n.style(
                "background",
                t ? 'center/cover no-repeat url("' + e.src + '")' : "",
                !0
              ),
                R(e, t ? "none" : "");
            }
            return {
              mount: function () {
                n.cover && (i(Mt, s(r, !0)), i([ht, _t, At], s(o, !0)));
              },
              destroy: s(o, !1),
            };
          },
          Scroll: function (t, e, i) {
            var o,
              r,
              u = Ft(t),
              a = u.on,
              c = u.emit,
              l = t.state.set,
              d = e.Move,
              f = d.getPosition,
              p = d.getLimit,
              h = d.exceededLimit,
              m = d.translate,
              g = t.is(Fe),
              v = 1;
            function y(t, i, u, a, p) {
              var m = f();
              if ((E(), u && (!g || !h()))) {
                var y = e.Layout.sliderSize(),
                  S = ct(t) * y * it(rt(t) / y) || 0;
                t = d.toPosition(e.Controller.toDest(t % y)) + S;
              }
              var A = st(m, t, 1);
              (v = 1),
                (i = A ? 0 : i || nt(rt(t - m) / 1.5, 800)),
                (r = a),
                (o = Rt(i, b, s(w, m, t, p), 1)),
                l(n),
                c(xt),
                o.start();
            }
            function b() {
              l(3), r && r(), c(Ct);
            }
            function w(t, e, n, o) {
              var s,
                u,
                a = f(),
                c =
                  (t +
                    (e - t) *
                      ((s = o),
                      (u = i.easingFunc) ? u(s) : 1 - Math.pow(1 - s, 4)) -
                    a) *
                  v;
              m(a + c),
                g &&
                  !n &&
                  h() &&
                  ((v *= 0.6), rt(c) < 10 && y(p(h(!0)), 600, !1, r, !0));
            }
            function E() {
              o && o.cancel();
            }
            function S() {
              o && !o.isPaused() && (E(), b());
            }
            return {
              mount: function () {
                a(gt, E), a([_t, At], S);
              },
              destroy: E,
              scroll: y,
              cancel: S,
            };
          },
          Drag: function (t, i, o) {
            var r,
              s,
              u,
              c,
              l,
              d,
              p,
              h,
              m = Ft(t),
              g = m.on,
              v = m.emit,
              y = m.bind,
              b = m.unbind,
              w = t.state,
              E = i.Move,
              S = i.Scroll,
              A = i.Controller,
              _ = i.Elements.track,
              L = i.Media.reduce,
              O = i.Direction,
              C = O.resolve,
              P = O.orient,
              k = E.getPosition,
              T = E.exceededLimit,
              D = !1;
            function q() {
              var t = o.drag;
              W(!t), (c = "free" === t);
            }
            function M(t) {
              if (((d = !1), !p)) {
                var i = H(t);
                (r = t.target),
                  (s = o.noDrag),
                  x(r, "." + Ee + ", ." + ve) ||
                    (s && x(r, s)) ||
                    (!i && t.button) ||
                    (A.isBusy()
                      ? G(t, !0)
                      : ((h = i ? _ : window),
                        (l = w.is([e, n])),
                        (u = null),
                        y(h, Ne, I, He),
                        y(h, ze, N, He),
                        E.cancel(),
                        S.cancel(),
                        F(t)));
              }
              var r, s;
            }
            function I(e) {
              if ((w.is(6) || (w.set(6), v("drag")), e.cancelable))
                if (l) {
                  E.translate(r + R(e) / (D && t.is(Fe) ? 5 : 1));
                  var n = $(e) > 200,
                    i = D !== (D = T());
                  (n || i) && F(e), (d = !0), v("dragging"), G(e);
                } else
                  (function (t) {
                    return rt(R(t)) > rt(R(t, !0));
                  })(e) &&
                    ((l = (function (t) {
                      var e = o.dragMinThreshold,
                        n = f(e),
                        i = (n && e.mouse) || 0,
                        r = (n ? e.touch : +e) || 10;
                      return rt(R(t)) > (H(t) ? r : i);
                    })(e)),
                    G(e));
            }
            function N(e) {
              w.is(6) && (w.set(3), v("dragged")),
                l &&
                  ((function (e) {
                    var n = (function (e) {
                        if (t.is(Re) || !D) {
                          var n = $(e);
                          if (n && n < 200) return R(e) / n;
                        }
                        return 0;
                      })(e),
                      r = (function (t) {
                        return (
                          k() +
                          ct(t) *
                            et(
                              rt(t) * (o.flickPower || 600),
                              c
                                ? 1 / 0
                                : i.Layout.listSize() * (o.flickMaxPages || 1)
                            )
                        );
                      })(n),
                      s = o.rewind && o.rewindByDrag;
                    L(!1),
                      c
                        ? A.scroll(r, 0, o.snap)
                        : t.is($e)
                        ? A.go(P(ct(n)) < 0 ? (s ? "<" : "-") : s ? ">" : "+")
                        : t.is(Fe) && D && s
                        ? A.go(T(!0) ? ">" : "<")
                        : A.go(A.toDest(r), !0),
                      L(!0);
                  })(e),
                  G(e)),
                b(h, Ne, I),
                b(h, ze, N),
                (l = !1);
            }
            function z(t) {
              !p && d && G(t, !0);
            }
            function F(t) {
              (u = s), (s = t), (r = k());
            }
            function R(t, e) {
              return j(t, e) - j(B(t), e);
            }
            function $(t) {
              return K(t) - K(B(t));
            }
            function B(t) {
              return (s === t && u) || s;
            }
            function j(t, e) {
              return (H(t) ? t.changedTouches[0] : t)[
                "page" + C(e ? "Y" : "X")
              ];
            }
            function H(t) {
              return (
                "undefined" != typeof TouchEvent && t instanceof TouchEvent
              );
            }
            function W(t) {
              p = t;
            }
            return {
              mount: function () {
                y(_, Ne, a, He),
                  y(_, ze, a, He),
                  y(_, Ie, M, He),
                  y(_, "click", z, { capture: !0 }),
                  y(_, "dragstart", G),
                  g([ht, _t], q);
              },
              disable: W,
              isDragging: function () {
                return l;
              },
            };
          },
          Keyboard: function (t, e, n) {
            var i,
              o,
              r = Ft(t),
              s = r.on,
              a = r.bind,
              c = r.unbind,
              l = t.root,
              d = e.Direction.resolve;
            function f() {
              var t = n.keyboard;
              t && ((i = "global" === t ? window : l), a(i, Ge, m));
            }
            function p() {
              c(i, Ge);
            }
            function h() {
              var t = o;
              (o = !0),
                u(function () {
                  o = t;
                });
            }
            function m(e) {
              if (!o) {
                var n = Xe(e);
                n === d(Bt) ? t.go("<") : n === d(jt) && t.go(">");
              }
            }
            return {
              mount: function () {
                f(), s(_t, p), s(_t, f), s(gt, h);
              },
              destroy: p,
              disable: function (t) {
                o = t;
              },
            };
          },
          LazyLoad: function (t, e, n) {
            var i = Ft(t),
              r = i.on,
              u = i.off,
              a = i.bind,
              c = i.emit,
              l = "sequential" === n.lazyLoad,
              d = [vt, Ct],
              f = [];
            function p() {
              o(f),
                e.Slides.forEach(function (t) {
                  U(t.slide, Ve).forEach(function (e) {
                    var i = B(e, Ye),
                      o = B(e, Ue);
                    if (i !== e.src || o !== e.srcset) {
                      var r = n.classes.spinner,
                        s = e.parentElement,
                        u = P(s, "." + r) || z("span", r, s);
                      f.push([e, t, u]), e.src || R(e, "none");
                    }
                  });
                }),
                l ? v() : (u(d), r(d, h), h());
            }
            function h() {
              (f = f.filter(function (e) {
                var i = n.perPage * ((n.preloadPages || 1) + 1) - 1;
                return !e[1].isWithin(t.index, i) || m(e);
              })).length || u(d);
            }
            function m(t) {
              var e = t[0];
              _(t[1].slide, ke),
                a(e, "load error", s(g, t)),
                N(e, "src", B(e, Ye)),
                N(e, "srcset", B(e, Ue)),
                I(e, Ye),
                I(e, Ue);
            }
            function g(t, e) {
              var n = t[0],
                i = t[1];
              V(i.slide, ke),
                "error" !== e.type && (W(t[2]), R(n, ""), c(Mt, n, i), c(Lt)),
                l && v();
            }
            function v() {
              f.length && m(f.shift());
            }
            return {
              mount: function () {
                n.lazyLoad && (p(), r(At, p));
              },
              destroy: s(o, f),
              check: h,
            };
          },
          Pagination: function (t, e, n) {
            var i,
              u,
              a = Ft(t),
              c = a.on,
              l = a.emit,
              d = a.bind,
              f = e.Slides,
              p = e.Elements,
              h = e.Controller,
              m = h.hasFocus,
              g = h.getIndex,
              v = h.go,
              y = e.Direction.resolve,
              b = p.pagination,
              w = [];
            function E() {
              i && (W(b ? r(i.children) : i), V(i, u), o(w), (i = null)),
                a.destroy();
            }
            function S(t) {
              v(">" + t, !0);
            }
            function A(t, e) {
              var n = w.length,
                i = Xe(e),
                o = L(),
                r = -1;
              i === y(jt, !1, o)
                ? (r = ++t % n)
                : i === y(Bt, !1, o)
                ? (r = (--t + n) % n)
                : "Home" === i
                ? (r = 0)
                : "End" === i && (r = n - 1);
              var s = w[r];
              s && ($(s.button), v(">" + r), G(e, !0));
            }
            function L() {
              return n.paginationDirection || n.direction;
            }
            function O(t) {
              return w[h.toPage(t)];
            }
            function x() {
              var t = O(g(!0)),
                e = O(g());
              if (t) {
                var n = t.button;
                V(n, Oe), I(n, Qt), N(n, Ut, -1);
              }
              if (e) {
                var o = e.button;
                _(o, Oe), N(o, Qt, !0), N(o, Ut, "");
              }
              l("pagination:updated", { list: i, items: w }, t, e);
            }
            return {
              items: w,
              mount: function e() {
                E(), c([_t, At, zt], e);
                var o = n.pagination;
                b && R(b, o ? "" : "none"),
                  o &&
                    (c([gt, xt, Ct], x),
                    (function () {
                      var e = t.length,
                        o = n.classes,
                        r = n.i18n,
                        a = n.perPage,
                        c = m() ? h.getEnd() + 1 : ot(e / a);
                      _(
                        (i = b || z("ul", o.pagination, p.track.parentElement)),
                        (u = we + "--" + L())
                      ),
                        N(i, Yt, "tablist"),
                        N(i, Zt, r.select),
                        N(i, ne, L() === Xt ? "vertical" : "");
                      for (var l = 0; l < c; l++) {
                        var g = z("li", null, i),
                          v = z("button", { class: o.page, type: "button" }, g),
                          y = f.getIn(l).map(function (t) {
                            return t.slide.id;
                          }),
                          E = !m() && a > 1 ? r.pageX : r.slideX;
                        d(v, "click", s(S, l)),
                          n.paginationKeyboard && d(v, "keydown", s(A, l)),
                          N(g, Yt, "presentation"),
                          N(v, Yt, "tab"),
                          N(v, Kt, y.join(" ")),
                          N(v, Zt, lt(E, l + 1)),
                          N(v, Ut, -1),
                          w.push({ li: g, button: v, page: l });
                      }
                    })(),
                    x(),
                    l("pagination:mounted", { list: i, items: w }, O(t.index)));
              },
              destroy: E,
              getAt: O,
              update: x,
            };
          },
          Sync: function (t, e, n) {
            var i = n.isNavigation,
              r = n.slideFocus,
              u = [];
            function a() {
              var e, n;
              t.splides.forEach(function (e) {
                e.isParent || (l(t, e.splide), l(e.splide, t));
              }),
                i &&
                  ((e = Ft(t)),
                  (n = e.on)(yt, f),
                  n(It, p),
                  n([ht, _t], d),
                  u.push(e),
                  e.emit(Tt, t.splides));
            }
            function c() {
              u.forEach(function (t) {
                t.destroy();
              }),
                o(u);
            }
            function l(t, e) {
              var n = Ft(t);
              n.on(gt, function (t, n, i) {
                e.go(e.is(Re) ? i : t);
              }),
                u.push(n);
            }
            function d() {
              N(e.Elements.list, ne, n.direction === Xt ? "vertical" : "");
            }
            function f(e) {
              t.go(e.index);
            }
            function p(t, e) {
              E(Ke, Xe(e)) && (f(t), G(e));
            }
            return {
              setup: s(e.Media.set, { slideFocus: g(r) ? i : r }, !0),
              mount: a,
              destroy: c,
              remount: function () {
                c(), a();
              },
            };
          },
          Wheel: function (t, n, i) {
            var o = Ft(t).bind,
              r = 0;
            function s(o) {
              if (o.cancelable) {
                var s = o.deltaY,
                  u = s < 0,
                  a = K(o),
                  c = i.wheelMinThreshold || 0,
                  l = i.wheelSleep || 0;
                rt(s) > c && a - r > l && (t.go(u ? "<" : ">"), (r = a)),
                  (function (o) {
                    return (
                      !i.releaseWheel ||
                      t.state.is(e) ||
                      -1 !== n.Controller.getAdjacent(o)
                    );
                  })(u) && G(o);
              }
            }
            return {
              mount: function () {
                i.wheel && o(n.Elements.track, "wheel", s, He);
              },
            };
          },
          Live: function (t, e, n) {
            var i = Ft(t).on,
              o = e.Elements.track,
              r = n.live && !n.isNavigation,
              u = z("span", _e),
              a = Rt(90, s(c, !1));
            function c(t) {
              N(o, re, t), t ? (L(o, u), a.start()) : (W(u), a.cancel());
            }
            function l(t) {
              r && N(o, oe, t ? "off" : "polite");
            }
            return {
              mount: function () {
                r &&
                  (l(!e.Autoplay.isPaused()),
                  N(o, se, !0),
                  (u.textContent = "…"),
                  i(Dt, s(l, !0)),
                  i(qt, s(l, !1)),
                  i([vt, Ct], s(c, !0)));
              },
              disable: l,
              destroy: function () {
                I(o, [oe, se, re]), W(u);
              },
            };
          },
        }),
        Qe = {
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
          classes: Me,
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
      function Ze(t, e, n) {
        var i = e.Slides;
        function o() {
          i.forEach(function (t) {
            t.style("transform", "translateX(-" + 100 * t.index + "%)");
          });
        }
        return {
          mount: function () {
            Ft(t).on([ht, At], o);
          },
          start: function (t, e) {
            i.style("transition", "opacity " + n.speed + "ms " + n.easing),
              u(e);
          },
          cancel: a,
        };
      }
      function tn(t, e, n) {
        var i,
          o = e.Move,
          r = e.Controller,
          u = e.Scroll,
          a = e.Elements.list,
          c = s(F, a, "transition");
        function l() {
          c(""), u.cancel();
        }
        return {
          mount: function () {
            Ft(t).bind(a, "transitionend", function (t) {
              t.target === a && i && (l(), i());
            });
          },
          start: function (e, s) {
            var a = o.toPosition(e, !0),
              l = o.getPosition(),
              d = (function (e) {
                var i = n.rewindSpeed;
                if (t.is(Fe) && i) {
                  var o = r.getIndex(!0),
                    s = r.getEnd();
                  if ((0 === o && e >= s) || (o >= s && 0 === e)) return i;
                }
                return n.speed;
              })(e);
            rt(a - l) >= 1 && d >= 1
              ? n.useScroll
                ? u.scroll(a, d, !1, s)
                : (c("transform " + d + "ms " + n.easing),
                  o.translate(a, !0),
                  (i = s))
              : (o.jump(e), s());
          },
          cancel: l,
        };
      }
      var en = (function () {
          function t(e, n) {
            var i;
            (this.event = Ft()),
              (this.Components = {}),
              (this.state =
                ((i = 1),
                {
                  set: function (t) {
                    i = t;
                  },
                  is: function (t) {
                    return E(b(t), i);
                  },
                })),
              (this.splides = []),
              (this._o = {}),
              (this._E = {});
            var o = m(e) ? Y(document, e) : e;
            tt(o, o + " is invalid."),
              (this.root = o),
              (n = q(
                { label: B(o, Zt) || "", labelledby: B(o, te) || "" },
                Qe,
                t.defaults,
                n || {}
              ));
            try {
              q(n, JSON.parse(B(o, Z)));
            } catch (t) {
              tt(!1, "Invalid JSON");
            }
            this._o = Object.create(q({}, n));
          }
          var e,
            n,
            i,
            s = t.prototype;
          return (
            (s.mount = function (t, e) {
              var n = this,
                i = this.state,
                o = this.Components;
              return (
                tt(i.is([1, 7]), "Already mounted!"),
                i.set(1),
                (this._C = o),
                (this._T = e || this._T || (this.is($e) ? Ze : tn)),
                (this._E = t || this._E),
                T(D({}, Je, this._E, { Transition: this._T }), function (t, e) {
                  var i = t(n, o, n._o);
                  (o[e] = i), i.setup && i.setup();
                }),
                T(o, function (t) {
                  t.mount && t.mount();
                }),
                this.emit(ht),
                _(this.root, Le),
                i.set(3),
                this.emit(mt),
                this
              );
            }),
            (s.sync = function (t) {
              return (
                this.splides.push({ splide: t }),
                t.splides.push({ splide: this, isParent: !0 }),
                this.state.is(3) &&
                  (this._C.Sync.remount(), t.Components.Sync.remount()),
                this
              );
            }),
            (s.go = function (t) {
              return this._C.Controller.go(t), this;
            }),
            (s.on = function (t, e) {
              return this.event.on(t, e), this;
            }),
            (s.off = function (t) {
              return this.event.off(t), this;
            }),
            (s.emit = function (t) {
              var e;
              return (
                (e = this.event).emit.apply(e, [t].concat(r(arguments, 1))),
                this
              );
            }),
            (s.add = function (t, e) {
              return this._C.Slides.add(t, e), this;
            }),
            (s.remove = function (t) {
              return this._C.Slides.remove(t), this;
            }),
            (s.is = function (t) {
              return this._o.type === t;
            }),
            (s.refresh = function () {
              return this.emit(At), this;
            }),
            (s.destroy = function (t) {
              void 0 === t && (t = !0);
              var e = this.event,
                n = this.state;
              return (
                n.is(1)
                  ? Ft(this).on(mt, this.destroy.bind(this, t))
                  : (T(
                      this._C,
                      function (e) {
                        e.destroy && e.destroy(t);
                      },
                      !0
                    ),
                    e.emit(Pt),
                    e.destroy(),
                    t && o(this.splides),
                    n.set(7)),
                this
              );
            }),
            (e = t),
            (n = [
              {
                key: "options",
                get: function () {
                  return this._o;
                },
                set: function (t) {
                  this._C.Media.set(t, !0, !0);
                },
              },
              {
                key: "length",
                get: function () {
                  return this._C.Slides.getLength(!0);
                },
              },
              {
                key: "index",
                get: function () {
                  return this._C.Controller.getIndex();
                },
              },
            ]) && c(e.prototype, n),
            i && c(e, i),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })(),
        nn = en;
      return (nn.defaults = {}), (nn.STATES = i), nn;
    }),
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = d())
      : "function" == typeof define && define.amd
      ? define(d)
      : ((l =
          "undefined" != typeof globalThis ? globalThis : l || self).Splide =
          d()),
    new Splide(".hero__splide", { type: "loop", gap: 30 }).mount(),
    (window.FLS = !0),
    (function (t) {
      let e = new Image();
      (e.onload = e.onerror =
        function () {
          t(2 == e.height);
        }),
        (e.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (t) {
      let e = !0 === t ? "webp" : "no-webp";
      document.documentElement.classList.add(e);
    }),
    document.querySelector(".icon-menu") &&
      document.addEventListener("click", function (t) {
        e &&
          t.target.closest(".icon-menu") &&
          (n(), document.documentElement.classList.toggle("menu-open"));
      }),
    (function () {
      const t = document.querySelectorAll(
        "input[placeholder],textarea[placeholder]"
      );
      t.length &&
        t.forEach((t) => {
          t.dataset.placeholder = t.placeholder;
        }),
        document.body.addEventListener("focusin", function (t) {
          const e = t.target;
          ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
            (e.dataset.placeholder && (e.placeholder = ""),
            e.classList.add("_form-focus"),
            e.parentElement.classList.add("_form-focus"),
            u.removeError(e));
        }),
        document.body.addEventListener("focusout", function (t) {
          const e = t.target;
          ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
            (e.dataset.placeholder && (e.placeholder = e.dataset.placeholder),
            e.classList.remove("_form-focus"),
            e.parentElement.classList.remove("_form-focus"),
            e.hasAttribute("data-validate") && u.validateInput(e));
        });
    })(),
    (function (e) {
      t.popup && t.popup.open("some");
      const n = document.forms;
      if (n.length)
        for (const t of n)
          t.addEventListener("submit", function (t) {
            i(t.target, t);
          }),
            t.addEventListener("reset", function (t) {
              const e = t.target;
              u.formClean(e);
            });
      async function i(t, n) {
        if (0 === (e ? u.getErrors(t) : 0)) {
          if (t.hasAttribute("data-ajax")) {
            n.preventDefault();
            const e = t.getAttribute("action")
                ? t.getAttribute("action").trim()
                : "#",
              i = t.getAttribute("method")
                ? t.getAttribute("method").trim()
                : "GET",
              r = new FormData(t);
            t.classList.add("_sending");
            const s = await fetch(e, { method: i, body: r });
            if (s.ok) {
              await s.json();
              t.classList.remove("_sending"), o(t);
            } else alert("Ошибка"), t.classList.remove("_sending");
          } else t.hasAttribute("data-dev") && (n.preventDefault(), o(t));
        } else {
          n.preventDefault();
          const e = t.querySelector("._form-error");
          e && t.hasAttribute("data-goto-error") && s(e, !0, 1e3);
        }
      }
      function o(e) {
        document.dispatchEvent(
          new CustomEvent("formSent", { detail: { form: e } })
        ),
          setTimeout(() => {
            if (t.popup) {
              const n = e.dataset.popupMessage;
              n && t.popup.open(n);
            }
          }, 0),
          u.formClean(e),
          r(`[Формы]: ${"Форма отправлена!"}`);
      }
    })(!0);
})();