(this["webpackJsonpecommerce-mui"]=this["webpackJsonpecommerce-mui"]||[]).push([[10],{623:function(e,t,a){"use strict";a.r(t);var n=a(133),r=a(545),c=a(65),i=a.n(c),o=a(98),s=a(66),l=a(0),d=a(513),u=Object(d.a)((function(e){return{root:{display:"flex",flexGrow:1},header:{flex:1},headerCtr:{paddingLeft:0,paddingRight:0,marginBottom:24},card:{maxHeight:260,maxWidth:200},fullSizeCard:{maxHeight:260},cartBtn:{color:"#dc5319 !important",fontWeight:"bold !important",background:"#ffb60054 !important","&:hover":{background:"#ffb6008a !important"}},receiptBtn:{borderColor:"#ffb60054 !important",borderWidth:"2px !important","&:hover":{borderColor:"#ffb60054 !important",borderWidth:"2px !important"}},progress:{colorPrimary:"#dc5319"},homeTitle:{color:"white",fontWeight:600},homeSubTitle:{color:"white",opacity:.8},headerPaper:{padding:24,borderRadius:15,backgroundImage:"linear-gradient(90deg, rgb(217, 119, 6), rgb(220, 38, 38))"}}})),b=a(612),m=a(614),j=a(182),h=a(96),p=a(608),f=a(32),x=a(604),O=a(605),g=a(606),v=a(607),N=a(3),y=Object(d.a)((function(e){var t;return{card:(t={display:"flex",flexDirection:"column"},Object(f.a)(t,e.breakpoints.up("md"),{padding:15}),Object(f.a)(t,e.breakpoints.down("md"),{padding:7}),t),media:{},actions:{display:"flex",justifyContent:"flex-end"},cardHeader:{wordBreak:"break-word",hyphens:"auto"}}}));var k=function(e){var t=e.title,a=e.subtitle,n=e.children,r=e.action,c=void 0===r?null:r,i=y();return Object(N.jsxs)(x.a,{className:i.card,children:[Object(N.jsx)(O.a,{title:t,className:i.cardHeader,subheader:a,children:" "}),Object(N.jsx)(g.a,{children:n}),Object(N.jsxs)(v.a,{className:i.actions,children:[" ",c]})]})},w=a(523),C=a(526),S=a(597),W=a(541),B=a(622),M=a(499),D=a(535),P=a(498),T=a(511),R=a(512);var I=function(e){var t=e.data,a=e.error,c=Object(s.a)(t,2),i=c[0],o=c[1],l=Object(s.a)(a,2),d=l[0],u=l[1],b=["amount","name","date","receiptNo"],m=function(e,t){!e.target.value.trim()&&b.includes(t)?u([].concat(Object(r.a)(d),[t])):u(d.filter((function(e){return e!==t}))),o(Object(n.a)(Object(n.a)({},i),{},Object(f.a)({},t,e.target.value)))};return Object(N.jsx)("div",{children:Object(N.jsxs)(p.a,{container:!0,spacing:4,children:[Object(N.jsx)(p.a,{item:!0,lg:6,xs:12,children:Object(N.jsx)(w.a,{id:"standard-basic",label:"Receipt No.",fullWidth:!0,variant:"outlined",disabled:!0,onChange:function(e){return m(e,"receiptNo")},value:i.receiptNo,error:d.includes("receiptNo")})}),Object(N.jsx)(p.a,{item:!0,lg:6,xs:12,children:Object(N.jsx)(W.a,{utils:S.a,children:Object(N.jsx)(B.a,{margin:"normal",id:"date-picker-dialog",fullWidth:!0,variant:"inline",inputVariant:"outlined",label:"Date picker dialog",required:!0,format:"dd/MM/yyyy",value:i.date,error:d.includes("date"),onChange:function(e){!e&&b.includes("date")?u([].concat(Object(r.a)(d),["date"])):u(d.filter((function(e){return"date"!==e}))),o(Object(n.a)(Object(n.a)({},i),{},{date:e}))},KeyboardButtonProps:{"aria-label":"change date"}})})}),Object(N.jsx)(p.a,{item:!0,lg:12,xs:12,children:Object(N.jsx)(w.a,{id:"standard-basic",label:"Name",fullWidth:!0,required:!0,error:d.includes("name"),variant:"outlined",onChange:function(e){return m(e,"name")},value:i.name})}),Object(N.jsx)(p.a,{item:!0,lg:6,xs:12,children:Object(N.jsxs)(P.a,{fullWidth:!0,variant:"outlined",children:[Object(N.jsx)(M.a,{htmlFor:"outlined-adornment-amount",required:!0,children:"Amount"}),Object(N.jsx)(T.a,{id:"outlined-adornment-amount",type:"number",onChange:function(e){return m(e,"amount")},value:i.amount,error:d.includes("amount"),startAdornment:Object(N.jsx)(C.a,{position:"start",children:"\u20b9"}),labelWidth:60})]})}),Object(N.jsx)(p.a,{item:!0,lg:6,xs:12,children:Object(N.jsx)(w.a,{id:"standard-basic",label:"Contact",fullWidth:!0,error:d.includes("mobile"),onChange:function(e){return m(e,"mobile")},value:i.mobile,variant:"outlined"})}),Object(N.jsx)(p.a,{item:!0,lg:12,xs:12,children:Object(N.jsxs)(P.a,{variant:"outlined",fullWidth:!0,children:[Object(N.jsx)(M.a,{required:!0,id:"demo-simple-select-outlined-label",children:"Payment mode"}),Object(N.jsxs)(R.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:i.payment,error:d.includes("payment"),onChange:function(e){return m(e,"payment")},label:"Payment mode",children:[Object(N.jsx)(D.a,{value:"Cash",children:"Cash"}),Object(N.jsx)(D.a,{value:"UPI",children:"UPI"}),Object(N.jsx)(D.a,{value:"Card",children:"Card"})]})]})})]})})},E=a(581),G=a.n(E),q=a(99),z=a(533),H=a(563),U=a.n(H),Y=a(546),A=Object(d.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},listRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:8,borderBottom:"1px solid rgb(35, 48, 68, 0.1)"},date:{color:"gray"},download:{color:"#4caf50"},name:Object(f.a)({},e.breakpoints.up("md"),{fontSize:"1.5em"})}})),F=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.a)(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function J(){var e=A(),t=Object(q.a)(),a=Object(s.a)(t,2),n=a[0];a[1];return Object(N.jsx)("div",{className:e.container,children:n.paymentsData.slice(0,10).map((function(t){return Object(N.jsxs)("div",{className:e.listRow,children:[Object(N.jsxs)("div",{className:e.header,children:[Object(N.jsx)("span",{className:e.name,children:t.name})," ",Object(N.jsxs)("div",{className:e.date,children:["(",t.date,")"]})]}),Object(N.jsxs)("div",{className:e.amount,children:[t.amount," \u20b9"," ",Object(N.jsx)(z.a,{"aria-label":"show 17 new notifications",color:"inherit",onClick:function(){return F(t)},children:Object(N.jsx)(U.a,{className:e.download})})]})]})}))})}var K=a(548),L=a(542),V=a.n(L);a(544);function Q(e){return X.apply(this,arguments)}function X(){return(X=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.post("https://tembeganesha.firebaseio.com/receipt2021.json",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=a(557),$=a(101),_=a(615),ee=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n,r,c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.amount,n=t.name,r=t.mobile,c="Thank you ".concat(n," for contributing Rs. ").concat(a," to Shri Tembe Ganesh Mandal !"),o=encodeURIComponent(c),s="/pushsms.aspx?user=tambeganesh&password=Tambeganesh&msisdn=91".concat(r,"&sid=TEMBEG&msg=").concat(o,"&fl=0&gwid=2"),e.next=6,V.a.get(s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=function(){var e=u(),t=Object(q.a)(),a=Object(s.a)(t,2),c=a[0],d=a[1],f=Object(l.useState)({name:"",amount:null,date:new Date,payment:"Cash",mobile:"",receiptNo:""}),x=Object(s.a)(f,2),O=x[0],g=x[1],v=function(e){if(!e.length)return"TGM/21/00001";var t=e[0].receiptNo.split("/");console.log(t);var a=(Number(t[t.length-1])+1).toString().padStart(5,"0");return"TGM/21/".concat(a)},y=Object(l.useState)(!1),w=Object(s.a)(y,2),C=w[0],S=w[1],W=Object(l.useState)(!1),B=Object(s.a)(W,2),M=B[0],D=B[1],P=Object(l.useState)([]),T=Object(s.a)(P,2),R=T[0],E=T[1],z=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),e.next=4,Object(K.a)("receipt2021");case 4:t=e.sent,d.setPaymentsData(t),d.setPaymentsTotal(Object(Z.a)(t)),d.setDataYear("receipt2021"),g({name:"",amount:"",date:new Date,payment:"Cash",mobile:"",receiptNo:v(t)}),S(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),$.NotificationManager.error(e.t0.message,"Error"),S(!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object.entries(O),c=a.map((function(e){return String(e[1]).trim()?null:e[0]})).filter(Boolean),E(Object(r.a)(c).filter((function(e){return"mobile"!==e}))),console.log(c),Object(r.a)(c).filter((function(e){return"mobile"!==e})).length){e.next=36;break}if(e.prev=5,D(!0),!(o=Object(n.a)(Object(n.a)({},t),{},{amount:Number(t.amount)})).mobile.trim()){e.next=14;break}if(10===o.mobile.length&&!isNaN(+o.mobile)){e.next=12;break}return D(!1),e.abrupt("return",$.NotificationManager.error("Mobile no. is invalid","Error"));case 12:e.next=15;break;case 14:o=Object(n.a)(Object(n.a)({},o),{},{mobile:"Not disclosed"});case 15:return e.next=17,Q(o);case 17:return e.sent,e.next=20,z();case 20:return e.next=22,Object(Y.a)(O);case 22:if($.NotificationManager.success("Your donation is successful !","Success"),D(!1),!o.mobile.trim()){e.next=28;break}if(10!==o.mobile.length||isNaN(+o.mobile)){e.next=28;break}return e.next=28,ee(o);case 28:e.next=34;break;case 30:e.prev=30,e.t0=e.catch(5),$.NotificationManager.error(e.t0.message,"Error"),D(!1);case 34:e.next=37;break;case 36:$.NotificationManager.warning("Some fields are missing","Invalid");case 37:case"end":return e.stop()}}),e,null,[[5,30]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H(O);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),$.NotificationManager.error(e.t0.message,"Error");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){"receipt2021"===c.dataYear&&c.paymentsData.length?g(Object(n.a)(Object(n.a)({},O),{},{receiptNo:v(c.paymentsData)})):z()}),[]);var A=Object(N.jsxs)(N.Fragment,{children:[" ",Object(N.jsx)(b.a,{size:"medium",variant:"outlined",onClick:function(){g(Object(n.a)(Object(n.a)({},O),{},{name:"",amount:"",date:new Date,payment:"Cash",mobile:""}))},className:e.receiptBtn,children:"Reset"}),Object(N.jsx)(b.a,{variant:"contained",className:e.cartBtn,endIcon:Object(N.jsx)(G.a,{}),size:"medium",onClick:M?function(){}:U,disabled:!O.receiptNo||M,children:M?"Submitting...":"Submit"})," "]});return Object(N.jsx)("div",{className:e.root,children:Object(N.jsxs)("div",{className:e.header,children:[Object(N.jsx)(m.a,{maxWidth:"xl",className:e.headerCtr,children:Object(N.jsx)(j.a,{className:e.headerPaper,children:Object(N.jsxs)(m.a,{maxWidth:"lg",children:[Object(N.jsx)(h.a,{variant:"h4",align:"center",color:"tertiary",className:e.homeTitle,gutterBottom:!0,children:"\u0964\u0964 \u0936\u094d\u0930\u0940 \u0922\u0941\u0902\u0922\u093f\u0930\u093e\u091c \u091f\u0947\u0902\u092c\u0947 \u0917\u0923\u0947\u0936 \u092e\u0902\u0921\u0933 \u0964\u0964"}),Object(N.jsxs)(h.a,{variant:"body1",color:"primary",align:"center",gutterBottom:!0,className:e.homeSubTitle,children:["\u090f\u0915\u0926\u0902\u0924\u0902 \u091a\u0924\u0941\u0930\u094d\u0939\u0938\u094d\u0924\u0902 \u092a\u093e\u0936\u092e\u0902\u0915\u0941\u0936\u0927\u093e\u0930\u093f\u0923\u092e\u0964 \u0930\u0926\u0902 \u091a \u0935\u0930\u0926\u0902 \u0939\u0938\u094d\u0924\u0948\u0930\u094d\u0935\u093f\u092d\u094d\u0930\u093e\u0923\u0902 \u092e\u0942\u0937\u0915\u0927\u094d\u0935\u091c\u092e\u0964 \u0930\u0915\u094d\u0924\u0902 \u0932\u0902\u092c\u094b\u0926\u0930\u0902 \u0936\u0942\u0930\u094d\u092a\u0915\u0930\u094d\u0923\u0915\u0902 \u0930\u0915\u094d\u0924\u0935\u093e\u0938\u0938\u092e\u0964 \u0930\u0915\u094d\u0924\u0917\u0902\u0927\u093e\u093d\u0928\u0941\u0932\u093f\u092a\u094d\u0924\u093e\u0902\u0917\u0902 \u0930\u0915\u094d\u0924\u092a\u0941\u0937\u094d\u092a\u0948: \u0938\u0941\u092a\u0941\u091c\u093f\u0924\u092e\u0964\u0964 ",Object(N.jsx)("br",{}),"\u092d\u0915\u094d\u0924\u093e\u0928\u0941\u0915\u0902\u092a\u093f\u0928\u0902 \u0926\u0947\u0935\u0902 \u091c\u0917\u0924\u094d\u0915\u093e\u0930\u0923\u092e\u091a\u094d\u092f\u0941\u0924\u092e \u0964 \u0906\u0935\u093f\u0930\u094d\u092d\u0942\u0924\u0902 \u091a \u0938\u0943\u0937\u094d\u091f\u092f\u093e\u0926\u094c \u092a\u094d\u0930\u0915\u0943\u0924\u0947 \u092a\u0941\u0930\u0941\u0937\u093e\u0924\u094d\u092a\u0930\u092e \u0964 \u090f\u0935\u0902 \u0927\u094d\u092f\u093e\u092f\u0924\u093f \u092f\u094b \u0928\u093f\u0924\u094d\u092f\u0902 \u0938 \u092f\u094b\u0917\u0940 \u092f\u094b\u0917\u093f\u0928\u093e\u0902 \u0935\u0930:\u0964\u0964"]})]})})}),Object(N.jsx)(m.a,{maxWidth:"xl",className:e.headerCtr,children:Object(N.jsxs)(p.a,{container:!0,spacing:3,children:[Object(N.jsxs)(p.a,{item:!0,xl:8,lg:8,md:12,sm:12,xs:12,children:[C&&Object(N.jsx)(_.a,{}),Object(N.jsxs)(k,{className:e.card,title:"Donate",subtitle:"Please fill all the mandatory fields",action:A,children:[" ",Object(N.jsx)(I,{error:[R,E],data:[O,g]})]})]}),Object(N.jsxs)(p.a,{item:!0,xl:4,lg:4,md:12,sm:12,xs:12,children:[C&&Object(N.jsx)(_.a,{}),Object(N.jsx)(k,{className:e.card,title:"Recent payments",subtitle:"Click to download receipts",children:Object(N.jsx)(J,{})})]})]})})]})})}}}]);
//# sourceMappingURL=10.0af7d9d1.chunk.js.map