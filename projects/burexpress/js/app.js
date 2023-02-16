/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  "use strict";
  const e = {};
  let t = (e, t = 500, s = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = s ? `${s}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !s),
            !s && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !s && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide"),
            document.dispatchEvent(
              new CustomEvent("slideUpDone", { detail: { target: e } })
            );
        }, t));
    },
    s = (e, t = 500, s = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          s && e.style.removeProperty("height");
        let n = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = n + "px"),
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
    n = (e, n = 500) => (e.hidden ? s(e, n) : t(e, n)),
    i = !0,
    o = (e = 500) => {
      document.documentElement.classList.contains("lock") ? a(e) : r(e);
    },
    a = (e = 500) => {
      let t = document.querySelector("body");
      if (i) {
        let s = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (i = !1),
          setTimeout(function () {
            i = !0;
          }, e);
      }
    },
    r = (e = 500) => {
      let t = document.querySelector("body");
      if (i) {
        let s = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < s.length; e++) {
          s[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (t.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (i = !1),
          setTimeout(function () {
            i = !0;
          }, e);
      }
    };
  function l(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  function c(e, t) {
    const s = Array.from(e).filter(function (e, s, n) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (s.length) {
      const e = [];
      s.forEach((s) => {
        const n = {},
          i = s.dataset[t].split(",");
        (n.value = i[0]),
          (n.type = i[1] ? i[1].trim() : "max"),
          (n.item = s),
          e.push(n);
      });
      let n = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      n = (function (e) {
        return e.filter(function (e, t, s) {
          return s.indexOf(e) === t;
        });
      })(n);
      const i = [];
      if (n.length)
        return (
          n.forEach((t) => {
            const s = t.split(","),
              n = s[1],
              o = s[2],
              a = window.matchMedia(s[0]),
              r = e.filter(function (e) {
                if (e.value === n && e.type === o) return !0;
              });
            i.push({ itemsArray: r, matchMedia: a });
          }),
          i
        );
    }
  }
  e.popup = new (class {
    constructor(e) {
      let t = {
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
          ...t,
          ...e,
          classes: { ...t.classes, ...e?.classes },
          hashSettings: { ...t.hashSettings, ...e?.hashSettings },
          on: { ...t.on, ...e?.on },
        }),
        this.options.init && this.initPopups();
    }
    initPopups() {
      this.popupLogging("Проснулся"), this.eventsPopup();
    }
    eventsPopup() {
      document.addEventListener(
        "click",
        function (e) {
          const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
          if (t)
            return (
              e.preventDefault(),
              (this._dataValue = t.getAttribute(
                this.options.attributeOpenButton
              )
                ? t.getAttribute(this.options.attributeOpenButton)
                : "error"),
              "error" !== this._dataValue
                ? (this.isOpen || (this.lastFocusEl = t),
                  (this.targetOpen.selector = `${this._dataValue}`),
                  (this._selectorOpen = !0),
                  void this.open())
                : void this.popupLogging(
                    `Ой ой, не заполнен атрибут у ${t.classList}`
                  )
            );
          return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
            (!e.target.closest(`.${this.options.classes.popupContent}`) &&
              this.isOpen)
            ? (e.preventDefault(), void this.close())
            : void 0;
        }.bind(this)
      ),
        document.addEventListener(
          "keydown",
          function (e) {
            if (
              this.options.closeEsc &&
              27 == e.which &&
              "Escape" === e.code &&
              this.isOpen
            )
              return e.preventDefault(), void this.close();
            this.options.focusCatch &&
              9 == e.which &&
              this.isOpen &&
              this._focusCatch(e);
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
    open(e) {
      if (
        (e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
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
          const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
              this.options.youtubeAttribute
            )}?rel=0&showinfo=0&autoplay=1`,
            t = document.createElement("iframe");
          t.setAttribute("allowfullscreen", "");
          const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
          t.setAttribute("allow", `${s}; encrypted-media`),
            t.setAttribute("src", e),
            this.targetOpen.element.querySelector(
              `[${this.options.youtubePlaceAttribute}]`
            ) &&
              this.targetOpen.element
                .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                .appendChild(t);
        }
        this.options.hashSettings.location &&
          (this._getHash(), this._setHash()),
          this.options.on.beforeOpen(this),
          this.targetOpen.element.classList.add(
            this.options.classes.popupActive
          ),
          document.body.classList.add(this.options.classes.bodyActive),
          this._reopen ? (this._reopen = !1) : o(),
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
    close(e) {
      e &&
        "string" == typeof e &&
        "" !== e.trim() &&
        (this.previousOpen.selector = e),
        this.isOpen &&
          i &&
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
            o(),
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
      let e = document.querySelector(
        `.${window.location.hash.replace("#", "")}`
      )
        ? `.${window.location.hash.replace("#", "")}`
        : document.querySelector(`${window.location.hash}`)
        ? `${window.location.hash}`
        : null;
      document.querySelector(`[${this.options.attributeOpenButton}="${e}"]`) &&
        e &&
        this.open(e);
    }
    _setHash() {
      history.pushState("", "", this.hash);
    }
    _removeHash() {
      history.pushState("", "", window.location.href.split("#")[0]);
    }
    _focusCatch(e) {
      const t = this.targetOpen.element.querySelectorAll(this._focusEl),
        s = Array.prototype.slice.call(t),
        n = s.indexOf(document.activeElement);
      e.shiftKey && 0 === n && (s[s.length - 1].focus(), e.preventDefault()),
        e.shiftKey || n !== s.length - 1 || (s[0].focus(), e.preventDefault());
    }
    _focusTrap() {
      const e = this.previousOpen.element.querySelectorAll(this._focusEl);
      !this.isOpen && this.lastFocusEl
        ? this.lastFocusEl.focus()
        : e[0].focus();
    }
    popupLogging(e) {
      this.options.logging && l(`[Попапос]: ${e}`);
    }
  })({});
  let u = {
    getErrors(e) {
      let t = 0,
        s = e.querySelectorAll("*[data-required]");
      return (
        s.length &&
          s.forEach((e) => {
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
          let s = t.querySelectorAll("input,textarea");
          for (let e = 0; e < s.length; e++) {
            const t = s[e];
            t.parentElement.classList.remove("_form-focus"),
              t.classList.remove("_form-focus"),
              u.removeError(t);
          }
          let n = t.querySelectorAll(".checkbox__input");
          if (n.length > 0)
            for (let e = 0; e < n.length; e++) {
              n[e].checked = !1;
            }
          if (e.select) {
            let s = t.querySelectorAll(".select");
            if (s.length)
              for (let t = 0; t < s.length; t++) {
                const n = s[t].querySelector("select");
                e.select.selectBuild(n);
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
      const s = this;
      let n = document.createElement("div");
      if (
        (n.classList.add(this.selectClasses.classSelect),
        e.parentNode.insertBefore(n, e),
        n.appendChild(e),
        (e.hidden = !0),
        t && (e.dataset.id = t),
        n.insertAdjacentHTML(
          "beforeend",
          `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
        ),
        this.selectBuild(e),
        this.getSelectPlaceholder(e) &&
          ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
          this.getSelectPlaceholder(e).label.show))
      ) {
        this.getSelectElement(
          n,
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
          s.selectChange(e);
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
        s = e.type;
      if (
        t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
        t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
      ) {
        const n = t.closest(".select")
            ? t.closest(".select")
            : document.querySelector(
                `.${this.selectClasses.classSelect}[data-id="${
                  t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ).dataset.selectId
                }"]`
              ),
          i = this.getSelectElement(n).originalSelect;
        if ("click" === s) {
          if (!i.disabled)
            if (
              t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
            ) {
              const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                ),
                s = document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                );
              this.optionAction(n, i, s);
            } else if (
              t.closest(
                this.getSelectClass(this.selectClasses.classSelectTitle)
              )
            )
              this.selectAction(n);
            else if (
              t.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              )
            ) {
              const e = t.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              );
              this.optionAction(n, i, e);
            }
        } else
          "focusin" === s || "focusout" === s
            ? t.closest(this.getSelectClass(this.selectClasses.classSelect)) &&
              ("focusin" === s
                ? n.classList.add(this.selectClasses.classSelectFocus)
                : n.classList.remove(this.selectClasses.classSelectFocus))
            : "keydown" === s && "Escape" === e.code && this.selectsСlose();
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
        s = this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement;
      s.classList.contains("_slide") ||
        (e.classList.toggle(this.selectClasses.classSelectOpen),
        n(s, t.dataset.speed));
    }
    setSelectTitleValue(e, t) {
      const s = this.getSelectElement(
          e,
          this.selectClasses.classSelectBody
        ).selectElement,
        n = this.getSelectElement(
          e,
          this.selectClasses.classSelectTitle
        ).selectElement;
      n && n.remove(),
        s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
    }
    getSelectTitleValue(e, t) {
      let s = this.getSelectedOptionsData(t, 2).html;
      if (
        (t.multiple &&
          t.hasAttribute("data-tags") &&
          ((s = this.getSelectedOptionsData(t)
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
            ((document.querySelector(t.dataset.tags).innerHTML = s),
            t.hasAttribute("data-search") && (s = !1))),
        (s = s.length ? s : t.dataset.placeholder),
        this.getSelectedOptionsData(t).values.length
          ? e.classList.add(this.selectClasses.classSelectActive)
          : e.classList.remove(this.selectClasses.classSelectActive),
        t.hasAttribute("data-search"))
      )
        return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
      {
        const e =
          this.getSelectedOptionsData(t).elements.length &&
          this.getSelectedOptionsData(t).elements[0].dataset.class
            ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
            : "";
        return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
      }
    }
    getSelectElementContent(e) {
      const t = e.dataset.asset ? `${e.dataset.asset}` : "",
        s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
      let n = "";
      return (
        (n += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
        (n += t ? `<span class="${this.selectClasses.classSelectData}">` : ""),
        (n += t ? s : ""),
        (n += t ? "</span>" : ""),
        (n += t ? `<span class="${this.selectClasses.classSelectText}">` : ""),
        (n += e.textContent),
        (n += t ? "</span>" : ""),
        (n += t ? "</span>" : ""),
        n
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
      let s = [];
      return (
        e.multiple
          ? (s = Array.from(e.options)
              .filter((e) => e.value)
              .filter((e) => e.selected))
          : s.push(e.options[e.selectedIndex]),
        {
          elements: s.map((e) => e),
          values: s.filter((e) => e.value).map((e) => e.value),
          html: s.map((e) => this.getSelectElementContent(e)),
        }
      );
    }
    getOptions(e) {
      let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
        s = e.dataset.scroll ? `style="max-height:${e.dataset.scroll}px"` : "",
        n = Array.from(e.options);
      if (n.length > 0) {
        let i = "";
        return (
          ((this.getSelectPlaceholder(e) &&
            !this.getSelectPlaceholder(e).show) ||
            e.multiple) &&
            (n = n.filter((e) => e.value)),
          (i += t
            ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
            : ""),
          n.forEach((t) => {
            i += this.getOption(t, e);
          }),
          (i += t ? "</div>" : ""),
          i
        );
      }
    }
    getOption(e, t) {
      const s =
          e.selected && t.multiple
            ? ` ${this.selectClasses.classSelectOptionSelected}`
            : "",
        n = e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
        i = e.dataset.class ? ` ${e.dataset.class}` : "",
        o = !!e.dataset.href && e.dataset.href,
        a = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
      let r = "";
      return (
        (r += o
          ? `<a ${a} ${n} href="${o}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${i}${s}">`
          : `<button ${n} class="${this.selectClasses.classSelectOption}${i}${s}" data-value="${e.value}" type="button">`),
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
    optionAction(e, t, s) {
      if (t.multiple) {
        s.classList.toggle(this.selectClasses.classSelectOptionSelected);
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
          (s.hidden = !0)),
          (t.value = s.hasAttribute("data-value")
            ? s.dataset.value
            : s.textContent),
          this.selectAction(e);
      this.setSelectTitleValue(e, t), this.setSelectChange(t);
    }
    selectChange(e) {
      const t = e.target;
      this.selectBuild(t), this.setSelectChange(t);
    }
    setSelectChange(e) {
      if (
        (e.hasAttribute("data-validate") && u.validateInput(e),
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
        s = this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement,
        n = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
        i = this;
      t.addEventListener("input", function () {
        n.forEach((e) => {
          e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
            ? (e.hidden = !1)
            : (e.hidden = !0);
        }),
          !0 === s.hidden && i.selectAction(e);
      });
    }
    selectCallback(e, t) {
      document.dispatchEvent(
        new CustomEvent("selectCallback", { detail: { select: t } })
      );
    }
    setLogging(e) {
      this.config.logging && l(`[select]: ${e}`);
    }
  })({});
  let d = !1;
  function h(e) {
    this.type = e;
  }
  setTimeout(() => {
    if (d) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (h.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          s = t.dataset.da.trim().split(","),
          n = {};
        (n.element = t),
          (n.parent = t.parentNode),
          (n.destination = document.querySelector(s[0].trim())),
          (n.breakpoint = s[1] ? s[1].trim() : "767"),
          (n.place = s[2] ? s[2].trim() : "last"),
          (n.index = this.indexInParent(n.parent, n.element)),
          this.оbjects.push(n);
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
          function (e, t, s) {
            return Array.prototype.indexOf.call(s, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const s = this.mediaQueries[t],
          n = String.prototype.split.call(s, ","),
          i = window.matchMedia(n[0]),
          o = n[1],
          a = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === o;
          });
        i.addListener(function () {
          e.mediaHandler(i, a);
        }),
          this.mediaHandler(i, a);
      }
    }),
    (h.prototype.mediaHandler = function (e, t) {
      if (e.matches)
        for (let e = 0; e < t.length; e++) {
          const s = t[e];
          (s.index = this.indexInParent(s.parent, s.element)),
            this.moveTo(s.place, s.element, s.destination);
        }
      else
        for (let e = t.length - 1; e >= 0; e--) {
          const s = t[e];
          s.element.classList.contains(this.daClassname) &&
            this.moveBack(s.parent, s.element, s.index);
        }
    }),
    (h.prototype.moveTo = function (e, t, s) {
      t.classList.add(this.daClassname),
        "last" === e || e >= s.children.length
          ? s.insertAdjacentElement("beforeend", t)
          : "first" !== e
          ? s.children[e].insertAdjacentElement("beforebegin", t)
          : s.insertAdjacentElement("afterbegin", t);
    }),
    (h.prototype.moveBack = function (e, t, s) {
      t.classList.remove(this.daClassname),
        void 0 !== e.children[s]
          ? e.children[s].insertAdjacentElement("beforebegin", t)
          : e.insertAdjacentElement("beforeend", t);
    }),
    (h.prototype.indexInParent = function (e, t) {
      const s = Array.prototype.slice.call(e.children);
      return Array.prototype.indexOf.call(s, t);
    }),
    (h.prototype.arraySort = function (e) {
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
  new h("max").init(),
    document
      .querySelector(".user-image-menu")
      .addEventListener("click", (e) => {
        document.querySelector(".user-image-menu").classList.toggle("active");
      });
  const p = document.querySelector("button.catalog_button"),
    f = document.querySelector(".user-catalog"),
    g = document.querySelector("section.catalog");
  function m(e, t) {
    for (var s = 0; s < t.length; s++) {
      var n = t[s];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  p.addEventListener("click", (e) => {
    g.classList.toggle("catalog-open"),
      p.classList.toggle("catalog-close"),
      document.querySelector("body").classList.toggle("lock");
  }),
    f.addEventListener("click", (e) => {
      g.classList.toggle("catalog-open"),
        p.classList.toggle("catalog-close"),
        document.querySelector("body").classList.toggle("lock");
    });
  var v = "(prefers-reduced-motion: reduce)",
    y = 1,
    b = 3,
    S = 4,
    w = 5,
    E = 6,
    A = 7,
    C = {
      CREATED: y,
      MOUNTED: 2,
      IDLE: b,
      MOVING: S,
      SCROLLING: w,
      DRAGGING: E,
      DESTROYED: A,
    };
  function _(e) {
    e.length = 0;
  }
  function L(e, t, s) {
    return Array.prototype.slice.call(e, t, s);
  }
  function O(e) {
    return e.bind.apply(e, [null].concat(L(arguments, 1)));
  }
  var x = setTimeout,
    P = function () {};
  function k(e) {
    return requestAnimationFrame(e);
  }
  function $(e, t) {
    return typeof t === e;
  }
  function T(e) {
    return !B(e) && $("object", e);
  }
  var q = Array.isArray,
    D = O($, "function"),
    M = O($, "string"),
    I = O($, "undefined");
  function B(e) {
    return null === e;
  }
  function j(e) {
    try {
      return e instanceof (e.ownerDocument.defaultView || window).HTMLElement;
    } catch (e) {
      return !1;
    }
  }
  function H(e) {
    return q(e) ? e : [e];
  }
  function z(e, t) {
    H(e).forEach(t);
  }
  function N(e, t) {
    return e.indexOf(t) > -1;
  }
  function F(e, t) {
    return e.push.apply(e, H(t)), e;
  }
  function R(e, t, s) {
    e &&
      z(t, function (t) {
        t && e.classList[s ? "add" : "remove"](t);
      });
  }
  function W(e, t) {
    R(e, M(t) ? t.split(" ") : t, !0);
  }
  function V(e, t) {
    z(t, e.appendChild.bind(e));
  }
  function X(e, t) {
    z(e, function (e) {
      var s = (t || e).parentNode;
      s && s.insertBefore(e, t);
    });
  }
  function G(e, t) {
    return j(e) && (e.msMatchesSelector || e.matches).call(e, t);
  }
  function U(e, t) {
    var s = e ? L(e.children) : [];
    return t
      ? s.filter(function (e) {
          return G(e, t);
        })
      : s;
  }
  function Y(e, t) {
    return t ? U(e, t)[0] : e.firstElementChild;
  }
  var Q = Object.keys;
  function K(e, t, s) {
    return (
      e &&
        (s ? Q(e).reverse() : Q(e)).forEach(function (s) {
          "__proto__" !== s && t(e[s], s);
        }),
      e
    );
  }
  function Z(e) {
    return (
      L(arguments, 1).forEach(function (t) {
        K(t, function (s, n) {
          e[n] = t[n];
        });
      }),
      e
    );
  }
  function J(e) {
    return (
      L(arguments, 1).forEach(function (t) {
        K(t, function (t, s) {
          q(t)
            ? (e[s] = t.slice())
            : T(t)
            ? (e[s] = J({}, T(e[s]) ? e[s] : {}, t))
            : (e[s] = t);
        });
      }),
      e
    );
  }
  function ee(e, t) {
    z(t || Q(e), function (t) {
      delete e[t];
    });
  }
  function te(e, t) {
    z(e, function (e) {
      z(t, function (t) {
        e && e.removeAttribute(t);
      });
    });
  }
  function se(e, t, s) {
    T(t)
      ? K(t, function (t, s) {
          se(e, s, t);
        })
      : z(e, function (e) {
          B(s) || "" === s ? te(e, t) : e.setAttribute(t, String(s));
        });
  }
  function ne(e, t, s) {
    var n = document.createElement(e);
    return t && (M(t) ? W(n, t) : se(n, t)), s && V(s, n), n;
  }
  function ie(e, t, s) {
    if (I(s)) return getComputedStyle(e)[t];
    B(s) || (e.style[t] = "" + s);
  }
  function oe(e, t) {
    ie(e, "display", t);
  }
  function ae(e) {
    (e.setActive && e.setActive()) || e.focus({ preventScroll: !0 });
  }
  function re(e, t) {
    return e.getAttribute(t);
  }
  function le(e, t) {
    return e && e.classList.contains(t);
  }
  function ce(e) {
    return e.getBoundingClientRect();
  }
  function ue(e) {
    z(e, function (e) {
      e && e.parentNode && e.parentNode.removeChild(e);
    });
  }
  function de(e) {
    return Y(new DOMParser().parseFromString(e, "text/html").body);
  }
  function he(e, t) {
    e.preventDefault(),
      t && (e.stopPropagation(), e.stopImmediatePropagation());
  }
  function pe(e, t) {
    return e && e.querySelector(t);
  }
  function fe(e, t) {
    return t ? L(e.querySelectorAll(t)) : [];
  }
  function ge(e, t) {
    R(e, t, !1);
  }
  function me(e) {
    return e.timeStamp;
  }
  function ve(e) {
    return M(e) ? e : e ? e + "px" : "";
  }
  var ye = "splide",
    be = "data-" + ye;
  function Se(e, t) {
    if (!e) throw new Error("[" + ye + "] " + (t || ""));
  }
  var we = Math.min,
    Ee = Math.max,
    Ae = Math.floor,
    Ce = Math.ceil,
    _e = Math.abs;
  function Le(e, t, s) {
    return _e(e - t) < s;
  }
  function Oe(e, t, s, n) {
    var i = we(t, s),
      o = Ee(t, s);
    return n ? i < e && e < o : i <= e && e <= o;
  }
  function xe(e, t, s) {
    var n = we(t, s),
      i = Ee(t, s);
    return we(Ee(n, e), i);
  }
  function Pe(e) {
    return +(e > 0) - +(e < 0);
  }
  function ke(e, t) {
    return (
      z(t, function (t) {
        e = e.replace("%s", "" + t);
      }),
      e
    );
  }
  function $e(e) {
    return e < 10 ? "0" + e : "" + e;
  }
  var Te = {};
  function qe(e) {
    return "" + e + $e((Te[e] = (Te[e] || 0) + 1));
  }
  function De() {
    var e = [];
    function t(e, t, s) {
      z(e, function (e) {
        e &&
          z(t, function (t) {
            t.split(" ").forEach(function (t) {
              var n = t.split(".");
              s(e, n[0], n[1]);
            });
          });
      });
    }
    return {
      bind: function (s, n, i, o) {
        t(s, n, function (t, s, n) {
          var a = "addEventListener" in t,
            r = a
              ? t.removeEventListener.bind(t, s, i, o)
              : t.removeListener.bind(t, i);
          a ? t.addEventListener(s, i, o) : t.addListener(i),
            e.push([t, s, n, i, r]);
        });
      },
      unbind: function (s, n, i) {
        t(s, n, function (t, s, n) {
          e = e.filter(function (e) {
            return (
              !!(e[0] !== t || e[1] !== s || e[2] !== n || (i && e[3] !== i)) ||
              (e[4](), !1)
            );
          });
        });
      },
      dispatch: function (e, t, s) {
        var n;
        return (
          "function" == typeof CustomEvent
            ? (n = new CustomEvent(t, { bubbles: true, detail: s }))
            : (n = document.createEvent("CustomEvent")).initCustomEvent(
                t,
                true,
                !1,
                s
              ),
          e.dispatchEvent(n),
          n
        );
      },
      destroy: function () {
        e.forEach(function (e) {
          e[4]();
        }),
          _(e);
      },
    };
  }
  var Me = "mounted",
    Ie = "ready",
    Be = "move",
    je = "moved",
    He = "click",
    ze = "active",
    Ne = "inactive",
    Fe = "visible",
    Re = "hidden",
    We = "refresh",
    Ve = "updated",
    Xe = "resize",
    Ge = "resized",
    Ue = "drag",
    Ye = "dragging",
    Qe = "dragged",
    Ke = "scroll",
    Ze = "scrolled",
    Je = "overflow",
    et = "destroy",
    tt = "arrows:mounted",
    st = "arrows:updated",
    nt = "pagination:mounted",
    it = "pagination:updated",
    ot = "navigation:mounted",
    at = "autoplay:play",
    rt = "autoplay:playing",
    lt = "autoplay:pause",
    ct = "lazyload:loaded",
    ut = "sk",
    dt = "sh",
    ht = "ei";
  function pt(e) {
    var t = e ? e.event.bus : document.createDocumentFragment(),
      s = De();
    return (
      e && e.event.on(et, s.destroy),
      Z(s, {
        bus: t,
        on: function (e, n) {
          s.bind(t, H(e).join(" "), function (e) {
            n.apply(n, q(e.detail) ? e.detail : []);
          });
        },
        off: O(s.unbind, t),
        emit: function (e) {
          s.dispatch(t, e, L(arguments, 1));
        },
      })
    );
  }
  function ft(e, t, s, n) {
    var i,
      o,
      a = Date.now,
      r = 0,
      l = !0,
      c = 0;
    function u() {
      if (!l) {
        if (
          ((r = e ? we((a() - i) / e, 1) : 1),
          s && s(r),
          r >= 1 && (t(), (i = a()), n && ++c >= n))
        )
          return d();
        o = k(u);
      }
    }
    function d() {
      l = !0;
    }
    function h() {
      o && cancelAnimationFrame(o), (r = 0), (o = 0), (l = !0);
    }
    return {
      start: function (t) {
        t || h(), (i = a() - (t ? r * e : 0)), (l = !1), (o = k(u));
      },
      rewind: function () {
        (i = a()), (r = 0), s && s(r);
      },
      pause: d,
      cancel: h,
      set: function (t) {
        e = t;
      },
      isPaused: function () {
        return l;
      },
    };
  }
  var gt = "Arrow",
    mt = gt + "Left",
    vt = gt + "Right",
    yt = gt + "Up",
    bt = gt + "Down",
    St = "rtl",
    wt = "ttb",
    Et = {
      width: ["height"],
      left: ["top", "right"],
      right: ["bottom", "left"],
      x: ["y"],
      X: ["Y"],
      Y: ["X"],
      ArrowLeft: [yt, vt],
      ArrowRight: [bt, mt],
    };
  function At(e, t, s) {
    return {
      resolve: function (e, t, n) {
        var i = (n = n || s.direction) !== St || t ? (n === wt ? 0 : -1) : 1;
        return (
          (Et[e] && Et[e][i]) ||
          e.replace(/width|left|right/i, function (e, t) {
            var s = Et[e.toLowerCase()][i] || e;
            return t > 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s;
          })
        );
      },
      orient: function (e) {
        return e * (s.direction === St ? 1 : -1);
      },
    };
  }
  var Ct = "role",
    _t = "tabindex",
    Lt = "aria-",
    Ot = Lt + "controls",
    xt = Lt + "current",
    Pt = Lt + "selected",
    kt = Lt + "label",
    $t = Lt + "labelledby",
    Tt = Lt + "hidden",
    qt = Lt + "orientation",
    Dt = Lt + "roledescription",
    Mt = Lt + "live",
    It = Lt + "busy",
    Bt = Lt + "atomic",
    jt = [Ct, _t, "disabled", Ot, xt, kt, $t, Tt, qt, Dt],
    Ht = ye + "__",
    zt = "is-",
    Nt = ye,
    Ft = Ht + "track",
    Rt = Ht + "list",
    Wt = Ht + "slide",
    Vt = Wt + "--clone",
    Xt = Wt + "__container",
    Gt = Ht + "arrows",
    Ut = Ht + "arrow",
    Yt = Ut + "--prev",
    Qt = Ut + "--next",
    Kt = Ht + "pagination",
    Zt = Kt + "__page",
    Jt = Ht + "progress" + "__bar",
    es = Ht + "toggle",
    ts = Ht + "sr",
    ss = zt + "initialized",
    ns = zt + "active",
    is = zt + "prev",
    os = zt + "next",
    as = zt + "visible",
    rs = zt + "loading",
    ls = zt + "focus-in",
    cs = zt + "overflow",
    us = [ns, as, is, os, rs, ls, cs],
    ds = {
      slide: Wt,
      clone: Vt,
      arrows: Gt,
      arrow: Ut,
      prev: Yt,
      next: Qt,
      pagination: Kt,
      page: Zt,
      spinner: Ht + "spinner",
    };
  var hs = 5,
    ps = 200,
    fs = "touchstart mousedown",
    gs = "touchmove mousemove",
    ms = "touchend touchcancel mouseup click";
  var vs = "slide",
    ys = "loop",
    bs = "fade";
  function Ss(e, t, s, n) {
    var i,
      o = pt(e),
      a = o.on,
      r = o.emit,
      l = o.bind,
      c = e.Components,
      u = e.root,
      d = e.options,
      h = d.isNavigation,
      p = d.updateOnMove,
      f = d.i18n,
      g = d.pagination,
      m = d.slideFocus,
      v = c.Direction.resolve,
      y = re(n, "style"),
      b = re(n, kt),
      E = s > -1,
      A = Y(n, "." + Xt);
    function C() {
      var i = e.splides
        .map(function (e) {
          var s = e.splide.Components.Slides.getAt(t);
          return s ? s.slide.id : "";
        })
        .join(" ");
      se(n, kt, ke(f.slideX, (E ? s : t) + 1)),
        se(n, Ot, i),
        se(n, Ct, m ? "button" : ""),
        m && te(n, Dt);
    }
    function _() {
      i || L();
    }
    function L() {
      if (!i) {
        var s = e.index;
        (o = x()) !== le(n, ns) &&
          (R(n, ns, o), se(n, xt, (h && o) || ""), r(o ? ze : Ne, P)),
          (function () {
            var t = (function () {
                if (e.is(bs)) return x();
                var t = ce(c.Elements.track),
                  s = ce(n),
                  i = v("left", !0),
                  o = v("right", !0);
                return Ae(t[i]) <= Ce(s[i]) && Ae(s[o]) <= Ce(t[o]);
              })(),
              s = !t && (!x() || E);
            e.state.is([S, w]) || se(n, Tt, s || "");
            se(fe(n, d.focusableNodes || ""), _t, s ? -1 : ""),
              m && se(n, _t, s ? -1 : 0);
            t !== le(n, as) && (R(n, as, t), r(t ? Fe : Re, P));
            if (!t && document.activeElement === n) {
              var i = c.Slides.getAt(e.index);
              i && ae(i.slide);
            }
          })(),
          R(n, is, t === s - 1),
          R(n, os, t === s + 1);
      }
      var o;
    }
    function x() {
      var n = e.index;
      return n === t || (d.cloneStatus && n === s);
    }
    var P = {
      index: t,
      slideIndex: s,
      slide: n,
      container: A,
      isClone: E,
      mount: function () {
        E ||
          ((n.id = u.id + "-slide" + $e(t + 1)),
          se(n, Ct, g ? "tabpanel" : "group"),
          se(n, Dt, f.slide),
          se(n, kt, b || ke(f.slideLabel, [t + 1, e.length]))),
          l(n, "click", O(r, He, P)),
          l(n, "keydown", O(r, ut, P)),
          a([je, dt, Ze], L),
          a(ot, C),
          p && a(Be, _);
      },
      destroy: function () {
        (i = !0),
          o.destroy(),
          ge(n, us),
          te(n, jt),
          se(n, "style", y),
          se(n, kt, b || "");
      },
      update: L,
      style: function (e, t, s) {
        ie((s && A) || n, e, t);
      },
      isWithin: function (s, n) {
        var i = _e(s - t);
        return (
          E || (!d.rewind && !e.is(ys)) || (i = we(i, e.length - i)), i <= n
        );
      },
    };
    return P;
  }
  var ws = 2;
  var Es = "http://www.w3.org/2000/svg",
    As =
      "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
    Cs = 40;
  var _s = be + "-interval";
  var Ls = 10,
    Os = 600,
    xs = 0.6,
    Ps = 1.5,
    ks = 800;
  var $s = { passive: !1, capture: !0 };
  var Ts = { Spacebar: " ", Right: vt, Left: mt, Up: yt, Down: bt };
  function qs(e) {
    return (e = M(e) ? e : e.key), Ts[e] || e;
  }
  var Ds = "keydown";
  var Ms = be + "-lazy",
    Is = Ms + "-srcset",
    Bs = "[" + Ms + "], [" + Is + "]";
  var js = [" ", "Enter"];
  var Hs = 90;
  var zs = Object.freeze({
      __proto__: null,
      Media: function (e, t, s) {
        var n = e.state,
          i = s.breakpoints || {},
          o = s.reducedMotion || {},
          a = De(),
          r = [];
        function l(e) {
          e && a.destroy();
        }
        function c(e, t) {
          var s = matchMedia(t);
          a.bind(s, "change", u), r.push([e, s]);
        }
        function u() {
          var t = n.is(A),
            i = s.direction,
            o = r.reduce(function (e, t) {
              return J(e, t[1].matches ? t[0] : {});
            }, {});
          ee(s),
            d(o),
            s.destroy
              ? e.destroy("completely" === s.destroy)
              : t
              ? (l(!0), e.mount())
              : i !== s.direction && e.refresh();
        }
        function d(t, i, o) {
          J(s, t),
            i && J(Object.getPrototypeOf(s), t),
            (!o && n.is(y)) || e.emit(Ve, s);
        }
        return {
          setup: function () {
            var e = "min" === s.mediaQuery;
            Q(i)
              .sort(function (t, s) {
                return e ? +t - +s : +s - +t;
              })
              .forEach(function (t) {
                c(i[t], "(" + (e ? "min" : "max") + "-width:" + t + "px)");
              }),
              c(o, v),
              u();
          },
          destroy: l,
          reduce: function (e) {
            matchMedia(v).matches && (e ? J(s, o) : ee(s, Q(o)));
          },
          set: d,
        };
      },
      Direction: At,
      Elements: function (e, t, s) {
        var n,
          i,
          o,
          a = pt(e),
          r = a.on,
          l = a.bind,
          c = e.root,
          u = s.i18n,
          d = {},
          h = [],
          p = [],
          f = [];
        function g() {
          (n = y("." + Ft)),
            (i = Y(n, "." + Rt)),
            Se(n && i, "A track/list element is missing."),
            F(h, U(i, "." + Wt + ":not(." + Vt + ")")),
            K(
              {
                arrows: Gt,
                pagination: Kt,
                prev: Yt,
                next: Qt,
                bar: Jt,
                toggle: es,
              },
              function (e, t) {
                d[t] = y("." + e);
              }
            ),
            Z(d, { root: c, track: n, list: i, slides: h }),
            (function () {
              var e = c.id || qe(ye),
                t = s.role;
              (c.id = e),
                (n.id = n.id || e + "-track"),
                (i.id = i.id || e + "-list"),
                !re(c, Ct) && "SECTION" !== c.tagName && t && se(c, Ct, t);
              se(c, Dt, u.carousel), se(i, Ct, "presentation");
            })(),
            v();
        }
        function m(e) {
          var t = jt.concat("style");
          _(h), ge(c, p), ge(n, f), te([n, i], t), te(c, e ? t : ["style", Dt]);
        }
        function v() {
          ge(c, p),
            ge(n, f),
            (p = b(Nt)),
            (f = b(Ft)),
            W(c, p),
            W(n, f),
            se(c, kt, s.label),
            se(c, $t, s.labelledby);
        }
        function y(e) {
          var t = pe(c, e);
          return t &&
            (function (e, t) {
              if (D(e.closest)) return e.closest(t);
              for (var s = e; s && 1 === s.nodeType && !G(s, t); )
                s = s.parentElement;
              return s;
            })(t, "." + Nt) === c
            ? t
            : void 0;
        }
        function b(e) {
          return [
            e + "--" + s.type,
            e + "--" + s.direction,
            s.drag && e + "--draggable",
            s.isNavigation && e + "--nav",
            e === Nt && ns,
          ];
        }
        return Z(d, {
          setup: g,
          mount: function () {
            r(We, m),
              r(We, g),
              r(Ve, v),
              l(
                document,
                fs + " keydown",
                function (e) {
                  o = "keydown" === e.type;
                },
                { capture: !0 }
              ),
              l(c, "focusin", function () {
                R(c, ls, !!o);
              });
          },
          destroy: m,
        });
      },
      Slides: function (e, t, s) {
        var n = pt(e),
          i = n.on,
          o = n.emit,
          a = n.bind,
          r = t.Elements,
          l = r.slides,
          c = r.list,
          u = [];
        function d() {
          l.forEach(function (e, t) {
            p(e, t, -1);
          });
        }
        function h() {
          g(function (e) {
            e.destroy();
          }),
            _(u);
        }
        function p(t, s, n) {
          var i = Ss(e, s, n, t);
          i.mount(),
            u.push(i),
            u.sort(function (e, t) {
              return e.index - t.index;
            });
        }
        function f(e) {
          return e
            ? m(function (e) {
                return !e.isClone;
              })
            : u;
        }
        function g(e, t) {
          f(t).forEach(e);
        }
        function m(e) {
          return u.filter(
            D(e)
              ? e
              : function (t) {
                  return M(e) ? G(t.slide, e) : N(H(e), t.index);
                }
          );
        }
        return {
          mount: function () {
            d(), i(We, h), i(We, d);
          },
          destroy: h,
          update: function () {
            g(function (e) {
              e.update();
            });
          },
          register: p,
          get: f,
          getIn: function (e) {
            var n = t.Controller,
              i = n.toIndex(e),
              o = n.hasFocus() ? 1 : s.perPage;
            return m(function (e) {
              return Oe(e.index, i, i + o - 1);
            });
          },
          getAt: function (e) {
            return m(e)[0];
          },
          add: function (e, t) {
            z(e, function (e) {
              if ((M(e) && (e = de(e)), j(e))) {
                var n = l[t];
                n ? X(e, n) : V(c, e),
                  W(e, s.classes.slide),
                  (i = e),
                  (r = O(o, Xe)),
                  (u = fe(i, "img")),
                  (d = u.length)
                    ? u.forEach(function (e) {
                        a(e, "load error", function () {
                          --d || r();
                        });
                      })
                    : r();
              }
              var i, r, u, d;
            }),
              o(We);
          },
          remove: function (e) {
            ue(
              m(e).map(function (e) {
                return e.slide;
              })
            ),
              o(We);
          },
          forEach: g,
          filter: m,
          style: function (e, t, s) {
            g(function (n) {
              n.style(e, t, s);
            });
          },
          getLength: function (e) {
            return e ? l.length : u.length;
          },
          isEnough: function () {
            return u.length > s.perPage;
          },
        };
      },
      Layout: function (e, t, s) {
        var n,
          i,
          o,
          a = pt(e),
          r = a.on,
          l = a.bind,
          c = a.emit,
          u = t.Slides,
          d = t.Direction.resolve,
          h = t.Elements,
          p = h.root,
          f = h.track,
          g = h.list,
          m = u.getAt,
          v = u.style;
        function y() {
          (n = s.direction === wt),
            ie(p, "maxWidth", ve(s.width)),
            ie(f, d("paddingLeft"), S(!1)),
            ie(f, d("paddingRight"), S(!0)),
            b(!0);
        }
        function b(e) {
          var t = ce(p);
          (e || i.width !== t.width || i.height !== t.height) &&
            (ie(
              f,
              "height",
              (function () {
                var e = "";
                n &&
                  (Se((e = w()), "height or heightRatio is missing."),
                  (e = "calc(" + e + " - " + S(!1) + " - " + S(!0) + ")"));
                return e;
              })()
            ),
            v(d("marginRight"), ve(s.gap)),
            v("width", s.autoWidth ? null : ve(s.fixedWidth) || (n ? "" : E())),
            v(
              "height",
              ve(s.fixedHeight) || (n ? (s.autoHeight ? null : E()) : w()),
              !0
            ),
            (i = t),
            c(Ge),
            o !== (o = P()) && (R(p, cs, o), c(Je, o)));
        }
        function S(e) {
          var t = s.padding,
            n = d(e ? "right" : "left");
          return (t && ve(t[n] || (T(t) ? 0 : t))) || "0px";
        }
        function w() {
          return ve(s.height || ce(g).width * s.heightRatio);
        }
        function E() {
          var e = ve(s.gap);
          return (
            "calc((100%" +
            (e && " + " + e) +
            ")/" +
            (s.perPage || 1) +
            (e && " - " + e) +
            ")"
          );
        }
        function A() {
          return ce(g)[d("width")];
        }
        function C(e, t) {
          var s = m(e || 0);
          return s ? ce(s.slide)[d("width")] + (t ? 0 : x()) : 0;
        }
        function _(e, t) {
          var s = m(e);
          if (s) {
            var n = ce(s.slide)[d("right")],
              i = ce(g)[d("left")];
            return _e(n - i) + (t ? 0 : x());
          }
          return 0;
        }
        function L(t) {
          return _(e.length - 1) - _(0) + C(0, t);
        }
        function x() {
          var e = m(0);
          return (e && parseFloat(ie(e.slide, d("marginRight")))) || 0;
        }
        function P() {
          return e.is(bs) || L(!0) > A();
        }
        return {
          mount: function () {
            var e, t, s;
            y(),
              l(
                window,
                "resize load",
                ((e = O(c, Xe)),
                (s = ft(t || 0, e, null, 1)),
                function () {
                  s.isPaused() && s.start();
                })
              ),
              r([Ve, We], y),
              r(Xe, b);
          },
          resize: b,
          listSize: A,
          slideSize: C,
          sliderSize: L,
          totalSize: _,
          getPadding: function (e) {
            return (
              parseFloat(ie(f, d("padding" + (e ? "Right" : "Left")))) || 0
            );
          },
          isOverflow: P,
        };
      },
      Clones: function (e, t, s) {
        var n,
          i = pt(e),
          o = i.on,
          a = t.Elements,
          r = t.Slides,
          l = t.Direction.resolve,
          c = [];
        function u() {
          o(We, d),
            o([Ve, Xe], p),
            (n = f()) &&
              (!(function (t) {
                var n = r.get().slice(),
                  i = n.length;
                if (i) {
                  for (; n.length < t; ) F(n, n);
                  F(n.slice(-t), n.slice(0, t)).forEach(function (o, l) {
                    var u = l < t,
                      d = (function (t, n) {
                        var i = t.cloneNode(!0);
                        return (
                          W(i, s.classes.clone),
                          (i.id = e.root.id + "-clone" + $e(n + 1)),
                          i
                        );
                      })(o.slide, l);
                    u ? X(d, n[0].slide) : V(a.list, d),
                      F(c, d),
                      r.register(d, l - t + (u ? 0 : i), o.index);
                  });
                }
              })(n),
              t.Layout.resize(!0));
        }
        function d() {
          h(), u();
        }
        function h() {
          ue(c), _(c), i.destroy();
        }
        function p() {
          var e = f();
          n !== e && (n < e || !e) && i.emit(We);
        }
        function f() {
          var n = s.clones;
          if (e.is(ys)) {
            if (I(n)) {
              var i = s[l("fixedWidth")] && t.Layout.slideSize(0);
              n =
                (i && Ce(ce(a.track)[l("width")] / i)) ||
                (s[l("autoWidth")] && e.length) ||
                s.perPage * ws;
            }
          } else n = 0;
          return n;
        }
        return { mount: u, destroy: h };
      },
      Move: function (e, t, s) {
        var n,
          i = pt(e),
          o = i.on,
          a = i.emit,
          r = e.state.set,
          l = t.Layout,
          c = l.slideSize,
          u = l.getPadding,
          d = l.totalSize,
          h = l.listSize,
          p = l.sliderSize,
          f = t.Direction,
          g = f.resolve,
          m = f.orient,
          v = t.Elements,
          y = v.list,
          w = v.track;
        function E() {
          t.Controller.isBusy() ||
            (t.Scroll.cancel(), A(e.index), t.Slides.update());
        }
        function A(e) {
          C(x(e, !0));
        }
        function C(s, n) {
          if (!e.is(bs)) {
            var i = n
              ? s
              : (function (s) {
                  if (e.is(ys)) {
                    var n = O(s),
                      i = n > t.Controller.getEnd();
                    (n < 0 || i) && (s = _(s, i));
                  }
                  return s;
                })(s);
            ie(y, "transform", "translate" + g("X") + "(" + i + "px)"),
              s !== i && a(dt);
          }
        }
        function _(e, t) {
          var s = e - k(t),
            n = p();
          return (e -= m(n * (Ce(_e(s) / n) || 1)) * (t ? 1 : -1));
        }
        function L() {
          C(P(), !0), n.cancel();
        }
        function O(e) {
          for (
            var s = t.Slides.get(), n = 0, i = 1 / 0, o = 0;
            o < s.length;
            o++
          ) {
            var a = s[o].index,
              r = _e(x(a, !0) - e);
            if (!(r <= i)) break;
            (i = r), (n = a);
          }
          return n;
        }
        function x(t, n) {
          var i = m(
            d(t - 1) -
              (function (e) {
                var t = s.focus;
                return "center" === t ? (h() - c(e, !0)) / 2 : +t * c(e) || 0;
              })(t)
          );
          return n
            ? (function (t) {
                s.trimSpace && e.is(vs) && (t = xe(t, 0, m(p(!0) - h())));
                return t;
              })(i)
            : i;
        }
        function P() {
          var e = g("left");
          return ce(y)[e] - ce(w)[e] + m(u(!1));
        }
        function k(e) {
          return x(e ? t.Controller.getEnd() : 0, !!s.trimSpace);
        }
        return {
          mount: function () {
            (n = t.Transition), o([Me, Ge, Ve, We], E);
          },
          move: function (e, t, s, i) {
            var o, l;
            e !== t &&
              ((o = e > s),
              (l = m(_(P(), o))),
              o ? l >= 0 : l <= y[g("scrollWidth")] - ce(w)[g("width")]) &&
              (L(), C(_(P(), e > s), !0)),
              r(S),
              a(Be, t, s, e),
              n.start(t, function () {
                r(b), a(je, t, s, e), i && i();
              });
          },
          jump: A,
          translate: C,
          shift: _,
          cancel: L,
          toIndex: O,
          toPosition: x,
          getPosition: P,
          getLimit: k,
          exceededLimit: function (e, t) {
            t = I(t) ? P() : t;
            var s = !0 !== e && m(t) < m(k(!1)),
              n = !1 !== e && m(t) > m(k(!0));
            return s || n;
          },
          reposition: E,
        };
      },
      Controller: function (e, t, s) {
        var n,
          i,
          o,
          a,
          r = pt(e),
          l = r.on,
          c = r.emit,
          u = t.Move,
          d = u.getPosition,
          h = u.getLimit,
          p = u.toPosition,
          f = t.Slides,
          g = f.isEnough,
          m = f.getLength,
          v = s.omitEnd,
          y = e.is(ys),
          b = e.is(vs),
          E = O(P, !1),
          A = O(P, !0),
          C = s.start || 0,
          _ = C;
        function L() {
          (i = m(!0)), (o = s.perMove), (a = s.perPage), (n = T());
          var e = xe(C, 0, v ? n : i - 1);
          e !== C && ((C = e), u.reposition());
        }
        function x() {
          n !== T() && c(ht);
        }
        function P(e, t) {
          var s = o || (j() ? 1 : a),
            i = k(C + s * (e ? -1 : 1), C, !(o || j()));
          return -1 === i && b && !Le(d(), h(!e), 1)
            ? e
              ? 0
              : n
            : t
            ? i
            : $(i);
        }
        function k(t, r, l) {
          if (g() || j()) {
            var c = (function (t) {
              if (b && "move" === s.trimSpace && t !== C)
                for (
                  var n = d();
                  n === p(t, !0) && Oe(t, 0, e.length - 1, !s.rewind);

                )
                  t < C ? --t : ++t;
              return t;
            })(t);
            c !== t && ((r = t), (t = c), (l = !1)),
              t < 0 || t > n
                ? (t =
                    o || (!Oe(0, t, r, !0) && !Oe(n, r, t, !0))
                      ? y
                        ? l
                          ? t < 0
                            ? -(i % a || a)
                            : i
                          : t
                        : s.rewind
                        ? t < 0
                          ? n
                          : 0
                        : -1
                      : q(D(t)))
                : l && t !== r && (t = q(D(r) + (t < r ? -1 : 1)));
          } else t = -1;
          return t;
        }
        function $(e) {
          return y ? (e + i) % i || 0 : e;
        }
        function T() {
          for (var e = i - (j() || (y && o) ? 1 : a); v && e-- > 0; )
            if (p(i - 1, !0) !== p(e, !0)) {
              e++;
              break;
            }
          return xe(e, 0, i - 1);
        }
        function q(e) {
          return xe(j() ? e : a * e, 0, n);
        }
        function D(e) {
          return j() ? we(e, n) : Ae((e >= n ? i - 1 : e) / a);
        }
        function B(e) {
          e !== C && ((_ = C), (C = e));
        }
        function j() {
          return !I(s.focus) || s.isNavigation;
        }
        function H() {
          return e.state.is([S, w]) && !!s.waitForTransition;
        }
        return {
          mount: function () {
            L(), l([Ve, We, ht], L), l(Ge, x);
          },
          go: function (e, t, s) {
            if (!H()) {
              var i = (function (e) {
                  var t = C;
                  if (M(e)) {
                    var s = e.match(/([+\-<>])(\d+)?/) || [],
                      i = s[1],
                      o = s[2];
                    "+" === i || "-" === i
                      ? (t = k(C + +("" + i + (+o || 1)), C))
                      : ">" === i
                      ? (t = o ? q(+o) : E(!0))
                      : "<" === i && (t = A(!0));
                  } else t = y ? e : xe(e, 0, n);
                  return t;
                })(e),
                o = $(i);
              o > -1 && (t || o !== C) && (B(o), u.move(i, o, _, s));
            }
          },
          scroll: function (e, s, i, o) {
            t.Scroll.scroll(e, s, i, function () {
              var e = $(u.toIndex(d()));
              B(v ? we(e, n) : e), o && o();
            });
          },
          getNext: E,
          getPrev: A,
          getAdjacent: P,
          getEnd: T,
          setIndex: B,
          getIndex: function (e) {
            return e ? _ : C;
          },
          toIndex: q,
          toPage: D,
          toDest: function (e) {
            var t = u.toIndex(e);
            return b ? xe(t, 0, n) : t;
          },
          hasFocus: j,
          isBusy: H,
        };
      },
      Arrows: function (e, t, s) {
        var n,
          i,
          o = pt(e),
          a = o.on,
          r = o.bind,
          l = o.emit,
          c = s.classes,
          u = s.i18n,
          d = t.Elements,
          h = t.Controller,
          p = d.arrows,
          f = d.track,
          g = p,
          m = d.prev,
          v = d.next,
          y = {};
        function b() {
          !(function () {
            var e = s.arrows;
            !e ||
              (m && v) ||
              ((g = p || ne("div", c.arrows)),
              (m = A(!0)),
              (v = A(!1)),
              (n = !0),
              V(g, [m, v]),
              !p && X(g, f));
            m &&
              v &&
              (Z(y, { prev: m, next: v }),
              oe(g, e ? "" : "none"),
              W(g, (i = Gt + "--" + s.direction)),
              e &&
                (a([Me, je, We, Ze, ht], C),
                r(v, "click", O(E, ">")),
                r(m, "click", O(E, "<")),
                C(),
                se([m, v], Ot, f.id),
                l(tt, m, v)));
          })(),
            a(Ve, S);
        }
        function S() {
          w(), b();
        }
        function w() {
          o.destroy(),
            ge(g, i),
            n ? (ue(p ? [m, v] : g), (m = v = null)) : te([m, v], jt);
        }
        function E(e) {
          h.go(e, !0);
        }
        function A(e) {
          return de(
            '<button class="' +
              c.arrow +
              " " +
              (e ? c.prev : c.next) +
              '" type="button"><svg xmlns="' +
              Es +
              '" viewBox="0 0 ' +
              Cs +
              " " +
              Cs +
              '" width="' +
              Cs +
              '" height="' +
              Cs +
              '" focusable="false"><path d="' +
              (s.arrowPath || As) +
              '" />'
          );
        }
        function C() {
          if (m && v) {
            var t = e.index,
              s = h.getPrev(),
              n = h.getNext(),
              i = s > -1 && t < s ? u.last : u.prev,
              o = n > -1 && t > n ? u.first : u.next;
            (m.disabled = s < 0),
              (v.disabled = n < 0),
              se(m, kt, i),
              se(v, kt, o),
              l(st, m, v, s, n);
          }
        }
        return { arrows: y, mount: b, destroy: w, update: C };
      },
      Autoplay: function (e, t, s) {
        var n,
          i,
          o = pt(e),
          a = o.on,
          r = o.bind,
          l = o.emit,
          c = ft(s.interval, e.go.bind(e, ">"), function (e) {
            var t = d.bar;
            t && ie(t, "width", 100 * e + "%"), l(rt, e);
          }),
          u = c.isPaused,
          d = t.Elements,
          h = t.Elements,
          p = h.root,
          f = h.toggle,
          g = s.autoplay,
          m = "pause" === g;
        function v() {
          u() &&
            t.Slides.isEnough() &&
            (c.start(!s.resetProgress), (i = n = m = !1), S(), l(at));
        }
        function y(e) {
          void 0 === e && (e = !0), (m = !!e), S(), u() || (c.pause(), l(lt));
        }
        function b() {
          m || (n || i ? y(!1) : v());
        }
        function S() {
          f && (R(f, ns, !m), se(f, kt, s.i18n[m ? "play" : "pause"]));
        }
        function w(e) {
          var n = t.Slides.getAt(e);
          c.set((n && +re(n.slide, _s)) || s.interval);
        }
        return {
          mount: function () {
            g &&
              (!(function () {
                s.pauseOnHover &&
                  r(p, "mouseenter mouseleave", function (e) {
                    (n = "mouseenter" === e.type), b();
                  });
                s.pauseOnFocus &&
                  r(p, "focusin focusout", function (e) {
                    (i = "focusin" === e.type), b();
                  });
                f &&
                  r(f, "click", function () {
                    m ? v() : y(!0);
                  });
                a([Be, Ke, We], c.rewind), a(Be, w);
              })(),
              f && se(f, Ot, d.track.id),
              m || v(),
              S());
          },
          destroy: c.cancel,
          play: v,
          pause: y,
          isPaused: u,
        };
      },
      Cover: function (e, t, s) {
        var n = pt(e).on;
        function i(e) {
          t.Slides.forEach(function (t) {
            var s = Y(t.container || t.slide, "img");
            s && s.src && o(e, s, t);
          });
        }
        function o(e, t, s) {
          s.style(
            "background",
            e ? 'center/cover no-repeat url("' + t.src + '")' : "",
            !0
          ),
            oe(t, e ? "none" : "");
        }
        return {
          mount: function () {
            s.cover && (n(ct, O(o, !0)), n([Me, Ve, We], O(i, !0)));
          },
          destroy: O(i, !1),
        };
      },
      Scroll: function (e, t, s) {
        var n,
          i,
          o = pt(e),
          a = o.on,
          r = o.emit,
          l = e.state.set,
          c = t.Move,
          u = c.getPosition,
          d = c.getLimit,
          h = c.exceededLimit,
          p = c.translate,
          f = e.is(vs),
          g = 1;
        function m(e, s, o, a, d) {
          var p = u();
          if ((S(), o && (!f || !h()))) {
            var m = t.Layout.sliderSize(),
              b = Pe(e) * m * Ae(_e(e) / m) || 0;
            e = c.toPosition(t.Controller.toDest(e % m)) + b;
          }
          var E = Le(p, e, 1);
          (g = 1),
            (s = E ? 0 : s || Ee(_e(e - p) / Ps, ks)),
            (i = a),
            (n = ft(s, v, O(y, p, e, d), 1)),
            l(w),
            r(Ke),
            n.start();
        }
        function v() {
          l(b), i && i(), r(Ze);
        }
        function y(e, t, n, o) {
          var a,
            r,
            l = u(),
            c =
              (e +
                (t - e) *
                  ((a = o),
                  (r = s.easingFunc) ? r(a) : 1 - Math.pow(1 - a, 4)) -
                l) *
              g;
          p(l + c),
            f &&
              !n &&
              h() &&
              ((g *= xs), _e(c) < Ls && m(d(h(!0)), Os, !1, i, !0));
        }
        function S() {
          n && n.cancel();
        }
        function E() {
          n && !n.isPaused() && (S(), v());
        }
        return {
          mount: function () {
            a(Be, S), a([Ve, We], E);
          },
          destroy: S,
          scroll: m,
          cancel: E,
        };
      },
      Drag: function (e, t, s) {
        var n,
          i,
          o,
          a,
          r,
          l,
          c,
          u,
          d = pt(e),
          h = d.on,
          p = d.emit,
          f = d.bind,
          g = d.unbind,
          m = e.state,
          v = t.Move,
          y = t.Scroll,
          A = t.Controller,
          C = t.Elements.track,
          _ = t.Media.reduce,
          L = t.Direction,
          O = L.resolve,
          x = L.orient,
          k = v.getPosition,
          $ = v.exceededLimit,
          q = !1;
        function D() {
          var e = s.drag;
          V(!e), (a = "free" === e);
        }
        function M(e) {
          if (((l = !1), !c)) {
            var t = W(e);
            (n = e.target),
              (i = s.noDrag),
              G(n, "." + Zt + ", ." + Ut) ||
                (i && G(n, i)) ||
                (!t && e.button) ||
                (A.isBusy()
                  ? he(e, !0)
                  : ((u = t ? C : window),
                    (r = m.is([S, w])),
                    (o = null),
                    f(u, gs, I, $s),
                    f(u, ms, B, $s),
                    v.cancel(),
                    y.cancel(),
                    H(e)));
          }
          var n, i;
        }
        function I(t) {
          if ((m.is(E) || (m.set(E), p(Ue)), t.cancelable))
            if (r) {
              v.translate(n + z(t) / (q && e.is(vs) ? hs : 1));
              var i = N(t) > ps,
                o = q !== (q = $());
              (i || o) && H(t), (l = !0), p(Ye), he(t);
            } else
              (function (e) {
                return _e(z(e)) > _e(z(e, !0));
              })(t) &&
                ((r = (function (e) {
                  var t = s.dragMinThreshold,
                    n = T(t),
                    i = (n && t.mouse) || 0,
                    o = (n ? t.touch : +t) || 10;
                  return _e(z(e)) > (W(e) ? o : i);
                })(t)),
                he(t));
        }
        function B(n) {
          m.is(E) && (m.set(b), p(Qe)),
            r &&
              (!(function (n) {
                var i = (function (t) {
                    if (e.is(ys) || !q) {
                      var s = N(t);
                      if (s && s < ps) return z(t) / s;
                    }
                    return 0;
                  })(n),
                  o = (function (e) {
                    return (
                      k() +
                      Pe(e) *
                        we(
                          _e(e) * (s.flickPower || 600),
                          a
                            ? 1 / 0
                            : t.Layout.listSize() * (s.flickMaxPages || 1)
                        )
                    );
                  })(i),
                  r = s.rewind && s.rewindByDrag;
                _(!1),
                  a
                    ? A.scroll(o, 0, s.snap)
                    : e.is(bs)
                    ? A.go(x(Pe(i)) < 0 ? (r ? "<" : "-") : r ? ">" : "+")
                    : e.is(vs) && q && r
                    ? A.go($(!0) ? ">" : "<")
                    : A.go(A.toDest(o), !0);
                _(!0);
              })(n),
              he(n)),
            g(u, gs, I),
            g(u, ms, B),
            (r = !1);
        }
        function j(e) {
          !c && l && he(e, !0);
        }
        function H(e) {
          (o = i), (i = e), (n = k());
        }
        function z(e, t) {
          return R(e, t) - R(F(e), t);
        }
        function N(e) {
          return me(e) - me(F(e));
        }
        function F(e) {
          return (i === e && o) || i;
        }
        function R(e, t) {
          return (W(e) ? e.changedTouches[0] : e)["page" + O(t ? "Y" : "X")];
        }
        function W(e) {
          return "undefined" != typeof TouchEvent && e instanceof TouchEvent;
        }
        function V(e) {
          c = e;
        }
        return {
          mount: function () {
            f(C, gs, P, $s),
              f(C, ms, P, $s),
              f(C, fs, M, $s),
              f(C, "click", j, { capture: !0 }),
              f(C, "dragstart", he),
              h([Me, Ve], D);
          },
          disable: V,
          isDragging: function () {
            return r;
          },
        };
      },
      Keyboard: function (e, t, s) {
        var n,
          i,
          o = pt(e),
          a = o.on,
          r = o.bind,
          l = o.unbind,
          c = e.root,
          u = t.Direction.resolve;
        function d() {
          var e = s.keyboard;
          e && ((n = "global" === e ? window : c), r(n, Ds, f));
        }
        function h() {
          l(n, Ds);
        }
        function p() {
          var e = i;
          (i = !0),
            x(function () {
              i = e;
            });
        }
        function f(t) {
          if (!i) {
            var s = qs(t);
            s === u(mt) ? e.go("<") : s === u(vt) && e.go(">");
          }
        }
        return {
          mount: function () {
            d(), a(Ve, h), a(Ve, d), a(Be, p);
          },
          destroy: h,
          disable: function (e) {
            i = e;
          },
        };
      },
      LazyLoad: function (e, t, s) {
        var n = pt(e),
          i = n.on,
          o = n.off,
          a = n.bind,
          r = n.emit,
          l = "sequential" === s.lazyLoad,
          c = [je, Ze],
          u = [];
        function d() {
          _(u),
            t.Slides.forEach(function (e) {
              fe(e.slide, Bs).forEach(function (t) {
                var n = re(t, Ms),
                  i = re(t, Is);
                if (n !== t.src || i !== t.srcset) {
                  var o = s.classes.spinner,
                    a = t.parentElement,
                    r = Y(a, "." + o) || ne("span", o, a);
                  u.push([t, e, r]), t.src || oe(t, "none");
                }
              });
            }),
            l ? g() : (o(c), i(c, h), h());
        }
        function h() {
          (u = u.filter(function (t) {
            var n = s.perPage * ((s.preloadPages || 1) + 1) - 1;
            return !t[1].isWithin(e.index, n) || p(t);
          })).length || o(c);
        }
        function p(e) {
          var t = e[0];
          W(e[1].slide, rs),
            a(t, "load error", O(f, e)),
            se(t, "src", re(t, Ms)),
            se(t, "srcset", re(t, Is)),
            te(t, Ms),
            te(t, Is);
        }
        function f(e, t) {
          var s = e[0],
            n = e[1];
          ge(n.slide, rs),
            "error" !== t.type && (ue(e[2]), oe(s, ""), r(ct, s, n), r(Xe)),
            l && g();
        }
        function g() {
          u.length && p(u.shift());
        }
        return {
          mount: function () {
            s.lazyLoad && (d(), i(We, d));
          },
          destroy: O(_, u),
          check: h,
        };
      },
      Pagination: function (e, t, s) {
        var n,
          i,
          o = pt(e),
          a = o.on,
          r = o.emit,
          l = o.bind,
          c = t.Slides,
          u = t.Elements,
          d = t.Controller,
          h = d.hasFocus,
          p = d.getIndex,
          f = d.go,
          g = t.Direction.resolve,
          m = u.pagination,
          v = [];
        function y() {
          n && (ue(m ? L(n.children) : n), ge(n, i), _(v), (n = null)),
            o.destroy();
        }
        function b(e) {
          f(">" + e, !0);
        }
        function S(e, t) {
          var s = v.length,
            n = qs(t),
            i = w(),
            o = -1;
          n === g(vt, !1, i)
            ? (o = ++e % s)
            : n === g(mt, !1, i)
            ? (o = (--e + s) % s)
            : "Home" === n
            ? (o = 0)
            : "End" === n && (o = s - 1);
          var a = v[o];
          a && (ae(a.button), f(">" + o), he(t, !0));
        }
        function w() {
          return s.paginationDirection || s.direction;
        }
        function E(e) {
          return v[d.toPage(e)];
        }
        function A() {
          var e = E(p(!0)),
            t = E(p());
          if (e) {
            var s = e.button;
            ge(s, ns), te(s, Pt), se(s, _t, -1);
          }
          if (t) {
            var i = t.button;
            W(i, ns), se(i, Pt, !0), se(i, _t, "");
          }
          r(it, { list: n, items: v }, e, t);
        }
        return {
          items: v,
          mount: function t() {
            y(), a([Ve, We, ht], t);
            var o = s.pagination;
            m && oe(m, o ? "" : "none"),
              o &&
                (a([Be, Ke, Ze], A),
                (function () {
                  var t = e.length,
                    o = s.classes,
                    a = s.i18n,
                    r = s.perPage,
                    p = h() ? d.getEnd() + 1 : Ce(t / r);
                  W(
                    (n = m || ne("ul", o.pagination, u.track.parentElement)),
                    (i = Kt + "--" + w())
                  ),
                    se(n, Ct, "tablist"),
                    se(n, kt, a.select),
                    se(n, qt, w() === wt ? "vertical" : "");
                  for (var f = 0; f < p; f++) {
                    var g = ne("li", null, n),
                      y = ne("button", { class: o.page, type: "button" }, g),
                      E = c.getIn(f).map(function (e) {
                        return e.slide.id;
                      }),
                      A = !h() && r > 1 ? a.pageX : a.slideX;
                    l(y, "click", O(b, f)),
                      s.paginationKeyboard && l(y, "keydown", O(S, f)),
                      se(g, Ct, "presentation"),
                      se(y, Ct, "tab"),
                      se(y, Ot, E.join(" ")),
                      se(y, kt, ke(A, f + 1)),
                      se(y, _t, -1),
                      v.push({ li: g, button: y, page: f });
                  }
                })(),
                A(),
                r(nt, { list: n, items: v }, E(e.index)));
          },
          destroy: y,
          getAt: E,
          update: A,
        };
      },
      Sync: function (e, t, s) {
        var n = s.isNavigation,
          i = s.slideFocus,
          o = [];
        function a() {
          var t, s;
          e.splides.forEach(function (t) {
            t.isParent || (l(e, t.splide), l(t.splide, e));
          }),
            n &&
              ((t = pt(e)),
              (s = t.on)(He, u),
              s(ut, d),
              s([Me, Ve], c),
              o.push(t),
              t.emit(ot, e.splides));
        }
        function r() {
          o.forEach(function (e) {
            e.destroy();
          }),
            _(o);
        }
        function l(e, t) {
          var s = pt(e);
          s.on(Be, function (e, s, n) {
            t.go(t.is(ys) ? n : e);
          }),
            o.push(s);
        }
        function c() {
          se(t.Elements.list, qt, s.direction === wt ? "vertical" : "");
        }
        function u(t) {
          e.go(t.index);
        }
        function d(e, t) {
          N(js, qs(t)) && (u(e), he(t));
        }
        return {
          setup: O(t.Media.set, { slideFocus: I(i) ? n : i }, !0),
          mount: a,
          destroy: r,
          remount: function () {
            r(), a();
          },
        };
      },
      Wheel: function (e, t, s) {
        var n = pt(e).bind,
          i = 0;
        function o(n) {
          if (n.cancelable) {
            var o = n.deltaY,
              a = o < 0,
              r = me(n),
              l = s.wheelMinThreshold || 0,
              c = s.wheelSleep || 0;
            _e(o) > l && r - i > c && (e.go(a ? "<" : ">"), (i = r)),
              (function (n) {
                return (
                  !s.releaseWheel ||
                  e.state.is(S) ||
                  -1 !== t.Controller.getAdjacent(n)
                );
              })(a) && he(n);
          }
        }
        return {
          mount: function () {
            s.wheel && n(t.Elements.track, "wheel", o, $s);
          },
        };
      },
      Live: function (e, t, s) {
        var n = pt(e).on,
          i = t.Elements.track,
          o = s.live && !s.isNavigation,
          a = ne("span", ts),
          r = ft(Hs, O(l, !1));
        function l(e) {
          se(i, It, e), e ? (V(i, a), r.start()) : (ue(a), r.cancel());
        }
        function c(e) {
          o && se(i, Mt, e ? "off" : "polite");
        }
        return {
          mount: function () {
            o &&
              (c(!t.Autoplay.isPaused()),
              se(i, Bt, !0),
              (a.textContent = "…"),
              n(at, O(c, !0)),
              n(lt, O(c, !1)),
              n([je, Ze], O(l, !0)));
          },
          disable: c,
          destroy: function () {
            te(i, [Mt, Bt, It]), ue(a);
          },
        };
      },
    }),
    Ns = {
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
      classes: ds,
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
  function Fs(e, t, s) {
    var n = t.Slides;
    function i() {
      n.forEach(function (e) {
        e.style("transform", "translateX(-" + 100 * e.index + "%)");
      });
    }
    return {
      mount: function () {
        pt(e).on([Me, We], i);
      },
      start: function (e, t) {
        n.style("transition", "opacity " + s.speed + "ms " + s.easing), x(t);
      },
      cancel: P,
    };
  }
  function Rs(e, t, s) {
    var n,
      i = t.Move,
      o = t.Controller,
      a = t.Scroll,
      r = t.Elements.list,
      l = O(ie, r, "transition");
    function c() {
      l(""), a.cancel();
    }
    return {
      mount: function () {
        pt(e).bind(r, "transitionend", function (e) {
          e.target === r && n && (c(), n());
        });
      },
      start: function (t, r) {
        var c = i.toPosition(t, !0),
          u = i.getPosition(),
          d = (function (t) {
            var n = s.rewindSpeed;
            if (e.is(vs) && n) {
              var i = o.getIndex(!0),
                a = o.getEnd();
              if ((0 === i && t >= a) || (i >= a && 0 === t)) return n;
            }
            return s.speed;
          })(t);
        _e(c - u) >= 1 && d >= 1
          ? s.useScroll
            ? a.scroll(c, d, !1, r)
            : (l("transform " + d + "ms " + s.easing),
              i.translate(c, !0),
              (n = r))
          : (i.jump(t), r());
      },
      cancel: c,
    };
  }
  var Ws = (function () {
    function e(t, s) {
      var n;
      (this.event = pt()),
        (this.Components = {}),
        (this.state =
          ((n = y),
          {
            set: function (e) {
              n = e;
            },
            is: function (e) {
              return N(H(e), n);
            },
          })),
        (this.splides = []),
        (this._o = {}),
        (this._E = {});
      var i = M(t) ? pe(document, t) : t;
      Se(i, i + " is invalid."),
        (this.root = i),
        (s = J(
          { label: re(i, kt) || "", labelledby: re(i, $t) || "" },
          Ns,
          e.defaults,
          s || {}
        ));
      try {
        J(s, JSON.parse(re(i, be)));
      } catch (e) {
        Se(!1, "Invalid JSON");
      }
      this._o = Object.create(J({}, s));
    }
    var t,
      s,
      n,
      i = e.prototype;
    return (
      (i.mount = function (e, t) {
        var s = this,
          n = this.state,
          i = this.Components;
        return (
          Se(n.is([y, A]), "Already mounted!"),
          n.set(y),
          (this._C = i),
          (this._T = t || this._T || (this.is(bs) ? Fs : Rs)),
          (this._E = e || this._E),
          K(Z({}, zs, this._E, { Transition: this._T }), function (e, t) {
            var n = e(s, i, s._o);
            (i[t] = n), n.setup && n.setup();
          }),
          K(i, function (e) {
            e.mount && e.mount();
          }),
          this.emit(Me),
          W(this.root, ss),
          n.set(b),
          this.emit(Ie),
          this
        );
      }),
      (i.sync = function (e) {
        return (
          this.splides.push({ splide: e }),
          e.splides.push({ splide: this, isParent: !0 }),
          this.state.is(b) &&
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
          (t = this.event).emit.apply(t, [e].concat(L(arguments, 1))), this
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
        return this.emit(We), this;
      }),
      (i.destroy = function (e) {
        void 0 === e && (e = !0);
        var t = this.event,
          s = this.state;
        return (
          s.is(y)
            ? pt(this).on(Ie, this.destroy.bind(this, e))
            : (K(
                this._C,
                function (t) {
                  t.destroy && t.destroy(e);
                },
                !0
              ),
              t.emit(et),
              t.destroy(),
              e && _(this.splides),
              s.set(A)),
          this
        );
      }),
      (t = e),
      (s = [
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
      ]) && m(t.prototype, s),
      n && m(t, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e
    );
  })();
  (Ws.defaults = {}), (Ws.STATES = C);
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
        i &&
          e.target.closest(".icon-menu") &&
          (o(), document.documentElement.classList.toggle("menu-open"));
      }),
    (function () {
      const e = document.querySelectorAll("[data-tabs]");
      let n = [];
      if (e.length > 0) {
        const t = (function () {
          if (location.hash) return location.hash.replace("#", "");
        })();
        t && t.startsWith("tab-") && (n = t.replace("tab-", "").split("-")),
          e.forEach((e, t) => {
            e.classList.add("_tab-init"),
              e.setAttribute("data-tabs-index", t),
              e.addEventListener("click", a),
              (function (e) {
                let t = e.querySelectorAll("[data-tabs-titles]>*"),
                  s = e.querySelectorAll("[data-tabs-body]>*");
                const i = e.dataset.tabsIndex,
                  o = n[0] == i;
                if (o) {
                  const t = e.querySelector("[data-tabs-titles]>._tab-active");
                  t && t.classList.remove("_tab-active");
                }
                s.length &&
                  ((s = Array.from(s).filter(
                    (t) => t.closest("[data-tabs]") === e
                  )),
                  (t = Array.from(t).filter(
                    (t) => t.closest("[data-tabs]") === e
                  )),
                  s.forEach((e, s) => {
                    t[s].setAttribute("data-tabs-title", ""),
                      e.setAttribute("data-tabs-item", ""),
                      o && s == n[1] && t[s].classList.add("_tab-active"),
                      (e.hidden = !t[s].classList.contains("_tab-active"));
                  }));
              })(e);
          });
        let s = c(e, "tabs");
        s &&
          s.length &&
          s.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              i(e.itemsArray, e.matchMedia);
            }),
              i(e.itemsArray, e.matchMedia);
          });
      }
      function i(e, t) {
        e.forEach((e) => {
          let s = (e = e.item).querySelector("[data-tabs-titles]"),
            n = e.querySelectorAll("[data-tabs-title]"),
            i = e.querySelector("[data-tabs-body]"),
            o = e.querySelectorAll("[data-tabs-item]");
          (n = Array.from(n).filter((t) => t.closest("[data-tabs]") === e)),
            (o = Array.from(o).filter((t) => t.closest("[data-tabs]") === e)),
            o.forEach((o, a) => {
              t.matches
                ? (i.append(n[a]), i.append(o), e.classList.add("_tab-spoller"))
                : (s.append(n[a]), e.classList.remove("_tab-spoller"));
            });
        });
      }
      function o(e) {
        let n = e.querySelectorAll("[data-tabs-title]"),
          i = e.querySelectorAll("[data-tabs-item]");
        const o = e.dataset.tabsIndex;
        const a = (function (e) {
          if (e.hasAttribute("data-tabs-animate"))
            return e.dataset.tabsAnimate > 0
              ? Number(e.dataset.tabsAnimate)
              : 500;
        })(e);
        if (i.length > 0) {
          const r = e.hasAttribute("data-tabs-hash");
          (i = Array.from(i).filter((t) => t.closest("[data-tabs]") === e)),
            (n = Array.from(n).filter((t) => t.closest("[data-tabs]") === e)),
            i.forEach((e, i) => {
              var l;
              n[i].classList.contains("_tab-active")
                ? (a ? s(e, a) : (e.hidden = !1),
                  r &&
                    !e.closest(".popup") &&
                    ((l = (l = `tab-${o}-${i}`)
                      ? `#${l}`
                      : window.location.href.split("#")[0]),
                    history.pushState("", "", l)))
                : a
                ? t(e, a)
                : (e.hidden = !0);
            });
        }
      }
      function a(e) {
        const t = e.target;
        if (t.closest("[data-tabs-title]")) {
          const s = t.closest("[data-tabs-title]"),
            n = s.closest("[data-tabs]");
          if (
            !s.classList.contains("_tab-active") &&
            !n.querySelector("._slide")
          ) {
            let e = n.querySelectorAll("[data-tabs-title]._tab-active");
            e.length &&
              (e = Array.from(e).filter((e) => e.closest("[data-tabs]") === n)),
              e.length && e[0].classList.remove("_tab-active"),
              s.classList.add("_tab-active"),
              o(n);
          }
          e.preventDefault();
        }
      }
    })(),
    (function () {
      d = !0;
      const e = document.querySelector("header.header"),
        t = e.hasAttribute("data-scroll-show"),
        s = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
        n = e.dataset.scroll ? e.dataset.scroll : 1;
      let i,
        o = 0;
      document.addEventListener("windowScroll", function (a) {
        const r = window.scrollY;
        clearTimeout(i),
          r >= n
            ? (!e.classList.contains("_header-scroll") &&
                e.classList.add("_header-scroll"),
              t &&
                (r > o
                  ? e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")
                  : !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show"),
                (i = setTimeout(() => {
                  !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show");
                }, s))))
            : (e.classList.contains("_header-scroll") &&
                e.classList.remove("_header-scroll"),
              t &&
                e.classList.contains("_header-show") &&
                e.classList.remove("_header-show")),
          (o = r <= 0 ? 0 : r);
      });
    })(),
    new Ws(".splide", {
      rewind: !0,
      rewindByDrag: !0,
      breakpoints: { 1230: { arrows: !1 } },
    }).mount(),
    new Ws("#sliderCompanies", {
      perPage: 6,
      perMove: 1,
      pagination: !1,
      gap: 30,
      rewind: !0,
      rewindByDrag: !0,
      breakpoints: {
        1230: { perPage: 5, gap: 20, arrows: !1 },
        1024: { perPage: 4, gap: 20 },
        867: { perPage: 3 },
        640: { perPage: 2 },
        480: { perPage: 1 },
      },
    }).mount(),
    new Ws("#slidernews", {
      perPage: 5,
      perMove: 1,
      pagination: !1,
      gap: 30,
      rewind: !0,
      rewindByDrag: !0,
      breakpoints: {
        1630: { perPage: 4, gap: 20 },
        1334: { perPage: 3, gap: 20, arrows: !1 },
        1e3: { perPage: 2 },
        740: { perPage: 1.5 },
        500: { perPage: 1.2 },
        410: { perPage: 1.1 },
        370: { perPage: 1 },
      },
    }).mount();
})();
