!function(e){function t(t){for(var a,r,i=t[0],c=t[1],g=t[2],d=0,u=[];d<i.length;d++)r=i[d],o[r]&&u.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(p&&p(t);u.length;)u.shift()();return l.push.apply(l,g||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(l.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={0:0},l=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var g=0;g<i.length;g++)t(i[g]);var p=c;l.push(["LJaE",1]),n()}({ERIh:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),l=n("jKe7"),r=n("2INN"),i=n("bd40"),c=n("vOnD");const g=c.createGlobalStyle`
body {
  font: normal 100%/1.2 sans-serif;
  color: ${"#343a40"};
  background: white;
}

a {
  color: ${"#007bff"};

  &:hover,
  &:focus {
    text-decoration: none;
  }
}
`;var p=n("TJpk"),d=n.n(p),u=n("OMeE"),s=n.n(u),h=n("Po4T"),f=n.n(h),m=n("Fv5/"),E=n.n(m),b=n("xekg"),A=n.n(b);const x=()=>o.a.createElement(d.a,null,o.a.createElement("title",null,"Fillrrr"),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),o.a.createElement("meta",{name:"robots",content:"noindex, nofollow, noarchive"}),o.a.createElement("meta",{name:"theme-color",content:"#343a40"}),o.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"}),o.a.createElement("link",{rel:"icon",type:"image/x-icon",href:s.a}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:f.a}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:E.a}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:A.a})),C=c.default.header.withConfig({componentId:"v9ic8c-0"})(["padding:8px 0;background-color:",";"],"#343a40"),v=c.default.span.withConfig({componentId:"v9ic8c-1"})(["display:block;font-size:24px;color:white;text-align:center;letter-spacing:12px;text-shadow:0 1px 1px black;user-select:none;"]),w=()=>o.a.createElement(C,null,o.a.createElement(v,null,"Fillrrr"));var y=n("2iEm"),B=n("17x9"),O=n.n(B);const k=c.default.main.withConfig({componentId:"bmdlul-0"})(["box-sizing:border-box;margin:0 auto;max-width:1000px;@media (min-width:","px){border-width:0 1px;border-style:solid;border-color:",";}"],1e3,"#e9ecef"),R=({children:e})=>o.a.createElement(k,null,e),I=c.default.h1.withConfig({componentId:"mvrq8p-0"})(["margin-top:16px;font-weight:normal;"]),Q=()=>o.a.createElement(R,null,o.a.createElement(I,null,"Nothing available here…"),o.a.createElement(y.a,{to:"/"},"Back to the startpage"));n("rGqo");const F=(e="")=>e.trim().replace(/\s+/g," "),S=(e,t,n="x")=>{const a=(e=>t=>t.replace(/([^a-z0-9]*)$/i,`${e}$1`))(n),o=Math.round(e.length*t)-e.length,l=e.split(/\s+/),r=l.length;return Array.from({length:o},(e,t)=>t).reduce((e,t)=>{if(!(t&&t%r))return[...e,[t]];const n=e.length-1,a=e[n];return a.push(t),[...e.slice(0,n),a]},[]).reduce((e,t)=>(t.forEach((t,n)=>{e[n]=a(e[n])}),e),l.slice()).join(" ")},z={text:"",textLength:0,languages:[{title:"German",name:"DE",ratio:1.17},{title:"French",name:"FR",ratio:1.28},{title:"Greek",name:"GR",ratio:1.35}].map(e=>({...e,selected:!1})),filledTexts:[]},J=(e,t)=>{switch(t.type){case"home::SUBMIT":return{...e,filledTexts:t.payload.filledTexts};case"home::TEXT_CHANGE":return{...e,textLength:t.payload.text.trim().length,text:t.payload.text};case"home::LANGUAGE_CHANGE":{const n=e.languages.map(e=>e.name!==t.payload.language?e:{...e,selected:t.payload.checked});return{...e,languages:n}}case"home::RESET":return{...z};default:return e}},N=c.default.button.withConfig({componentId:"sc-1hfaxqc-0"})(["padding:8px 16px;font-family:inherit;font-size:16px;color:inherit;border:none;border-radius:2px;background:none;appearance:none;cursor:pointer;user-select:none;"]),j=Object(c.default)(N).withConfig({componentId:"nz0rw6-0"})(["color:white;background-color:",";:hover,:focus-visible{opacity:0.7;}"],({type:e})=>"reset"===e?"#6c757d":"#007bff"),D=c.default.label.withConfig({componentId:"horw2f-0"})(["user-select:none;font-size:16px;"]),L=Object(c.default)(D).withConfig({componentId:"w5c3dk-0"})(["display:inline-flex;"]),T=c.default.input.withConfig({componentId:"w5c3dk-1"})(["margin-right:4px;"]),M=c.default.fieldset.withConfig({componentId:"w5c3dk-2"})(["padding:16px;border:none;border-bottom:1px solid ",";",",","{margin-right:16px;}"],"#e9ecef",L,j),W=c.default.form.withConfig({componentId:"w5c3dk-3"})(["margin-bottom:32px;"]);var G=n("O6Fj"),P=n.n(G);const V=Object(c.default)(P.a).withConfig({componentId:"sc-17kjp6z-0"})(["box-sizing:border-box;width:100%;padding:8px;font-family:inherit;font-size:14px;line-height:inherit;color:",";border:1px solid ",";border-radius:2px;resize:vertical;:hover{color:",";}:focus{outline:none;border-color:",";color:inherit;}"],"#adb5bd","#dee2e6","#6c757d","#adb5bd"),X=c.default.span.withConfig({componentId:"xzsmn6-0"})(["border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;"]),Z=c.default.strong.withConfig({componentId:"sc-1rn25nw-0"})(["font-size:12px;"]),q=({id:e,rows:t,placeholder:n,label:a,value:l,defaultValue:r,textLength:i,onChange:c,readOnly:g,onMouseOver:p,onMouseOut:d})=>o.a.createElement(o.a.Fragment,null,a&&e&&o.a.createElement(X,{as:"label",htmlFor:e},a),o.a.createElement(V,{id:e,rows:t,placeholder:n,value:l,defaultValue:r,onChange:c,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",readOnly:g,onMouseOver:p,onMouseOut:d}),o.a.createElement(Z,null,i," characters"));q.defaultProps={rows:4};const U=({name:e,title:t,checked:n,onChange:a})=>o.a.createElement(L,{htmlFor:e},o.a.createElement(T,{type:"checkbox",id:e,value:e,onChange:a,checked:n}),t),Y=({onSubmit:e,languages:t,onLanguageChange:n,text:a,onTextChange:l,textLength:r,onResetClick:i})=>o.a.createElement(W,{method:"post",onSubmit:e},o.a.createElement(M,null,t.map(({title:e,name:t,selected:a})=>o.a.createElement(U,{key:t,name:t,title:e,checked:a,onChange:n}))),o.a.createElement(M,null,o.a.createElement(q,{id:"original-text",value:a,textLength:r,onChange:l,placeholder:"Enter the original text…",label:"Original text"})),o.a.createElement(M,null,o.a.createElement(j,null,"Fill"),o.a.createElement(j,{onClick:i,type:"reset"},"Reset"))),K=c.default.svg.withConfig({componentId:"sc-1qheuye-0"})(["display:inline-block;width:100%;height:auto;"]),H={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 407.437 407.437"},_={fill:"currentColor",d:"M386.258 91.567l-182.54 181.945L21.179 91.567 0 112.815 203.718 315.87l203.719-203.055z"},$=({elem:e})=>Object(a.createElement)(e,H,Object(a.createElement)("path",_));$.Elem=K,$.propTypes={elem:O.a.oneOfType([O.a.node,O.a.object])},$.defaultProps={elem:K};const ee=c.default.div.withConfig({componentId:"sc-2zguvv-0"})(["padding:16px;@media (min-width:","px){border-bottom:1px solid ",";}"],1e3,"#e9ecef"),te=Object(c.default)($.Elem).withConfig({componentId:"sc-2zguvv-1"})(["width:20px;color:",";"],"#adb5bd"),ne=Object(c.default)(te).withConfig({componentId:"sc-2zguvv-2"})(["transform:rotate(180deg);"]),ae=Object(c.default)(N).withConfig({componentId:"sc-2zguvv-3"})(["width:100%;display:flex;justify-content:space-between;align-items:center;padding:8px;background:",";:hover,:focus-visible{background:",";",",","{color:",";}}"],"#f8f9fa","#e9ecef",te,ne,"#495057"),oe=c.default.div.withConfig({componentId:"sc-2zguvv-4"})(["padding:8px;border:1px solid ",";border-top:none;"],"#e9ecef"),le=({language:e,text:t})=>{const[n,l]=Object(a.useState)(!0),r=Object(a.useCallback)(()=>l(!n),[n]),i=Object(a.useCallback)(e=>e.target.select()),c=Object(a.useCallback)(e=>{window.getSelection&&window.getSelection().removeAllRanges(),e.target.blur()}),g=`result-${e.toLowerCase()}`;return t.length?o.a.createElement(ee,null,o.a.createElement(ae,{onClick:r,"data-toggle":"collapse","data-target":`#${g}`,"aria-expanded":n,"aria-controls":g},o.a.createElement("span",null,'Result for "',e,'"'),o.a.createElement($,{elem:n?ne:te})),n&&o.a.createElement(oe,{id:g},o.a.createElement(q,{rows:3,defaultValue:t,textLength:t.length,readOnly:!0,onMouseOver:i,onMouseOut:c}))):null};function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const ie=()=>{const[e,t]=Object(a.useReducer)((e=>(t,n)=>e(t,n))(J),z),{text:n,filledTexts:l,textLength:r,languages:i}=e,c=Object(a.useCallback)(e=>t(((e,t)=>({type:"home::LANGUAGE_CHANGE",payload:{language:e,checked:t}}))(e.target.value,e.target.checked))),g=Object(a.useCallback)(e=>t((e=>({type:"home::TEXT_CHANGE",payload:{text:e}}))(e.target.value))),p=Object(a.useCallback)(e=>{e.preventDefault();const a=i.filter(({selected:e})=>e);t((e=>({type:"home::SUBMIT",payload:{filledTexts:e}}))(a.map(e=>({text:S(F(n),e.ratio),language:e.name}))))},[n,i]),d=Object(a.useCallback)(()=>t({type:"home::RESET"}));return o.a.createElement(R,null,o.a.createElement(Y,{onSubmit:p,languages:i,onLanguageChange:c,text:n,onTextChange:g,textLength:r,onResetClick:d}),l.map(e=>o.a.createElement(le,re({key:e.language},e))))};t.a=Object(i.render)(o.a.createElement(()=>o.a.createElement(o.a.Fragment,null,o.a.createElement(x,null),o.a.createElement(g,null),o.a.createElement(w,null),o.a.createElement(l.a,null,o.a.createElement(r.a,{exact:!0,path:"/",component:ie}),o.a.createElement(r.a,{path:"/*",component:Q}))),null))},"Fv5/":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABAUlEQVRYhe3XsUoDQRDG8S95pJsUO1vcXKMggpVvoqhcNpIinQSDpA0IIkhA7ER8Es1peXf4BKbKWEiqeEqKvS3cgX+9P9hpBgC6xDIgzmpiWfVspj4jlhWx1GRSB6ADYhn4frSpxEgOYvkIBSCWEqEeX39HUEDPZhoBWwFO8nOd3z/82vGZ8we4vZvrX3NxeeUfUJaVHp32f2zv4NA/4HVRhNmBCIiANeBzudSXRbGRG47aATTNeDJtB1C8vWu2u78Ry84/2YEIiIBgADcc6ePTs86ub8IAfBQBaOMebOr7MGGpgwGsVCCTulCAxKR9AOiSSR1ZqVo7z61UiZEcQOcLDN07+SXqOqMAAAAASUVORK5CYII="},OMeE:function(e,t,n){e.exports=n.p+"fillrrr/favicon-998c635de611b20f.ico"},Po4T:function(e,t){e.exports="data:image/png;base64,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"},xekg:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnElEQVQ4jWMwtrSvM7Zy+GFi5fCfFGxs5fDD2NK+lsHY0v4nqZqRDWEgVzMMYzXAxcv/f35xOQp28fQn3oCcwtL/P378+L9z91449g+JJM2AN2/eku8Fqhjw+cuX/21dvf/bunr/5xeXk27At2/f/s9ftPT//EVL/ze2dgyAFwbWADfvwP95eAKOoAGkYAZyciIMG1s5/GCgNDsDANLpz4Le/L4XAAAAAElFTkSuQmCC"}});