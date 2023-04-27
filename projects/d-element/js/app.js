(() => {
  "use strict";
  const t = new (class {
    constructor() {
      (this.datas = {
        modalWindow: "data-modal",
        modalBtn: "data-modal-btn",
        modalClose: "data-close",
      }),
        (this.classes = {
          open: "modal__open",
          content: "modal-content",
          lock: "lock",
        }),
        (this.open = !1),
        (this.activeModalClass = ""),
        this.init();
    }
    init() {
      document.addEventListener("click", (t) => {
        t.target.classList.contains("open-modal")
          ? this.modalOpen(t)
          : t.target.closest(`.${this.classes.open}`) &&
            ((t.target.closest(`.${this.classes.content}`) &&
              !t.target.hasAttribute(`${this.datas.modalClose}`)) ||
              (t.preventDefault(),
              this.toggleModal(
                document.getElementById(`${this.activeModalClass}`)
              )));
      });
    }
    modalOpen(t) {
      t.preventDefault();
      const e = document.querySelector(`#${t.target.dataset.modalBtn}`);
      (this.activeModalClass = t.target.dataset.modalBtn),
        e && this.toggleModal(e);
    }
    toggleModal(t) {
      t.classList.toggle("modal__open"),
        document.documentElement.classList.toggle("lock");
    }
  })();
  var e = "6111024453:AAHnDkXdv7lgRyQD4vzyUiKwgW7MFsuerHQ",
    a = "@monshero";
  document.body.addEventListener("focusout", function (t) {
    const e = t.target;
    ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
      (e.hasAttribute("data-required") && o.checkValidate(e));
  });
  let o = {
    checkValidate(t) {
      let e = 0;
      return "email" === t.dataset.required
        ? (this.emailTest(t) ? (e++, this.addError(t)) : this.removeError(t), e)
        : (t.value ? this.removeError(t) : (e++, this.addError(t)), e);
    },
    addError(t) {
      t.classList.add("error");
    },
    removeError(t) {
      t.classList.remove("error");
    },
    emailTest: (t) =>
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(t.value),
  };
  const s = document.querySelector(".header__menu");
  s &&
    s.addEventListener("click", () => {
      s.classList.toggle("active");
    }),
    (function () {
      const s = document.forms;
      if (s.length)
        for (const t of s)
          t.addEventListener("submit", function (t) {
            t.preventDefault();
            n(t.target);
          }),
            t.addEventListener("reset", function (t) {
              t.target.reset();
            });
      function n(s) {
        const n = s.querySelectorAll("[data-required]");
        let i = 0;
        n.length &&
          n.forEach((t) => {
            i += o.checkValidate(t);
          }),
          0 === i &&
            (l(s),
            (async function (o) {
              var s = new FormData(o);
              r(o, "SENDING..."),
                fetch("https://api.telegram.org/bot" + e + "/sendMessage", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body:
                    "chat_id=" +
                    a +
                    "&text=" +
                    JSON.stringify(Object.fromEntries(s.entries())),
                })
                  .then(function (e) {
                    e.ok
                      ? (o.reset(),
                        t.toggleModal(o.closest("[data-modal]")),
                        d("Успешная отправка формы"))
                      : d("Ошибка отправки формы!");
                  })
                  .catch(function (t) {
                    d("Ошибка: " + t.message);
                  })
                  .finally(() => {
                    l(o), r(o, "SUBMIT");
                  });
            })(s));
      }
      function l(t) {
        const e = t.querySelector('button[type="submit"]');
        e.hasAttribute("disabled") ? (e.disabled = !1) : (e.disabled = !0);
      }
      function r(t, e) {
        t.querySelector('button[type="submit"]').innerHTML = e;
      }
      function d(e) {
        let a = document.getElementById("modal-2");
        (t.activeModalClass = a.id),
          (a.querySelector(".modal__title").innerHTML = e),
          t.toggleModal(a);
      }
    })();
})();