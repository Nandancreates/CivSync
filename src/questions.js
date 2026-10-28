// This frontend uses browser-local ownership, not authenticated accounts.
// A shared backend must enforce ownership on the server before accepting deletions.
let sessionOwner;
export function getQuestionOwner(){
 if(!sessionOwner)sessionOwner=globalThis.crypto?.randomUUID?.()||'browser-'+Date.now()+'-'+Math.random().toString(36).slice(2);
 try{const stored=localStorage.getItem('civsync-question-owner');if(stored)return stored;localStorage.setItem('civsync-question-owner',sessionOwner);}catch{}
 return sessionOwner;
}
// Legacy non-sample questions came only from forms on this browser. Preserve
// their owner's ability to delete them when upgrading existing saved data.
export function migrateLocalQuestions(items,ownerId,samples=[]){
 if(!Array.isArray(items))return [];
 const sampleIds=new Set(samples.map(q=>q.id));
 return items.filter(q=>q&&typeof q.text==='string'&&q.id!=null).map(q=>!q.ownerId&&!sampleIds.has(q.id)?{...q,ownerId}:q);
}
export function canDeleteQuestion(question,ownerId){return Boolean(ownerId&&question.ownerId===ownerId);}
export function removeOwnedQuestion(items,id,ownerId){return items.filter(q=>q.id!==id||!canDeleteQuestion(q,ownerId));}
