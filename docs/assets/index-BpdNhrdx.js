(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c="7263167373:AAGu68Qq1BT9MuZ0Ol5CeWygqZWCJYeAb00",a=`https://api.telegram.org/bot${c}`;async function d(o,s){const n=await(await fetch(`${a}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:o,text:s})})).json();console.log(n)}async function l(o){const s=o.message.chat.id,r=o.message.text;console.log(`Received message: ${r}`),await d(s,`You sent: ${r}`)}window.addEventListener("message",l);
