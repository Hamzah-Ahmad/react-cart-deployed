(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/red-t-shirt.b4bb683d.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/blue-t-shirt.51ea43b9.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/bright-purple-t-shirt.8fa9012b.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/cobalt-blue-t-shirt.1ead1aa2.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/green-t-shirt.717bb2ab.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/grey-t-shirt.d9a81838.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/light-green-t-shirt.96c2084a.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/purple-t-shirt.ee4da645.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/teal-t-shirt.fe47325c.jpg"},72:function(e,t,a){e.exports=a(92)},77:function(e,t,a){},78:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),l=(a(77),a(78),a(18)),o=a(21),d=a(115),s=a(116),u=a(117),m=a(118),p=a(119),E=a(120),g=Object(o.b)((function(e){return{addedItems:e.cartReducer.addedItems}}))((function(e){var t=e.product;return r.a.createElement("div",null,r.a.createElement(d.a,{style:{height:"30%",margin:"10px"}},r.a.createElement(s.a,{src:t.image,alt:"Product",className:"card-img"}),r.a.createElement(u.a,null,r.a.createElement(m.a,null,t.name),r.a.createElement(p.a,null,"Size: ",r.a.createElement("strong",null,t.size)," |"," ",r.a.createElement("span",{style:{marginLeft:"2px"}},"Price: "),r.a.createElement("strong",null,"$",t.price)),r.a.createElement(E.a,{onClick:function(){!function(t){var a=!1;return e.addedItems.some((function(e){return e.product.id===t.id}))&&(a=!0),a}(t)?e.dispatch({type:"ADD_TO_CART",payload:t}):e.dispatch({type:"INCREASE_QUANTITY",payload:t})},color:"info"},"Add To Cart"))))})),f=a(123),h=a(124),b=a(125),y=a(126),T=a(140),v=a(127),x=a(128),I=a(139),O=a(56),j=a.n(O),S=a(55),C=a.n(S),R=a(54),_=a.n(R),z=Object(o.b)((function(e){return{addedItems:e.cartReducer.addedItems}}))((function(e){var t=Object(n.useState)(0),a=Object(l.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(0),d=Object(l.a)(o,2),s=d[0],u=d[1];Object(n.useEffect)((function(){i(e.addedItems.reduce((function(e,t){return e+t.product.price*t.quantity}),0))}),[e.addedItems]);var m=Object(n.useState)(!1),p=Object(l.a)(m,2),g=p[0],O=p[1],S=function(){O(!g)};return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",overflowX:"hidden",scrollbarWidth:"thin"}},r.a.createElement("div",null,r.a.createElement("div",{className:"text-center",style:{margin:"60px",marginTop:"30px",marginBottom:"30px"}},r.a.createElement(I.a,{onClick:e.handleDrawerClose,style:{position:"absolute",left:0}},r.a.createElement(_.a,null)),r.a.createElement("span",{style:{fontSize:"25px",marginRight:"10px"}},"Your Cart"),r.a.createElement("i",{className:"fa fa-shopping-cart",style:{fontSize:"25px"}})),e.addedItems.length>0?r.a.createElement("div",null,r.a.createElement(f.a,null,e.addedItems.map((function(t){return r.a.createElement(h.a,{key:Math.random()},r.a.createElement("span",{style:{display:"flex",justifyContent:"space-around"}},r.a.createElement("span",null,r.a.createElement(b.a,null,r.a.createElement("span",{className:"cart-list-header"},t.product.name)),r.a.createElement(y.a,null,"Size: ",r.a.createElement("strong",null,t.product.size)," |"," ",r.a.createElement("span",{style:{marginLeft:"2px"}},"Price: "),r.a.createElement("strong",null,"$",t.product.price)),r.a.createElement(y.a,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},"Quantity:",r.a.createElement(I.a,{"aria-label":"delete",onClick:function(){e.dispatch({type:"DECREASE_QUANTITY",payload:t.product})}},r.a.createElement(C.a,null)),r.a.createElement("span",null,t.quantity),r.a.createElement(I.a,{"aria-label":"delete",onClick:function(){e.dispatch({type:"INCREASE_QUANTITY",payload:t.product})}},r.a.createElement(j.a,null))))),r.a.createElement("span",null,r.a.createElement("img",{src:t.product.image,width:90,height:60,className:"cart-img",alt:t.product.name}))))}))),r.a.createElement("h3",{style:{textAlign:"right",paddingRight:"5%",marginBottom:"20px",paddingBottom:"50px"}},"Total: $",c)):r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center",fontSize:"18px"}},"Your cart is empty")),r.a.createElement(E.a,{size:"lg",color:e.addedItems.length>0?"info":void 0,block:!0,style:{position:"absolute",bottom:0},onClick:function(){S(),u(c),e.dispatch({type:"EMPTY_CART"}),e.handleDrawerClose()},disabled:!e.addedItems.length>0},"Complete Checkout"),r.a.createElement(T.a,{isOpen:g,toggle:S},r.a.createElement(v.a,null,"Checkout"),r.a.createElement(x.a,null,"Your total is:"," ",r.a.createElement("span",{style:{marginLeft:"5px",color:"#17abcd",fontWeight:"bold"}},"$",s),r.a.createElement("div",null,"Thank you for shopping with us!")))))})),k=a(141),D=a(138),w=a(131),A=a(133),N=a(134),L=a(135),P=a(137),M=a(130),U=a(132),Y=a(129),q=a(57),$=a.n(q),B=a(9),X=Object(o.b)((function(e){return{addedItems:e.cartReducer.addedItems}}))((function(e){e.addedItems;var t=Object(B.a)((function(e){return{badge:{right:-3,border:"2px solid ".concat(e.palette.background.paper),padding:"0 4px",backgroundColor:"#17abcd",color:"#fff"}}}))(Y.a);return r.a.createElement("div",null,r.a.createElement(M.a,{color:"navbar-dark bg-dark",dark:!0,expand:"md"},r.a.createElement(w.a,null,r.a.createElement("h1",{style:{textDecoration:"none",color:"#fff",fontSize:"30px"}},r.a.createElement("i",{className:"fa fa-shopping-cart",style:{fontSize:"25px",marginRight:"10px"}}),"ReactCart"),r.a.createElement(U.a,{className:"ml-auto",navbar:!0},r.a.createElement(I.a,{onClick:e.handleDrawerOpen},r.a.createElement(t,{badgeContent:e.addedItems.reduce((function(e,t){return e+t.quantity}),0)},r.a.createElement($.a,{style:{color:"#fff"}})))))))})),G=a(66),Q=a(136),W=Object(o.b)((function(e){return{products:e.homepageReducer.products,addedItems:e.cartReducer.addedItems}}))((function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(320),d=Object(l.a)(o,2),s=d[0],u=d[1],m=Object(n.useState)(!1),p=Object(l.a)(m,2),E=p[0],f=p[1],h=Object(G.a)({overrides:{MuiSlider:{thumb:{color:"#17abcd"},track:{color:"#17abcd"},rail:{color:"black"}}}});Object(n.useEffect)((function(){e.dispatch({type:"GET_PRODUCTS"})}),[]),Object(n.useEffect)((function(){e.dispatch({type:"GET_FILTERED_PRODUCTS",payload:{size:c,price:s}})}),[s,c]);return r.a.createElement("div",{style:{backgroundColor:"#f8f9fa"}},r.a.createElement(X,{handleDrawerOpen:function(){f(!0)}}),r.a.createElement(w.a,null,r.a.createElement(D.a,{variant:"persistent",anchor:"right",open:E},r.a.createElement(z,{handleDrawerClose:function(){f(!1)}})),r.a.createElement(A.a,null,r.a.createElement(N.a,{sm:"12",lg:"2"},r.a.createElement("div",{style:{marginTop:"50px",marginLeft:"10px",marginRight:"10px"}},r.a.createElement("h3",null,"Filters:"),r.a.createElement(L.a,{for:"priceRange",style:{marginTop:"20px"}},r.a.createElement("span",{style:{marginRight:"5px"}},"Max Price: "),"$",s),r.a.createElement(Q.a,{theme:h},r.a.createElement(k.a,{"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",onChange:function(e,t){console.log("test"),console.log(t),u(t)},step:10,max:320,min:110,marks:[{value:110,label:"$110"},{value:200,label:"$200"},{value:320,label:"$320"}],defaultValue:320})),r.a.createElement(L.a,{for:"size",style:{marginTop:"30px"}},"Size:"),r.a.createElement(P.a,{type:"select",name:"select",id:"size",onChange:function(e){i(e.target.value)}},r.a.createElement("option",{value:""},"All Sizes"),r.a.createElement("option",{value:"S"},"Small"),r.a.createElement("option",{value:"M"},"Medium"),r.a.createElement("option",{value:"L"},"Large"),r.a.createElement("option",{value:"XL"},"XL")))),r.a.createElement(N.a,{xs:"12",lg:"10"},r.a.createElement(A.a,{style:{marginTop:"50px"}},e.products.map((function(e){return r.a.createElement(N.a,{xs:"12",sm:"6",md:"4",key:e.id},r.a.createElement(g,{product:e}))})))))))}));var F=function(){return r.a.createElement(W,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(91);var V=a(26),J=a(19),H={addedItems:[]},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return{addedItems:[].concat(Object(J.a)(e.addedItems),[{product:t.payload,quantity:1}])};case"INCREASE_QUANTITY":var a=e.addedItems.map((function(e){return e.product.id===t.payload.id?{product:t.payload,quantity:e.quantity+1}:e}));return{addedItems:Object(J.a)(a)};case"DECREASE_QUANTITY":var n,r=e.addedItems.find((function(e){return e.product.id===t.payload.id})),c=r.quantity;return n=1===c?e.addedItems.filter((function(e){return e.product.id!==t.payload.id})):e.addedItems.map((function(e){return e.product.id===t.payload.id?{product:t.payload,quantity:e.quantity-1}:e})),{addedItems:Object(J.a)(n)};case"EMPTY_CART":return{addedItems:[]};default:return e}},Z=a(58),ee=a.n(Z),te=a(59),ae=a.n(te),ne=a(60),re=a.n(ne),ce=a(61),ie=a.n(ce),le=a(62),oe=a.n(le),de=a(63),se=a.n(de),ue=a(64),me=a.n(ue),pe=a(44),Ee=a.n(pe),ge=a(65),fe=a.n(ge),he=[{id:201,size:"S",name:"Blue T-Shirt",price:110,image:ee.a},{id:202,size:"S",name:"Bright Purple T-Shirt",price:120,image:ae.a},{id:203,size:"M",name:"Cobalt Blue T-Shirt",price:170,image:re.a},{id:204,size:"M",name:"Green T-shirt",price:230,image:ie.a},{id:205,size:"M",name:"Grey T-shirt",price:260,image:oe.a},{id:206,size:"L",name:"Light Green T-shirt",price:200,image:se.a},{id:207,size:"L",name:"Purple T-shirt",price:130,image:me.a},{id:208,size:"M",name:"Red T-shirt",price:300,image:Ee.a},{id:209,size:"XL",name:"Teal T-shirt",price:320,image:fe.a},{id:210,size:"S",name:"Red T-shirt",price:320,image:Ee.a}],be={products:he},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS":return{products:he};case"GET_FILTERED_PRODUCTS":var a=t.payload.size,n=t.payload.price;return{products:""===a?he.filter((function(e){return e.price<=n})):he.filter((function(e){return e.price<=n&&e.size===a}))};default:return e}},Te=Object(V.b)({homepageReducer:ye,cartReducer:K}),ve=Object(V.c)(Te,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(r.a.createElement(o.a,{store:ve},r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[72,1,2]]]);
//# sourceMappingURL=main.ca399bae.chunk.js.map