!function(e){function t(t){for(var n,o,c=t[0],u=t[1],i=t[2],m=0,h=[];m<c.length;m++)o=c[m],l[o]&&h.push(l[o][0]),l[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);h.length;)h.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,c=1;c<a.length;c++){var u=a[c];0!==l[u]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},l={0:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var s=u;r.push(["LJaE",1]),a()}({ERIh:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("jKe7"),o=a("2INN"),c=a("TJpk"),u=a.n(c),i=a("bd40"),s=a("2iEm");const m=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Nothing available here…"),l.a.createElement(s.a,{to:"/"},"Back to the startpage"));a("rGqo");const h=(e="")=>e.trim().replace(/\s+/g," "),p=(e,t,a="x")=>{const n=(e=>t=>t.replace(/([^a-z0-9]*)$/i,`${e}$1`))(a),l=Math.round(e.length*t)-e.length,r=e.split(/\s+/),o=r.length;return Array.from({length:l},(e,t)=>t).reduce((e,t)=>{if(!(t&&t%o))return[...e,[t]];const a=e.length-1,n=e[a];return n.push(t),[...e.slice(0,a),n]},[]).reduce((e,t)=>(t.forEach((t,a)=>{e[a]=n(e[a])}),e),r.slice()).join(" ")},g={text:"",textLength:0,languages:[{title:"German",name:"DE",ratio:1.17},{title:"French",name:"FR",ratio:1.28},{title:"Greek",name:"GR",ratio:1.35}].map(e=>({...e,selected:!1})),filledTexts:[]},d=(e,t)=>{switch(t.type){case"home::SUBMIT":return{...e,filledTexts:t.payload.filledTexts};case"home::TEXT_CHANGE":return{...e,textLength:t.payload.text.trim().length,text:t.payload.text};case"home::LANGUAGE_CHANGE":{const a=e.languages.map(e=>e.name!==t.payload.language?e:{...e,selected:t.payload.checked});return{...e,languages:a}}case"home::RESET":return{...g};default:return e}};a("17x9");const f=({onSubmit:e,languages:t,onLanguageChange:a,text:n,onTextChange:r,textLength:o,onResetClick:c})=>l.a.createElement("form",{method:"post",onSubmit:e},l.a.createElement("header",null,l.a.createElement("button",null,"Fill"),l.a.createElement("button",{onClick:c,type:"reset"},"Reset"),t.map(({title:e,name:t,selected:n})=>l.a.createElement("label",{htmlFor:t,key:t},l.a.createElement("input",{type:"checkbox",id:t,value:t,onChange:a,checked:n}),e))),l.a.createElement("textarea",{value:n,onChange:r}),l.a.createElement("strong",null,o," characters")),E=({language:e,text:t})=>t.length?l.a.createElement("div",null,l.a.createElement("label",{htmlFor:`result-${e.toLowerCase()}`},e),l.a.createElement("textarea",{defaultValue:t,readOnly:!0}),l.a.createElement("strong",null,t.length," characters")):null;function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const y=()=>{const[e,t]=Object(n.useReducer)((e=>(t,a)=>e(t,a))(d),g),{text:a,filledTexts:r,textLength:o,languages:c}=e,u=Object(n.useCallback)(e=>t(((e,t)=>({type:"home::LANGUAGE_CHANGE",payload:{language:e,checked:t}}))(e.target.value,e.target.checked))),i=Object(n.useCallback)(e=>t((e=>({type:"home::TEXT_CHANGE",payload:{text:e}}))(e.target.value))),s=Object(n.useCallback)(e=>{e.preventDefault();const n=c.filter(({selected:e})=>e);t((e=>({type:"home::SUBMIT",payload:{filledTexts:e}}))(n.map(e=>({text:p(h(a),e.ratio),language:e.name}))))},[a,c]),m=Object(n.useCallback)(()=>t({type:"home::RESET"}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{onSubmit:s,languages:c,onLanguageChange:u,text:a,onTextChange:i,textLength:o,onResetClick:m}),l.a.createElement("hr",null),r.map(e=>l.a.createElement(E,b({key:e.language},e))))};t.a=Object(i.render)(l.a.createElement(()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement("title",null,"Fillrrr"),l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),l.a.createElement("meta",{name:"robots",content:"noindex, nofollow, noarchive"})),l.a.createElement(r.a,null,l.a.createElement(o.a,{exact:!0,path:"/",component:y}),l.a.createElement(o.a,{path:"/*",component:m}))),null))}});