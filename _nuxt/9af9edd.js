(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{228:function(e,t,n){var content=n(235);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("5f2b1166",content,!0,{sourceMap:!1})},229:function(e,t,n){var content=n(239);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("e5f8a876",content,!0,{sourceMap:!1})},234:function(e,t,n){"use strict";n(228)},235:function(e,t,n){var o=n(31),r=n(236),l=n(237);t=o(!1);var c=r(l);t.push([e.i,".prose .list-none>li:before{display:none}.icon.icon-link{background-image:url("+c+');display:inline-block;width:20px;height:20px;background-size:20px 20px;margin-right:5px;visibility:hidden}a:hover .icon.icon-link{visibility:visible!important}pre[class*=language-].line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}pre[class*=language-].line-numbers>code{position:relative;white-space:inherit}.line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:0;font-size:100%;left:-3.8em;width:3em;letter-spacing:-1px;border-right:1px solid #999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.line-numbers-rows>span{display:block;counter-increment:linenumber}.line-numbers-rows>span:before{content:counter(linenumber);color:#999;display:block;padding-right:.8em;text-align:right}.nuxt-content-highlight{position:relative}.nuxt-content-highlight>.filename{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:.875rem;line-height:1.25rem;line-height:1;margin-top:.75rem;margin-right:1rem;position:absolute;top:0;right:0;--tw-text-opacity:1;color:rgba(243,244,246,var(--tw-text-opacity));letter-spacing:-.025em;z-index:10;color:#000}.nuxt-content-highlight>.filename+pre[class*=language-]{padding-top:2rem}',""]),e.exports=t},237:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWxpbmsiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEwIDEzYTUgNSAwIDAgMCA3LjU0LjU0bDMtM2E1IDUgMCAwIDAtNy4wNy03LjA3bC0xLjcyIDEuNzEiLz48cGF0aCBkPSJNMTQgMTFhNSA1IDAgMCAwLTcuNTQtLjU0bC0zIDNhNSA1IDAgMCAwIDcuMDcgNy4wN2wxLjcxLTEuNzEiLz48L3N2Zz4="},238:function(e,t,n){"use strict";n(229)},239:function(e,t,n){(t=n(31)(!1)).push([e.i,"article.prose{max-width:80ch!important}",""]),e.exports=t},256:function(e,t,n){"use strict";n.r(t);n(30);var o=n(6),r=n(232),l=n.n(r),c=(n(233),{mounted:function(){l.a.highlightAll()},head:function(){return{title:"".concat(this.article.title," - Blog - GrahamSH")}},methods:{formatDate:function(e){return new Date(e).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,article;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,o=e.params,t.next=3,n("articles",o.slug).fetch();case 3:return article=t.sent,t.abrupt("return",{article:article});case 5:case"end":return t.stop()}}),t)})))()}}),m=(n(234),n(238),n(17)),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"container mx-auto px-4 mt-28 md:mt-16 min-h-screen"},[n("article",{staticClass:"prose"},[n("h1",[e._v(e._s(e.article.title))]),e._v(" "),n("p",[e._v(e._s(e.article.description))]),e._v(" "),n("p",[e._v("Post last updated: "+e._s(e.formatDate(e.article.updatedAt)))]),e._v(" "),n("nav",[n("h4",[e._v("Table of contents")]),e._v(" "),n("ul",{staticClass:"list-none"},e._l(e.article.toc,(function(link){return n("li",{key:link.id,class:{"py-2":2===link.depth,"ml-2 pb-2":3===link.depth}},[n("NuxtLink",{attrs:{to:"#"+link.id}},[e._v(e._s(link.text))])],1)})),0)]),e._v(" "),n("nuxt-content",{attrs:{document:e.article}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Nav:n(113).default})}}]);