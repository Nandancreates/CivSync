import React,{useState,useRef,useEffect} from 'react';
import {Trash2} from 'lucide-react';
import {canDeleteQuestion} from './questions';
export default function QuestionActions({question,ownerId,onDelete}){
 const[confirming,setConfirming]=useState(false);const keep=useRef(null);const trigger=useRef(null);
 useEffect(()=>{if(confirming)keep.current?.focus()},[confirming]);
 if(!canDeleteQuestion(question,ownerId))return null;
 return <div className="question-actions">{confirming?<div className="delete-confirm" onKeyDown={e=>{if(e.key==='Escape'){e.stopPropagation();setConfirming(false);requestAnimationFrame(()=>trigger.current?.focus())}}} role="group" aria-label="Delete your question?"><span>Delete your question?</span><div><button ref={keep} onClick={()=>{setConfirming(false);requestAnimationFrame(()=>trigger.current?.focus())}}>Keep question</button><button className="confirm-delete" onClick={()=>onDelete(question.id)}>Delete question</button></div></div>:<><span className="own-question">Your question</span><button className="delete-question" ref={trigger} aria-label={'Delete question: '+question.text} onClick={()=>setConfirming(true)}><Trash2 size={14}/> Delete</button></>}</div>;
}
