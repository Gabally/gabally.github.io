(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36322a5e"],{"230b":function(t,e,s){},"6db9":function(t,e,s){"use strict";s("230b")},bbff:function(t,e,s){t.exports=s.p+"img/email_icon.0ec5293b.png"},cb13:function(t,e,s){"use strict";s("d49b")},d49b:function(t,e,s){},e5e0:function(t,e,s){t.exports=s.p+"img/discord_icon.d87b96b2.png"},f820:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center",staticStyle:{"margin-top":"2rem"}},[t._v(" In case you need to contact me: "),n("div",{staticClass:"cfield"},[n("img",{staticClass:"pxr",attrs:{width:"64",height:"64",src:s("bbff"),alt:""}}),n("br"),n("CopyPaste",{attrs:{text:"gaballyno@gmail.com"}})],1),n("div",{staticClass:"cfield"},[n("img",{staticClass:"pxr",staticStyle:{margin:"5px"},attrs:{width:"64",height:"64",src:s("e5e0"),alt:""}}),n("br"),n("CopyPaste",{attrs:{text:"Gabally#7831"}})],1)])},a=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cp",on:{click:t.copy}},[t._v(" "+t._s(t.text)+" "),s("span",{staticClass:"tooltiptext"},[t._v(t._s(t.status))])])},o=[],i={name:"CopyPaste",props:{text:String},data:function(){return{status:"Copy"}},methods:{copy:function(){var t=this,e=document.createElement("textarea");e.value=this.text,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.status="Copied!",setTimeout((function(){t.status="Copy"}),1500)}}},l=i,r=(s("cb13"),s("2877")),u=Object(r["a"])(l,c,o,!1,null,"5753b50f",null),p=u.exports,d={name:"About",components:{CopyPaste:p},mounted:function(){document.title="About | Gabally's corner"}},b=d,m=(s("6db9"),Object(r["a"])(b,n,a,!1,null,"c8676402",null));e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-36322a5e.909863e0.js.map