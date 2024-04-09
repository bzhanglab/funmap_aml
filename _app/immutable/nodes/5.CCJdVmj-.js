import {
	t as W,
	s as H,
	c as P,
	o as Q,
	a as r,
	b as s,
	d as R,
	i as $,
	m as ee,
} from "../chunks/disclose-version.G76goc0E.js";
import {
	a as X,
	p as Y,
	h as J,
	g as K,
	s as h,
} from "../chunks/runtime.CKBWl8gs.js";
import { i as te } from "../chunks/if.BRpKpGmk.js";
import {
	p as O,
	o as Z,
	b as U,
	a as T,
} from "../chunks/main-client.CMEboYaW.js";
import { A as re, f as se } from "../chunks/Fetcher.CTYW50Zj.js";
import { m as ne, D as ae } from "../chunks/Dag.3tA49ip-.js";
var oe = R(
	'<div class="grid grid-cols-3 gap-4 items-center grid-flow-col-dense mt-10"><div class="col-span-2"><div class=" flex-col text-center justify-center justify-center z-0"><h1 class="text-2xl font-bold"> </h1> <div class="w-full grow"></div></div></div> <div><div class="border border-black z-1"><!></div> <h2 class="text-l font-bold">Neighborhood Members</h2> <article class="prose w-full"><p class="text-overflow leading-normal"></p></article></div></div>',
);
function ie(x, c) {
	X(c, !0);
	let v;
	const y = O(c, "dag_options", 11, () => ({})),
		L = O(c, "table_data", 11, () => []),
		d = O(c, "color_info", 11, () => ({})),
		g = ne(y(), { title: { text: "Clique Graph" } });
	let f;
	function k(e) {
		const i = Number.parseFloat(e);
		return Number.isNaN(i) ? e : C(i).toString();
	}
	function C(e) {
		return Math.abs(e) < 0.01
			? e.toExponential(2)
			: `${Math.round(e * 100) / 100}`;
	}
	function M(e) {
		const i = document.createElement("h2");
		i.classList.add("text-xl"),
			i.classList.add("font-bold"),
			i.classList.add("text-left"),
			i.classList.add("mt-5"),
			(i.innerHTML = e.title),
			f.appendChild(i);
		const b = document.createElement("h3");
		b.classList.add("text-sm"),
			b.classList.add("text-left"),
			(b.innerHTML = e.description),
			f.appendChild(b);
		const w = document.createElement("table"),
			t = [
				"table",
				"table-sm",
				"table-zebra",
				"w-full",
				"grow",
				"mt-1",
				"overflow-x-auto",
				"overflow-y-auto",
				"max-h-96",
			];
		w.classList.add(...t);
		const a = document.createElement("thead"),
			o = document.createElement("tbody"),
			p = document.createElement("tr");
		for (let n = 0; n < e.headers.length; n++) {
			const u = document.createElement("th");
			(u.innerHTML = e.headers[n]), p.appendChild(u);
		}
		a.appendChild(p), w.appendChild(a);
		for (let n = 0; n < e.rows.length; n++) {
			const u = document.createElement("tr");
			for (let m = 0; m < e.rows[n].length; m++) {
				const l = document.createElement("td");
				(l.innerHTML = k(e.rows[n][m])),
					e.rows[n][m].includes("href") && l.classList.add("link"),
					u.appendChild(l);
			}
			if (e.has_color) {
				const m = document.createElement("td"),
					l = document.createElement("button");
				l.classList.add("btn"),
					l.classList.add("btn-sm"),
					l.classList.add("btn-ghost"),
					(l.innerHTML = "Color Nodes"),
					l.addEventListener("click", () => {
						I(d()[e.rows[n][0]]);
					}),
					m.appendChild(l),
					u.appendChild(m);
			}
			o.appendChild(u);
		}
		w.appendChild(o), f.appendChild(w);
	}
	let _;
	function I(e) {
		_(e);
	}
	Z(() => {
		for (let e = 0; e < L().length; e++) M(L()[e]);
		v.innerText = c.dag_data.nodes.map((e) => e.name).join(", ");
	});
	var j = Q(x, !0, oe),
		N = r(j),
		S = r(N),
		B = r(S),
		z = r(B),
		A = s(s(B, !0));
	U(
		A,
		(e) => (f = e),
		() => f,
	);
	var D = s(s(N, !0)),
		E = r(D),
		G = r(E),
		V = s(s(E, !0)),
		q = s(s(V, !0)),
		F = r(q);
	U(
		F,
		(e) => (v = e),
		() => v,
	),
		W(z, () => `Neighborhood ${H(c.subnetwork_id)}`),
		ae(G, {
			get update_values() {
				return _;
			},
			set update_values(e) {
				_ = e;
			},
			get init_dag_data() {
				return c.dag_data;
			},
			init_dag_options: g,
			dag_width: "100%",
		}),
		P(x, j),
		Y();
}
var le = {
		name: "biography",
		version: "0.0.1",
		private: !0,
		scripts: {
			dev: "vite dev",
			build: "vite build",
			preview: "vite preview",
			test: "npm run test:integration && npm run test:unit",
			check: "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
			"check:watch":
				"svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
			lint: "prettier --check . && eslint .",
			format: "prettier --write .",
			"test:integration": "playwright test",
			"test:unit": "vitest",
			fix: "eslint --fix .",
		},
		devDependencies: {
			"@biomejs/biome": "1.6.1",
			"@playwright/test": "^1.28.1",
			"@sveltejs/adapter-auto": "^3.0.0",
			"@sveltejs/adapter-static": "^3.0.1",
			"@sveltejs/kit": "^2.0.0",
			"@sveltejs/vite-plugin-svelte": "^3.0.0",
			"@tailwindcss/typography": "^0.5.10",
			"@types/eslint": "^8.56.0",
			"@typescript-eslint/eslint-plugin": "^7.0.0",
			"@typescript-eslint/parser": "^7.0.0",
			autoprefixer: "^10.4.19",
			daisyui: "^4.7.3",
			eslint: "^8.56.0",
			"eslint-config-prettier": "^9.1.0",
			"eslint-plugin-import": "^2.29.1",
			"eslint-plugin-svelte": "^2.36.0-next.4",
			postcss: "^8.4.38",
			prettier: "^3.1.1",
			"prettier-plugin-svelte": "^3.1.2",
			svelte: "^5.0.0-next.1",
			"svelte-check": "^3.6.0",
			tailwindcss: "^3.4.1",
			tslib: "^2.4.1",
			typescript: "^5.0.0",
			vite: "^5.0.3",
			vitest: "^1.2.0",
		},
		type: "module",
		dependencies: {
			"@fontsource-variable/dm-sans": "^5.0.4",
			echarts: "^5.5.0",
		},
	},
	ce = () => {
		document.getElementById("search_error_container").classList.add("hidden");
	},
	de = R(
		'<div class="flex justify-center justify-items-center mt-2 space-x-4"><div class="flex-col text-center justify-center justify-center w-1/3 z-0"><div class="flex flex-col gap-4 w-full"><div class="skeleton h-32 w-full"></div> <div class="skeleton h-4 w-28"></div> <div class="skeleton h-4 w-full"></div> <div class="skeleton h-4 w-full"></div></div></div> <div class="w-1/4 z-1"><div class="skeleton w-full h-32"></div></div></div>',
	),
	ue = R(
		'<div class="flex flex-col h-screen"><main class="justify-items-center mb-auto flex-col overflow-visible"><div class="mt-10 flex mx-auto justify-center justify-items-center"><article class="prose"><h1 class="text-center"> </h1> <p> </p></article></div> <div class="flex text-center justify-center justify-center mt-3 mb-auto mx-auto space-x-4 justify-items-center"><div class="p-1 bg-base-100 rounded-lg w-1/4"><!></div></div> <div class="mt-10 hidden flex mx-auto justify-center justify-items-center text-base-100" id="search_error_container"><div role="alert" class="w-1/4 alert alert-error text-center flex items-center text-neutral-950"><a class="close ml-2 hover:bg-base-100/10 hover:bg- rounded-lg p-1" aria-label="close"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></a> <span id="search_error"></span></div></div> <!> <div id="subnetwork_container" class="w-full mt-2 flex-col px-20"></div></main> <footer class="footer footer-center p-4 bg-base-100 text-base-content"><aside><p>Built with <a class="link" href="https://github.com/bzhanglab/biography/" target="_blank"> </a></p></aside></footer></div>',
	);
