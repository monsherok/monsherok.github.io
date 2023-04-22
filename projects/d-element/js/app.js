(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  let t = document.querySelector(".header__menu");
  if (
    (t &&
      t.addEventListener("click", () => {
        t.classList.toggle("active");
      }),
    document.getElementsByClassName("modal"))
  ) {
    for (
      var o = document.getElementsByClassName("modal"),
        n = document.getElementsByClassName("open-modal"),
        l = document.getElementsByClassName("close"),
        d = 0;
      d < n.length;
      d++
    )
      n[d].addEventListener("click", function () {
        var e = this.getAttribute("data-modal");
        (document.getElementById(e).style.display = "block"),
          (document.body.style.overflow = "hidden");
      });
    for (d = 0; d < l.length; d++)
      l[d].addEventListener("click", function () {
        (this.parentElement.parentElement.style.display = "none"),
          (document.body.style.overflow = "auto");
      });
    window.addEventListener("click", function (e) {
      for (var t = 0; t < o.length; t++)
        e.target == o[t] &&
          ((o[t].style.display = "none"),
          (document.body.style.overflow = "auto"));
    }),
      window.addEventListener("keydown", function (e) {
        for (var t = 0; t < o.length; t++)
          "Escape" === e.key &&
            "block" === o[t].style.display &&
            ((o[t].style.display = "none"),
            (document.body.style.overflow = "auto"));
      });
    for (d = 0; d < o.length; d++)
      o[d].addEventListener("animationend", function (e) {
        "modalopen" === e.animationName &&
          "block" === this.style.display &&
          (this.style.animation = "");
      });
  }
  function a(e, t) {
    e.style.borderColor = "red";
  }
  function s(e) {
    e.parentElement.style.borderColor = "rgba(53, 110, 173, 0.4)";
  }
  function c(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }
  const i = document.querySelector("form"),
    m = document.querySelector("#name"),
    r = document.querySelector("#email"),
    y = document.querySelector("#textarea");
  i.addEventListener("submit", function (e) {
    e.preventDefault();
    const t = m.value.trim(),
      o = r.value.trim(),
      n = y.value.trim();
    if (
      ("" === t ? a(m) : s(m),
      "" === o ? a(r) : c(o) ? s(r) : a(r),
      "" === n ? a(y) : s(y),
      "" != t && "" != o && "" != n && c(o))
    ) {
      fetch(
        `https://api.telegram.org/bot${"6111024453:AAHnDkXdv7lgRyQD4vzyUiKwgW7MFsuerHQ"}/sendMessage?chat_id=${"@monshero"}&text=${`Новое сообщение от ${t} (${o}): ${n}`}`
      )
        .then((e) => e.json())
        .then((e) => {
          e.ok
            ? (i.reset(),
              (i.closest(".modal").style.display = "none"),
              (document.body.style.overflow = "auto"),
              (document
                .getElementById("modal-2")
                .querySelector(".modal__title").textContent =
                "Ваше сообщение успешно отправлено"),
              (document.getElementById("modal-2").style.display = "block"),
              (document.body.style.overflow = "hidden"))
            : ((document
                .getElementById("modal-2")
                .querySelector(".modal__title").textContent =
                "Ошибка отправки сообщения"),
              (document.getElementById("modal-2").style.display = "block"),
              (document.body.style.overflow = "hidden"));
        })
        .catch((e) => {
          (document
            .getElementById("modal-2")
            .querySelector(".modal__title").textContent =
            "Ошибка отправки сообщения" + e),
            (document.getElementById("modal-2").style.display = "block"),
            (document.body.style.overflow = "hidden"),
            console.error(e);
        });
    }
  }),
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
    });
})();
