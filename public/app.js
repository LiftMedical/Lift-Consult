import { MODULES, DEFAULT_FAVORITES, safeFavorites, readRoute } from './content.js';
const $=id=>document.getElementById(id);
const storageKey='lift-consult-favorites-v1';
let favorites=[...DEFAULT_FAVORITES];
try { const saved=localStorage.getItem(storageKey); if(saved!==null) favorites=safeFavorites(JSON.parse(saved)); } catch { /* Favorites work in memory when storage is unavailable. */ }
let filter='quick', current=null;
const boxes={support:'22 376 343 415',mobility:'379 376 342 415',burden:'736 376 338 415',envelope:'1089 376 338 415'};
let cropId=0;
function crop(file,box){const [x,y,w,h]=box.split(' ');const id=`crop-${++cropId}`;return `<div class="crop"><svg viewBox="${box}" aria-hidden="true" focusable="false"><defs><clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}"/></clipPath></defs><image clip-path="url(#${id})" href="/assets/${file}.png" width="1448" height="1086" preserveAspectRatio="none"/></svg></div>`;}

function art(kind){let inner;if(boxes[kind])inner=crop('assessment',boxes[kind]);else if(kind==='all')inner=Object.keys(boxes).map(k=>crop('assessment',boxes[k])).join('');else if(kind==='compare')inner=['support','burden'].map(k=>crop('assessment',boxes[k])).join('');else if(kind==='biology')inner=crop('biology','93 290 600 596');else if(kind==='remodeling')inner=crop('remodeling','30 270 1225 352');else inner=['48 284 331 328','391 310 300 300','732 280 321 330','1078 301 325 300'].map(box=>crop('refinement',box)).join('');return `<div class="art art-${kind}">${inner}</div>`;}
function isFavorite(id){return favorites.includes(id);}
function renderCards(){
 const filtered=MODULES.filter(m=>filter==='all'||filter==='quick'&&isFavorite(m.id)||m.group===filter);
 $('cards').innerHTML=filtered.map(m=>`<article class="card"><button class="card-open" data-open="${m.id}" aria-label="Open ${m.title}"><div class="card-picture" aria-hidden="true">${art(m.art)}</div><div class="card-body"><span class="card-kicker">${m.group==='understand'?'Understand the change':'Explore treatment'}</span><h3>${m.title}</h3><p>${m.short}</p><span class="card-arrow" aria-hidden="true">↗</span></div></button><button class="favorite" data-favorite="${m.id}" aria-label="${isFavorite(m.id)?'Remove':'Save'} ${m.title} ${isFavorite(m.id)?'from':'to'} Quick Consult" aria-pressed="${isFavorite(m.id)}">${isFavorite(m.id)?'★':'☆'}</button></article>`).join('');
 $('empty').hidden=filtered.length!==0;
 $('collection-title').textContent={quick:'Your go-to conversations',all:'Eight stories. Your starting point.',understand:'What is driving the change?',approach:'How we can approach it'}[filter];
 $('collection-note').textContent=filter==='approach'?'Individual priorities. No fixed sequence.':'Save a story with the star.';
 document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));
}
function toggleFavorite(id){favorites=isFavorite(id)?favorites.filter(x=>x!==id):[...favorites,id];try{localStorage.setItem(storageKey,JSON.stringify(favorites));}catch{}renderCards();renderFavorite();}
function renderFavorite(){if(!current)return;const saved=isFavorite(current.module.id);$('reader-favorite').textContent=saved?'★ Saved':'☆ Save';$('reader-favorite').setAttribute('aria-pressed',String(saved));$('reader-favorite').setAttribute('aria-label',`${saved?'Remove from':'Save to'} Quick Consult`);}
function renderRoute(){
 current=readRoute(location.hash);$('home').hidden=!!current;$('reader').hidden=!current;
 if(!current){document.title='LIFT Consult';renderCards();return;}
 const {module:m,index}=current,s=m.slides[index];
 document.title=`${m.title} · LIFT Consult`;
 $('module-name').textContent=m.title;$('story-eyebrow').textContent=s.eyebrow;$('story-title').textContent=s.title;$('story-text').textContent=s.text;
 $('story-options').innerHTML=(s.options||[]).map(([title,text])=>`<div class="option"><strong>${title}</strong><span>${text}</span></div>`).join('');
 $('story-labels').replaceChildren(...(s.labels||[]).map(t=>{const span=document.createElement('span');span.textContent=t;return span;}));
 $('story-art').innerHTML=art(s.art);
 $('dots').innerHTML=m.slides.map((_,i)=>`<button data-page="${i}" aria-label="Screen ${i+1} of ${m.slides.length}" aria-current="${i===index}"></button>`).join('');
 $('previous').disabled=index===0;$('next').textContent=index===m.slides.length-1?'✓':'→';$('next').setAttribute('aria-label',index===m.slides.length-1?'Finish story':'Next screen');
 $('page-announcement').textContent=`${m.title}. Screen ${index+1} of ${m.slides.length}. ${s.eyebrow}.`;
 renderFavorite();window.scrollTo(0,0);$('story').focus({preventScroll:true});
}
function goPage(index){if(!current)return;const n=Math.max(0,Math.min(current.module.slides.length-1,index));history.replaceState(null,'',`#${current.module.id}/${n}`);renderRoute();}
function home(){location.hash='';window.scrollTo(0,0);}
function advance(){if(!current)return;if(current.index===current.module.slides.length-1)home();else goPage(current.index+1);}
$('cards').addEventListener('click',e=>{const favorite=e.target.closest('[data-favorite]');if(favorite){const id=favorite.dataset.favorite;toggleFavorite(id);const next=document.querySelector(`[data-favorite="${id}"]`);(next||document.querySelector('[data-filter="quick"]')).focus({preventScroll:true});return;}const b=e.target.closest('[data-open]');if(b)location.hash=`${b.dataset.open}/0`;});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;renderCards();}));
$('dots').addEventListener('click',e=>{const b=e.target.closest('[data-page]');if(b)goPage(Number(b.dataset.page));});
$('reader-favorite').addEventListener('click',()=>{if(current)toggleFavorite(current.module.id);});
$('back-home').addEventListener('click',home);$('previous').addEventListener('click',()=>{if(current)goPage(current.index-1);});$('next').addEventListener('click',advance);
window.addEventListener('hashchange',()=>{renderRoute();if(!current)document.querySelector(`[data-filter="${filter}"]`).focus({preventScroll:true});});
document.addEventListener('keydown',e=>{if(!current||document.querySelector('dialog[open]')||e.altKey||e.ctrlKey||e.metaKey)return;if(e.key==='ArrowRight'){e.preventDefault();advance();}if(e.key==='ArrowLeft'){e.preventDefault();goPage(current.index-1);}if(e.key==='Escape')home();});
let touch=null;
$('story').addEventListener('touchstart',e=>{touch=e.touches.length===1?{x:e.touches[0].clientX,y:e.touches[0].clientY}:null;},{passive:true});
$('story').addEventListener('touchend',e=>{if(!touch||!current)return;const dx=e.changedTouches[0].clientX-touch.x,dy=e.changedTouches[0].clientY-touch.y;touch=null;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.5){if(dx<0)advance();else goPage(current.index-1);}},{passive:true});
$('story').addEventListener('touchcancel',()=>{touch=null;},{passive:true});
$('reference-button').addEventListener('click',()=>{if(!current)return;$('reference-image').src=`/assets/${current.module.reference}.png`;$('reference-image').alt=current.module.reference==='assessment'?'LIFT facial assessment guide: structural support, tissue position, fullness and skin.':`${current.module.title}: original LIFT consultation reference sheet.`;$('reference-scroll').classList.remove('zoomed');$('zoom-reference').textContent='Enlarge';$('zoom-reference').setAttribute('aria-pressed','false');$('reference-dialog').showModal();$('close-reference').focus();});
$('zoom-reference').addEventListener('click',()=>{const enlarged=$('reference-scroll').classList.toggle('zoomed');$('zoom-reference').textContent=enlarged?'Fit':'Enlarge';$('zoom-reference').setAttribute('aria-pressed',String(enlarged));});
$('close-reference').addEventListener('click',()=>$('reference-dialog').close());$('about-button').addEventListener('click',()=>$('about-dialog').showModal());$('close-about').addEventListener('click',()=>$('about-dialog').close());
renderCards();renderRoute();
if('serviceWorker' in navigator && !['localhost','127.0.0.1'].includes(location.hostname)){window.addEventListener('load',async()=>{try{await navigator.serviceWorker.register('/sw.js');await navigator.serviceWorker.ready;$('offline-state').textContent='AVAILABLE OFFLINE · V1.0';}catch{$('offline-state').textContent='ONLINE USE · V1.0';}});}