function _e(x, c) {
	X(c, !0);
	function v(t) {
		const a = document.getElementById("search_error");
		(a.textContent = t),
			document
				.getElementById("search_error_container")
				.classList.remove("hidden");
	}
	function y() {
		const t = document.getElementById("search_error");
		(t.textContent = ""),
			document.getElementById("search_error_container").classList.add("hidden");
	}
	function L(t, a = "subnetwork_container") {
		return fetch(`../data/neighborhood/dag/${t}.json`)
			.then((o) => {
				if (!o.ok)
					throw (
						(v(`Error fetching data for clique ${t}`),
						h(d, !1),
						new Error(`Error fetching data for clique ${t}`))
					);
				return y(), o.json();
			})
			.then((o) => {
				fetch(`../data/neighborhood/table/${t}.json`)
					.then((p) => {
						if (!p.ok)
							throw (
								(v(`Error fetching table data for clique ${t}`),
								h(d, !1),
								new Error(`Error fetching table data for clique ${t}`))
							);
						return y(), p.json();
					})
					.then((p) => {
						fetch(`../data/neighborhood/color/${t}.json`)
							.then((n) => {
								if (!n.ok)
									throw (
										(v(`Error fetching color data for clique ${t}`),
										h(d, !1),
										new Error(`Error fetching color data for clique ${t}`))
									);
								return y(), n.json();
							})
							.then((n) => {
								const u = document.getElementById(a);
								(u.innerHTML = ""),
									ee(ie, {
										target: u,
										props: {
											subnetwork_id: t,
											dag_data: o,
											dag_options: n,
											table_data: p,
											color_info: n,
										},
									});
							});
					});
			});
	}
	let d = J(!0);
	const g = T([]);
	let f = J(T({})),
		k = J((t) => {});
	Z(() => {
		se(["../data/info/neighborhood_info.json"])
			.then((t) => t.map((o) => JSON.parse(o)))
			.then((t) => {
				const a = t[0];
				if (a.is_range)
					for (let o = a.range.start; o <= a.range.end; o++) g.push(`${o}`);
				else g.push(...a.items);
				K(k)(g), h(f, T(t[2])), h(d, !1);
			});
	});
	var C = Q(x, !0, ue),
		M = r(C),
		_ = r(M),
		I = r(_),
		j = r(I),
		N = r(j);
	N.nodeValue = `${H("AML FunMap")} Neighborhood Search`;
	var S = s(s(j, !0)),
		B = r(S);
	B.nodeValue = `Search by ${H("Gene")} to view information about the neighborhood and their associated
					features.`;
	var z = s(s(_, !0)),
		A = r(z),
		D = r(A),
		E = s(s(z, !0)),
		G = r(E),
		V = r(G),
		q = s(s(E, !0)),
		F = s(s(M, !0)),
		e = r(F),
		i = r(e),
		b = s(r(i)),
		w = r(b);
	W(w, () => `BioGraphy v${H(le.version)}`),
		re(D, {
			get update_items() {
				return K(k);
			},
			set update_items(t) {
				h(k, T(t));
			},
			get init_items() {
				return g;
			},
			prefix: "Neighborhood",
			on_search: (t) => {
				h(d, !0),
					L(t).then(() => {
						h(d, !1);
					});
			},
		}),
		(V.__click = [ce]),
		te(
			q,
			() => K(d),
			(t) => {
				var a = Q(t, !0, de);
				P(t, a);
			},
			null,
		),
		P(x, C),
		Y();
}
$(["click"]);
export { _e as component };
