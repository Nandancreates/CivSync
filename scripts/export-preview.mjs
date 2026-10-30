import {readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root=new URL('../',import.meta.url);
const html=await readFile(new URL('dist/index.html',root),'utf8');
const script=html.match(/<script\b[^>]*\bsrc="([^"]+)"[^>]*><\/script>/);
const stylesheet=html.match(/<link\b[^>]*\bhref="([^"]+\.css)"[^>]*>/);
if(!script||!stylesheet)throw new Error('Build the app first with npm run build. Expected one bundled script and stylesheet.');
const js=await readFile(new URL('dist'+script[1],root),'utf8');
const css=(await readFile(new URL('dist'+stylesheet[1],root),'utf8')).replace(/@import\s*(?:url\([^)]*\)|"[^"]*"|'[^']*')\s*;/g,'');
// A classic inline script permits file:// opening; the Vite bundle has no imports.
if(/\bimport\s*(?:\(|[{*]|["'])/.test(js))throw new Error('Unexpected runtime import: preview must be self-contained.');
const inlineScript='<script>'+js.replace(/<\/script/gi,'<\\/script')+'</script>';
const output=html.replace(script[0],'').replace(/[ \t]+$/gm,'').replace(stylesheet[0],()=>'<style>'+css.replace(/<\/style/gi,'<\\/style')+'</style>').replace('</body>',()=>inlineScript+'</body>');
const dest=new URL('CivSync-preview.html',root);await writeFile(dest,output);
console.log('Created '+fileURLToPath(dest));
