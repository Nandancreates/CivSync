import test from 'node:test';
import assert from 'node:assert/strict';
import {migrateLocalQuestions,canDeleteQuestion,removeOwnedQuestion} from '../src/questions.js';
test('only a matching owner can delete a question',()=>{
 const own={id:1,text:'My question',ownerId:'me'},other={id:2,text:'Another question',ownerId:'other'},sample={id:'q1',text:'Sample'};
 assert.equal(canDeleteQuestion(own,'me'),true);assert.equal(canDeleteQuestion(other,'me'),false);assert.equal(canDeleteQuestion(sample,'me'),false);assert.equal(canDeleteQuestion(own,''),false);
 const items=[own,other,sample];assert.deepEqual(removeOwnedQuestion(items,1,'me'),[other,sample]);assert.deepEqual(removeOwnedQuestion(items,2,'me'),items);assert.deepEqual(removeOwnedQuestion(items,'q1','me'),items);
});
test('existing browser-authored questions gain ownership, while sample and already owned records keep theirs',()=>{
 const samples=[{id:'q1',text:'A sample'}],legacy={id:'q1790000000000',text:'My older saved question'},foreign={id:'other1',text:'Another owner',ownerId:'other'};
 const items=migrateLocalQuestions([...samples,legacy,foreign],'me',samples);
 assert.equal(items[0].ownerId,undefined);assert.equal(items[1].ownerId,'me');assert.equal(items[2].ownerId,'other');assert.equal(legacy.ownerId,undefined);
 assert.deepEqual(migrateLocalQuestions(items,'different-browser',samples),items);
});
test('local-only drafts from the older Kondapur form can still be deleted',()=>{
 const [legacy]=migrateLocalQuestions([{id:1790000000000,text:'A question from the older form'}],'me');assert.equal(canDeleteQuestion(legacy,'me'),true);
 assert.deepEqual(removeOwnedQuestion([legacy],legacy.id,'me'),[]);
 assert.deepEqual(migrateLocalQuestions(null,'me'),[]);
});
