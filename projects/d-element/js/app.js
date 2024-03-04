(() => {
  "use strict";
  function e() {
    const e = document.querySelector(".popup.--isVisible");
    e && "notification" === e.dataset.popup
      ? e.remove()
      : e &&
        (t(!1),
        e.classList.remove("--isVisible"),
        e.querySelector("form") && e.querySelector("form").reset());
  }
  function t(e) {
    document.documentElement.classList.toggle("lock", e);
  }
  function o(e) {
    const t = e.querySelectorAll("[data-required]");
    let o = 0;
    return (
      t.forEach((e) => {
        const t = (function (e) {
          if ("email" === e.dataset.required)
            return (t = e.value), /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);
          return e.value.length >= 2;
          var t;
        })(e);
        !(function (e, t) {
          t ? e.classList.add("error") : e.classList.remove("error");
        })(e, !t),
          t || o++;
      }),
      o
    );
  }
  document.addEventListener("mousedown", (t) => {
    const { target: o } = t;
    "popup" === o.id && e();
  }),
    document.addEventListener("click", (o) => {
      const { target: n } = o,
        s = n.closest("[data-open-popup]"),
        r = n.closest("[data-close]");
      s
        ? (function (e) {
            const o = `[data-popup='${e}']`,
              n = document.querySelector(o);
            n && (t(!0), n.classList.add("--isVisible"));
          })(s.dataset.openPopup)
        : r && e();
    }),
    document.addEventListener("DOMContentLoaded", () => {
      Array.from(document.forms).forEach((e) => {
        const t = e.querySelector('button[type="submit"]');
        e.addEventListener("submit", (e) => n(e, t)),
          e.addEventListener("reset", () => {
            e.querySelectorAll(".error").forEach((e) => {
              e.classList.remove("error");
            }),
              (t.disabled = !1);
          }),
          [...e.elements].forEach((n) => {
            ("INPUT" !== n.tagName && "TEXTAREA" !== n.tagName) ||
              n.addEventListener("input", () =>
                (function (e, t) {
                  const n = o(e);
                  t.disabled = 0 !== n;
                })(e, t),
              );
          });
      });
    });
  const n = (n, s) => {
    n.preventDefault();
    const r = o(n.target);
    (s.disabled = 0 !== r),
      0 === r &&
        (e(),
        (function (e) {
          t(!0);
          const o = document.createElement("div");
          (o.id = "popup"),
            (o.dataset.popup = "notification"),
            (o.className = "popup --isVisible"),
            (o.innerHTML =
              '\n        <div class="popup__wrapper">\n            <div class="popup__content">\n                <button data-close type="button" class="popup__close">Закрыть</button>\n                <div class="contact-form">\n                    <h2 class="contact-form__title" style="text-align: center; margin: 0;"></h2>\n                </div>\n            </div>\n        </div>\n    '),
            (o.querySelector(".contact-form__title").textContent = e),
            o
              .querySelector("[data-close]")
              .addEventListener("click", function () {
                o.remove(), t(!1);
              }),
            document.body.appendChild(o);
        })("SUCCESS"));
  };
})();
