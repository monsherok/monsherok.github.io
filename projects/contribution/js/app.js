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
  function i(t, n) {
    const o = new Date(t),
      r = Math.floor((o.getTime() - e.getTime()) / 864e5);
    let c = Math.floor(r / 7),
      a = o.getDay();
    0 === a && (a = 7), 1 === a && (c += 1);
    const l = document.querySelector(
      "table tr:nth-child(" + (a + 1) + ") td:nth-child(" + (c + 1) + ")"
    );
    if (!l) return;
    l.querySelector(".tooltip") && l.querySelector(".tooltip").remove();
    const i = document.createElement("div");
    i.classList.add("tooltip"),
      (i.innerHTML = `<div class='tooltip__text'>${
        0 === n ? "No" : n
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
      })(t)}</div>`),
      l.appendChild(i),
      l.setAttribute(
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
        })(n)
      );
  }
  function u(t) {
    for (let e in t) i(e, t[e]);
  }
  a.insertBefore(n, l),
    u(
      (function () {
        const t = new Date(),
          e = new Date(t.getFullYear() - 1, t.getMonth(), t.getDate()),
          n = {};
        for (let t = 0; t < 365; t++) {
          const o = new Date(e.getTime() + 24 * t * 60 * 60 * 1e3);
          n[
            `${o.getFullYear()}-${String(o.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(o.getDate()).padStart(2, "0")}`
          ] = 0;
        }
        return n;
      })()
    );
})();
