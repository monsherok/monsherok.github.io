(() => {
  "use strict";
  (async function () {
    try {
      const t = await fetch("https://dpg.gg/test/calendar.json");
      if (t.ok) {
        return await t.json();
      }
      return console.error("Failed to fetch contributions:", t.status), null;
    } catch (t) {
      return console.error("Failed to fetch contributions:", t), null;
    }
  })().then((t) =>
    s(
      (function (t) {
        const e = {},
          n = Object.keys(t);
        for (let o = n.length - 1; o >= 0; o--) {
          const r = n[o];
          e[r] = t[r];
        }
        return e;
      })(t)
    )
  );
  const t = new Date(),
    e = new Date(
      (function (t) {
        const e = t.getFullYear(),
          n = String(t.getMonth() + 1).padStart(2, "0"),
          o = String(t.getDate()).padStart(2, "0");
        return `${e}-${n}-${o}`;
      })(t)
    ),
    n = new Date(e.getTime() - 308448e5),
    o = document.createElement("table");
  let r = null,
    a = null;
  const c = document.createElement("tr");
  for (let t = 0; t <= 51; t++) {
    const e = document.createElement("th"),
      o = new Date(n.getTime() + 7 * t * 24 * 60 * 60 * 1e3).toLocaleDateString(
        "ru-RU",
        { month: "short" }
      );
    0 == t && (r = o),
      51 != t || r != o
        ? (50 == t &&
            r == o &&
            (c.querySelector(`[data-month=${o}]`).textContent = ""),
          o !== a &&
            ((e.textContent = o), e.setAttribute("data-month", o), (a = o)),
          c.appendChild(e))
        : c.appendChild(e);
  }
  o.appendChild(c);
  for (let t = 0; t < 7; t++) {
    const t = document.createElement("tr"),
      e = document.createElement("td");
    t.appendChild(e);
    for (let e = 1; e <= 51; e++) {
      const e = document.createElement("td");
      t.appendChild(e);
    }
    o.appendChild(t);
  }
  const l = document.querySelector(".squares"),
    i = document.querySelector(".info");
  function u(t, o) {
    const r = new Date(t),
      a = Math.floor((r.getTime() - n.getTime()) / 864e5);
    let c = Math.floor(a / 7),
      l = r.getDay(),
      i = e.getDay();
    0 === l && (l = 7), 0 === i && (i = 7), l < i && (c += 1);
    const u = document.querySelector(
      "table tr:nth-child(" + (l + 1) + ") td:nth-child(" + (c + 1) + ")"
    );
    if (!u) return;
    u.querySelector(".tooltip") && u.querySelector(".tooltip").remove();
    const s = document.createElement("div");
    s.classList.add("tooltip"),
      (s.innerHTML = `<div class='tooltip__text'>${
        0 === o ? "No" : o
      } contributions</div><div class='tooltip__date'>${(function (t) {
        const e = new Date(t),
          n = [
            "Воскресенье",
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота",
          ][e.getDay()],
          o = [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
          ][e.getMonth()],
          r = e.getDate(),
          a = e.getFullYear(),
          c = `${n}, ${o} ${r}, ${a}`;
        return c;
      })(t)}</div>`),
      u.appendChild(s),
      u.setAttribute(
        "data-level",
        (function (t) {
          switch (!0) {
            case 0 == t:
              return "0";
            case t >= 1 && t <= 9:
              return "1";
            case t >= 10 && t <= 19:
              return "2";
            case t >= 20 && t <= 29:
              return "3";
            case t >= 30:
              return "4";
            default:
              return "0";
          }
        })(o)
      );
  }
  function s(t) {
    for (let e in t) u(e, t[e]);
  }
  l.insertBefore(o, i),
    s(
      (function (t = 0) {
        const n = new Date(e.getFullYear() - 1, e.getMonth(), e.getDate()),
          o = {};
        for (let t = 0; t <= 365; t++) {
          const e = new Date(n.getTime() + 24 * t * 60 * 60 * 1e3);
          o[
            `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(e.getDate()).padStart(2, "0")}`
          ] = 0;
        }
        return o;
      })()
    );
})();
