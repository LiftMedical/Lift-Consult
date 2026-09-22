import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { MODULES, DEFAULT_FAVORITES, safeFavorites, readRoute } from '../public/content.js';
test('every story has a unique deep link and three complete screens',()=>{assert.equal(MODULES.length,8);assert.equal(new Set(MODULES.map(m=>m.id)).size,8);for(const m of MODULES){assert.equal(m.slides.length,3);for(const s of m.slides)for(const key of ['title','text','art','eyebrow'])assert.ok(s[key],`${m.id}: ${key}`);}});
test('deep links clamp malformed and out-of-range page numbers',()=>{assert.equal(readRoute('#support/99').index,2);assert.equal(readRoute('#support/-2').index,0);assert.equal(readRoute('#support/nope').index,0);assert.equal(readRoute('#support/Infinity').index,0);assert.equal(readRoute('#missing/0'),null);assert.equal(readRoute(''),null);assert.equal(readRoute('#support/1').index,1);});
test('favorites reject stale IDs and duplicates, and preserve deliberately empty selection',()=>{assert.deepEqual(safeFavorites(['support','unknown','support']),['support']);assert.deepEqual(safeFavorites([]),[]);assert.deepEqual(safeFavorites({}),DEFAULT_FAVORITES);});
test('all reference illustrations exist',async()=>{for(const m of MODULES)await access(new URL(`../public/assets/${m.reference}.png`,import.meta.url));});
test('every offline precache resource exists',async()=>{const sw=await readFile(new URL('../public/sw.js',import.meta.url),'utf8');const paths=sw.match(/const ASSETS=(\[.*?\]);/s)[1].match(/'([^']+)'/g).map(p=>p.slice(1,-1));for(const path of paths)await access(new URL(`../public${path==='/'?'/index.html':path}`,import.meta.url));});
