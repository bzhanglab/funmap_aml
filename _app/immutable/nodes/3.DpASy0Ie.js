import {
	t as te,
	s as D,
	c as U,
	o as W,
	a as s,
	b as i,
	d as X,
	i as ae,
	m as oe,
} from "../chunks/disclose-version.G76goc0E.js";
import {
	a as re,
	p as ne,
	h as A,
	g as x,
	s as c,
} from "../chunks/runtime.CKBWl8gs.js";
import { i as le } from "../chunks/if.BRpKpGmk.js";
import {
	p as R,
	o as se,
	b as Z,
	a as w,
} from "../chunks/main-client.CMEboYaW.js";
import { A as ee, f as ce } from "../chunks/Fetcher.CTYW50Zj.js";
import { m as de, D as ue } from "../chunks/Dag.3tA49ip-.js";
var ve = X(
	'<div class="grid grid-cols-3 gap-4 items-center grid-flow-col-dense mt-10"><div class="col-span-2"><div class=" flex-col text-center justify-center justify-center z-0"><h1 class="text-2xl font-bold"> </h1> <div class="w-full grow"></div></div></div> <div><div class="border border-black z-1"><!></div> <h2 class="text-l font-bold">Clique Members</h2> <article class="prose w-full"><p class="text-overflow leading-normal"></p></article></div></div>',
);
function fe(y, f) {
	re(f, !0);
	let p;
	const h = R(f, "dag_options", 11, () => ({})),
		j = R(f, "table_data", 11, () => []),
		G = R(f, "color_info", 11, () => ({})),
		o = de(h(), { title: { text: "Clique Graph" } });
	let u;
	function _(t) {
		const d = Number.parseFloat(t);
		return Number.isNaN(d) ? t : M(d).toString();
	}
	function M(t) {
		return Math.abs(t) < 0.01
			? t.toExponential(2)
			: `${Math.round(t * 100) / 100}`;
	}
	function E(t) {
		const d = document.createElement("h2");
		d.classList.add("text-xl"),
			d.classList.add("font-bold"),
			d.classList.add("text-left"),
			d.classList.add("mt-5"),
			(d.innerHTML = t.title),
			u.appendChild(d);
		const g = document.createElement("h3");
		g.classList.add("text-sm"),
			g.classList.add("text-left"),
			(g.innerHTML = t.description),
			u.appendChild(g);
		const b = document.createElement("table"),
			P = [
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
		b.classList.add(...P);
		const T = document.createElement("thead"),
			z = document.createElement("tbody"),
			H = document.createElement("tr");
		for (let l = 0; l < t.headers.length; l++) {
			const e = document.createElement("th");
			(e.innerHTML = t.headers[l]), H.appendChild(e);
		}
		T.appendChild(H), b.appendChild(T);
		for (let l = 0; l < t.rows.length; l++) {
			const e = document.createElement("tr");
			for (let n = 0; n < t.rows[l].length; n++) {
				const r = document.createElement("td");
				(r.innerHTML = _(t.rows[l][n])),
					t.rows[l][n].includes("href") && r.classList.add("link"),
					e.appendChild(r);
			}
			if (t.has_color) {
				const n = document.createElement("td"),
					r = document.createElement("button");
				r.classList.add("btn"),
					r.classList.add("btn-sm"),
					r.classList.add("btn-ghost"),
					(r.innerHTML = "Color Nodes"),
					r.addEventListener("click", () => {
						B(G()[t.rows[l][0]]);
					}),
					n.appendChild(r),
					e.appendChild(n);
			}
			z.appendChild(e);
		}
		b.appendChild(z), u.appendChild(b);
	}
	let m;
	function B(t) {
		m(t);
	}
	se(() => {
		for (let t = 0; t < j().length; t++) E(j()[t]);
		p.innerText = f.dag_data.nodes.map((t) => t.name).join(", ");
	});
	var k = W(y, !0, ve),
		q = s(k),
		S = s(q),
		L = s(S),
		V = s(L),
		$ = i(i(L, !0));
	Z(
		$,
		(t) => (u = t),
		() => u,
	);
	var F = i(i(q, !0)),
		C = s(F),
		I = s(C),
		J = i(i(C, !0)),
		K = i(i(J, !0)),
		O = s(K);
	Z(
		O,
		(t) => (p = t),
		() => p,
	),
		te(V, () => `Clique ${D(f.clique_id)}`),
		ue(I, {
			get update_values() {
				return m;
			},
			set update_values(t) {
				m = t;
			},
			get init_dag_data() {
				return f.dag_data;
			},
			init_dag_options: o,
			dag_width: "100%",
		}),
		U(y, k),
		ne();
}
var pe = {
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
			"rollup-plugin-copy": "^3.5.0",
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
	me = () => {
		document.getElementById("search_error_container").classList.add("hidden");
	},
	he = X(
		'<div class="flex justify-center justify-items-center mt-2 space-x-4"><div class="flex-col text-center justify-center justify-center w-1/3 z-0"><div class="flex flex-col gap-4 w-full"><div class="skeleton h-32 w-full"></div> <div class="skeleton h-4 w-28"></div> <div class="skeleton h-4 w-full"></div> <div class="skeleton h-4 w-full"></div></div></div> <div class="w-1/4 z-1"><div class="skeleton w-full h-32"></div></div></div>',
	),
	_e = X(
		'<div class="flex flex-col h-screen"><main class="justify-items-center mb-auto flex-col overflow-visible"><div class="mt-10 flex mx-auto justify-center justify-items-center"><article class="prose"><h1 class="text-center"> </h1> <p> </p></article></div> <div class="flex text-center justify-center justify-center mt-3 mb-auto mx-auto space-x-4 justify-items-center"><div class="p-1 bg-base-100 rounded-lg w-1/4"><!></div> <div class="p-1 bg-base-100 rounded-lg w-1/4"><!></div></div> <div class="mt-10 hidden flex mx-auto justify-center justify-items-center text-base-100" id="search_error_container"><div role="alert" class="w-1/4 alert alert-error text-center flex items-center text-neutral-950"><a class="close ml-2 hover:bg-base-100/10 hover:bg- rounded-lg p-1" aria-label="close"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></a> <span id="search_error"></span></div></div> <!> <div id="clique_container" class="w-full mt-2 flex-col px-20"></div></main> <footer class="footer footer-center p-4 bg-base-100 text-base-content"><aside><p>Built with <a class="link" href="https://github.com/bzhanglab/biography/" target="_blank"> </a></p></aside></footer></div>',
	);
function Ee(y, f) {
	re(f, !0);
	function p(e) {
		const n = document.getElementById("search_error");
		(n.textContent = e),
			document
				.getElementById("search_error_container")
				.classList.remove("hidden");
	}
	function h() {
		const e = document.getElementById("search_error");
		(e.textContent = ""),
			document.getElementById("search_error_container").classList.add("hidden");
	}
	function j(e, n = "clique_container") {
		return fetch(`../data/clique/dag/${e}.json`)
			.then((r) => {
				if (!r.ok)
					throw (
						(p(`Error fetching data for clique ${e}`),
						c(o, !1),
						new Error(`Error fetching data for clique ${e}`))
					);
				return h(), r.json();
			})
			.then((r) => {
				fetch(`../data/clique/table/${e}.json`)
					.then((a) => {
						if (!a.ok)
							throw (
								(p(`Error fetching table data for clique ${e}`),
								c(o, !1),
								new Error(`Error fetching table data for clique ${e}`))
							);
						return h(), a.json();
					})
					.then((a) => {
						fetch(`../data/clique/color/${e}.json`)
							.then((v) => {
								if (!v.ok)
									throw (
										(p(`Error fetching color data for clique ${e}`),
										c(o, !1),
										new Error(`Error fetching color data for clique ${e}`))
									);
								return h(), v.json();
							})
							.then((v) => {
								const N = document.getElementById(n);
								(N.innerHTML = ""),
									oe(fe, {
										target: N,
										props: {
											clique_id: e,
											dag_data: r,
											dag_options: v,
											table_data: a,
											color_info: v,
										},
									});
							});
					});
			});
	}
	function G(e) {
		const n = document.getElementById("clique_container");
		(n.innerHTML = ""), c(o, !0);
		const r = x(M)[e];
		if (r === void 0) {
			p(`No cliques contain ${e}`), c(o, !1);
			return;
		}
		h();
		for (let a = 0; a < r.length; a += 1) {
			const v = document.createElement("div");
			(v.id = `clique_container_${a}`),
				v.classList.add("w-full", "mt-2"),
				n.appendChild(v);
			const N = j(r[a], v.id);
			a === r.length - 1 &&
				N.then(() => {
					c(o, !1);
					for (let Q = 0; Q < r.length - 1; Q += 1) {
						const ie = document.getElementById(`clique_container_${Q}`),
							Y = document.createElement("div");
						Y.classList.add("divider", "w-full"),
							ie.insertAdjacentElement("afterend", Y);
					}
				});
		}
	}
	let o = A(!0);
	const u = w([]),
		_ = w([]);
	let M = A(w({})),
		E = A((e) => {}),
		m = A((e) => {});
	se(() => {
		ce([
			"../data/info/node_info.json",
			"../data/info/clique_info.json",
			"../data/info/node_to_clique.json",
		])
			.then((e) => e.map((r) => JSON.parse(r)))
			.then((e) => {
				const n = e[0];
				if (n.is_range)
					for (let a = n.range.start; a <= n.range.end; a++) _.push(`${a}`);
				else _.push(...n.items);
				x(m)(_);
				const r = e[1];
				if (r.is_range)
					for (let a = r.range.start; a <= r.range.end; a++) u.push(`${a}`);
				else u.push(...r.items);
				x(E)(u), c(M, w(e[2])), c(o, !1);
			});
	});
	var B = W(y, !0, _e),
		k = s(B),
		q = s(k),
		S = s(q),
		L = s(S),
		V = s(L);
	V.nodeValue = `${D("AML FunMap")} Clique Search`;
	var $ = i(i(L, !0)),
		F = s($);
	F.nodeValue = `Search by Clique ID or ${D("Gene")} to view information about Cliques and their associated
					features.`;
	var C = i(i(q, !0)),
		I = s(C),
		J = s(I),
		K = i(i(I, !0)),
		O = s(K),
		t = i(i(C, !0)),
		d = s(t),
		g = s(d),
		b = i(i(t, !0)),
		P = i(i(k, !0)),
		T = s(P),
		z = s(T),
		H = i(s(z)),
		l = s(H);
	te(l, () => `BioGraphy v${D(pe.version)}`),
		ee(J, {
			get update_items() {
				return x(E);
			},
			set update_items(e) {
				c(E, w(e));
			},
			get init_items() {
				return u;
			},
			prefix: "Clique",
			on_search: (e) => {
				c(o, !0),
					j(e).then(() => {
						c(o, !1);
					});
			},
		}),
		ee(O, {
			get update_items() {
				return x(m);
			},
			set update_items(e) {
				c(m, w(e));
			},
			get init_items() {
				return _;
			},
			prefix: "Gene",
			on_search: (e) => {
				G(e);
			},
		}),
		(g.__click = [me]),
		le(
			b,
			() => x(o),
			(e) => {
				var n = W(e, !0, he);
				U(e, n);
			},
			null,
		),
		U(y, B),
		ne();
}
ae(["click"]);
export { Ee as component };
