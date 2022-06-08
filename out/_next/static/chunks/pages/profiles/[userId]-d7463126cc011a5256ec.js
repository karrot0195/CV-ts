(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[496],{3318:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return b}});var l,t=n(5893),i=(n(7294),function(e){var s=e.children;return(0,t.jsx)("div",{className:"max-w-[1024px]",children:s})}),r=n(5330);!function(e){e.MAIL="mail",e.PHONE="phone",e.ADDRESS="address",e.BIRTHDAY="birthday",e.OBJECTIVE="objective",e.WORK_EXPERIENCE="work-experience"}(l||(l={}));l.MAIL,l.PHONE,l.ADDRESS,l.BIRTHDAY,l.OBJECTIVE,l.WORK_EXPERIENCE;var a,c=n(2821),d=n(9583),o=n(2585),u=function(e){var s=e.type,n=e.onClick;switch(s){case l.MAIL:return(0,t.jsx)(c.Dme,{onClick:n});case l.ADDRESS:return(0,t.jsx)(d.nl4,{onClick:n});case l.PHONE:return(0,t.jsx)(c.Nhm,{onClick:n});case l.BIRTHDAY:return(0,t.jsx)(d.RUr,{onClick:n});case l.OBJECTIVE:return(0,t.jsx)(o.qXg,{onClick:n});case l.WORK_EXPERIENCE:return(0,t.jsx)(o.fnw,{onClick:n});default:return(0,t.jsx)(t.Fragment,{})}};!function(e){e[e.TEXT_FIELD=0]="TEXT_FIELD",e[e.AREA_FIELD=1]="AREA_FIELD",e[e.ICON_FIELD=2]="ICON_FIELD"}(a||(a={}));var x=function(e){var s=e.value,n=e.type,l=void 0===n?a.TEXT_FIELD:n,i=l===a.TEXT_FIELD,r=l===a.AREA_FIELD,c=l===a.ICON_FIELD;return(0,t.jsx)("div",{children:(0,t.jsxs)("div",{children:[(i||r)&&(0,t.jsx)("span",{children:s}),c&&(0,t.jsx)(u,{type:s})]})})},v=function(e){var s=e.data,n=(0,r.F)(),l=function(e){var s,n,l=e.item;switch(l.display){case"list":return null===(s=l.value)||void 0===s?void 0:s.map((function(e,s){return(0,t.jsx)("div",{className:"text-base pl-2 pb-2",children:e},s)}));case"string":return(0,t.jsx)("div",{className:"text-base pl-2 pb-2",children:l.value.join(", ")});case"link":return null===(n=l.value)||void 0===n?void 0:n.map((function(e,s){return(0,t.jsx)("div",{className:"text-base pl-2 pb-2 text-blue-500",children:(0,t.jsx)("a",{href:e,children:e})},s)}));default:return(0,t.jsx)(t.Fragment,{})}};return(0,t.jsxs)("div",{className:"pb-10",children:[(0,t.jsxs)("div",{className:"flex items-center pb-2",children:[s.icon&&(0,t.jsx)("div",{className:"mr-2 text-xl rounded-full p-2 text-white "+n.primary.bgIcon,children:(0,t.jsx)(x,{type:a.ICON_FIELD,value:s.icon})}),s.heading&&(0,t.jsx)("div",{className:"text-xl font-bold "+n.color2,children:(0,t.jsx)(x,{value:s.heading})})]}),(0,t.jsx)("div",{className:"pl-4",children:s.data.map((function(e,n){var i;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"pb-4 pl-8 border-l-4 border-green-600",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between pb-2",children:[(0,t.jsx)("div",{className:"text-xl font-bold",children:(0,t.jsx)(x,{value:e.subheading})}),(0,t.jsx)("div",{className:"text-xs",children:(0,t.jsx)(x,{value:e.time})})]}),(0,t.jsx)("ul",{className:"pl-4 w-4/5 list-disc",children:null===e||void 0===e||null===(i=e.projects)||void 0===i?void 0:i.map((function(e,s){var n;return(0,t.jsxs)("li",{children:[(0,t.jsx)("div",{className:"text-md font-bold",children:e.name}),(0,t.jsx)("div",{className:"p-2 text-gray-800",children:null===(n=e.metas)||void 0===n?void 0:n.map((function(e,s){return(0,t.jsxs)("div",{children:[e.title&&(0,t.jsx)("div",{className:"text-md font-bold",children:e.title}),"string"===typeof e.value&&(0,t.jsx)("div",{className:"text-base pl-2 pb-2 whitespace-pre-line",children:e.value}),"object"===typeof e.value&&(0,t.jsx)(l,{item:e})]},s)}))})]},s)}))})]},n),n<s.data.length-1&&(0,t.jsx)("div",{className:"w-full border-b-2 border-green-600 border-dotted pt-2 mb-4"})]})}))})]})},m=function(e){var s=e.detail;return(0,t.jsx)("div",{className:"px-8",children:(0,t.jsx)(v,{data:s})})},j=function(e){var s=e.src;return(0,t.jsx)("div",{className:"p-10",children:(0,t.jsx)("img",{className:"rounded-full w-[200px] border-green-400 border-4 p-1",src:s})})},h=function(e){var s=e.text,n=e.icon,l=(0,r.F)();return(0,t.jsxs)("div",{className:"flex items-center py-2",children:[(0,t.jsx)("div",{className:"rounded-full p-2 mr-2 text-xl ".concat(l.summary.basicInfo.icon.bg," ").concat(l.summary.basicInfo.icon.border),children:(0,t.jsx)(x,{type:a.ICON_FIELD,value:n})}),(0,t.jsx)("span",{className:"text-base",children:(0,t.jsx)(x,{value:s})})]})},f=function(e){var s=e.data,n=(0,r.F)();return(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsxs)("div",{className:"w-full flex items-center pb-2",children:[(0,t.jsx)("h3",{className:"text-lg font-bold ".concat(n.summary.MetaInfo.heading," pr-2"),children:(0,t.jsx)(x,{value:s.heading})}),(0,t.jsx)("span",{className:"w-full h-[1px] ".concat(n.summary.MetaInfo.line.bg)})]}),(0,t.jsx)("div",{className:"px-5",children:(0,t.jsx)("ul",{className:"list-dict",children:s.infos.map((function(e,s){return(0,t.jsx)("li",{className:"pb-5 text-base",children:(0,t.jsx)(x,{value:e})},s)}))})})]})},p=function(e){var s,n=e.data,l=(0,r.F)();return(0,t.jsxs)("div",{className:"pb-10",children:[(0,t.jsxs)("div",{className:"flex items-center",children:[n.icon&&(0,t.jsx)("div",{className:"mr-2 text-xl rounded-full p-2 text-white "+l.primary.bgIcon,children:(0,t.jsx)(x,{type:a.ICON_FIELD,value:n.icon})}),n.heading&&(0,t.jsx)("div",{className:"text-xl font-bold "+l.color2,children:(0,t.jsx)(x,{value:n.heading})})]}),(0,t.jsxs)("div",{className:"pl-4",children:[n.description&&(0,t.jsx)("div",{className:"text-base",children:(0,t.jsx)(x,{value:n.description,type:a.AREA_FIELD})}),null===(s=n.detail)||void 0===s?void 0:s.map((function(e,s){return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-lg font-bold pb-2",children:(0,t.jsx)(x,{value:e.heading})}),(0,t.jsx)("div",{className:"pl-4",children:null===e||void 0===e?void 0:e.data.map((function(e,s){return(0,t.jsxs)("div",{className:"pb-4",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("div",{className:"text-md font-bold",children:(0,t.jsx)(x,{value:e.subheading})}),(0,t.jsx)("div",{className:"text-sm",children:(0,t.jsx)(x,{value:e.time})})]}),(0,t.jsx)("div",{className:"pl-4 w-4/5",children:(0,t.jsx)("ul",{className:"list-disc px-4",children:e.content.map((function(e,s){return(0,t.jsx)("li",{className:"px-2 py-1 text-base",children:(0,t.jsx)(x,{value:e})},s)}))})})]},s)}))})]},s)}))]})]})},N=function(e){var s,n,l,a=e.user,c=(0,r.F)();return(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)(i,{children:(0,t.jsxs)("div",{className:"mt-10",children:[(0,t.jsxs)("div",{className:"p-5 text-right "+c.primary.bg,children:[(0,t.jsx)("h1",{className:"text-3xl font-bold "+c.color,children:(0,t.jsx)(x,{value:null===a||void 0===a?void 0:a.name})}),(null===a||void 0===a?void 0:a.position)&&(0,t.jsx)("h2",{className:c.color+" text-lg",children:(0,t.jsx)(x,{value:null===a||void 0===a?void 0:a.position})})]}),(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsxs)("div",{className:"w-2/3 ".concat(c.detail.bg),children:[(0,t.jsx)("div",{className:"pt-8 px-8",children:null===a||void 0===a||null===(s=a.detail)||void 0===s?void 0:s.map((function(e,s){return(0,t.jsx)(p,{data:e},s)}))}),a.experience&&(0,t.jsx)(m,{detail:a.experience})]}),(0,t.jsx)("div",{className:"w-1/3 ".concat(c.summary.bg),children:(0,t.jsxs)("div",{className:"flex justify-center items-center flex-col",children:[(0,t.jsx)(j,{src:null===a||void 0===a?void 0:a.avt}),(0,t.jsx)("div",{className:"w-full p-5 ".concat(c.summary.basicInfo.bg),children:null===a||void 0===a||null===(n=a.basicInfos)||void 0===n?void 0:n.map((function(e,s){var n=e.text,l=e.icon;return(0,t.jsx)("div",{className:"flex",children:(0,t.jsx)(h,{text:n,icon:l})},s)}))}),(0,t.jsx)("div",{className:"w-full p-5 ",children:null===a||void 0===a||null===(l=a.metaInfos)||void 0===l?void 0:l.map((function(e,s){return(0,t.jsx)("div",{className:"mb-2 flex items-center",children:(0,t.jsx)(f,{data:e})},s)}))})]})})]})]})})})},b=function(e){var s=e.user;return(0,t.jsx)("div",{className:"relative",children:"1"===(null===s||void 0===s?void 0:s.version)&&(0,t.jsx)(N,{user:s})})}},5967:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profiles/[userId]",function(){return n(3318)}])},4405:function(e,s,n){"use strict";n.d(s,{w_:function(){return d}});var l=n(7294),t={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=l.createContext&&l.createContext(t),r=function(){return(r=Object.assign||function(e){for(var s,n=1,l=arguments.length;n<l;n++)for(var t in s=arguments[n])Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);return e}).apply(this,arguments)},a=function(e,s){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&s.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(l=Object.getOwnPropertySymbols(e);t<l.length;t++)s.indexOf(l[t])<0&&Object.prototype.propertyIsEnumerable.call(e,l[t])&&(n[l[t]]=e[l[t]])}return n};function c(e){return e&&e.map((function(e,s){return l.createElement(e.tag,r({key:s},e.attr),c(e.child))}))}function d(e){return function(s){return l.createElement(o,r({attr:r({},e.attr)},s),c(e.child))}}function o(e){var s=function(s){var n,t=e.attr,i=e.size,c=e.title,d=a(e,["attr","size","title"]),o=i||s.size||"1em";return s.className&&(n=s.className),e.className&&(n=(n?n+" ":"")+e.className),l.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,t,d,{className:n,style:r(r({color:e.color||s.color},s.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),e.children)};return void 0!==i?l.createElement(i.Consumer,null,(function(e){return s(e)})):s(t)}}},function(e){e.O(0,[980,445,617,774,888,179],(function(){return s=5967,e(e.s=s);var s}));var s=e.O();_N_E=s}]);