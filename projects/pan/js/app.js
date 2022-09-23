/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  "use strict";
  const e = {};
  function t() {
    if (location.hash) return location.hash.replace("#", "");
  }
  let n = (e, t = 500, n = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = n ? `${n}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !n),
            !n && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !n && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide"),
            document.dispatchEvent(
              new CustomEvent("slideUpDone", { detail: { target: e } })
            );
        }, t));
    },
    s = (e, t = 500, n = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          n && e.style.removeProperty("height");
        let s = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = n ? `${n}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = s + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideDownDone", { detail: { target: e } })
              );
          }, t);
      }
    },
    i = (e, t = 500) => (e.hidden ? s(e, t) : n(e, t)),
    o = !0,
    l = (e = 500) => {
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
    };
  function r(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  let a = (e, t = !1, n = 500, s = 0) => {
    const i = document.querySelector(e);
    if (i) {
      let o = "",
        a = 0;
      t &&
        ((o = "header.header"), (a = document.querySelector(o).offsetHeight));
      let c = {
        speedAsDuration: !0,
        speed: n,
        header: o,
        offset: s,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (l(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(i, "", c);
      else {
        let e = i.getBoundingClientRect().top + scrollY;
        (e = a ? e - a : e),
          (e = s ? e - s : e),
          window.scrollTo({ top: e, behavior: "smooth" });
      }
      r(`[gotoBlock]: Юхуу...едем к ${e}`);
    } else r(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
  };
  let c = {
    getErrors(e) {
      let t = 0,
        n = e.querySelectorAll("*[data-required]");
      return (
        n.length &&
          n.forEach((e) => {
            (null === e.offsetParent && "SELECT" !== e.tagName) ||
              e.disabled ||
              (t += this.validateInput(e));
          }),
        t
      );
    },
    validateInput(e) {
      let t = 0;
      return (
        "email" === e.dataset.required
          ? ((e.value = e.value.replace(" ", "")),
            this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
          : ("checkbox" !== e.type || e.checked) && e.value
          ? this.removeError(e)
          : (this.addError(e), t++),
        t
      );
    },
    addError(e) {
      e.classList.add("_form-error"),
        e.parentElement.classList.add("_form-error");
      let t = e.parentElement.querySelector(".form__error");
      t && e.parentElement.removeChild(t),
        e.dataset.error &&
          e.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="form__error">${e.dataset.error}</div>`
          );
    },
    removeError(e) {
      e.classList.remove("_form-error"),
        e.parentElement.classList.remove("_form-error"),
        e.parentElement.querySelector(".form__error") &&
          e.parentElement.removeChild(
            e.parentElement.querySelector(".form__error")
          );
    },
    formClean(t) {
      t.reset(),
        setTimeout(() => {
          let n = t.querySelectorAll("input,textarea");
          for (let e = 0; e < n.length; e++) {
            const t = n[e];
            t.parentElement.classList.remove("_form-focus"),
              t.classList.remove("_form-focus"),
              c.removeError(t);
          }
          let s = t.querySelectorAll(".checkbox__input");
          if (s.length > 0)
            for (let e = 0; e < s.length; e++) {
              s[e].checked = !1;
            }
          if (e.select) {
            let n = t.querySelectorAll(".select");
            if (n.length)
              for (let t = 0; t < n.length; t++) {
                const s = n[t].querySelector("select");
                e.select.selectBuild(s);
              }
          }
        }, 0);
    },
    emailTest: (e) =>
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
  };
  e.select = new (class {
    constructor(e, t = null) {
      if (
        ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
        (this.selectClasses = {
          classSelect: "select",
          classSelectBody: "select__body",
          classSelectTitle: "select__title",
          classSelectValue: "select__value",
          classSelectLabel: "select__label",
          classSelectInput: "select__input",
          classSelectText: "select__text",
          classSelectLink: "select__link",
          classSelectOptions: "select__options",
          classSelectOptionsScroll: "select__scroll",
          classSelectOption: "select__option",
          classSelectContent: "select__content",
          classSelectRow: "select__row",
          classSelectData: "select__asset",
          classSelectDisabled: "_select-disabled",
          classSelectTag: "_select-tag",
          classSelectOpen: "_select-open",
          classSelectActive: "_select-active",
          classSelectFocus: "_select-focus",
          classSelectMultiple: "_select-multiple",
          classSelectCheckBox: "_select-checkbox",
          classSelectOptionSelected: "_select-selected",
        }),
        (this._this = this),
        this.config.init)
      ) {
        const e = t
          ? document.querySelectorAll(t)
          : document.querySelectorAll("select");
        e.length
          ? (this.selectsInit(e),
            this.setLogging(`Проснулся, построил селектов: (${e.length})`))
          : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
      }
    }
    getSelectClass(e) {
      return `.${e}`;
    }
    getSelectElement(e, t) {
      return {
        originalSelect: e.querySelector("select"),
        selectElement: e.querySelector(this.getSelectClass(t)),
      };
    }
    selectsInit(e) {
      e.forEach((e, t) => {
        this.selectInit(e, t + 1);
      }),
        document.addEventListener(
          "click",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        ),
        document.addEventListener(
          "keydown",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        ),
        document.addEventListener(
          "focusin",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        ),
        document.addEventListener(
          "focusout",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        );
    }
    selectInit(e, t) {
      const n = this;
      let s = document.createElement("div");
      if (
        (s.classList.add(this.selectClasses.classSelect),
        e.parentNode.insertBefore(s, e),
        s.appendChild(e),
        (e.hidden = !0),
        t && (e.dataset.id = t),
        s.insertAdjacentHTML(
          "beforeend",
          `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
        ),
        this.selectBuild(e),
        this.getSelectPlaceholder(e) &&
          ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
          this.getSelectPlaceholder(e).label.show))
      ) {
        this.getSelectElement(
          s,
          this.selectClasses.classSelectTitle
        ).selectElement.insertAdjacentHTML(
          "afterbegin",
          `<span class="${this.selectClasses.classSelectLabel}">${
            this.getSelectPlaceholder(e).label.text
              ? this.getSelectPlaceholder(e).label.text
              : this.getSelectPlaceholder(e).value
          }</span>`
        );
      }
      (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
        e.addEventListener("change", function (e) {
          n.selectChange(e);
        });
    }
    selectBuild(e) {
      const t = e.parentElement;
      (t.dataset.id = e.dataset.id),
        t.classList.add(
          e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
        ),
        e.multiple
          ? t.classList.add(this.selectClasses.classSelectMultiple)
          : t.classList.remove(this.selectClasses.classSelectMultiple),
        e.hasAttribute("data-checkbox") && e.multiple
          ? t.classList.add(this.selectClasses.classSelectCheckBox)
          : t.classList.remove(this.selectClasses.classSelectCheckBox),
        this.setSelectTitleValue(t, e),
        this.setOptions(t, e),
        e.hasAttribute("data-search") && this.searchActions(t),
        e.hasAttribute("data-open") && this.selectAction(t),
        this.selectDisabled(t, e);
    }
    selectsActions(e) {
      const t = e.target,
        n = e.type;
      if (
        t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
        t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
      ) {
        const s = t.closest(".select")
            ? t.closest(".select")
            : document.querySelector(
                `.${this.selectClasses.classSelect}[data-id="${
                  t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ).dataset.selectId
                }"]`
              ),
          i = this.getSelectElement(s).originalSelect;
        if ("click" === n) {
          if (!i.disabled)
            if (
              t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
            ) {
              const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                ),
                n = document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                );
              this.optionAction(s, i, n);
            } else if (
              t.closest(
                this.getSelectClass(this.selectClasses.classSelectTitle)
              )
            )
              this.selectAction(s);
            else if (
              t.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              )
            ) {
              const e = t.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              );
              this.optionAction(s, i, e);
            }
        } else
          "focusin" === n || "focusout" === n
            ? t.closest(this.getSelectClass(this.selectClasses.classSelect)) &&
              ("focusin" === n
                ? s.classList.add(this.selectClasses.classSelectFocus)
                : s.classList.remove(this.selectClasses.classSelectFocus))
            : "keydown" === n && "Escape" === e.code && this.selectsСlose();
      } else this.selectsСlose();
    }
    selectsСlose() {
      const e = document.querySelectorAll(
        `${this.getSelectClass(
          this.selectClasses.classSelect
        )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
      );
      e.length &&
        e.forEach((e) => {
          this.selectAction(e);
        });
    }
    selectAction(e) {
      const t = this.getSelectElement(e).originalSelect,
        n = this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement;
      n.classList.contains("_slide") ||
        (e.classList.toggle(this.selectClasses.classSelectOpen),
        i(n, t.dataset.speed));
    }
    setSelectTitleValue(e, t) {
      const n = this.getSelectElement(
          e,
          this.selectClasses.classSelectBody
        ).selectElement,
        s = this.getSelectElement(
          e,
          this.selectClasses.classSelectTitle
        ).selectElement;
      s && s.remove(),
        n.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
    }
    getSelectTitleValue(e, t) {
      let n = this.getSelectedOptionsData(t, 2).html;
      if (
        (t.multiple &&
          t.hasAttribute("data-tags") &&
          ((n = this.getSelectedOptionsData(t)
            .elements.map(
              (t) =>
                `<span role="button" data-select-id="${
                  e.dataset.id
                }" data-value="${
                  t.value
                }" class="_select-tag">${this.getSelectElementContent(
                  t
                )}</span>`
            )
            .join("")),
          t.dataset.tags &&
            document.querySelector(t.dataset.tags) &&
            ((document.querySelector(t.dataset.tags).innerHTML = n),
            t.hasAttribute("data-search") && (n = !1))),
        (n = n.length ? n : t.dataset.placeholder),
        this.getSelectedOptionsData(t).values.length
          ? e.classList.add(this.selectClasses.classSelectActive)
          : e.classList.remove(this.selectClasses.classSelectActive),
        t.hasAttribute("data-search"))
      )
        return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${n}" data-placeholder="${n}" class="${this.selectClasses.classSelectInput}"></span></div>`;
      {
        const e =
          this.getSelectedOptionsData(t).elements.length &&
          this.getSelectedOptionsData(t).elements[0].dataset.class
            ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
            : "";
        return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${n}</span></span></button>`;
      }
    }
    getSelectElementContent(e) {
      const t = e.dataset.asset ? `${e.dataset.asset}` : "",
        n = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
      let s = "";
      return (
        (s += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
        (s += t ? `<span class="${this.selectClasses.classSelectData}">` : ""),
        (s += t ? n : ""),
        (s += t ? "</span>" : ""),
        (s += t ? `<span class="${this.selectClasses.classSelectText}">` : ""),
        (s += e.textContent),
        (s += t ? "</span>" : ""),
        (s += t ? "</span>" : ""),
        s
      );
    }
    getSelectPlaceholder(e) {
      const t = Array.from(e.options).find((e) => !e.value);
      if (t)
        return {
          value: t.textContent,
          show: t.hasAttribute("data-show"),
          label: { show: t.hasAttribute("data-label"), text: t.dataset.label },
        };
    }
    getSelectedOptionsData(e, t) {
      let n = [];
      return (
        e.multiple
          ? (n = Array.from(e.options)
              .filter((e) => e.value)
              .filter((e) => e.selected))
          : n.push(e.options[e.selectedIndex]),
        {
          elements: n.map((e) => e),
          values: n.filter((e) => e.value).map((e) => e.value),
          html: n.map((e) => this.getSelectElementContent(e)),
        }
      );
    }
    getOptions(e) {
      let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
        n = e.dataset.scroll ? `style="max-height:${e.dataset.scroll}px"` : "",
        s = Array.from(e.options);
      if (s.length > 0) {
        let i = "";
        return (
          ((this.getSelectPlaceholder(e) &&
            !this.getSelectPlaceholder(e).show) ||
            e.multiple) &&
            (s = s.filter((e) => e.value)),
          (i += t
            ? `<div ${t} ${n} class="${this.selectClasses.classSelectOptionsScroll}">`
            : ""),
          s.forEach((t) => {
            i += this.getOption(t, e);
          }),
          (i += t ? "</div>" : ""),
          i
        );
      }
    }
    getOption(e, t) {
      const n =
          e.selected && t.multiple
            ? ` ${this.selectClasses.classSelectOptionSelected}`
            : "",
        s = e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
        i = e.dataset.class ? ` ${e.dataset.class}` : "",
        o = !!e.dataset.href && e.dataset.href,
        l = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
      let r = "";
      return (
        (r += o
          ? `<a ${l} ${s} href="${o}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${i}${n}">`
          : `<button ${s} class="${this.selectClasses.classSelectOption}${i}${n}" data-value="${e.value}" type="button">`),
        (r += this.getSelectElementContent(e)),
        (r += o ? "</a>" : "</button>"),
        r
      );
    }
    setOptions(e, t) {
      this.getSelectElement(
        e,
        this.selectClasses.classSelectOptions
      ).selectElement.innerHTML = this.getOptions(t);
    }
    optionAction(e, t, n) {
      if (t.multiple) {
        n.classList.toggle(this.selectClasses.classSelectOptionSelected);
        this.getSelectedOptionsData(t).elements.forEach((e) => {
          e.removeAttribute("selected");
        });
        e.querySelectorAll(
          this.getSelectClass(this.selectClasses.classSelectOptionSelected)
        ).forEach((e) => {
          t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
            "selected",
            "selected"
          );
        });
      } else
        t.hasAttribute("data-show-selected") ||
          (e.querySelector(
            `${this.getSelectClass(
              this.selectClasses.classSelectOption
            )}[hidden]`
          ) &&
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ).hidden = !1),
          (n.hidden = !0)),
          (t.value = n.hasAttribute("data-value")
            ? n.dataset.value
            : n.textContent),
          this.selectAction(e);
      this.setSelectTitleValue(e, t), this.setSelectChange(t);
    }
    selectChange(e) {
      const t = e.target;
      this.selectBuild(t), this.setSelectChange(t);
    }
    setSelectChange(e) {
      if (
        (e.hasAttribute("data-validate") && c.validateInput(e),
        e.hasAttribute("data-submit") && e.value)
      ) {
        let t = document.createElement("button");
        (t.type = "submit"), e.closest("form").append(t), t.click(), t.remove();
      }
      const t = e.parentElement;
      this.selectCallback(t, e);
    }
    selectDisabled(e, t) {
      t.disabled
        ? (e.classList.add(this.selectClasses.classSelectDisabled),
          (this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement.disabled = !0))
        : (e.classList.remove(this.selectClasses.classSelectDisabled),
          (this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement.disabled = !1));
    }
    searchActions(e) {
      this.getSelectElement(e).originalSelect;
      const t = this.getSelectElement(
          e,
          this.selectClasses.classSelectInput
        ).selectElement,
        n = this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement,
        s = n.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
        i = this;
      t.addEventListener("input", function () {
        s.forEach((e) => {
          e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
            ? (e.hidden = !1)
            : (e.hidden = !0);
        }),
          !0 === n.hidden && i.selectAction(e);
      });
    }
    selectCallback(e, t) {
      document.dispatchEvent(
        new CustomEvent("selectCallback", { detail: { select: t } })
      );
    }
    setLogging(e) {
      this.config.logging && r(`[select]: ${e}`);
    }
  })({});
  let u = !1;
  function d(e, t) {
    for (var n = 0; n < t.length; n++) {
      var s = t[n];
      (s.enumerable = s.enumerable || !1),
        (s.configurable = !0),
        "value" in s && (s.writable = !0),
        Object.defineProperty(e, s.key, s);
    }
  }
  setTimeout(() => {
    if (u) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  var f = "(prefers-reduced-motion: reduce)",
    h = {
      CREATED: 1,
      MOUNTED: 2,
      IDLE: 3,
      MOVING: 4,
      SCROLLING: 5,
      DRAGGING: 6,
      DESTROYED: 7,
    };
  function p(e) {
    e.length = 0;
  }
  function g(e, t, n) {
    return Array.prototype.slice.call(e, t, n);
  }
  function m(e) {
    return e.bind.apply(e, [null].concat(g(arguments, 1)));
  }
  var v = setTimeout,
    y = function () {};
  function S(e) {
    return requestAnimationFrame(e);
  }
  function b(e, t) {
    return typeof t === e;
  }
  function C(e) {
    return !A(e) && b("object", e);
  }
  var E = Array.isArray,
    _ = m(b, "function"),
    w = m(b, "string"),
    L = m(b, "undefined");
  function A(e) {
    return null === e;
  }
  function x(e) {
    return e instanceof HTMLElement;
  }
  function k(e) {
    return E(e) ? e : [e];
  }
  function P(e, t) {
    k(e).forEach(t);
  }
  function $(e, t) {
    return e.indexOf(t) > -1;
  }
  function T(e, t) {
    return e.push.apply(e, k(t)), e;
  }
  function O(e, t, n) {
    e &&
      P(t, function (t) {
        t && e.classList[n ? "add" : "remove"](t);
      });
  }
  function D(e, t) {
    O(e, w(t) ? t.split(" ") : t, !0);
  }
  function q(e, t) {
    P(t, e.appendChild.bind(e));
  }
  function I(e, t) {
    P(e, function (e) {
      var n = (t || e).parentNode;
      n && n.insertBefore(e, t);
    });
  }
  function M(e, t) {
    return x(e) && (e.msMatchesSelector || e.matches).call(e, t);
  }
  function z(e, t) {
    var n = e ? g(e.children) : [];
    return t
      ? n.filter(function (e) {
          return M(e, t);
        })
      : n;
  }
  function B(e, t) {
    return t ? z(e, t)[0] : e.firstElementChild;
  }
  var j = Object.keys;
  function N(e, t, n) {
    return (
      e &&
        (n ? j(e).reverse() : j(e)).forEach(function (n) {
          "__proto__" !== n && t(e[n], n);
        }),
      e
    );
  }
  function H(e) {
    return (
      g(arguments, 1).forEach(function (t) {
        N(t, function (n, s) {
          e[s] = t[s];
        });
      }),
      e
    );
  }
  function R(e) {
    return (
      g(arguments, 1).forEach(function (t) {
        N(t, function (t, n) {
          E(t)
            ? (e[n] = t.slice())
            : C(t)
            ? (e[n] = R({}, C(e[n]) ? e[n] : {}, t))
            : (e[n] = t);
        });
      }),
      e
    );
  }
  function F(e, t) {
    P(t || j(e), function (t) {
      delete e[t];
    });
  }
  function W(e, t) {
    P(e, function (e) {
      P(t, function (t) {
        e && e.removeAttribute(t);
      });
    });
  }
  function G(e, t, n) {
    C(t)
      ? N(t, function (t, n) {
          G(e, n, t);
        })
      : P(e, function (e) {
          A(n) || "" === n ? W(e, t) : e.setAttribute(t, String(n));
        });
  }
  function X(e, t, n) {
    var s = document.createElement(e);
    return t && (w(t) ? D(s, t) : G(s, t)), n && q(n, s), s;
  }
  function V(e, t, n) {
    if (L(n)) return getComputedStyle(e)[t];
    A(n) || (e.style[t] = "" + n);
  }
  function U(e, t) {
    V(e, "display", t);
  }
  function Y(e) {
    (e.setActive && e.setActive()) || e.focus({ preventScroll: !0 });
  }
  function Z(e, t) {
    return e.getAttribute(t);
  }
  function J(e, t) {
    return e && e.classList.contains(t);
  }
  function K(e) {
    return e.getBoundingClientRect();
  }
  function Q(e) {
    P(e, function (e) {
      e && e.parentNode && e.parentNode.removeChild(e);
    });
  }
  function ee(e) {
    return B(new DOMParser().parseFromString(e, "text/html").body);
  }
  function te(e, t) {
    e.preventDefault(),
      t && (e.stopPropagation(), e.stopImmediatePropagation());
  }
  function ne(e, t) {
    return e && e.querySelector(t);
  }
  function se(e, t) {
    return t ? g(e.querySelectorAll(t)) : [];
  }
  function ie(e, t) {
    O(e, t, !1);
  }
  function oe(e) {
    return e.timeStamp;
  }
  function le(e) {
    return w(e) ? e : e ? e + "px" : "";
  }
  var re = "splide",
    ae = "data-splide";
  function ce(e, t) {
    if (!e) throw new Error("[splide] " + (t || ""));
  }
  var ue = Math.min,
    de = Math.max,
    fe = Math.floor,
    he = Math.ceil,
    pe = Math.abs;
  function ge(e, t, n) {
    return pe(e - t) < n;
  }
  function me(e, t, n, s) {
    var i = ue(t, n),
      o = de(t, n);
    return s ? i < e && e < o : i <= e && e <= o;
  }
  function ve(e, t, n) {
    var s = ue(t, n),
      i = de(t, n);
    return ue(de(s, e), i);
  }
  function ye(e) {
    return +(e > 0) - +(e < 0);
  }
  function Se(e, t) {
    return (
      P(t, function (t) {
        e = e.replace("%s", "" + t);
      }),
      e
    );
  }
  function be(e) {
    return e < 10 ? "0" + e : "" + e;
  }
  var Ce = {};
  function Ee(e) {
    return "" + e + be((Ce[e] = (Ce[e] || 0) + 1));
  }
  function _e() {
    var e = [];
    function t(e, t, n) {
      P(e, function (e) {
        e &&
          P(t, function (t) {
            t.split(" ").forEach(function (t) {
              var s = t.split(".");
              n(e, s[0], s[1]);
            });
          });
      });
    }
    return {
      bind: function (n, s, i, o) {
        t(n, s, function (t, n, s) {
          var l = "addEventListener" in t,
            r = l
              ? t.removeEventListener.bind(t, n, i, o)
              : t.removeListener.bind(t, i);
          l ? t.addEventListener(n, i, o) : t.addListener(i),
            e.push([t, n, s, i, r]);
        });
      },
      unbind: function (n, s, i) {
        t(n, s, function (t, n, s) {
          e = e.filter(function (e) {
            return (
              !!(e[0] !== t || e[1] !== n || e[2] !== s || (i && e[3] !== i)) ||
              (e[4](), !1)
            );
          });
        });
      },
      dispatch: function (e, t, n) {
        var s;
        return (
          "function" == typeof CustomEvent
            ? (s = new CustomEvent(t, { bubbles: true, detail: n }))
            : (s = document.createEvent("CustomEvent")).initCustomEvent(
                t,
                true,
                !1,
                n
              ),
          e.dispatchEvent(s),
          s
        );
      },
      destroy: function () {
        e.forEach(function (e) {
          e[4]();
        }),
          p(e);
      },
    };
  }
  var we = "mounted",
    Le = "ready",
    Ae = "move",
    xe = "moved",
    ke = "click",
    Pe = "active",
    $e = "inactive",
    Te = "visible",
    Oe = "hidden",
    De = "refresh",
    qe = "updated",
    Ie = "resize",
    Me = "resized",
    ze = "scroll",
    Be = "scrolled",
    je = "destroy",
    Ne = "arrows:mounted",
    He = "navigation:mounted",
    Re = "autoplay:play",
    Fe = "autoplay:pause",
    We = "lazyload:loaded",
    Ge = "sk",
    Xe = "sh",
    Ve = "ei";
  function Ue(e) {
    var t = e ? e.event.bus : document.createDocumentFragment(),
      n = _e();
    return (
      e && e.event.on(je, n.destroy),
      H(n, {
        bus: t,
        on: function (e, s) {
          n.bind(t, k(e).join(" "), function (e) {
            s.apply(s, E(e.detail) ? e.detail : []);
          });
        },
        off: m(n.unbind, t),
        emit: function (e) {
          n.dispatch(t, e, g(arguments, 1));
        },
      })
    );
  }
  function Ye(e, t, n, s) {
    var i,
      o,
      l = Date.now,
      r = 0,
      a = !0,
      c = 0;
    function u() {
      if (!a) {
        if (
          ((r = e ? ue((l() - i) / e, 1) : 1),
          n && n(r),
          r >= 1 && (t(), (i = l()), s && ++c >= s))
        )
          return d();
        o = S(u);
      }
    }
    function d() {
      a = !0;
    }
    function f() {
      o && cancelAnimationFrame(o), (r = 0), (o = 0), (a = !0);
    }
    return {
      start: function (t) {
        t || f(), (i = l() - (t ? r * e : 0)), (a = !1), (o = S(u));
      },
      rewind: function () {
        (i = l()), (r = 0), n && n(r);
      },
      pause: d,
      cancel: f,
      set: function (t) {
        e = t;
      },
      isPaused: function () {
        return a;
      },
    };
  }
  var Ze = "ArrowLeft",
    Je = "ArrowRight",
    Ke = "ArrowUp",
    Qe = "ArrowDown",
    et = "ttb",
    tt = {
      width: ["height"],
      left: ["top", "right"],
      right: ["bottom", "left"],
      x: ["y"],
      X: ["Y"],
      Y: ["X"],
      ArrowLeft: [Ke, Je],
      ArrowRight: [Qe, Ze],
    };
  function nt(e, t, n) {
    return {
      resolve: function (e, t, s) {
        var i = "rtl" !== (s = s || n.direction) || t ? (s === et ? 0 : -1) : 1;
        return (
          (tt[e] && tt[e][i]) ||
          e.replace(/width|left|right/i, function (e, t) {
            var n = tt[e.toLowerCase()][i] || e;
            return t > 0 ? n.charAt(0).toUpperCase() + n.slice(1) : n;
          })
        );
      },
      orient: function (e) {
        return e * ("rtl" === n.direction ? 1 : -1);
      },
    };
  }
  var st = "role",
    it = "tabindex",
    ot = "aria-controls",
    lt = "aria-current",
    rt = "aria-selected",
    at = "aria-label",
    ct = "aria-labelledby",
    ut = "aria-hidden",
    dt = "aria-orientation",
    ft = "aria-roledescription",
    ht = "aria-live",
    pt = "aria-busy",
    gt = "aria-atomic",
    mt = [st, it, "disabled", ot, lt, at, ct, ut, dt, ft],
    vt = re,
    yt = "splide__track",
    St = "splide__list",
    bt = "splide__slide",
    Ct = bt + "--clone",
    Et = "splide__arrows",
    _t = "splide__arrow",
    wt = _t + "--prev",
    Lt = _t + "--next",
    At = "splide__pagination",
    xt = At + "__page",
    kt = "splide__progress__bar",
    Pt = "splide__toggle",
    $t = "is-active",
    Tt = "is-prev",
    Ot = "is-next",
    Dt = "is-visible",
    qt = "is-loading",
    It = "is-focus-in",
    Mt = "is-overflow",
    zt = [$t, Dt, Tt, Ot, qt, It, Mt],
    Bt = {
      slide: bt,
      clone: Ct,
      arrows: Et,
      arrow: _t,
      prev: wt,
      next: Lt,
      pagination: At,
      page: xt,
      spinner: "splide__spinner",
    };
  var jt = "touchstart mousedown",
    Nt = "touchmove mousemove",
    Ht = "touchend touchcancel mouseup click";
  var Rt = "slide",
    Ft = "loop",
    Wt = "fade";
  function Gt(e, t, n, s) {
    var i,
      o = Ue(e),
      l = o.on,
      r = o.emit,
      a = o.bind,
      c = e.Components,
      u = e.root,
      d = e.options,
      f = d.isNavigation,
      h = d.updateOnMove,
      p = d.i18n,
      g = d.pagination,
      v = d.slideFocus,
      y = c.Direction.resolve,
      S = Z(s, "style"),
      b = Z(s, at),
      C = n > -1,
      E = B(s, ".splide__slide__container");
    function _() {
      var i = e.splides
        .map(function (e) {
          var n = e.splide.Components.Slides.getAt(t);
          return n ? n.slide.id : "";
        })
        .join(" ");
      G(s, at, Se(p.slideX, (C ? n : t) + 1)),
        G(s, ot, i),
        G(s, st, v ? "button" : ""),
        v && W(s, ft);
    }
    function w() {
      i || L();
    }
    function L() {
      if (!i) {
        var n = e.index;
        (o = A()) !== J(s, $t) &&
          (O(s, $t, o), G(s, lt, (f && o) || ""), r(o ? Pe : $e, x)),
          (function () {
            var t = (function () {
                if (e.is(Wt)) return A();
                var t = K(c.Elements.track),
                  n = K(s),
                  i = y("left", !0),
                  o = y("right", !0);
                return fe(t[i]) <= he(n[i]) && fe(n[o]) <= he(t[o]);
              })(),
              n = !t && (!A() || C);
            e.state.is([4, 5]) || G(s, ut, n || "");
            G(se(s, d.focusableNodes || ""), it, n ? -1 : ""),
              v && G(s, it, n ? -1 : 0);
            t !== J(s, Dt) && (O(s, Dt, t), r(t ? Te : Oe, x));
            if (!t && document.activeElement === s) {
              var i = c.Slides.getAt(e.index);
              i && Y(i.slide);
            }
          })(),
          O(s, Tt, t === n - 1),
          O(s, Ot, t === n + 1);
      }
      var o;
    }
    function A() {
      var s = e.index;
      return s === t || (d.cloneStatus && s === n);
    }
    var x = {
      index: t,
      slideIndex: n,
      slide: s,
      container: E,
      isClone: C,
      mount: function () {
        C ||
          ((s.id = u.id + "-slide" + be(t + 1)),
          G(s, st, g ? "tabpanel" : "group"),
          G(s, ft, p.slide),
          G(s, at, b || Se(p.slideLabel, [t + 1, e.length]))),
          a(s, "click", m(r, ke, x)),
          a(s, "keydown", m(r, Ge, x)),
          l([xe, Xe, Be], L),
          l(He, _),
          h && l(Ae, w);
      },
      destroy: function () {
        (i = !0),
          o.destroy(),
          ie(s, zt),
          W(s, mt),
          G(s, "style", S),
          G(s, at, b || "");
      },
      update: L,
      style: function (e, t, n) {
        V((n && E) || s, e, t);
      },
      isWithin: function (n, s) {
        var i = pe(n - t);
        return (
          C || (!d.rewind && !e.is(Ft)) || (i = ue(i, e.length - i)), i <= s
        );
      },
    };
    return x;
  }
  var Xt = "http://www.w3.org/2000/svg",
    Vt =
      "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
  var Ut = { passive: !1, capture: !0 };
  var Yt = { Spacebar: " ", Right: Je, Left: Ze, Up: Ke, Down: Qe };
  function Zt(e) {
    return (e = w(e) ? e : e.key), Yt[e] || e;
  }
  var Jt = "keydown";
  var Kt = "data-splide-lazy",
    Qt = "data-splide-lazy-srcset",
    en = "[data-splide-lazy], [data-splide-lazy-srcset]";
  var tn = [" ", "Enter"];
  var nn = Object.freeze({
      __proto__: null,
      Media: function (e, t, n) {
        var s = e.state,
          i = n.breakpoints || {},
          o = n.reducedMotion || {},
          l = _e(),
          r = [];
        function a(e) {
          e && l.destroy();
        }
        function c(e, t) {
          var n = matchMedia(t);
          l.bind(n, "change", u), r.push([e, n]);
        }
        function u() {
          var t = s.is(7),
            i = n.direction,
            o = r.reduce(function (e, t) {
              return R(e, t[1].matches ? t[0] : {});
            }, {});
          F(n),
            d(o),
            n.destroy
              ? e.destroy("completely" === n.destroy)
              : t
              ? (a(!0), e.mount())
              : i !== n.direction && e.refresh();
        }
        function d(t, i, o) {
          R(n, t),
            i && R(Object.getPrototypeOf(n), t),
            (!o && s.is(1)) || e.emit(qe, n);
        }
        return {
          setup: function () {
            var e = "min" === n.mediaQuery;
            j(i)
              .sort(function (t, n) {
                return e ? +t - +n : +n - +t;
              })
              .forEach(function (t) {
                c(i[t], "(" + (e ? "min" : "max") + "-width:" + t + "px)");
              }),
              c(o, f),
              u();
          },
          destroy: a,
          reduce: function (e) {
            matchMedia(f).matches && (e ? R(n, o) : F(n, j(o)));
          },
          set: d,
        };
      },
      Direction: nt,
      Elements: function (e, t, n) {
        var s,
          i,
          o,
          l = Ue(e),
          r = l.on,
          a = l.bind,
          c = e.root,
          u = n.i18n,
          d = {},
          f = [],
          h = [],
          g = [];
        function m() {
          (s = S("." + yt)),
            (i = B(s, "." + St)),
            ce(s && i, "A track/list element is missing."),
            T(f, z(i, ".splide__slide:not(." + Ct + ")")),
            N(
              {
                arrows: Et,
                pagination: At,
                prev: wt,
                next: Lt,
                bar: kt,
                toggle: Pt,
              },
              function (e, t) {
                d[t] = S("." + e);
              }
            ),
            H(d, { root: c, track: s, list: i, slides: f }),
            (function () {
              var e = c.id || Ee(re),
                t = n.role;
              (c.id = e),
                (s.id = s.id || e + "-track"),
                (i.id = i.id || e + "-list"),
                !Z(c, st) && "SECTION" !== c.tagName && t && G(c, st, t);
              G(c, ft, u.carousel), G(i, st, "presentation");
            })(),
            y();
        }
        function v(e) {
          var t = mt.concat("style");
          p(f), ie(c, h), ie(s, g), W([s, i], t), W(c, e ? t : ["style", ft]);
        }
        function y() {
          ie(c, h),
            ie(s, g),
            (h = b(vt)),
            (g = b(yt)),
            D(c, h),
            D(s, g),
            G(c, at, n.label),
            G(c, ct, n.labelledby);
        }
        function S(e) {
          var t = ne(c, e);
          return t &&
            (function (e, t) {
              if (_(e.closest)) return e.closest(t);
              for (var n = e; n && 1 === n.nodeType && !M(n, t); )
                n = n.parentElement;
              return n;
            })(t, "." + vt) === c
            ? t
            : void 0;
        }
        function b(e) {
          return [
            e + "--" + n.type,
            e + "--" + n.direction,
            n.drag && e + "--draggable",
            n.isNavigation && e + "--nav",
            e === vt && $t,
          ];
        }
        return H(d, {
          setup: m,
          mount: function () {
            r(De, v),
              r(De, m),
              r(qe, y),
              a(
                document,
                "touchstart mousedown keydown",
                function (e) {
                  o = "keydown" === e.type;
                },
                { capture: !0 }
              ),
              a(c, "focusin", function () {
                O(c, It, !!o);
              });
          },
          destroy: v,
        });
      },
      Slides: function (e, t, n) {
        var s = Ue(e),
          i = s.on,
          o = s.emit,
          l = s.bind,
          r = t.Elements,
          a = r.slides,
          c = r.list,
          u = [];
        function d() {
          a.forEach(function (e, t) {
            h(e, t, -1);
          });
        }
        function f() {
          v(function (e) {
            e.destroy();
          }),
            p(u);
        }
        function h(t, n, s) {
          var i = Gt(e, n, s, t);
          i.mount(),
            u.push(i),
            u.sort(function (e, t) {
              return e.index - t.index;
            });
        }
        function g(e) {
          return e
            ? y(function (e) {
                return !e.isClone;
              })
            : u;
        }
        function v(e, t) {
          g(t).forEach(e);
        }
        function y(e) {
          return u.filter(
            _(e)
              ? e
              : function (t) {
                  return w(e) ? M(t.slide, e) : $(k(e), t.index);
                }
          );
        }
        return {
          mount: function () {
            d(), i(De, f), i(De, d);
          },
          destroy: f,
          update: function () {
            v(function (e) {
              e.update();
            });
          },
          register: h,
          get: g,
          getIn: function (e) {
            var s = t.Controller,
              i = s.toIndex(e),
              o = s.hasFocus() ? 1 : n.perPage;
            return y(function (e) {
              return me(e.index, i, i + o - 1);
            });
          },
          getAt: function (e) {
            return y(e)[0];
          },
          add: function (e, t) {
            P(e, function (e) {
              if ((w(e) && (e = ee(e)), x(e))) {
                var s = a[t];
                s ? I(e, s) : q(c, e),
                  D(e, n.classes.slide),
                  (i = e),
                  (r = m(o, Ie)),
                  (u = se(i, "img")),
                  (d = u.length)
                    ? u.forEach(function (e) {
                        l(e, "load error", function () {
                          --d || r();
                        });
                      })
                    : r();
              }
              var i, r, u, d;
            }),
              o(De);
          },
          remove: function (e) {
            Q(
              y(e).map(function (e) {
                return e.slide;
              })
            ),
              o(De);
          },
          forEach: v,
          filter: y,
          style: function (e, t, n) {
            v(function (s) {
              s.style(e, t, n);
            });
          },
          getLength: function (e) {
            return e ? a.length : u.length;
          },
          isEnough: function () {
            return u.length > n.perPage;
          },
        };
      },
      Layout: function (e, t, n) {
        var s,
          i,
          o,
          l = Ue(e),
          r = l.on,
          a = l.bind,
          c = l.emit,
          u = t.Slides,
          d = t.Direction.resolve,
          f = t.Elements,
          h = f.root,
          p = f.track,
          g = f.list,
          v = u.getAt,
          y = u.style;
        function S() {
          (s = n.direction === et),
            V(h, "maxWidth", le(n.width)),
            V(p, d("paddingLeft"), E(!1)),
            V(p, d("paddingRight"), E(!0)),
            b(!0);
        }
        function b(e) {
          var t = K(h);
          (e || i.width !== t.width || i.height !== t.height) &&
            (V(
              p,
              "height",
              (function () {
                var e = "";
                s &&
                  (ce((e = _()), "height or heightRatio is missing."),
                  (e = "calc(" + e + " - " + E(!1) + " - " + E(!0) + ")"));
                return e;
              })()
            ),
            y(d("marginRight"), le(n.gap)),
            y("width", n.autoWidth ? null : le(n.fixedWidth) || (s ? "" : w())),
            y(
              "height",
              le(n.fixedHeight) || (s ? (n.autoHeight ? null : w()) : _()),
              !0
            ),
            (i = t),
            c(Me),
            o !== (o = $()) && (O(h, Mt, o), c("overflow", o)));
        }
        function E(e) {
          var t = n.padding,
            s = d(e ? "right" : "left");
          return (t && le(t[s] || (C(t) ? 0 : t))) || "0px";
        }
        function _() {
          return le(n.height || K(g).width * n.heightRatio);
        }
        function w() {
          var e = le(n.gap);
          return (
            "calc((100%" +
            (e && " + " + e) +
            ")/" +
            (n.perPage || 1) +
            (e && " - " + e) +
            ")"
          );
        }
        function L() {
          return K(g)[d("width")];
        }
        function A(e, t) {
          var n = v(e || 0);
          return n ? K(n.slide)[d("width")] + (t ? 0 : P()) : 0;
        }
        function x(e, t) {
          var n = v(e);
          if (n) {
            var s = K(n.slide)[d("right")],
              i = K(g)[d("left")];
            return pe(s - i) + (t ? 0 : P());
          }
          return 0;
        }
        function k(t) {
          return x(e.length - 1) - x(0) + A(0, t);
        }
        function P() {
          var e = v(0);
          return (e && parseFloat(V(e.slide, d("marginRight")))) || 0;
        }
        function $() {
          return e.is(Wt) || k(!0) > L();
        }
        return {
          mount: function () {
            var e, t, n;
            S(),
              a(
                window,
                "resize load",
                ((e = m(c, Ie)),
                (n = Ye(t || 0, e, null, 1)),
                function () {
                  n.isPaused() && n.start();
                })
              ),
              r([qe, De], S),
              r(Ie, b);
          },
          resize: b,
          listSize: L,
          slideSize: A,
          sliderSize: k,
          totalSize: x,
          getPadding: function (e) {
            return parseFloat(V(p, d("padding" + (e ? "Right" : "Left")))) || 0;
          },
          isOverflow: $,
        };
      },
      Clones: function (e, t, n) {
        var s,
          i = Ue(e),
          o = i.on,
          l = t.Elements,
          r = t.Slides,
          a = t.Direction.resolve,
          c = [];
        function u() {
          o(De, d),
            o([qe, Ie], h),
            (s = g()) &&
              (!(function (t) {
                var s = r.get().slice(),
                  i = s.length;
                if (i) {
                  for (; s.length < t; ) T(s, s);
                  T(s.slice(-t), s.slice(0, t)).forEach(function (o, a) {
                    var u = a < t,
                      d = (function (t, s) {
                        var i = t.cloneNode(!0);
                        return (
                          D(i, n.classes.clone),
                          (i.id = e.root.id + "-clone" + be(s + 1)),
                          i
                        );
                      })(o.slide, a);
                    u ? I(d, s[0].slide) : q(l.list, d),
                      T(c, d),
                      r.register(d, a - t + (u ? 0 : i), o.index);
                  });
                }
              })(s),
              t.Layout.resize(!0));
        }
        function d() {
          f(), u();
        }
        function f() {
          Q(c), p(c), i.destroy();
        }
        function h() {
          var e = g();
          s !== e && (s < e || !e) && i.emit(De);
        }
        function g() {
          var s = n.clones;
          if (e.is(Ft)) {
            if (L(s)) {
              var i = n[a("fixedWidth")] && t.Layout.slideSize(0);
              s =
                (i && he(K(l.track)[a("width")] / i)) ||
                (n[a("autoWidth")] && e.length) ||
                2 * n.perPage;
            }
          } else s = 0;
          return s;
        }
        return { mount: u, destroy: f };
      },
      Move: function (e, t, n) {
        var s,
          i = Ue(e),
          o = i.on,
          l = i.emit,
          r = e.state.set,
          a = t.Layout,
          c = a.slideSize,
          u = a.getPadding,
          d = a.totalSize,
          f = a.listSize,
          h = a.sliderSize,
          p = t.Direction,
          g = p.resolve,
          m = p.orient,
          v = t.Elements,
          y = v.list,
          S = v.track;
        function b() {
          t.Controller.isBusy() ||
            (t.Scroll.cancel(), C(e.index), t.Slides.update());
        }
        function C(e) {
          E(x(e, !0));
        }
        function E(n, s) {
          if (!e.is(Wt)) {
            var i = s
              ? n
              : (function (n) {
                  if (e.is(Ft)) {
                    var s = A(n),
                      i = s > t.Controller.getEnd();
                    (s < 0 || i) && (n = _(n, i));
                  }
                  return n;
                })(n);
            V(y, "transform", "translate" + g("X") + "(" + i + "px)"),
              n !== i && l(Xe);
          }
        }
        function _(e, t) {
          var n = e - P(t),
            s = h();
          return (e -= m(s * (he(pe(n) / s) || 1)) * (t ? 1 : -1));
        }
        function w() {
          E(k(), !0), s.cancel();
        }
        function A(e) {
          for (
            var n = t.Slides.get(), s = 0, i = 1 / 0, o = 0;
            o < n.length;
            o++
          ) {
            var l = n[o].index,
              r = pe(x(l, !0) - e);
            if (!(r <= i)) break;
            (i = r), (s = l);
          }
          return s;
        }
        function x(t, s) {
          var i = m(
            d(t - 1) -
              (function (e) {
                var t = n.focus;
                return "center" === t ? (f() - c(e, !0)) / 2 : +t * c(e) || 0;
              })(t)
          );
          return s
            ? (function (t) {
                n.trimSpace && e.is(Rt) && (t = ve(t, 0, m(h(!0) - f())));
                return t;
              })(i)
            : i;
        }
        function k() {
          var e = g("left");
          return K(y)[e] - K(S)[e] + m(u(!1));
        }
        function P(e) {
          return x(e ? t.Controller.getEnd() : 0, !!n.trimSpace);
        }
        return {
          mount: function () {
            (s = t.Transition), o([we, Me, qe, De], b);
          },
          move: function (e, t, n, i) {
            var o, a;
            e !== t &&
              ((o = e > n),
              (a = m(_(k(), o))),
              o ? a >= 0 : a <= y[g("scrollWidth")] - K(S)[g("width")]) &&
              (w(), E(_(k(), e > n), !0)),
              r(4),
              l(Ae, t, n, e),
              s.start(t, function () {
                r(3), l(xe, t, n, e), i && i();
              });
          },
          jump: C,
          translate: E,
          shift: _,
          cancel: w,
          toIndex: A,
          toPosition: x,
          getPosition: k,
          getLimit: P,
          exceededLimit: function (e, t) {
            t = L(t) ? k() : t;
            var n = !0 !== e && m(t) < m(P(!1)),
              s = !1 !== e && m(t) > m(P(!0));
            return n || s;
          },
          reposition: b,
        };
      },
      Controller: function (e, t, n) {
        var s,
          i,
          o,
          l,
          r = Ue(e),
          a = r.on,
          c = r.emit,
          u = t.Move,
          d = u.getPosition,
          f = u.getLimit,
          h = u.toPosition,
          p = t.Slides,
          g = p.isEnough,
          v = p.getLength,
          y = n.omitEnd,
          S = e.is(Ft),
          b = e.is(Rt),
          C = m(P, !1),
          E = m(P, !0),
          _ = n.start || 0,
          A = _;
        function x() {
          (i = v(!0)), (o = n.perMove), (l = n.perPage), (s = O());
          var e = ve(_, 0, y ? s : i - 1);
          e !== _ && ((_ = e), u.reposition());
        }
        function k() {
          s !== O() && c(Ve);
        }
        function P(e, t) {
          var n = o || (M() ? 1 : l),
            i = $(_ + n * (e ? -1 : 1), _, !(o || M()));
          return -1 === i && b && !ge(d(), f(!e), 1)
            ? e
              ? 0
              : s
            : t
            ? i
            : T(i);
        }
        function $(t, r, a) {
          if (g() || M()) {
            var c = (function (t) {
              if (b && "move" === n.trimSpace && t !== _)
                for (
                  var s = d();
                  s === h(t, !0) && me(t, 0, e.length - 1, !n.rewind);

                )
                  t < _ ? --t : ++t;
              return t;
            })(t);
            c !== t && ((r = t), (t = c), (a = !1)),
              t < 0 || t > s
                ? (t =
                    o || (!me(0, t, r, !0) && !me(s, r, t, !0))
                      ? S
                        ? a
                          ? t < 0
                            ? -(i % l || l)
                            : i
                          : t
                        : n.rewind
                        ? t < 0
                          ? s
                          : 0
                        : -1
                      : D(q(t)))
                : a && t !== r && (t = D(q(r) + (t < r ? -1 : 1)));
          } else t = -1;
          return t;
        }
        function T(e) {
          return S ? (e + i) % i || 0 : e;
        }
        function O() {
          for (var e = i - (M() || (S && o) ? 1 : l); y && e-- > 0; )
            if (h(i - 1, !0) !== h(e, !0)) {
              e++;
              break;
            }
          return ve(e, 0, i - 1);
        }
        function D(e) {
          return ve(M() ? e : l * e, 0, s);
        }
        function q(e) {
          return M() ? ue(e, s) : fe((e >= s ? i - 1 : e) / l);
        }
        function I(e) {
          e !== _ && ((A = _), (_ = e));
        }
        function M() {
          return !L(n.focus) || n.isNavigation;
        }
        function z() {
          return e.state.is([4, 5]) && !!n.waitForTransition;
        }
        return {
          mount: function () {
            x(), a([qe, De, Ve], x), a(Me, k);
          },
          go: function (e, t, n) {
            if (!z()) {
              var i = (function (e) {
                  var t = _;
                  if (w(e)) {
                    var n = e.match(/([+\-<>])(\d+)?/) || [],
                      i = n[1],
                      o = n[2];
                    "+" === i || "-" === i
                      ? (t = $(_ + +("" + i + (+o || 1)), _))
                      : ">" === i
                      ? (t = o ? D(+o) : C(!0))
                      : "<" === i && (t = E(!0));
                  } else t = S ? e : ve(e, 0, s);
                  return t;
                })(e),
                o = T(i);
              o > -1 && (t || o !== _) && (I(o), u.move(i, o, A, n));
            }
          },
          scroll: function (e, n, i, o) {
            t.Scroll.scroll(e, n, i, function () {
              var e = T(u.toIndex(d()));
              I(y ? ue(e, s) : e), o && o();
            });
          },
          getNext: C,
          getPrev: E,
          getAdjacent: P,
          getEnd: O,
          setIndex: I,
          getIndex: function (e) {
            return e ? A : _;
          },
          toIndex: D,
          toPage: q,
          toDest: function (e) {
            var t = u.toIndex(e);
            return b ? ve(t, 0, s) : t;
          },
          hasFocus: M,
          isBusy: z,
        };
      },
      Arrows: function (e, t, n) {
        var s,
          i,
          o = Ue(e),
          l = o.on,
          r = o.bind,
          a = o.emit,
          c = n.classes,
          u = n.i18n,
          d = t.Elements,
          f = t.Controller,
          h = d.arrows,
          p = d.track,
          g = h,
          v = d.prev,
          y = d.next,
          S = {};
        function b() {
          !(function () {
            var e = n.arrows;
            !e ||
              (v && y) ||
              ((g = h || X("div", c.arrows)),
              (v = w(!0)),
              (y = w(!1)),
              (s = !0),
              q(g, [v, y]),
              !h && I(g, p));
            v &&
              y &&
              (H(S, { prev: v, next: y }),
              U(g, e ? "" : "none"),
              D(g, (i = Et + "--" + n.direction)),
              e &&
                (l([we, xe, De, Be, Ve], L),
                r(y, "click", m(_, ">")),
                r(v, "click", m(_, "<")),
                L(),
                G([v, y], ot, p.id),
                a(Ne, v, y)));
          })(),
            l(qe, C);
        }
        function C() {
          E(), b();
        }
        function E() {
          o.destroy(),
            ie(g, i),
            s ? (Q(h ? [v, y] : g), (v = y = null)) : W([v, y], mt);
        }
        function _(e) {
          f.go(e, !0);
        }
        function w(e) {
          return ee(
            '<button class="' +
              c.arrow +
              " " +
              (e ? c.prev : c.next) +
              '" type="button"><svg xmlns="' +
              Xt +
              '" viewBox="0 0 ' +
              "40 " +
              '40" width="' +
              '40" height="' +
              '40" focusable="false"><path d="' +
              (n.arrowPath || Vt) +
              '" />'
          );
        }
        function L() {
          if (v && y) {
            var t = e.index,
              n = f.getPrev(),
              s = f.getNext(),
              i = n > -1 && t < n ? u.last : u.prev,
              o = s > -1 && t > s ? u.first : u.next;
            (v.disabled = n < 0),
              (y.disabled = s < 0),
              G(v, at, i),
              G(y, at, o),
              a("arrows:updated", v, y, n, s);
          }
        }
        return { arrows: S, mount: b, destroy: E, update: L };
      },
      Autoplay: function (e, t, n) {
        var s,
          i,
          o = Ue(e),
          l = o.on,
          r = o.bind,
          a = o.emit,
          c = Ye(n.interval, e.go.bind(e, ">"), function (e) {
            var t = d.bar;
            t && V(t, "width", 100 * e + "%"), a("autoplay:playing", e);
          }),
          u = c.isPaused,
          d = t.Elements,
          f = t.Elements,
          h = f.root,
          p = f.toggle,
          g = n.autoplay,
          m = "pause" === g;
        function v() {
          u() &&
            t.Slides.isEnough() &&
            (c.start(!n.resetProgress), (i = s = m = !1), b(), a(Re));
        }
        function y(e) {
          void 0 === e && (e = !0), (m = !!e), b(), u() || (c.pause(), a(Fe));
        }
        function S() {
          m || (s || i ? y(!1) : v());
        }
        function b() {
          p && (O(p, $t, !m), G(p, at, n.i18n[m ? "play" : "pause"]));
        }
        function C(e) {
          var s = t.Slides.getAt(e);
          c.set((s && +Z(s.slide, "data-splide-interval")) || n.interval);
        }
        return {
          mount: function () {
            g &&
              (!(function () {
                n.pauseOnHover &&
                  r(h, "mouseenter mouseleave", function (e) {
                    (s = "mouseenter" === e.type), S();
                  });
                n.pauseOnFocus &&
                  r(h, "focusin focusout", function (e) {
                    (i = "focusin" === e.type), S();
                  });
                p &&
                  r(p, "click", function () {
                    m ? v() : y(!0);
                  });
                l([Ae, ze, De], c.rewind), l(Ae, C);
              })(),
              p && G(p, ot, d.track.id),
              m || v(),
              b());
          },
          destroy: c.cancel,
          play: v,
          pause: y,
          isPaused: u,
        };
      },
      Cover: function (e, t, n) {
        var s = Ue(e).on;
        function i(e) {
          t.Slides.forEach(function (t) {
            var n = B(t.container || t.slide, "img");
            n && n.src && o(e, n, t);
          });
        }
        function o(e, t, n) {
          n.style(
            "background",
            e ? 'center/cover no-repeat url("' + t.src + '")' : "",
            !0
          ),
            U(t, e ? "none" : "");
        }
        return {
          mount: function () {
            n.cover && (s(We, m(o, !0)), s([we, qe, De], m(i, !0)));
          },
          destroy: m(i, !1),
        };
      },
      Scroll: function (e, t, n) {
        var s,
          i,
          o = Ue(e),
          l = o.on,
          r = o.emit,
          a = e.state.set,
          c = t.Move,
          u = c.getPosition,
          d = c.getLimit,
          f = c.exceededLimit,
          h = c.translate,
          p = e.is(Rt),
          g = 1;
        function v(e, n, o, l, d) {
          var h = u();
          if ((b(), o && (!p || !f()))) {
            var v = t.Layout.sliderSize(),
              C = ye(e) * v * fe(pe(e) / v) || 0;
            e = c.toPosition(t.Controller.toDest(e % v)) + C;
          }
          var E = ge(h, e, 1);
          (g = 1),
            (n = E ? 0 : n || de(pe(e - h) / 1.5, 800)),
            (i = l),
            (s = Ye(n, y, m(S, h, e, d), 1)),
            a(5),
            r(ze),
            s.start();
        }
        function y() {
          a(3), i && i(), r(Be);
        }
        function S(e, t, s, o) {
          var l,
            r,
            a = u(),
            c =
              (e +
                (t - e) *
                  ((l = o),
                  (r = n.easingFunc) ? r(l) : 1 - Math.pow(1 - l, 4)) -
                a) *
              g;
          h(a + c),
            p &&
              !s &&
              f() &&
              ((g *= 0.6), pe(c) < 10 && v(d(f(!0)), 600, !1, i, !0));
        }
        function b() {
          s && s.cancel();
        }
        function C() {
          s && !s.isPaused() && (b(), y());
        }
        return {
          mount: function () {
            l(Ae, b), l([qe, De], C);
          },
          destroy: b,
          scroll: v,
          cancel: C,
        };
      },
      Drag: function (e, t, n) {
        var s,
          i,
          o,
          l,
          r,
          a,
          c,
          u,
          d = Ue(e),
          f = d.on,
          h = d.emit,
          p = d.bind,
          g = d.unbind,
          m = e.state,
          v = t.Move,
          S = t.Scroll,
          b = t.Controller,
          E = t.Elements.track,
          _ = t.Media.reduce,
          w = t.Direction,
          L = w.resolve,
          A = w.orient,
          x = v.getPosition,
          k = v.exceededLimit,
          P = !1;
        function $() {
          var e = n.drag;
          R(!e), (l = "free" === e);
        }
        function T(e) {
          if (((a = !1), !c)) {
            var t = H(e);
            (s = e.target),
              (i = n.noDrag),
              M(s, ".splide__pagination__page, ." + _t) ||
                (i && M(s, i)) ||
                (!t && e.button) ||
                (b.isBusy()
                  ? te(e, !0)
                  : ((u = t ? E : window),
                    (r = m.is([4, 5])),
                    (o = null),
                    p(u, Nt, O, Ut),
                    p(u, Ht, D, Ut),
                    v.cancel(),
                    S.cancel(),
                    I(e)));
          }
          var s, i;
        }
        function O(t) {
          if ((m.is(6) || (m.set(6), h("drag")), t.cancelable))
            if (r) {
              v.translate(s + z(t) / (P && e.is(Rt) ? 5 : 1));
              var i = B(t) > 200,
                o = P !== (P = k());
              (i || o) && I(t), (a = !0), h("dragging"), te(t);
            } else
              (function (e) {
                return pe(z(e)) > pe(z(e, !0));
              })(t) &&
                ((r = (function (e) {
                  var t = n.dragMinThreshold,
                    s = C(t),
                    i = (s && t.mouse) || 0,
                    o = (s ? t.touch : +t) || 10;
                  return pe(z(e)) > (H(e) ? o : i);
                })(t)),
                te(t));
        }
        function D(s) {
          m.is(6) && (m.set(3), h("dragged")),
            r &&
              (!(function (s) {
                var i = (function (t) {
                    if (e.is(Ft) || !P) {
                      var n = B(t);
                      if (n && n < 200) return z(t) / n;
                    }
                    return 0;
                  })(s),
                  o = (function (e) {
                    return (
                      x() +
                      ye(e) *
                        ue(
                          pe(e) * (n.flickPower || 600),
                          l
                            ? 1 / 0
                            : t.Layout.listSize() * (n.flickMaxPages || 1)
                        )
                    );
                  })(i),
                  r = n.rewind && n.rewindByDrag;
                _(!1),
                  l
                    ? b.scroll(o, 0, n.snap)
                    : e.is(Wt)
                    ? b.go(A(ye(i)) < 0 ? (r ? "<" : "-") : r ? ">" : "+")
                    : e.is(Rt) && P && r
                    ? b.go(k(!0) ? ">" : "<")
                    : b.go(b.toDest(o), !0);
                _(!0);
              })(s),
              te(s)),
            g(u, Nt, O),
            g(u, Ht, D),
            (r = !1);
        }
        function q(e) {
          !c && a && te(e, !0);
        }
        function I(e) {
          (o = i), (i = e), (s = x());
        }
        function z(e, t) {
          return N(e, t) - N(j(e), t);
        }
        function B(e) {
          return oe(e) - oe(j(e));
        }
        function j(e) {
          return (i === e && o) || i;
        }
        function N(e, t) {
          return (H(e) ? e.changedTouches[0] : e)["page" + L(t ? "Y" : "X")];
        }
        function H(e) {
          return "undefined" != typeof TouchEvent && e instanceof TouchEvent;
        }
        function R(e) {
          c = e;
        }
        return {
          mount: function () {
            p(E, Nt, y, Ut),
              p(E, Ht, y, Ut),
              p(E, jt, T, Ut),
              p(E, "click", q, { capture: !0 }),
              p(E, "dragstart", te),
              f([we, qe], $);
          },
          disable: R,
          isDragging: function () {
            return r;
          },
        };
      },
      Keyboard: function (e, t, n) {
        var s,
          i,
          o = Ue(e),
          l = o.on,
          r = o.bind,
          a = o.unbind,
          c = e.root,
          u = t.Direction.resolve;
        function d() {
          var e = n.keyboard;
          e && ((s = "global" === e ? window : c), r(s, Jt, p));
        }
        function f() {
          a(s, Jt);
        }
        function h() {
          var e = i;
          (i = !0),
            v(function () {
              i = e;
            });
        }
        function p(t) {
          if (!i) {
            var n = Zt(t);
            n === u(Ze) ? e.go("<") : n === u(Je) && e.go(">");
          }
        }
        return {
          mount: function () {
            d(), l(qe, f), l(qe, d), l(Ae, h);
          },
          destroy: f,
          disable: function (e) {
            i = e;
          },
        };
      },
      LazyLoad: function (e, t, n) {
        var s = Ue(e),
          i = s.on,
          o = s.off,
          l = s.bind,
          r = s.emit,
          a = "sequential" === n.lazyLoad,
          c = [xe, Be],
          u = [];
        function d() {
          p(u),
            t.Slides.forEach(function (e) {
              se(e.slide, en).forEach(function (t) {
                var s = Z(t, Kt),
                  i = Z(t, Qt);
                if (s !== t.src || i !== t.srcset) {
                  var o = n.classes.spinner,
                    l = t.parentElement,
                    r = B(l, "." + o) || X("span", o, l);
                  u.push([t, e, r]), t.src || U(t, "none");
                }
              });
            }),
            a ? v() : (o(c), i(c, f), f());
        }
        function f() {
          (u = u.filter(function (t) {
            var s = n.perPage * ((n.preloadPages || 1) + 1) - 1;
            return !t[1].isWithin(e.index, s) || h(t);
          })).length || o(c);
        }
        function h(e) {
          var t = e[0];
          D(e[1].slide, qt),
            l(t, "load error", m(g, e)),
            G(t, "src", Z(t, Kt)),
            G(t, "srcset", Z(t, Qt)),
            W(t, Kt),
            W(t, Qt);
        }
        function g(e, t) {
          var n = e[0],
            s = e[1];
          ie(s.slide, qt),
            "error" !== t.type && (Q(e[2]), U(n, ""), r(We, n, s), r(Ie)),
            a && v();
        }
        function v() {
          u.length && h(u.shift());
        }
        return {
          mount: function () {
            n.lazyLoad && (d(), i(De, d));
          },
          destroy: m(p, u),
          check: f,
        };
      },
      Pagination: function (e, t, n) {
        var s,
          i,
          o = Ue(e),
          l = o.on,
          r = o.emit,
          a = o.bind,
          c = t.Slides,
          u = t.Elements,
          d = t.Controller,
          f = d.hasFocus,
          h = d.getIndex,
          v = d.go,
          y = t.Direction.resolve,
          S = u.pagination,
          b = [];
        function C() {
          s && (Q(S ? g(s.children) : s), ie(s, i), p(b), (s = null)),
            o.destroy();
        }
        function E(e) {
          v(">" + e, !0);
        }
        function _(e, t) {
          var n = b.length,
            s = Zt(t),
            i = w(),
            o = -1;
          s === y(Je, !1, i)
            ? (o = ++e % n)
            : s === y(Ze, !1, i)
            ? (o = (--e + n) % n)
            : "Home" === s
            ? (o = 0)
            : "End" === s && (o = n - 1);
          var l = b[o];
          l && (Y(l.button), v(">" + o), te(t, !0));
        }
        function w() {
          return n.paginationDirection || n.direction;
        }
        function L(e) {
          return b[d.toPage(e)];
        }
        function A() {
          var e = L(h(!0)),
            t = L(h());
          if (e) {
            var n = e.button;
            ie(n, $t), W(n, rt), G(n, it, -1);
          }
          if (t) {
            var i = t.button;
            D(i, $t), G(i, rt, !0), G(i, it, "");
          }
          r("pagination:updated", { list: s, items: b }, e, t);
        }
        return {
          items: b,
          mount: function t() {
            C(), l([qe, De, Ve], t);
            var o = n.pagination;
            S && U(S, o ? "" : "none"),
              o &&
                (l([Ae, ze, Be], A),
                (function () {
                  var t = e.length,
                    o = n.classes,
                    l = n.i18n,
                    r = n.perPage,
                    h = f() ? d.getEnd() + 1 : he(t / r);
                  D(
                    (s = S || X("ul", o.pagination, u.track.parentElement)),
                    (i = At + "--" + w())
                  ),
                    G(s, st, "tablist"),
                    G(s, at, l.select),
                    G(s, dt, w() === et ? "vertical" : "");
                  for (var p = 0; p < h; p++) {
                    var g = X("li", null, s),
                      v = X("button", { class: o.page, type: "button" }, g),
                      y = c.getIn(p).map(function (e) {
                        return e.slide.id;
                      }),
                      C = !f() && r > 1 ? l.pageX : l.slideX;
                    a(v, "click", m(E, p)),
                      n.paginationKeyboard && a(v, "keydown", m(_, p)),
                      G(g, st, "presentation"),
                      G(v, st, "tab"),
                      G(v, ot, y.join(" ")),
                      G(v, at, Se(C, p + 1)),
                      G(v, it, -1),
                      b.push({ li: g, button: v, page: p });
                  }
                })(),
                A(),
                r("pagination:mounted", { list: s, items: b }, L(e.index)));
          },
          destroy: C,
          getAt: L,
          update: A,
        };
      },
      Sync: function (e, t, n) {
        var s = n.isNavigation,
          i = n.slideFocus,
          o = [];
        function l() {
          var t, n;
          e.splides.forEach(function (t) {
            t.isParent || (a(e, t.splide), a(t.splide, e));
          }),
            s &&
              ((t = Ue(e)),
              (n = t.on)(ke, u),
              n(Ge, d),
              n([we, qe], c),
              o.push(t),
              t.emit(He, e.splides));
        }
        function r() {
          o.forEach(function (e) {
            e.destroy();
          }),
            p(o);
        }
        function a(e, t) {
          var n = Ue(e);
          n.on(Ae, function (e, n, s) {
            t.go(t.is(Ft) ? s : e);
          }),
            o.push(n);
        }
        function c() {
          G(t.Elements.list, dt, n.direction === et ? "vertical" : "");
        }
        function u(t) {
          e.go(t.index);
        }
        function d(e, t) {
          $(tn, Zt(t)) && (u(e), te(t));
        }
        return {
          setup: m(t.Media.set, { slideFocus: L(i) ? s : i }, !0),
          mount: l,
          destroy: r,
          remount: function () {
            r(), l();
          },
        };
      },
      Wheel: function (e, t, n) {
        var s = Ue(e).bind,
          i = 0;
        function o(s) {
          if (s.cancelable) {
            var o = s.deltaY,
              l = o < 0,
              r = oe(s),
              a = n.wheelMinThreshold || 0,
              c = n.wheelSleep || 0;
            pe(o) > a && r - i > c && (e.go(l ? "<" : ">"), (i = r)),
              (function (s) {
                return (
                  !n.releaseWheel ||
                  e.state.is(4) ||
                  -1 !== t.Controller.getAdjacent(s)
                );
              })(l) && te(s);
          }
        }
        return {
          mount: function () {
            n.wheel && s(t.Elements.track, "wheel", o, Ut);
          },
        };
      },
      Live: function (e, t, n) {
        var s = Ue(e).on,
          i = t.Elements.track,
          o = n.live && !n.isNavigation,
          l = X("span", "splide__sr"),
          r = Ye(90, m(a, !1));
        function a(e) {
          G(i, pt, e), e ? (q(i, l), r.start()) : (Q(l), r.cancel());
        }
        function c(e) {
          o && G(i, ht, e ? "off" : "polite");
        }
        return {
          mount: function () {
            o &&
              (c(!t.Autoplay.isPaused()),
              G(i, gt, !0),
              (l.textContent = "…"),
              s(Re, m(c, !0)),
              s(Fe, m(c, !1)),
              s([xe, Be], m(a, !0)));
          },
          disable: c,
          destroy: function () {
            W(i, [ht, gt, pt]), Q(l);
          },
        };
      },
    }),
    sn = {
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
      classes: Bt,
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
  function on(e, t, n) {
    var s = t.Slides;
    function i() {
      s.forEach(function (e) {
        e.style("transform", "translateX(-" + 100 * e.index + "%)");
      });
    }
    return {
      mount: function () {
        Ue(e).on([we, De], i);
      },
      start: function (e, t) {
        s.style("transition", "opacity " + n.speed + "ms " + n.easing), v(t);
      },
      cancel: y,
    };
  }
  function ln(e, t, n) {
    var s,
      i = t.Move,
      o = t.Controller,
      l = t.Scroll,
      r = t.Elements.list,
      a = m(V, r, "transition");
    function c() {
      a(""), l.cancel();
    }
    return {
      mount: function () {
        Ue(e).bind(r, "transitionend", function (e) {
          e.target === r && s && (c(), s());
        });
      },
      start: function (t, r) {
        var c = i.toPosition(t, !0),
          u = i.getPosition(),
          d = (function (t) {
            var s = n.rewindSpeed;
            if (e.is(Rt) && s) {
              var i = o.getIndex(!0),
                l = o.getEnd();
              if ((0 === i && t >= l) || (i >= l && 0 === t)) return s;
            }
            return n.speed;
          })(t);
        pe(c - u) >= 1 && d >= 1
          ? n.useScroll
            ? l.scroll(c, d, !1, r)
            : (a("transform " + d + "ms " + n.easing),
              i.translate(c, !0),
              (s = r))
          : (i.jump(t), r());
      },
      cancel: c,
    };
  }
  var rn = (function () {
      function e(t, n) {
        var s;
        (this.event = Ue()),
          (this.Components = {}),
          (this.state =
            ((s = 1),
            {
              set: function (e) {
                s = e;
              },
              is: function (e) {
                return $(k(e), s);
              },
            })),
          (this.splides = []),
          (this._o = {}),
          (this._E = {});
        var i = w(t) ? ne(document, t) : t;
        ce(i, i + " is invalid."),
          (this.root = i),
          (n = R(
            { label: Z(i, at) || "", labelledby: Z(i, ct) || "" },
            sn,
            e.defaults,
            n || {}
          ));
        try {
          R(n, JSON.parse(Z(i, ae)));
        } catch (e) {
          ce(!1, "Invalid JSON");
        }
        this._o = Object.create(R({}, n));
      }
      var t,
        n,
        s,
        i = e.prototype;
      return (
        (i.mount = function (e, t) {
          var n = this,
            s = this.state,
            i = this.Components;
          return (
            ce(s.is([1, 7]), "Already mounted!"),
            s.set(1),
            (this._C = i),
            (this._T = t || this._T || (this.is(Wt) ? on : ln)),
            (this._E = e || this._E),
            N(H({}, nn, this._E, { Transition: this._T }), function (e, t) {
              var s = e(n, i, n._o);
              (i[t] = s), s.setup && s.setup();
            }),
            N(i, function (e) {
              e.mount && e.mount();
            }),
            this.emit(we),
            D(this.root, "is-initialized"),
            s.set(3),
            this.emit(Le),
            this
          );
        }),
        (i.sync = function (e) {
          return (
            this.splides.push({ splide: e }),
            e.splides.push({ splide: this, isParent: !0 }),
            this.state.is(3) &&
              (this._C.Sync.remount(), e.Components.Sync.remount()),
            this
          );
        }),
        (i.go = function (e) {
          return this._C.Controller.go(e), this;
        }),
        (i.on = function (e, t) {
          return this.event.on(e, t), this;
        }),
        (i.off = function (e) {
          return this.event.off(e), this;
        }),
        (i.emit = function (e) {
          var t;
          return (
            (t = this.event).emit.apply(t, [e].concat(g(arguments, 1))), this
          );
        }),
        (i.add = function (e, t) {
          return this._C.Slides.add(e, t), this;
        }),
        (i.remove = function (e) {
          return this._C.Slides.remove(e), this;
        }),
        (i.is = function (e) {
          return this._o.type === e;
        }),
        (i.refresh = function () {
          return this.emit(De), this;
        }),
        (i.destroy = function (e) {
          void 0 === e && (e = !0);
          var t = this.event,
            n = this.state;
          return (
            n.is(1)
              ? Ue(this).on(Le, this.destroy.bind(this, e))
              : (N(
                  this._C,
                  function (t) {
                    t.destroy && t.destroy(e);
                  },
                  !0
                ),
                t.emit(je),
                t.destroy(),
                e && p(this.splides),
                n.set(7)),
            this
          );
        }),
        (t = e),
        (n = [
          {
            key: "options",
            get: function () {
              return this._o;
            },
            set: function (e) {
              this._C.Media.set(e, !0, !0);
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
        ]) && d(t.prototype, n),
        s && d(t, s),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e
      );
    })(),
    an = rn;
  (an.defaults = {}), (an.STATES = h);
  const cn = document.querySelector(".--dropdown"),
    un = document.querySelector(".header__list-dropdown");
  cn.addEventListener("click", (e) => {
    cn.classList.toggle("active");
  }),
    cn.querySelector(".--dropdown__link").addEventListener("click", (e) => {
      e.preventDefault();
    }),
    document.addEventListener("click", (e) => {
      let t = e.target,
        n = t == cn || cn.contains(t),
        s = un,
        i = cn.classList.contains("active");
      ((!n && i) || (!s && i)) && cn.classList.remove("active");
    }),
    new an(".splide", {
      type: "loop",
      perPage: 3,
      perMove: 3,
      gap: "30px",
    }).mount(),
    (function () {
      const e = document.querySelectorAll(".rating");
      e.length > 0 &&
        (function () {
          let t, n;
          for (let t = 0; t < e.length; t++) {
            s(e[t]);
          }
          function s(e) {
            i(e), o(), e.classList.contains("rating_set") && l(e);
          }
          function i(e) {
            (t = e.querySelector(".rating__active")),
              (n = e.querySelector(".rating__value"));
          }
          function o(e = n.innerHTML) {
            const s = e / 0.05;
            t.style.width = `${s}%`;
          }
          function l(e) {
            const t = e.querySelectorAll(".rating__item");
            for (let s = 0; s < t.length; s++) {
              const l = t[s];
              l.addEventListener("mouseenter", function (t) {
                i(e), o(l.value);
              }),
                l.addEventListener("mouseleave", function (e) {
                  o();
                }),
                l.addEventListener("click", function (t) {
                  i(e),
                    e.dataset.ajax
                      ? r(l.value, e)
                      : ((n.innerHTML = s + 1), o());
                });
            }
          }
          async function r(e, t) {
            if (!t.classList.contains("rating_sending")) {
              t.classList.add("rating_sending");
              let e = await fetch("rating.json", { method: "GET" });
              if (e.ok) {
                const s = (await e.json()).newRating;
                (n.innerHTML = s), o(), t.classList.remove("rating_sending");
              } else alert("Ошибка"), t.classList.remove("rating_sending");
            }
          }
        })();
    })();
  const dn = document.querySelector(".progress__bar-item"),
    fn = document.querySelector(".progress__button");
  let hn = 0;
  (dn.style.width = `${hn}%`),
    fn.addEventListener("click", () => {
      "100%" != dn.style.width
        ? ((hn += +fn.textContent.replace(/\D/g, "")),
          (dn.style.width = `${hn}%`),
          (dn.textContent = `${hn}%`))
        : dn.style.width >= "100%" &&
          ((hn = 0), (dn.style.width = `${hn}%`), (dn.textContent = ""));
    });
  const pn = document.querySelector(".read__more"),
    gn = document.querySelector(".read__more-btn");
  gn.addEventListener("click", () => {
    pn.classList.contains("active")
      ? pn.classList.contains("active") &&
        (pn.classList.remove("active"), (gn.textContent = "Подробнее"))
      : (pn.classList.add("active"), (gn.textContent = "Скрыть"));
  });
  let mn = [59.928194064208185, 30.34664449999997];
  ymaps.ready(function () {
    let e = new ymaps.Map("map", { center: mn, zoom: 14 }),
      t =
        (new ymaps.Placemark(
          mn,
          {
            balloonContentHeader: "Хедер балуна",
            balloonContentBody: "Боди балуна",
            balloonContentFooter: "Подвал",
          },
          {
            iconLayout: "default#image",
            iconImageHref:
              "https://image.flaticon.com/icons/png/512/64/64113.png",
            iconImageSize: [310, 220],
            iconImageOffset: [310, 220],
          }
        ),
        new ymaps.Placemark(
          mn,
          {
            balloonContent:
              '\n\t\t\t<div class="balloon">\n\t\t\t\t<div class="balloon__name">Наш адрес</div>\n\t\t\t\t<div class="balloon__address">Санкт-Петербург, Владимирский проспект, 23, лит. А, офис 701</div>\n\t\t\t\t\t<a href="">Схема проезда</a>\n\t\t\t</div>\n\t\t',
          },
          {
            iconLayout: "default#image",
            iconImageHref:
              "https://image.flaticon.com/icons/png/512/64/64113.png",
            iconImageSize: [40, 40],
            iconImageOffset: [-19, -44],
          }
        ));
    e.controls.remove("geolocationControl"),
      e.controls.remove("searchControl"),
      e.controls.remove("trafficControl"),
      e.controls.remove("typeSelector"),
      e.controls.remove("fullscreenControl"),
      e.controls.remove("zoomControl"),
      e.controls.remove("rulerControl"),
      e.behaviors.disable(["scrollZoom"]),
      e.geoObjects.add(t),
      t.balloon.open();
  }),
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
    (function () {
      function e(e) {
        if ("click" === e.type) {
          const t = e.target;
          if (t.closest("[data-goto]")) {
            const n = t.closest("[data-goto]"),
              s = n.dataset.goto ? n.dataset.goto : "",
              i = !!n.hasAttribute("data-goto-header"),
              o = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : 500,
              l = n.dataset.gotoTop ? parseInt(n.dataset.gotoTop) : 0;
            a(s, i, o, l), e.preventDefault();
          }
        } else if ("watcherCallback" === e.type && e.detail) {
          const t = e.detail.entry,
            n = t.target;
          if ("navigator" === n.dataset.watch) {
            document.querySelector("[data-goto]._navigator-active");
            let e;
            if (n.id && document.querySelector(`[data-goto="#${n.id}"]`))
              e = document.querySelector(`[data-goto="#${n.id}"]`);
            else if (n.classList.length)
              for (let t = 0; t < n.classList.length; t++) {
                const s = n.classList[t];
                if (document.querySelector(`[data-goto=".${s}"]`)) {
                  e = document.querySelector(`[data-goto=".${s}"]`);
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
