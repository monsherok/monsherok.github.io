(() => {
  "use strict";
  let e = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
      );
    },
  };
  function t() {
    if (location.hash) return location.hash.replace("#", "");
  }
  let o = !0,
    n = (e = 500) => {
      let t = document.querySelector("body");
      if (o) {
        let n = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (o = !1),
          setTimeout(function () {
            o = !0;
          }, e);
      }
    },
    i = (e = 500) => {
      let t = document.querySelector("body");
      if (o) {
        let n = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < n.length; e++) {
          n[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (t.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (o = !1),
          setTimeout(function () {
            o = !0;
          }, e);
      }
    };
  function c(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  let a = (e, t = !1, o = 500, i = 0) => {
    const a = document.querySelector(e);
    if (a) {
      let l = "",
        r = 0;
      t &&
        ((l = "header.header"), (r = document.querySelector(l).offsetHeight));
      let d = {
        speedAsDuration: !0,
        speed: o,
        header: l,
        offset: i,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (n(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(a, "", d);
      else {
        let e = a.getBoundingClientRect().top + scrollY;
        (e = r ? e - r : e),
          (e = i ? e - i : e),
          window.scrollTo({ top: e, behavior: "smooth" });
      }
      c(`[gotoBlock]: Юхуу...едем к ${e}`);
    } else c(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
  };
  let l = !1;
  setTimeout(() => {
    if (l) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    document.querySelector(".icon-menu") &&
      document.addEventListener("click", function (e) {
        o &&
          e.target.closest(".icon-menu") &&
          (((e = 500) => {
            document.documentElement.classList.contains("lock") ? n(e) : i(e);
          })(),
          document.documentElement.classList.toggle("menu-open"));
      }),
    (function () {
      if (document.querySelectorAll("[data-fullscreen]").length && e.any()) {
        function t() {
          let e = 0.01 * window.innerHeight;
          document.documentElement.style.setProperty("--vh", `${e}px`);
        }
        window.addEventListener("resize", t), t();
      }
    })(),
    (function () {
      function e(e) {
        if ("click" === e.type) {
          const t = e.target;
          if (t.closest("[data-goto]")) {
            const o = t.closest("[data-goto]"),
              n = o.dataset.goto ? o.dataset.goto : "",
              i = !!o.hasAttribute("data-goto-header"),
              c = o.dataset.gotoSpeed ? o.dataset.gotoSpeed : 500,
              l = o.dataset.gotoTop ? parseInt(o.dataset.gotoTop) : 0;
            a(n, i, c, l), e.preventDefault();
          }
        } else if ("watcherCallback" === e.type && e.detail) {
          const t = e.detail.entry,
            o = t.target;
          if ("navigator" === o.dataset.watch) {
            document.querySelector("[data-goto]._navigator-active");
            let e;
            if (o.id && document.querySelector(`[data-goto="#${o.id}"]`))
              e = document.querySelector(`[data-goto="#${o.id}"]`);
            else if (o.classList.length)
              for (let t = 0; t < o.classList.length; t++) {
                const n = o.classList[t];
                if (document.querySelector(`[data-goto=".${n}"]`)) {
                  e = document.querySelector(`[data-goto=".${n}"]`);
                  break;
                }
              }
            t.isIntersecting
              ? e && e.classList.add("_navigator-active")
              : e && e.classList.remove("_navigator-active");
          }
        }
      }
      if (
        (document.addEventListener("click", e),
        document.addEventListener("watcherCallback", e),
        t())
      ) {
        let e;
        document.querySelector(`#${t()}`)
          ? (e = `#${t()}`)
          : document.querySelector(`.${t()}`) && (e = `.${t()}`),
          e && a(e, !0, 500, 20);
      }
    })();
})();
