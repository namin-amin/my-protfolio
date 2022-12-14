const dt = function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && i(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerpolicy && (o.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
};
dt();
function F() {}
const Ue = (t) => t;
function Ye(t) {
  return t();
}
function je() {
  return Object.create(null);
}
function X(t) {
  t.forEach(Ye);
}
function Ve(t) {
  return typeof t == "function";
}
function J(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
function mt(t) {
  return Object.keys(t).length === 0;
}
const Ke = typeof window != "undefined";
let pt = Ke ? () => window.performance.now() : () => Date.now(),
  xe = Ke ? (t) => requestAnimationFrame(t) : F;
const K = new Set();
function Qe(t) {
  K.forEach((e) => {
    e.c(t) || (K.delete(e), e.f());
  }),
    K.size !== 0 && xe(Qe);
}
function vt(t) {
  let e;
  return (
    K.size === 0 && xe(Qe),
    {
      promise: new Promise((n) => {
        K.add((e = { c: t, f: n }));
      }),
      abort() {
        K.delete(e);
      },
    }
  );
}
function g(t, e) {
  t.appendChild(e);
}
function Xe(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function ht(t) {
  const e = h("style");
  return bt(Xe(t), e), e.sheet;
}
function bt(t, e) {
  g(t.head || t, e);
}
function w(t, e, n) {
  t.insertBefore(e, n || null);
}
function y(t) {
  t.parentNode.removeChild(t);
}
function h(t) {
  return document.createElement(t);
}
function Ee(t) {
  return document.createTextNode(t);
}
function E() {
  return Ee(" ");
}
function gt() {
  return Ee("");
}
function Z(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function yt(t) {
  return function (e) {
    e.target === this && t.call(this, e);
  };
}
function u(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function wt(t) {
  return Array.from(t.childNodes);
}
function kt(t, e) {
  (e = "" + e), t.wholeText !== e && (t.data = e);
}
function S(t, e, n, i) {
  n === null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, i ? "important" : "");
}
function V(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function _t(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(t, n, i, e), r;
}
const pe = new Map();
let ve = 0;
function $t(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function xt(t, e) {
  const n = { stylesheet: ht(e), rules: {} };
  return pe.set(t, n), n;
}
function Ae(t, e, n, i, r, o, s, a = 0) {
  const c = 16.666 / i;
  let l = `{
`;
  for (let C = 0; C <= 1; C += c) {
    const $ = e + (n - e) * o(C);
    l +=
      C * 100 +
      `%{${s($, 1 - $)}}
`;
  }
  const d =
      l +
      `100% {${s(n, 1 - n)}}
}`,
    p = `__svelte_${$t(d)}_${a}`,
    f = Xe(t),
    { stylesheet: v, rules: b } = pe.get(f) || xt(f, t);
  b[p] ||
    ((b[p] = !0), v.insertRule(`@keyframes ${p} ${d}`, v.cssRules.length));
  const j = t.style.animation || "";
  return (
    (t.style.animation = `${
      j ? `${j}, ` : ""
    }${p} ${i}ms linear ${r}ms 1 both`),
    (ve += 1),
    p
  );
}
function Et(t, e) {
  const n = (t.style.animation || "").split(", "),
    i = n.filter(
      e ? (o) => o.indexOf(e) < 0 : (o) => o.indexOf("__svelte") === -1
    ),
    r = n.length - i.length;
  r && ((t.style.animation = i.join(", ")), (ve -= r), ve || Ct());
}
function Ct() {
  xe(() => {
    ve ||
      (pe.forEach((t) => {
        const { stylesheet: e } = t;
        let n = e.cssRules.length;
        for (; n--; ) e.deleteRule(n);
        t.rules = {};
      }),
      pe.clear());
  });
}
let se;
function ae(t) {
  se = t;
}
function jt() {
  if (!se) throw new Error("Function called outside component initialization");
  return se;
}
function At(t) {
  jt().$$.on_mount.push(t);
}
function be(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const oe = [],
  Oe = [],
  ue = [],
  Se = [],
  Ot = Promise.resolve();
let _e = !1;
function St() {
  _e || ((_e = !0), Ot.then(Je));
}
function le(t) {
  ue.push(t);
}
const ge = new Set();
let ce = 0;
function Je() {
  const t = se;
  do {
    for (; ce < oe.length; ) {
      const e = oe[ce];
      ce++, ae(e), Nt(e.$$);
    }
    for (ae(null), oe.length = 0, ce = 0; Oe.length; ) Oe.pop()();
    for (let e = 0; e < ue.length; e += 1) {
      const n = ue[e];
      ge.has(n) || (ge.add(n), n());
    }
    ue.length = 0;
  } while (oe.length);
  for (; Se.length; ) Se.pop()();
  (_e = !1), ge.clear(), ae(t);
}
function Nt(t) {
  if (t.fragment !== null) {
    t.update(), X(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(le);
  }
}
let re;
function Lt() {
  return (
    re ||
      ((re = Promise.resolve()),
      re.then(() => {
        re = null;
      })),
    re
  );
}
function ye(t, e, n) {
  t.dispatchEvent(_t(`${e ? "intro" : "outro"}${n}`));
}
const de = new Set();
let H;
function Ze() {
  H = { r: 0, c: [], p: H };
}
function et() {
  H.r || X(H.c), (H = H.p);
}
function T(t, e) {
  t && t.i && (de.delete(t), t.i(e));
}
function I(t, e, n, i) {
  if (t && t.o) {
    if (de.has(t)) return;
    de.add(t),
      H.c.push(() => {
        de.delete(t), i && (n && t.d(1), i());
      }),
      t.o(e);
  }
}
const Tt = { duration: 0 };
function Ne(t, e, n, i) {
  let r = e(t, n),
    o = i ? 0 : 1,
    s = null,
    a = null,
    c = null;
  function l() {
    c && Et(t, c);
  }
  function d(f, v) {
    const b = f.b - o;
    return (
      (v *= Math.abs(b)),
      {
        a: o,
        b: f.b,
        d: b,
        duration: v,
        start: f.start,
        end: f.start + v,
        group: f.group,
      }
    );
  }
  function p(f) {
    const {
        delay: v = 0,
        duration: b = 300,
        easing: j = Ue,
        tick: C = F,
        css: $,
      } = r || Tt,
      A = { start: pt() + v, b: f };
    f || ((A.group = H), (H.r += 1)),
      s || a
        ? (a = A)
        : ($ && (l(), (c = Ae(t, o, f, b, v, j, $))),
          f && C(0, 1),
          (s = d(A, b)),
          le(() => ye(t, f, "start")),
          vt((z) => {
            if (
              (a &&
                z > a.start &&
                ((s = d(a, b)),
                (a = null),
                ye(t, s.b, "start"),
                $ && (l(), (c = Ae(t, o, s.b, s.duration, 0, j, r.css)))),
              s)
            ) {
              if (z >= s.end)
                C((o = s.b), 1 - o),
                  ye(t, s.b, "end"),
                  a || (s.b ? l() : --s.group.r || X(s.group.c)),
                  (s = null);
              else if (z >= s.start) {
                const D = z - s.start;
                (o = s.a + s.d * j(D / s.duration)), C(o, 1 - o);
              }
            }
            return !!(s || a);
          }));
  }
  return {
    run(f) {
      Ve(r)
        ? Lt().then(() => {
            (r = r()), p(f);
          })
        : p(f);
    },
    end() {
      l(), (s = a = null);
    },
  };
}
function Q(t) {
  t && t.c();
}
function G(t, e, n, i) {
  const { fragment: r, on_mount: o, on_destroy: s, after_update: a } = t.$$;
  r && r.m(e, n),
    i ||
      le(() => {
        const c = o.map(Ye).filter(Ve);
        s ? s.push(...c) : X(c), (t.$$.on_mount = []);
      }),
    a.forEach(le);
}
function U(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (X(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function zt(t, e) {
  t.$$.dirty[0] === -1 && (oe.push(t), St(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function ee(t, e, n, i, r, o, s, a = [-1]) {
  const c = se;
  ae(t);
  const l = (t.$$ = {
    fragment: null,
    ctx: null,
    props: o,
    update: F,
    not_equal: r,
    bound: je(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: je(),
    dirty: a,
    skip_bound: !1,
    root: e.target || c.$$.root,
  });
  s && s(l.root);
  let d = !1;
  if (
    ((l.ctx = n
      ? n(t, e.props || {}, (p, f, ...v) => {
          const b = v.length ? v[0] : f;
          return (
            l.ctx &&
              r(l.ctx[p], (l.ctx[p] = b)) &&
              (!l.skip_bound && l.bound[p] && l.bound[p](b), d && zt(t, p)),
            f
          );
        })
      : []),
    l.update(),
    (d = !0),
    X(l.before_update),
    (l.fragment = i ? i(l.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const p = wt(e.target);
      l.fragment && l.fragment.l(p), p.forEach(y);
    } else l.fragment && l.fragment.c();
    e.intro && T(t.$$.fragment),
      G(t, e.target, e.anchor, e.customElement),
      Je();
  }
  ae(c);
}
class te {
  $destroy() {
    U(this, 1), (this.$destroy = F);
  }
  $on(e, n) {
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      i.push(n),
      () => {
        const r = i.indexOf(n);
        r !== -1 && i.splice(r, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !mt(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
var R =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {},
  tt = "Expected a function",
  Le = 0 / 0,
  Mt = "[object Symbol]",
  It = /^\s+|\s+$/g,
  Pt = /^[-+]0x[0-9a-f]+$/i,
  Ht = /^0b[01]+$/i,
  Dt = /^0o[0-7]+$/i,
  qt = parseInt,
  Rt = typeof R == "object" && R && R.Object === Object && R,
  Wt = typeof self == "object" && self && self.Object === Object && self,
  Bt = Rt || Wt || Function("return this")(),
  Ft = Object.prototype,
  Gt = Ft.toString,
  Ut = Math.max,
  Yt = Math.min,
  we = function () {
    return Bt.Date.now();
  };
function Vt(t, e, n) {
  var i,
    r,
    o,
    s,
    a,
    c,
    l = 0,
    d = !1,
    p = !1,
    f = !0;
  if (typeof t != "function") throw new TypeError(tt);
  (e = Te(e) || 0),
    he(n) &&
      ((d = !!n.leading),
      (p = "maxWait" in n),
      (o = p ? Ut(Te(n.maxWait) || 0, e) : o),
      (f = "trailing" in n ? !!n.trailing : f));
  function v(m) {
    var k = i,
      O = r;
    return (i = r = void 0), (l = m), (s = t.apply(O, k)), s;
  }
  function b(m) {
    return (l = m), (a = setTimeout($, e)), d ? v(m) : s;
  }
  function j(m) {
    var k = m - c,
      O = m - l,
      M = e - k;
    return p ? Yt(M, o - O) : M;
  }
  function C(m) {
    var k = m - c,
      O = m - l;
    return c === void 0 || k >= e || k < 0 || (p && O >= o);
  }
  function $() {
    var m = we();
    if (C(m)) return A(m);
    a = setTimeout($, j(m));
  }
  function A(m) {
    return (a = void 0), f && i ? v(m) : ((i = r = void 0), s);
  }
  function z() {
    a !== void 0 && clearTimeout(a), (l = 0), (i = c = r = a = void 0);
  }
  function D() {
    return a === void 0 ? s : A(we());
  }
  function N() {
    var m = we(),
      k = C(m);
    if (((i = arguments), (r = this), (c = m), k)) {
      if (a === void 0) return b(c);
      if (p) return (a = setTimeout($, e)), v(c);
    }
    return a === void 0 && (a = setTimeout($, e)), s;
  }
  return (N.cancel = z), (N.flush = D), N;
}
function Kt(t, e, n) {
  var i = !0,
    r = !0;
  if (typeof t != "function") throw new TypeError(tt);
  return (
    he(n) &&
      ((i = "leading" in n ? !!n.leading : i),
      (r = "trailing" in n ? !!n.trailing : r)),
    Vt(t, e, { leading: i, maxWait: e, trailing: r })
  );
}
function he(t) {
  var e = typeof t;
  return !!t && (e == "object" || e == "function");
}
function Qt(t) {
  return !!t && typeof t == "object";
}
function Xt(t) {
  return typeof t == "symbol" || (Qt(t) && Gt.call(t) == Mt);
}
function Te(t) {
  if (typeof t == "number") return t;
  if (Xt(t)) return Le;
  if (he(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = he(e) ? e + "" : e;
  }
  if (typeof t != "string") return t === 0 ? t : +t;
  t = t.replace(It, "");
  var n = Ht.test(t);
  return n || Dt.test(t) ? qt(t.slice(2), n ? 2 : 8) : Pt.test(t) ? Le : +t;
}
var Jt = Kt,
  Zt = "Expected a function",
  ze = 0 / 0,
  en = "[object Symbol]",
  tn = /^\s+|\s+$/g,
  nn = /^[-+]0x[0-9a-f]+$/i,
  rn = /^0b[01]+$/i,
  on = /^0o[0-7]+$/i,
  an = parseInt,
  sn = typeof R == "object" && R && R.Object === Object && R,
  ln = typeof self == "object" && self && self.Object === Object && self,
  cn = sn || ln || Function("return this")(),
  fn = Object.prototype,
  un = fn.toString,
  dn = Math.max,
  mn = Math.min,
  ke = function () {
    return cn.Date.now();
  };
function pn(t, e, n) {
  var i,
    r,
    o,
    s,
    a,
    c,
    l = 0,
    d = !1,
    p = !1,
    f = !0;
  if (typeof t != "function") throw new TypeError(Zt);
  (e = Me(e) || 0),
    $e(n) &&
      ((d = !!n.leading),
      (p = "maxWait" in n),
      (o = p ? dn(Me(n.maxWait) || 0, e) : o),
      (f = "trailing" in n ? !!n.trailing : f));
  function v(m) {
    var k = i,
      O = r;
    return (i = r = void 0), (l = m), (s = t.apply(O, k)), s;
  }
  function b(m) {
    return (l = m), (a = setTimeout($, e)), d ? v(m) : s;
  }
  function j(m) {
    var k = m - c,
      O = m - l,
      M = e - k;
    return p ? mn(M, o - O) : M;
  }
  function C(m) {
    var k = m - c,
      O = m - l;
    return c === void 0 || k >= e || k < 0 || (p && O >= o);
  }
  function $() {
    var m = ke();
    if (C(m)) return A(m);
    a = setTimeout($, j(m));
  }
  function A(m) {
    return (a = void 0), f && i ? v(m) : ((i = r = void 0), s);
  }
  function z() {
    a !== void 0 && clearTimeout(a), (l = 0), (i = c = r = a = void 0);
  }
  function D() {
    return a === void 0 ? s : A(ke());
  }
  function N() {
    var m = ke(),
      k = C(m);
    if (((i = arguments), (r = this), (c = m), k)) {
      if (a === void 0) return b(c);
      if (p) return (a = setTimeout($, e)), v(c);
    }
    return a === void 0 && (a = setTimeout($, e)), s;
  }
  return (N.cancel = z), (N.flush = D), N;
}
function $e(t) {
  var e = typeof t;
  return !!t && (e == "object" || e == "function");
}
function vn(t) {
  return !!t && typeof t == "object";
}
function hn(t) {
  return typeof t == "symbol" || (vn(t) && un.call(t) == en);
}
function Me(t) {
  if (typeof t == "number") return t;
  if (hn(t)) return ze;
  if ($e(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = $e(e) ? e + "" : e;
  }
  if (typeof t != "string") return t === 0 ? t : +t;
  t = t.replace(tn, "");
  var n = rn.test(t);
  return n || on.test(t) ? an(t.slice(2), n ? 2 : 8) : nn.test(t) ? ze : +t;
}
var Ie = pn,
  nt = function () {};
function it(t) {
  var e = void 0,
    n = void 0,
    i = void 0;
  for (e = 0; e < t.length; e += 1)
    if (
      ((n = t[e]),
      (n.dataset && n.dataset.aos) || ((i = n.children && it(n.children)), i))
    )
      return !0;
  return !1;
}
function bn(t) {
  !t ||
    t.forEach(function (e) {
      var n = Array.prototype.slice.call(e.addedNodes),
        i = Array.prototype.slice.call(e.removedNodes),
        r = n.concat(i);
      if (it(r)) return nt();
    });
}
function rt() {
  return (
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver
  );
}
function gn() {
  return !!rt();
}
function yn(t, e) {
  var n = window.document,
    i = rt(),
    r = new i(bn);
  (nt = e),
    r.observe(n.documentElement, {
      childList: !0,
      subtree: !0,
      removedNodes: !0,
    });
}
var Pe = { isSupported: gn, ready: yn },
  wn = function (t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  },
  kn = (function () {
    function t(e, n) {
      for (var i = 0; i < n.length; i++) {
        var r = n[i];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    return function (e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    };
  })(),
  _n =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
      return t;
    },
  $n =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
  xn =
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
  En =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
  Cn =
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
function He() {
  return navigator.userAgent || navigator.vendor || window.opera || "";
}
var jn = (function () {
    function t() {
      wn(this, t);
    }
    return (
      kn(t, [
        {
          key: "phone",
          value: function () {
            var n = He();
            return !!($n.test(n) || xn.test(n.substr(0, 4)));
          },
        },
        {
          key: "mobile",
          value: function () {
            var n = He();
            return !!(En.test(n) || Cn.test(n.substr(0, 4)));
          },
        },
        {
          key: "tablet",
          value: function () {
            return this.mobile() && !this.phone();
          },
        },
        {
          key: "ie11",
          value: function () {
            return (
              "-ms-scroll-limit" in document.documentElement.style &&
              "-ms-ime-align" in document.documentElement.style
            );
          },
        },
      ]),
      t
    );
  })(),
  me = new jn(),
  An = function (e, n) {
    return (
      n &&
      n.forEach(function (i) {
        return e.classList.add(i);
      })
    );
  },
  On = function (e, n) {
    return (
      n &&
      n.forEach(function (i) {
        return e.classList.remove(i);
      })
    );
  },
  fe = function (e, n) {
    var i = void 0;
    return (
      me.ie11()
        ? ((i = document.createEvent("CustomEvent")),
          i.initCustomEvent(e, !0, !0, { detail: n }))
        : (i = new CustomEvent(e, { detail: n })),
      document.dispatchEvent(i)
    );
  },
  Sn = function (e, n) {
    var i = e.options,
      r = e.position,
      o = e.node;
    e.data;
    var s = function () {
        !e.animated ||
          (On(o, i.animatedClassNames),
          fe("aos:out", o),
          e.options.id && fe("aos:in:" + e.options.id, o),
          (e.animated = !1));
      },
      a = function () {
        e.animated ||
          (An(o, i.animatedClassNames),
          fe("aos:in", o),
          e.options.id && fe("aos:in:" + e.options.id, o),
          (e.animated = !0));
      };
    i.mirror && n >= r.out && !i.once
      ? s()
      : n >= r.in
      ? a()
      : e.animated && !i.once && s();
  },
  De = function (e) {
    return e.forEach(function (n, i) {
      return Sn(n, window.pageYOffset);
    });
  },
  ot = function (e) {
    for (var n = 0, i = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
      (n += e.offsetLeft - (e.tagName != "BODY" ? e.scrollLeft : 0)),
        (i += e.offsetTop - (e.tagName != "BODY" ? e.scrollTop : 0)),
        (e = e.offsetParent);
    return { top: i, left: n };
  },
  W = function (t, e, n) {
    var i = t.getAttribute("data-aos-" + e);
    if (typeof i != "undefined") {
      if (i === "true") return !0;
      if (i === "false") return !1;
    }
    return i || n;
  },
  Nn = function (e, n, i) {
    var r = window.innerHeight,
      o = W(e, "anchor"),
      s = W(e, "anchor-placement"),
      a = Number(W(e, "offset", s ? 0 : n)),
      c = s || i,
      l = e;
    o && document.querySelectorAll(o) && (l = document.querySelectorAll(o)[0]);
    var d = ot(l).top - r;
    switch (c) {
      case "top-bottom":
        break;
      case "center-bottom":
        d += l.offsetHeight / 2;
        break;
      case "bottom-bottom":
        d += l.offsetHeight;
        break;
      case "top-center":
        d += r / 2;
        break;
      case "center-center":
        d += r / 2 + l.offsetHeight / 2;
        break;
      case "bottom-center":
        d += r / 2 + l.offsetHeight;
        break;
      case "top-top":
        d += r;
        break;
      case "bottom-top":
        d += r + l.offsetHeight;
        break;
      case "center-top":
        d += r + l.offsetHeight / 2;
        break;
    }
    return d + a;
  },
  Ln = function (e, n) {
    var i = W(e, "anchor"),
      r = W(e, "offset", n),
      o = e;
    i && document.querySelectorAll(i) && (o = document.querySelectorAll(i)[0]);
    var s = ot(o).top;
    return s + o.offsetHeight - r;
  },
  Tn = function (e, n) {
    return (
      e.forEach(function (i, r) {
        var o = W(i.node, "mirror", n.mirror),
          s = W(i.node, "once", n.once),
          a = W(i.node, "id"),
          c = n.useClassNames && i.node.getAttribute("data-aos"),
          l = [n.animatedClassName]
            .concat(c ? c.split(" ") : [])
            .filter(function (d) {
              return typeof d == "string";
            });
        n.initClassName && i.node.classList.add(n.initClassName),
          (i.position = {
            in: Nn(i.node, n.offset, n.anchorPlacement),
            out: o && Ln(i.node, n.offset),
          }),
          (i.options = { once: s, mirror: o, animatedClassNames: l, id: a });
      }),
      e
    );
  },
  at = function () {
    var t = document.querySelectorAll("[data-aos]");
    return Array.prototype.map.call(t, function (e) {
      return { node: e };
    });
  },
  P = [],
  qe = !1,
  _ = {
    offset: 120,
    delay: 0,
    easing: "ease",
    duration: 400,
    disable: !1,
    once: !1,
    mirror: !1,
    anchorPlacement: "top-bottom",
    startEvent: "DOMContentLoaded",
    animatedClassName: "aos-animate",
    initClassName: "aos-init",
    useClassNames: !1,
    disableMutationObserver: !1,
    throttleDelay: 99,
    debounceDelay: 50,
  },
  st = function () {
    return document.all && !window.atob;
  },
  zn = function () {
    return (
      (P = Tn(P, _)),
      De(P),
      window.addEventListener(
        "scroll",
        Jt(function () {
          De(P, _.once);
        }, _.throttleDelay)
      ),
      P
    );
  },
  B = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    e && (qe = !0), qe && zn();
  },
  lt = function () {
    if (((P = at()), ft(_.disable) || st())) return ct();
    B();
  },
  ct = function () {
    P.forEach(function (e, n) {
      e.node.removeAttribute("data-aos"),
        e.node.removeAttribute("data-aos-easing"),
        e.node.removeAttribute("data-aos-duration"),
        e.node.removeAttribute("data-aos-delay"),
        _.initClassName && e.node.classList.remove(_.initClassName),
        _.animatedClassName && e.node.classList.remove(_.animatedClassName);
    });
  },
  ft = function (e) {
    return (
      e === !0 ||
      (e === "mobile" && me.mobile()) ||
      (e === "phone" && me.phone()) ||
      (e === "tablet" && me.tablet()) ||
      (typeof e == "function" && e() === !0)
    );
  },
  Mn = function (e) {
    return (
      (_ = _n(_, e)),
      (P = at()),
      !_.disableMutationObserver &&
        !Pe.isSupported() &&
        (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
        (_.disableMutationObserver = !0)),
      _.disableMutationObserver || Pe.ready("[data-aos]", lt),
      ft(_.disable) || st()
        ? ct()
        : (document
            .querySelector("body")
            .setAttribute("data-aos-easing", _.easing),
          document
            .querySelector("body")
            .setAttribute("data-aos-duration", _.duration),
          document
            .querySelector("body")
            .setAttribute("data-aos-delay", _.delay),
          ["DOMContentLoaded", "load"].indexOf(_.startEvent) === -1
            ? document.addEventListener(_.startEvent, function () {
                B(!0);
              })
            : window.addEventListener("load", function () {
                B(!0);
              }),
          _.startEvent === "DOMContentLoaded" &&
            ["complete", "interactive"].indexOf(document.readyState) > -1 &&
            B(!0),
          window.addEventListener("resize", Ie(B, _.debounceDelay, !0)),
          window.addEventListener(
            "orientationchange",
            Ie(B, _.debounceDelay, !0)
          ),
          P)
    );
  },
  In = { init: Mn, refresh: B, refreshHard: lt };
function Pn(t) {
  let e, n, i, r, o, s, a, c, l, d, p;
  return {
    c() {
      (e = h("a")),
        (e.textContent = "Paper Plane icon by Icons8"),
        (n = E()),
        (i = h("a")),
        (i.textContent = "LinkedIn icon by Icons8"),
        (r = E()),
        (o = h("a")),
        (o.textContent = "GitHub icon by Icons8"),
        (s = E()),
        (a = h("a")),
        (a.textContent = "Download Resume icon by Icons8"),
        (c = E()),
        (l = h("a")),
        (l.textContent = "Laptop icon by Icons8"),
        (d = E()),
        (p = h("a")),
        (p.textContent = "Mail icon by Icons8"),
        u(e, "href", "https://icons8.com/icon/12582/paper-plane"),
        u(i, "href", "https://icons8.com/icon/85044/linkedin"),
        u(o, "href", "https://icons8.com/icon/12598/github"),
        u(a, "href", "https://icons8.com/icon/45586/download-resume"),
        u(l, "href", "https://icons8.com/icon/59820/laptop"),
        u(p, "href", "https://icons8.com/icon/53388/mail");
    },
    m(f, v) {
      w(f, e, v),
        w(f, n, v),
        w(f, i, v),
        w(f, r, v),
        w(f, o, v),
        w(f, s, v),
        w(f, a, v),
        w(f, c, v),
        w(f, l, v),
        w(f, d, v),
        w(f, p, v);
    },
    p: F,
    i: F,
    o: F,
    d(f) {
      f && y(e),
        f && y(n),
        f && y(i),
        f && y(r),
        f && y(o),
        f && y(s),
        f && y(a),
        f && y(c),
        f && y(l),
        f && y(d),
        f && y(p);
    },
  };
}
class Hn extends te {
  constructor(e) {
    super(), ee(this, e, null, Pn, J, {});
  }
}
function Re(t) {
  let e, n;
  return (
    (e = new Hn({})),
    {
      c() {
        Q(e.$$.fragment);
      },
      m(i, r) {
        G(e, i, r), (n = !0);
      },
      i(i) {
        n || (T(e.$$.fragment, i), (n = !0));
      },
      o(i) {
        I(e.$$.fragment, i), (n = !1);
      },
      d(i) {
        U(e, i);
      },
    }
  );
}
function Dn(t) {
  let e,
    n,
    i,
    r,
    o,
    s,
    a,
    c,
    l = t[0] && Re();
  return {
    c() {
      (e = h("div")),
        (e.innerHTML = `<div class="container1 svelte-un8fzm"><div><h3>LinkedIn</h3> 
      <a href="https://www.linkedin.com/in/navaneesh-n-amin-1a9660128/" target="_blank"><img src="https://img.icons8.com/material-outlined/96/292f36/linkedin--v1.png" alt="linkedin" id="linkdin" class="svelte-un8fzm"/></a></div> 

    <div><h3>Github</h3> 
      <a href="https://github.com/namin-amin
      " target="_blank"><img src="https://img.icons8.com/ios/100/292f36/github--v1.png" alt="github" id="github" class="svelte-un8fzm"/></a></div></div> 
  <div title="thi is me \u{1F913}"><h3>Contact me</h3> 
    <img src="dp.jpeg" alt="profile" class="profilepic svelte-un8fzm"/></div> 
  <div class="container2 svelte-un8fzm"><div title="mail me at:  navaneesh185@gmail.com"><h3>Mail</h3> 
      <a href="mailto:navaneesh185@gmail.com" target="_blank"><img src="https://img.icons8.com/ios/100/292f36/mail.png" alt="mail" id="mail" class="svelte-un8fzm"/></a></div> 

    <div title="View Resume"><h3>Resume/CV</h3> 
      <a href="https://drive.google.com/file/d/1glbKA5bYXqVmK1M8xj7lq9wd-aJWsdoh/view?usp=sharing
      " target="_blank"><img src="https://img.icons8.com/ios/100/292f36/open-resume.png" alt="resume/cv" id="resume" class="svelte-un8fzm"/></a></div></div>`),
        (n = E()),
        (i = h("div")),
        l && l.c(),
        (r = E()),
        (o = h("button")),
        (o.textContent = "showAttributes"),
        u(e, "class", "about svelte-un8fzm"),
        S(i, "display", "flex"),
        S(i, "flex-direction", "column"),
        S(o, "position", "fixed"),
        S(o, "bottom", "0"),
        S(o, "right", "0"),
        S(o, "color", "gray"),
        S(o, "border", "none"),
        S(o, "cursor", "pointer");
    },
    m(d, p) {
      w(d, e, p),
        w(d, n, p),
        w(d, i, p),
        l && l.m(i, null),
        w(d, r, p),
        w(d, o, p),
        (s = !0),
        a || ((c = Z(o, "click", t[1])), (a = !0));
    },
    p(d, [p]) {
      d[0]
        ? l
          ? p & 1 && T(l, 1)
          : ((l = Re()), l.c(), T(l, 1), l.m(i, null))
        : l &&
          (Ze(),
          I(l, 1, 1, () => {
            l = null;
          }),
          et());
    },
    i(d) {
      s || (T(l), (s = !0));
    },
    o(d) {
      I(l), (s = !1);
    },
    d(d) {
      d && y(e),
        d && y(n),
        d && y(i),
        l && l.d(),
        d && y(r),
        d && y(o),
        (a = !1),
        c();
    },
  };
}
function qn(t, e, n) {
  let i = !1;
  return [i, () => n(0, (i = !i))];
}
class Rn extends te {
  constructor(e) {
    super(), ee(this, e, qn, Dn, J, {});
  }
}
function We(t, { delay: e = 0, duration: n = 400, easing: i = Ue } = {}) {
  const r = +getComputedStyle(t).opacity;
  return { delay: e, duration: n, easing: i, css: (o) => `opacity: ${o * r}` };
}
function Be(t) {
  let e,
    n,
    i,
    r,
    o,
    s,
    a = t[1] === "aero" && Fe(t),
    c = t[1] === "dev" && Ge(t);
  return {
    c() {
      (e = h("div")),
        a && a.c(),
        (n = E()),
        c && c.c(),
        u(e, "class", "backdrop svelte-h9phdx");
    },
    m(l, d) {
      w(l, e, d),
        a && a.m(e, null),
        g(e, n),
        c && c.m(e, null),
        (r = !0),
        o || ((s = Z(e, "click", yt(t[2]))), (o = !0));
    },
    p(l, d) {
      l[1] === "aero"
        ? a || ((a = Fe(l)), a.c(), a.m(e, n))
        : a && (a.d(1), (a = null)),
        l[1] === "dev"
          ? c || ((c = Ge(l)), c.c(), c.m(e, null))
          : c && (c.d(1), (c = null));
    },
    i(l) {
      r ||
        (le(() => {
          i || (i = Ne(e, We, {}, !0)), i.run(1);
        }),
        (r = !0));
    },
    o(l) {
      i || (i = Ne(e, We, {}, !1)), i.run(0), (r = !1);
    },
    d(l) {
      l && y(e), a && a.d(), c && c.d(), l && i && i.end(), (o = !1), s();
    },
  };
}
function Fe(t) {
  let e, n, i, r, o, s;
  return {
    c() {
      (e = h("div")),
        (n = h("div")),
        (n.innerHTML = `<h2 class="svelte-h9phdx">Expeience</h2> 
          <p>Production Enginner at <a href="https://www.aequs.com/aerospace/" target="_blank" class="svelte-h9phdx">Aequs Aerospace Pvt Ltd (2018-2020)</a></p> 
          <br/> 
          <h2 class="svelte-h9phdx">Skills</h2> 
          <p>Handson experience with CNC milling</p> 
          <p>Assembly of Aerospace Comonents</p> 
          <p>CAE/CAM</p> 
          <br/> 
          <h2 class="svelte-h9phdx">Certifications</h2> 
          <p>3Dexperince from <a href="https://www.linkedin.com/company/aerocoe/about/" target="_blank" class="svelte-h9phdx">Centre of Excellence in Aerospace &amp; Defence</a></p> 
          <p><a href="https://drive.google.com/file/d/1sKLa5Iky5W_3LTVi0G-bczrlhuUnzElP/view?usp=sharing" target="_blank" class="svelte-h9phdx">introduction to Six-Sigma Concepts</a></p>`),
        (i = E()),
        (r = h("div")),
        (r.textContent = "Back"),
        S(n, "padding", "0 2rem 0 2rem"),
        S(n, "box-sizing", "border-box"),
        u(r, "class", "closebutton svelte-h9phdx"),
        u(e, "class", "modal svelte-h9phdx");
    },
    m(a, c) {
      w(a, e, c),
        g(e, n),
        g(e, i),
        g(e, r),
        o || ((s = Z(r, "click", t[4])), (o = !0));
    },
    d(a) {
      a && y(e), (o = !1), s();
    },
  };
}
function Ge(t) {
  let e, n, i, r, o, s;
  return {
    c() {
      (e = h("div")),
        (n = h("div")),
        (n.innerHTML = `<h2 class="svelte-h9phdx">Experience</h2> 
          <p>Programming Engineer @<a href="https://www.winmansoftware.com/" class="svelte-h9phdx">Winman Software</a></p> 
          
          <h2 class="svelte-h9phdx">Skills</h2> 
          <p>.NET Framework &amp; .NET</p> 
          <p>React, nodejs , Svelte, Nestjs, ASP.Net</p> 
          <p>Electronjs</p> 
          <p>Python</p> 

          <h2 class="svelte-h9phdx">Certifications</h2> 
          <p><a href="https://www.udemy.com/certificate/UC-4480aeb2-1a93-427c-822e-44d5a83ebd32/" class="svelte-h9phdx">Web Development Bootcamp</a></p>`),
        (i = E()),
        (r = h("div")),
        (r.textContent = "Back"),
        S(n, "padding", "0 2rem 0 2rem"),
        S(n, "box-sizing", "border-box"),
        u(r, "class", "closebutton svelte-h9phdx"),
        u(e, "class", "modal modal2 svelte-h9phdx");
    },
    m(a, c) {
      w(a, e, c),
        g(e, n),
        g(e, i),
        g(e, r),
        o || ((s = Z(r, "click", t[3])), (o = !0));
    },
    d(a) {
      a && y(e), (o = !1), s();
    },
  };
}
function Wn(t) {
  let e,
    n,
    i = t[0] && Be(t);
  return {
    c() {
      i && i.c(), (e = gt());
    },
    m(r, o) {
      i && i.m(r, o), w(r, e, o), (n = !0);
    },
    p(r, [o]) {
      r[0]
        ? i
          ? (i.p(r, o), o & 1 && T(i, 1))
          : ((i = Be(r)), i.c(), T(i, 1), i.m(e.parentNode, e))
        : i &&
          (Ze(),
          I(i, 1, 1, () => {
            i = null;
          }),
          et());
    },
    i(r) {
      n || (T(i), (n = !0));
    },
    o(r) {
      I(i), (n = !1);
    },
    d(r) {
      i && i.d(r), r && y(e);
    },
  };
}
function Bn(t, e, n) {
  let { showmodal: i = !1 } = e,
    { skilltype: r } = e;
  function o(c) {
    be.call(this, t, c);
  }
  function s(c) {
    be.call(this, t, c);
  }
  function a(c) {
    be.call(this, t, c);
  }
  return (
    (t.$$set = (c) => {
      "showmodal" in c && n(0, (i = c.showmodal)),
        "skilltype" in c && n(1, (r = c.skilltype));
    }),
    [i, r, o, s, a]
  );
}
class ut extends te {
  constructor(e) {
    super(), ee(this, e, Bn, Wn, J, { showmodal: 0, skilltype: 1 });
  }
}
function Fn(t) {
  let e, n, i, r, o, s;
  return (
    (e = new ut({ props: { showmodal: t[0], skilltype: "aero" } })),
    e.$on("click", t[1]),
    {
      c() {
        Q(e.$$.fragment),
          (n = E()),
          (i = h("section")),
          (i.innerHTML = `<div><img src="https://img.icons8.com/ios/150/ffffff/paper-plane.png" alt="aeroplane pic" class="svelte-3hy4fn"/> 
    <h1>Aerospace</h1> 
    <p class="svelte-3hy4fn">An expreienced Aerospace manufacturing engineer</p> 
    <p class="svelte-3hy4fn">Hads-on experience in cnc milling and Assemblies</p></div>`),
          u(i, "class", "svelte-3hy4fn");
      },
      m(a, c) {
        G(e, a, c),
          w(a, n, c),
          w(a, i, c),
          (r = !0),
          o || ((s = Z(i, "click", t[2])), (o = !0));
      },
      p(a, [c]) {
        const l = {};
        c & 1 && (l.showmodal = a[0]), e.$set(l);
      },
      i(a) {
        r || (T(e.$$.fragment, a), (r = !0));
      },
      o(a) {
        I(e.$$.fragment, a), (r = !1);
      },
      d(a) {
        U(e, a), a && y(n), a && y(i), (o = !1), s();
      },
    }
  );
}
function Gn(t, e, n) {
  let i = !1;
  return [i, () => n(0, (i = !i)), () => n(0, (i = !i))];
}
class Un extends te {
  constructor(e) {
    super(), ee(this, e, Gn, Fn, J, {});
  }
}
function Yn(t) {
  let e, n, i, r, o, s;
  return (
    (e = new ut({ props: { showmodal: t[0], skilltype: "dev" } })),
    e.$on("click", t[1]),
    {
      c() {
        Q(e.$$.fragment),
          (n = E()),
          (i = h("section")),
          (i.innerHTML = `<div><img src="https://img.icons8.com/ios-glyphs/150/ffffff/laptop.png" alt="laptop pic" class="svelte-3hy4fn"/> 
    <h1>Development</h1> 
    <p class="svelte-3hy4fn">Started with DAQ Development</p> 
    <p class="svelte-3hy4fn">Fluent in Web-technologies Like nodejs and React</p></div>`),
          u(i, "class", "svelte-3hy4fn");
      },
      m(a, c) {
        G(e, a, c),
          w(a, n, c),
          w(a, i, c),
          (r = !0),
          o || ((s = Z(i, "click", t[2])), (o = !0));
      },
      p(a, [c]) {
        const l = {};
        c & 1 && (l.showmodal = a[0]), e.$set(l);
      },
      i(a) {
        r || (T(e.$$.fragment, a), (r = !0));
      },
      o(a) {
        I(e.$$.fragment, a), (r = !1);
      },
      d(a) {
        U(e, a), a && y(n), a && y(i), (o = !1), s();
      },
    }
  );
}
function Vn(t, e, n) {
  let i = !1;
  return [i, () => n(0, (i = !i)), () => n(0, (i = !i))];
}
class Kn extends te {
  constructor(e) {
    super(), ee(this, e, Vn, Yn, J, {});
  }
}
function Qn(t) {
  let e,
    n,
    i,
    r,
    o,
    s,
    a,
    c,
    l,
    d,
    p,
    f,
    v,
    b,
    j,
    C,
    $,
    A,
    z,
    D,
    N,
    m,
    k,
    O,
    M,
    Ce,
    ne,
    L,
    Y,
    ie;
  return (
    (k = new Kn({})),
    (M = new Un({})),
    (Y = new Rn({})),
    {
      c() {
        (e = h("nav")),
          (n = h("ul")),
          (i = h("li")),
          (r = h("a")),
          (r.textContent = "Home"),
          (o = E()),
          (s = h("li")),
          (a = h("a")),
          (a.textContent = "Skills"),
          (c = E()),
          (l = h("li")),
          (d = h("a")),
          (d.textContent = "Contact"),
          (p = E()),
          (f = h("main")),
          (v = h("div")),
          (b = h("div")),
          (j = h("h1")),
          (j.textContent = "Navaneesh Amin"),
          (C = E()),
          ($ = h("div")),
          (A = h("h2")),
          (z = Ee(t[1])),
          (D = E()),
          (N = h("div")),
          (m = h("div")),
          Q(k.$$.fragment),
          (O = E()),
          Q(M.$$.fragment),
          (Ce = E()),
          (ne = h("div")),
          (L = h("div")),
          Q(Y.$$.fragment),
          u(r, "href", "#intro"),
          u(r, "class", "active svelte-1h7dvpj"),
          V(r, "active", t[0] === "intro"),
          u(i, "class", "svelte-1h7dvpj"),
          u(a, "href", "#skills"),
          u(a, "class", "svelte-1h7dvpj"),
          V(a, "active-skills", t[0] === "skills"),
          u(s, "class", "svelte-1h7dvpj"),
          u(d, "href", "#contact"),
          u(d, "class", "svelte-1h7dvpj"),
          V(d, "active", t[0] === "contact"),
          u(l, "class", "svelte-1h7dvpj"),
          u(n, "class", "navbar svelte-1h7dvpj"),
          u(e, "class", "svelte-1h7dvpj"),
          u(j, "class", "heading svelte-1h7dvpj"),
          u(A, "class", "subtitle svelte-1h7dvpj"),
          S($, "display", "flex"),
          u(b, "class", "content svelte-1h7dvpj"),
          u(b, "data-aos", "slide-down"),
          u(b, "data-aos-offset", "200"),
          u(b, "data-aos-delay", "70"),
          u(b, "data-aos-duration", "1000"),
          u(b, "data-aos-easing", "ease-in-out"),
          u(b, "data-aos-mirror", "true"),
          u(b, "data-aos-once", "false"),
          u(b, "data-aos-anchor-placement", "top-center"),
          S(b, "flex-direction", "column"),
          u(v, "class", "page svelte-1h7dvpj"),
          u(v, "id", "intro"),
          u(m, "class", "content svelte-1h7dvpj"),
          u(m, "data-aos", "fade"),
          u(m, "data-aos-offset", "200"),
          u(m, "data-aos-delay", "50"),
          u(m, "data-aos-duration", "800"),
          u(m, "data-aos-easing", "ease-in-out"),
          u(m, "data-aos-mirror", "true"),
          u(m, "data-aos-once", "false"),
          u(m, "data-aos-anchor-placement", "top-center"),
          u(N, "class", "page svelte-1h7dvpj"),
          u(N, "id", "skills"),
          u(L, "class", "content svelte-1h7dvpj"),
          u(L, "data-aos", "fade"),
          u(L, "data-aos-offset", "200"),
          u(L, "data-aos-delay", "50"),
          u(L, "data-aos-duration", "1000"),
          u(L, "data-aos-easing", "ease-in-out"),
          u(L, "data-aos-mirror", "true"),
          u(L, "data-aos-once", "false"),
          u(L, "data-aos-anchor-placement", "top-center"),
          u(L, "data-aos-id", "contact-in"),
          u(ne, "class", "page svelte-1h7dvpj"),
          u(ne, "id", "contact"),
          u(f, "class", "container");
      },
      m(x, q) {
        w(x, e, q),
          g(e, n),
          g(n, i),
          g(i, r),
          g(n, o),
          g(n, s),
          g(s, a),
          g(n, c),
          g(n, l),
          g(l, d),
          w(x, p, q),
          w(x, f, q),
          g(f, v),
          g(v, b),
          g(b, j),
          g(b, C),
          g(b, $),
          g($, A),
          g(A, z),
          g(f, D),
          g(f, N),
          g(N, m),
          G(k, m, null),
          g(m, O),
          G(M, m, null),
          g(f, Ce),
          g(f, ne),
          g(ne, L),
          G(Y, L, null),
          (ie = !0);
      },
      p(x, [q]) {
        q & 1 && V(r, "active", x[0] === "intro"),
          q & 1 && V(a, "active-skills", x[0] === "skills"),
          q & 1 && V(d, "active", x[0] === "contact"),
          (!ie || q & 2) && kt(z, x[1]);
      },
      i(x) {
        ie ||
          (T(k.$$.fragment, x),
          T(M.$$.fragment, x),
          T(Y.$$.fragment, x),
          (ie = !0));
      },
      o(x) {
        I(k.$$.fragment, x),
          I(M.$$.fragment, x),
          I(Y.$$.fragment, x),
          (ie = !1);
      },
      d(x) {
        x && y(e), x && y(p), x && y(f), U(k), U(M), U(Y);
      },
    }
  );
}
function Xn(t, e, n) {
  In.init();
  let i = "intro",
    r,
    o = window.innerHeight,
    s = "Software Developer \u{1F913}";
  At(() => {
    document.addEventListener("scroll", (c) => {
      n(2, (r = window.scrollY));
    }),
      setInterval(a, 4e3);
  });
  const a = () => {
    s === "Software Developer \u{1F913}"
      ? n(1, (s = "And An Aero Engineer \u{1F609}"))
      : n(1, (s = "Software Developer \u{1F913}"));
  };
  return (
    (t.$$.update = () => {
      t.$$.dirty & 4 &&
        (r < o
          ? n(0, (i = "intro"))
          : r >= o && r < o * 2
          ? n(0, (i = "skills"))
          : r === o * 2 && n(0, (i = "contact")));
    }),
    [i, s, r]
  );
}
class Jn extends te {
  constructor(e) {
    super(), ee(this, e, Xn, Qn, J, {});
  }
}
new Jn({ target: document.getElementById("app") });