(this["webpackJsonpecommerce-mui"]=this["webpackJsonpecommerce-mui"]||[]).push([[9],{543:function(e,t,a){"use strict";var n=a(1),r=a(47),c=a(2),o=a(0),i=(a(4),a(5)),s=a(100),l=a(37),d=a(6),u=a(533),m=o.forwardRef((function(e,t){var a=e.autoFocus,d=e.checked,m=e.checkedIcon,p=e.classes,b=e.className,h=e.defaultChecked,f=e.disabled,g=e.icon,v=e.id,j=e.inputProps,O=e.inputRef,x=e.name,k=e.onBlur,y=e.onChange,w=e.onFocus,C=e.readOnly,S=e.required,N=e.tabIndex,I=e.type,E=e.value,z=Object(c.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),B=Object(s.a)({controlled:d,default:Boolean(h),name:"SwitchBase",state:"checked"}),P=Object(r.a)(B,2),R=P[0],T=P[1],F=Object(l.a)(),M=f;F&&"undefined"===typeof M&&(M=F.disabled);var H="checkbox"===I||"radio"===I;return o.createElement(u.a,Object(n.a)({component:"span",className:Object(i.a)(p.root,b,R&&p.checked,M&&p.disabled),disabled:M,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),F&&F.onFocus&&F.onFocus(e)},onBlur:function(e){k&&k(e),F&&F.onBlur&&F.onBlur(e)},ref:t},z),o.createElement("input",Object(n.a)({autoFocus:a,checked:d,defaultChecked:h,className:p.input,disabled:M,id:H&&v,name:x,onChange:function(e){var t=e.target.checked;T(t),y&&y(e,t)},readOnly:C,ref:O,required:S,tabIndex:N,type:I,value:E},j)),R?m:g)}));t.a=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m)},595:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),o=(a(4),a(5)),i=a(37),s=a(6),l=a(96),d=a(9),u=c.forwardRef((function(e,t){e.checked;var a=e.classes,s=e.className,u=e.control,m=e.disabled,p=(e.inputRef,e.label),b=e.labelPlacement,h=void 0===b?"end":b,f=(e.name,e.onChange,e.value,Object(r.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),g=Object(i.a)(),v=m;"undefined"===typeof v&&"undefined"!==typeof u.props.disabled&&(v=u.props.disabled),"undefined"===typeof v&&g&&(v=g.disabled);var j={disabled:v};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof u.props[t]&&"undefined"!==typeof e[t]&&(j[t]=e[t])})),c.createElement("label",Object(n.a)({className:Object(o.a)(a.root,s,"end"!==h&&a["labelPlacement".concat(Object(d.a)(h))],v&&a.disabled),ref:t},f),c.cloneElement(u,j),c.createElement(l.a,{component:"span",className:Object(o.a)(a.label,v&&a.disabled)},p))}));t.a=Object(s.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(u)},599:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),o=(a(4),a(5)),i=a(543),s=a(97),l=Object(s.a)(c.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(s.a)(c.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),u=a(46),m=Object(s.a)(c.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=a(9),b=a(6),h=c.createElement(d,null),f=c.createElement(l,null),g=c.createElement(m,null),v=c.forwardRef((function(e,t){var a=e.checkedIcon,s=void 0===a?h:a,l=e.classes,d=e.color,u=void 0===d?"secondary":d,m=e.icon,b=void 0===m?f:m,v=e.indeterminate,j=void 0!==v&&v,O=e.indeterminateIcon,x=void 0===O?g:O,k=e.inputProps,y=e.size,w=void 0===y?"medium":y,C=Object(r.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),S=j?x:b,N=j?x:s;return c.createElement(i.a,Object(n.a)({type:"checkbox",classes:{root:Object(o.a)(l.root,l["color".concat(Object(p.a)(u))],j&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:u,inputProps:Object(n.a)({"data-indeterminate":j},k),icon:c.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===w?w:S.props.fontSize}),checkedIcon:c.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===w?w:N.props.fontSize}),ref:t},C))}));t.a=Object(b.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(v)},628:function(e,t,a){"use strict";a.r(t);var n=a(65),r=a.n(n),c=a(98),o=a(32),i=a(133),s=a(66),l=a(0),d=a(513),u=a(101),m=(a(339),a(99)),p=a(337),b=a(629),h=a(96),f=a(523),g=a(595),v=a(599),j=a(612),O=a(542),x=a.n(O);function k(e){return y.apply(this,arguments)}function y(){return(y=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("https://j2c62.sse.codesandbox.io/signin",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=a(3),C=Object(d.a)((function(e){return{root:{height:"100vh",width:"100%",backgroundImage:'linear-gradient(to right,rgba(25 ,10 ,1, 0.84),#330202eb),url("ganesha.jpg")',display:"flex",justifyContent:"center",alignItems:"center"},loginContainer:{width:"520px",maxWidth:"90%",height:"520px",backgroundColor:"#fff",boxShadow:"0 0 14px 0 rgba(53,64,82,.05)",borderRadius:"2px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"2.3rem"},login:{},large:{width:e.spacing(10),height:e.spacing(10),marginTop:"0.4rem",transform:"translate"},signinBtn:{width:"100%",marginTop:"1.2rem",textTransform:"initial"},fgtBtn:{width:"100%",marginTop:"0.5rem",textTransform:"initial",color:e.palette.primary.main,fontWeight:"bold"},text:{margin:"0.7rem 0"},form:{marginTop:"1.5rem"},h4:{marginTop:"1rem",fontWeight:"bold"},h6:{marginTop:"0.5rem"}}}));t.default=function(e){e.history;var t=C(),a=Object(m.a)(),n=Object(s.a)(a,2),d=(n[0],n[1]),O=Object(l.useState)({username:"",password:""}),x=Object(s.a)(O,2),y=x[0],S=x[1],N=Object(l.useState)(!1),I=Object(s.a)(N,2),E=I[0],z=I[1],B=Object(l.useState)(!1),P=Object(s.a)(B,2),R=P[0],T=P[1],F=function(e,t){S(Object(i.a)(Object(i.a)({},y),{},Object(o.a)({},t,e.target.value)))},M=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z(!0),y.username.trim()&&y.password.trim()){e.next=4;break}return z(!1),e.abrupt("return",u.NotificationManager.warning("Some fields are missing","Invalid"));case 4:return e.prev=4,t=y.username,a=y.password,e.next=8,k({username:t,password:a});case 8:return n=e.sent,e.next=11,localStorage.setItem("accessToken",n.accessToken);case 11:d.setAuth(!0),z(!1),e.next=21;break;case 15:e.prev=15,e.t0=e.catch(4),u.NotificationManager.error(e.t0.message,"Error"),u.NotificationManager.error("Incorrect username or password","Error"),d.setAuth(!1),z(!1);case 21:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{className:t.root,children:Object(w.jsxs)("div",{className:t.loginContainer,children:[Object(w.jsx)(b.a,{className:t.large,alt:"logo",src:p.a}),Object(w.jsx)(h.a,{variant:"h5",component:"h4",className:t.h4,children:"Welcome back !"}),Object(w.jsx)(h.a,{variant:"body1",component:"h6",color:"textSecondary",className:t.h6,children:"Sign in to your account to continue"}),Object(w.jsxs)("form",{className:t.form,children:[Object(w.jsx)(f.a,{label:"Username",required:!0,fullWidth:!0,className:t.text,value:y.username,onChange:function(e){return F(e,"username")}}),Object(w.jsx)(f.a,{label:"Password",type:R?"text":"password",required:!0,fullWidth:!0,className:t.text,value:y.password,onChange:function(e){return F(e,"password")}}),Object(w.jsx)(g.a,{control:Object(w.jsx)(v.a,{checked:R,onChange:function(e){T((function(e){return!e}))},name:"checkedC",color:"primary"}),label:"Show password"}),Object(w.jsx)(j.a,{variant:"contained",color:"primary",className:t.signinBtn,onClick:M,type:"button",disabled:E,children:E?"Signing in...":"Sign in"}),Object(w.jsx)(j.a,{variant:"default",className:t.fgtBtn,children:"For any assistance reach out to TGM"})]})]})})}},629:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),o=(a(4),a(5)),i=a(6),s=a(97),l=Object(s.a)(c.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var d=c.forwardRef((function(e,t){var a=e.alt,i=e.children,s=e.classes,d=e.className,u=e.component,m=void 0===u?"div":u,p=e.imgProps,b=e.sizes,h=e.src,f=e.srcSet,g=e.variant,v=void 0===g?"circle":g,j=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),O=null,x=function(e){var t=e.src,a=e.srcSet,n=c.useState(!1),r=n[0],o=n[1];return c.useEffect((function(){if(t||a){o(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=a,n.onload=function(){e&&o("loaded")},n.onerror=function(){e&&o("error")},function(){e=!1}}}),[t,a]),r}({src:h,srcSet:f}),k=h||f,y=k&&"error"!==x;return O=y?c.createElement("img",Object(n.a)({alt:a,src:h,srcSet:f,sizes:b,className:s.img},p)):null!=i?i:k&&a?a[0]:c.createElement(l,{className:s.fallback}),c.createElement(m,Object(n.a)({className:Object(o.a)(s.root,s.system,s[v],d,!y&&s.colorDefault),ref:t},j),O)}));t.a=Object(i.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(d)}}]);
//# sourceMappingURL=9.ada021ea.chunk.js.map