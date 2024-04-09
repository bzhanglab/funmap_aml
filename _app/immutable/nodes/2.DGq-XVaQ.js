import{t as N,e as n,c as S,a as t,s as z,o as D,b as e,d as K}from"../chunks/disclose-version.G76goc0E.js";import{p as P,a as A}from"../chunks/runtime.CKBWl8gs.js";import{i as E}from"../chunks/lifecycle.IRmfTt7O.js";var F={name:"biography",version:"0.0.1",private:!0,scripts:{dev:"vite dev",build:"vite build",preview:"vite preview",test:"npm run test:integration && npm run test:unit",check:"svelte-kit sync && svelte-check --tsconfig ./tsconfig.json","check:watch":"svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",lint:"prettier --check . && eslint .",format:"prettier --write .","test:integration":"playwright test","test:unit":"vitest",fix:"eslint --fix ."},devDependencies:{"@biomejs/biome":"1.6.1","@playwright/test":"^1.28.1","@sveltejs/adapter-auto":"^3.0.0","@sveltejs/adapter-static":"^3.0.1","@sveltejs/kit":"^2.0.0","@sveltejs/vite-plugin-svelte":"^3.0.0","@tailwindcss/typography":"^0.5.10","@types/eslint":"^8.56.0","@typescript-eslint/eslint-plugin":"^7.0.0","@typescript-eslint/parser":"^7.0.0",autoprefixer:"^10.4.19",daisyui:"^4.7.3",eslint:"^8.56.0","eslint-config-prettier":"^9.1.0","eslint-plugin-import":"^2.29.1","eslint-plugin-svelte":"^2.36.0-next.4",postcss:"^8.4.38",prettier:"^3.1.1","prettier-plugin-svelte":"^3.1.2",svelte:"^5.0.0-next.1","svelte-check":"^3.6.0",tailwindcss:"^3.4.1",tslib:"^2.4.1",typescript:"^5.0.0",vite:"^5.0.3",vitest:"^1.2.0"},type:"module",dependencies:{"@fontsource-variable/dm-sans":"^5.0.4",echarts:"^5.5.0"}},H=K('<div class="flex flex-col h-screen"><header><div class="navbar bg-base-100"><a class="btn btn-ghost text-xl">BioGraphy</a></div></header> <div class="container mx-auto mt-auto mb-auto"><div class="grid grid-cols-1 gap-4 md:grid-cols-2 justify-items-center"><div class="flex p-4 bg-base-100 rounded-lg items-center content-center"><div class="card w-96 bg-base-100 shadow-xl"><figure class="px-10 pt-10"><img src="./img/clique.png" width="200" alt="Shoes" class="rounded-xl"></figure> <div class="card-body items-center text-center"><h2 class="card-title">Cliques</h2> <p>View information about Cliques and their associated features</p> <div class="card-actions"><button class="btn btn-primary">View Cliques</button></div></div></div></div> <div class="flex p-4 bg-base-100 rounded-lg items-center content-center"><div class="card w-96 bg-base-100 shadow-xl"><figure class="px-10 pt-10"><img src="./img/clique.png" width="200" alt="Shoes" class="rounded-xl"></figure> <div class="card-body items-center text-center"><h2 class="card-title">Gene Neighborhood</h2> <p>View information about Gene Neighborhoods and their associated features</p> <div class="card-actions"><button class="btn btn-primary">View Neighborhoods</button></div></div></div></div></div></div> <footer class="footer footer-center p-4 bg-base-100 text-base-content"><aside><p>Built with <a class="link" href="https://github.com/bzhanglab/biography/" target="_blank"> </a></p></aside></footer></div>');function M(i,o){A(o,!1),E();var s=D(i,!0,H),c=t(s),a=e(e(c,!0)),l=t(a),r=t(l),d=t(r),v=t(d),p=e(e(v,!0)),u=t(p),g=e(e(u,!0)),h=e(e(g,!0)),b=t(h),f=e(e(r,!0)),m=t(f),w=t(m),x=e(e(w,!0)),y=t(x),_=e(e(y,!0)),k=e(e(_,!0)),j=t(k),q=e(e(a,!0)),G=t(q),V=t(G),B=e(t(V)),C=t(B);N(C,()=>`BioGraphy v${z(F.version)}`),n("click",b,()=>window.location.href="./clique",!1),n("click",j,()=>window.location.href="./neighborhood",!1),S(i,s),P()}export{M as component};
