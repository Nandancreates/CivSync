import {chromium} from '@playwright/test';
import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
try{
 const page=await browser.newPage({viewport:{width:1280,height:900}});
 const errors=[],network=[];page.on('pageerror',e=>errors.push(e.message));
 page.on('request',r=>{if(/^https?:/.test(r.url()))network.push(r.url())});
 // This workspace's managed Chromium policy blocks file:// navigation.
 // Load the exact HTML contents to test the standalone bundle without a server.
 await page.setContent(await readFile('CivSync-preview.html','utf8'));
 await page.getByRole('heading',{name:'Who represents you?'}).waitFor();
 await page.getByRole('button',{name:'Explore demo',exact:true}).click();
 await page.getByRole('heading',{name:'They represent you.'}).waitFor();
 assert.equal(await page.locator('.rep-card').count(),3);
 await page.getByRole('link',{name:'Representatives',exact:true}).click();
 assert.equal(await page.locator('.office-card').count(),81);
 await page.getByLabel('Search offices and departments').fill('MLA');
 await page.getByRole('button',{name:'View Member of Legislative Assembly (MLA)',exact:true}).click();
 await page.getByRole('button',{name:'Responsibilities',exact:true}).click();
 await page.getByRole('heading',{name:'Where their authority ends'}).waitFor();
 await page.keyboard.press('Escape');
 await page.getByRole('link',{name:'Community',exact:true}).click();
 await page.getByRole('button',{name:'Ask a question',exact:true}).click();
 await page.getByLabel('Your question').fill('Can the local bus service run more frequently?');
 await page.getByRole('button',{name:'Save my question'}).click();
 await page.getByRole('heading',{name:'Can the local bus service run more frequently?'}).waitFor();
 await page.getByRole('button',{name:'Delete question: Can the local bus service run more frequently?'}).click();
 await page.getByRole('button',{name:'Delete question',exact:true}).click();
 assert.equal(await page.getByRole('heading',{name:'Can the local bus service run more frequently?'}).count(),0);
 await page.getByRole('link',{name:'Public funds',exact:true}).click();
 await page.getByRole('button',{name:'See project breakdown'}).first().click();
 await page.getByRole('dialog').getByText('₹34 lakh',{exact:true}).waitFor();
 await page.keyboard.press('Escape');
 await page.setViewportSize({width:390,height:844});
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 assert.deepEqual(errors,[]);assert.deepEqual(network,[]);
 console.log('PASS: single-file HTML renders without a server; profiles, directory, questions, funds and mobile layout work with zero network requests and zero browser errors.');
}finally{await browser.close();}
