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
    u(
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
    e = new Date(t.getTime() - 308448e5),
    n = document.createElement("table");
  let o = null,
    r = null;
  const c = document.createElement("tr");
  for (let t = 0; t <= 51; t++) {
    const n = document.createElement("th"),
      a = new Date(e.getTime() + 7 * t * 24 * 60 * 60 * 1e3).toLocaleDateString(
        "ru-RU",
        { month: "short" }
      );
    0 == t && (o = a),
      51 != t || o != a
        ? (50 == t &&
            o == a &&
            (c.querySelector(`[data-month=${a}]`).textContent = ""),
          a !== r &&
            ((n.textContent = a), n.setAttribute("data-month", a), (r = a)),
          c.appendChild(n))
        : c.appendChild(n);
  }
  n.appendChild(c);
  for (let t = 0; t < 7; t++) {
    const t = document.createElement("tr"),
      e = document.createElement("td");
    t.appendChild(e);
    for (let e = 1; e <= 51; e++) {
      const e = document.createElement("td");
      t.appendChild(e);
    }
    n.appendChild(t);
  }
  const a = document.querySelector(".squares"),
    l = document.querySelector(".info");
  function i(n, o) {
    const r = new Date(n),
      c = Math.floor((r.getTime() - e.getTime()) / 864e5);
    let a = Math.floor(c / 7),
      l = r.getDay(),
      i = t.getDay();
    0 === l && (l = 7), 0 === i && (i = 7), l <= i && (a += 1);
    const u = document.querySelector(
      "table tr:nth-child(" + (l + 1) + ") td:nth-child(" + (a + 1) + ")"
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
          c = e.getFullYear();
        return `${n}, ${o} ${r}, ${c}`;
      })(n)}</div>`),
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
  function u(t) {
    for (let e in t) i(e, t[e]);
  }
  a.insertBefore(n, l),
    u(
      (function (e = 0) {
        const n = new Date(t.getFullYear() - 1, t.getMonth(), t.getDate()),
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
