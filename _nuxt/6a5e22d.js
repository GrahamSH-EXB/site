(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{264:function(t,e,n){"use strict";n.r(e);var r=n(7),c=(n(23),n(3)),l={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,l,o,v,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,c=t.params,e.next=3,n("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(c.slug).fetch();case 3:return l=e.sent,o=Object(r.a)(l,2),v=o[0],f=o[1],e.abrupt("return",{prev:v,next:f});case 8:case"end":return e.stop()}}),e)})))()}},o=n(13),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.prev?n("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}}}},[t._v("\n    "+t._s(t.prev.title)+"\n  ")]):t._e(),t._v(" "),t.next?n("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}}}},[t._v("\n    "+t._s(t.next.title)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);