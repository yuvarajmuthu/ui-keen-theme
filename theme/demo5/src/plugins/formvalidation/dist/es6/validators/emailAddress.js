export default function t(){const t=(t,e)=>{const s=t.split(/"/);const l=s.length;const n=[];let r="";for(let t=0;t<l;t++){if(t%2===0){const l=s[t].split(e);const a=l.length;if(a===1){r+=l[0]}else{n.push(r+l[0]);for(let t=1;t<a-1;t++){n.push(l[t])}r=l[a-1]}}else{r+='"'+s[t];if(t<l-1){r+='"'}}}n.push(r);return n};return{validate(e){if(e.value===""){return{valid:true}}const s=Object.assign({},{multiple:false,separator:/[,;]/},e.options);const l=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;const n=s.multiple===true||`${s.multiple}`==="true";if(n){const n=s.separator||/[,;]/;const r=t(e.value,n);const a=r.length;for(let t=0;t<a;t++){if(!l.test(r[t])){return{valid:false}}}return{valid:true}}else{return{valid:l.test(e.value)}}}}}