(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{200:function(e,t,a){},250:function(e,t,a){"use strict";a.r(t);var c=a(2),n=(a(200),a(0)),s=a.n(n),i=a(49),r=a.n(i),l=a(40),o=a(11),u=a(117);a(204),a(251),a(252);try{u.a.initializeApp({apiKey:"AIzaSyAM4jc29ZUGAR8G4lzTcgVxLmMIYMOdzA0",authDomain:"conversation-f167e.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/conversation",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyAM4jc29ZUGAR8G4lzTcgVxLmMIYMOdzA0",REACT_APP_APP_ID:"1:1012754952890:web:f35bedf3debccc955a0883",REACT_APP_AUTH_DOMAIN:"conversation-f167e.firebaseapp.com",REACT_APP_MESSAGING_SENDER_ID:"1012754952890",REACT_APP_PROJECT_ID:"conversation-f167e",REACT_APP_STORAGE_BUCKET:"conversation-f167e.appspot.com"}).REACT_APP_DATABASE_URL,projectId:"conversation-f167e",storageBucket:"conversation-f167e.appspot.com",messagingSenderId:"1012754952890",appId:"1:1012754952890:web:f35bedf3debccc955a0883"})}catch($){/already exists/.test($.message)||console.error("Firebase admin initialization error",$.stack)}var d={auth:u.a.auth(),storage:u.a.storage(),firestore:u.a.firestore()},j=a(32),h=Object(n.createContext)(),m=function(e){var t=e.children,a=e.authUser,s=Object(n.useState)(),i=Object(o.a)(s,2),r=i[0],u=i[1],m=Object(n.useState)(),b=Object(o.a)(m,2),f=b[0],O=b[1],v=Object(n.useState)(),p=Object(o.a)(v,2),g=p[0],x=p[1];return Object(n.useEffect)((function(){a&&d.firestore.collection("chatUsers").doc(a.uid).onSnapshot((function(e){O({userSecret:a.uid,avatar:e.data().avatar,userName:e.data().userName,projectID:"4c01f6ef-6fc4-47d8-a6d6-a1403a3fcce1"})}))}),[a,O]),Object(c.jsx)(h.Provider,{value:{myChats:r,setMyChats:u,chatConfig:f,selectedChat:g,setChatConfig:O,setSelectedChat:x,selectChatClick:function(e){Object(j.f)(f,e.id,(function(t){x(Object(l.a)(Object(l.a)({},e),{},{messages:t}))}))},deleteChatClick:function(e){e.admin===f.userName&&window.confirm("Are you sure you want to delete this chat?")?Object(j.c)(f,e.id):window.confirm("Are you sure you want to leave this chat?")&&Object(j.i)(f,e.id,f.userName)},createChatClick:function(){Object(j.j)(f,{title:""})}},children:t})},b=function(){var e=Object(n.useContext)(h);return{myChats:e.myChats,setMyChats:e.setMyChats,chatConfig:e.chatConfig,selectedChat:e.selectedChat,setChatConfig:e.setChatConfig,setSelectedChat:e.setSelectedChat,selectChatClick:e.selectChatClick,deleteChatClick:e.deleteChatClick,createChatClick:e.createChatClick}},f=(a(245),function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var c=Object(n.useState)(!1),s=Object(o.a)(c,2),i=s[0],r=s[1];return Object(n.useEffect)((function(){r(t.every((function(e){return void 0!==e})))}),[t]),i}),O=a(19),v=function(){var e=Object(O.f)(),t=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){return d.auth.onAuthStateChanged((function(e){c(e||null)}))}),[]),{authUser:a}}().authUser,a=f(t);return Object(n.useEffect)((function(){a&&e.push(t?"/":"/login")}),[a,t,e]),a?Object(c.jsx)(m,{authUser:t,children:Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)(O.c,{children:[Object(c.jsx)(g,{exact:!0,path:"/",components:g}),Object(c.jsx)(O.a,{path:"/login",component:y}),Object(c.jsx)(O.a,{path:"/signup",component:_})]})})}):Object(c.jsx)(c.Fragment,{children:"Loading..."})},p=a(81),g=function(){var e=b(),t=e.myChats,a=e.setMyChats,s=e.chatConfig,i=e.selectedChat,r=e.selectChatClick,o=e.setSelectedChat;return Object(n.useEffect)((function(){console.log("My Chats: ",t)}),[t]),Object(n.useEffect)((function(){console.log("Selected Chat: ",i)}),[i]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(D,{}),!!s&&Object(c.jsx)(j.a,{hideUI:!0,userName:s.userName,projectID:s.projectID,userSecret:s.userSecret,onConnect:function(){Object(j.e)(s,a)},onNewChat:function(e){e.admin.username===s.userName&&r(e),a([].concat(Object(p.a)(t),[e]).sort((function(e,t){return e.id-t.id})))},onDeleteChat:function(e){(null===i||void 0===i?void 0:i.id)===e.id&&o(null),a(t.filter((function(t){return t.id!==e.id})).sort((function(e,t){return e.id-t.id})))},onNewMessage:function(e,c){i&&e===i.id&&o(Object(l.a)(Object(l.a)({},i),{},{messages:[].concat(Object(p.a)(i.messages),[c])}));var n=t.find((function(t){return t.id===e})),s=t.filter((function(t){return t.id!==e})),r=Object(l.a)(Object(l.a)({},n),{},{last_message:c});a([r].concat(Object(p.a)(s)).sort((function(e,t){return e.id-t.id})))}}),Object(c.jsx)("div",{className:"chat-container",children:Object(c.jsx)("div",{className:"current-chat",children:i?Object(c.jsxs)("div",{className:"chat",children:[Object(c.jsx)(B,{}),Object(c.jsx)(K,{}),Object(c.jsx)(M,{})]}):Object(c.jsxs)("div",{className:"no-chat-selected",children:[Object(c.jsx)("img",{src:"/img/pointLeft.png",className:"point-left",alt:"point-left"}),"Select a Chat"]})})})]})},x=a(55),C=a(42),N={email:"",password:""},S=C.a().shape({email:C.c().required("Required"),password:C.c().required("Required")}),y=function(){var e=Object(O.f)(),t=Object(n.useState)(" "),a=Object(o.a)(t,2),s=a[0],i=a[1];return Object(c.jsxs)("div",{className:"auth-form",children:[Object(c.jsx)("h1",{children:"Login"}),Object(c.jsx)(x.d,{onSubmit:function(e,t){var a=e.email,c=e.password,n=t.setSubmitting;d.auth.signInWithEmailAndPassword(a,c).then((function(e){e.user||i("we are unable to log you in. please try again.")})).catch((function(e){"auth/wrong-password"===e.code?i("invalid credential"):"auth/user-not-found"===e.code?i("account does not exist for this email"):i("Something went wrong :(")})).finally((function(){return n(!1)}))},validateOnMount:!0,initialValues:N,validationSchema:S,children:function(t){var a=t.isValid,n=t.isSubmitting;return Object(c.jsxs)(x.c,{children:[Object(c.jsx)(w,{name:"email",label:"Email",type:"email"}),Object(c.jsx)(w,{name:"password",label:"Password",type:"password"}),Object(c.jsxs)("div",{className:"auth-link-container",children:["Don't have an account?"," ",Object(c.jsx)("span",{className:"auth-link",onClick:function(){return e.push("signup")},children:"Sign up!"})]}),Object(c.jsx)("button",{type:"submit",disabled:!a||n,children:"Login"})]})}}),!!s&&Object(c.jsx)("div",{className:"error",children:s})]})},w=function(e){var t=e.name,a=e.label,n=e.type,s=void 0===n?"text":n;return Object(c.jsxs)("label",{children:[a,Object(c.jsx)(x.b,{name:t,type:s}),Object(c.jsx)(x.a,{className:"error",component:"div",name:t})]})},A={email:"",password:"",userName:"",verifyPassword:""},E=C.a().shape({email:C.c().email("Inamlid email").required("Required"),password:C.c().required("Required").min(8,"atleast 8 char"),verifyPassword:C.c().required("Required").oneOf([C.b("password"),null],"passwors must match"),userName:C.c().required("Required").matches(/^\S*$/,"No spaces").min(3,"must be atleast 3 char")}),_=function(){var e=Object(O.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),s=a[0],i=a[1];return Object(c.jsxs)("div",{className:"auth-form",children:[Object(c.jsx)("h1",{children:"Signup"}),Object(c.jsx)(x.d,{onSubmit:function(e,t){var a=e.email,c=e.userName,n=e.password,s=t.setSubmitting;d.auth.createUserWithEmailAndPassword(a,n).then((function(e){var t;(null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.uid)?fetch("/api/createUser",{method:"POST",body:JSON.stringify({userName:c,userId:e.user.uid}),headers:{"Content-Type":"application/json"}}).then((function(){d.firestore.collection("chatUsers").doc(e.user.uid).set({userName:c,avatar:""})})):i("We're having trouble signing you up. Please try again.")})).catch((function(e){"auth/email-already-in-use"===e.code?i("An account with this email already exists"):i("We're having trouble signing you up. Please try again.")})).finally((function(){return s(!1)}))},validateOnMount:!0,initialValues:A,validationSchema:E,children:function(t){var a=t.isValid,n=t.isSubmitting;return Object(c.jsxs)(x.c,{children:[Object(c.jsx)(w,{name:"userName",label:"User Name"}),Object(c.jsx)(w,{name:"email",label:"Email",type:"email"}),Object(c.jsx)(w,{name:"password",label:"Password",type:"password"}),Object(c.jsx)(w,{type:"password",name:"verifyPassword",label:"Verify Password"}),Object(c.jsxs)("div",{className:"auth-link-container",children:["Already have an account?"," ",Object(c.jsx)("span",{className:"auth-link",onClick:function(){return e.push("login")},children:"Log In!"})]}),Object(c.jsx)("button",{disabled:n||!a,type:"submit",children:"Sign Up"})]})}}),!!s&&Object(c.jsx)("div",{className:"error",children:s})]})},k=a(103),P=function(e,t){var a,c;return null===(a=t.people.find((function(t){return t.person.username!==e.userName})))||void 0===a||null===(c=a.person)||void 0===c?void 0:c.username},R=function(e){var t=[],a=[],c="";return e.forEach((function(e){e.sender.username!==c?(c&&t.push([].concat(a)),a.splice(0,a.length),a.push(e),c=e.sender.username):a.push(e)})),t.push([].concat(a)),t},T=function(e,t){return" "+e.map((function(e){return e.person.username})).filter((function(e){return e!==t})).join(", ")},U=function(){var e=b(),t=e.myChats,a=e.chatConfig,n=e.selectedChat,s=e.selectChatClick,i=e.deleteChatClick;return Object(c.jsx)("div",{className:"chat-list",children:t.map((function(e,t){return Object(c.jsxs)("div",{className:"chat-list-item ".concat((null===n||void 0===n?void 0:n.id)===e.id?"selected-chat-item":""),children:[Object(c.jsx)("div",{onClick:function(){return s(e)},className:"chat-list-item-content",children:1===e.people.length?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k.a,{circular:!0,inverted:!0,color:"violet",name:"user cancel"}),Object(c.jsx)("div",{className:"chat-list-preview",children:Object(c.jsx)("div",{className:"preview-username",children:"No Users Available"})})]}):2===e.people.length?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(z,{username:P(a,e),chat:e}),Object(c.jsxs)("div",{className:"chat-list-preview",children:[Object(c.jsx)("div",{className:"preview-username",children:P(a,e)}),Object(c.jsx)("div",{className:"preview-message",children:e.last_message.attachments.length?"".concat(e.last_message.sender.username," sent an attachments"):e.last_message.text.slice(0,50)+"..."})]})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k.a,{circular:!0,inverted:!0,color:"brown",name:"users"}),Object(c.jsxs)("div",{className:"chat-list-preview",children:[Object(c.jsxs)("div",{className:"preview-username",children:[T(e.people,a.userName).slice(0,50),"..."]}),Object(c.jsx)("div",{className:"preview-message",children:e.last_message.attachments.length?"".concat(e.last_message.sender.username," sent an attachments"):e.last_message.text.slice(0,50)+"..."})]})]})}),Object(c.jsx)("div",{onClick:function(){return i(e)},className:"chat-item-delete",children:Object(c.jsx)(k.a,{name:"delete"})})]},t)}))})},I=a(265),D=function(){var e=b(),t=e.myChats,a=e.createChatClick,n=f(t);return Object(c.jsxs)("div",{className:"left-rail",children:[Object(c.jsx)(q,{}),n?Object(c.jsxs)(c.Fragment,{children:[t.length?Object(c.jsx)("div",{className:"chat-list-container",children:Object(c.jsx)(U,{})}):Object(c.jsx)("div",{className:"chat-list-container no-chats-yet",children:Object(c.jsx)("h3",{children:"No Chats Yet"})}),Object(c.jsx)("button",{className:"create-chat-button",onClick:a,children:"Create Chat"})]}):Object(c.jsx)("div",{className:"chats-loading",children:Object(c.jsx)(I.a,{active:!0,size:"medium"})})]})},M=function(){var e=b(),t=e.chatConfig,a=e.selectedChat,s=Object(n.useState)(""),i=Object(o.a)(s,2),r=i[0],l=i[1],u=Object(n.useState)(!1),d=Object(o.a)(u,2),h=d[0],m=d[1],f=Object(n.useRef)(null),O=Object(n.useState)(),v=Object(o.a)(O,2),p=v[0],g=v[1],x=function(){a&&r&&(l(""),Object(j.l)(t,a.id,{text:r,files:[]}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"chat-controls",children:[Object(c.jsx)("div",{onClick:function(){var e=f.current;e&&(e.value="",e.click())},className:"attachment-icon",children:Object(c.jsx)(k.a,{name:"attach",color:"grey"})}),Object(c.jsx)("input",{value:r,className:"chat-input",placeholder:"send a message",onKeyPress:function(e){"Enter"===e.key&&x()},onChange:function(e){return l(e.target.value)}}),Object(c.jsx)("div",{onClick:x,className:"send-message-icon",children:Object(c.jsx)(k.a,{name:"send",color:"green"})})]}),Object(c.jsx)("input",{type:"file",ref:f,className:"file-input",accept:"image/jpeg,image/png",onChange:function(e){var t,a,c=null===(t=e.target)||void 0===t||null===(a=t.files)||void 0===a?void 0:a[0];c&&function(e){g(e),m(!0)}(c)}}),h&&!!p&&Object(c.jsx)(J,{file:p,onSubmit:function(){Object(j.l)(t,a.id,{text:r,files:[p]},(function(){g(null),l("")}))},close:function(){return m(!1)}})]})},L=a(186),F=a(188),q=function(){var e=b().chatConfig,t=f(e),a=Object(n.useRef)(null),s=Object(n.useState)(),i=Object(o.a)(s,2),r=i[0],l=i[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{type:"file",ref:a,className:"file-input",accept:"image/jpeg,image/png",onChange:function(e){var t,a,c=null===(t=e.target)||void 0===t||null===(a=t.files)||void 0===a?void 0:a[0];c&&function(e){l(e)}(c)}}),!!r&&Object(c.jsx)(J,{crop:!0,file:r,header:"Set Your Avatar",mode:"message",onSubmit:function(t){var a=d.storage.ref().child("".concat(e.userSecret,"_avatar.jpg"));a.put(t).then((function(){a.getDownloadURL().then((function(t){d.firestore.collection("chatUsers").doc(e.userSecret).update({avatar:t}).then((function(){l(null)}))}))}))},close:function(){return l(null)}}),Object(c.jsxs)("div",{className:"left-rail-header",children:[Object(c.jsx)(k.a,{onClick:function(){return d.auth.signOut()},className:"sign-out",name:"sign out"}),t&&e?Object(c.jsxs)("div",{className:"current-user-info",children:[Object(c.jsxs)(L.a,{onClick:function(){var e=a.current;e&&(e.value="",e.click())},className:"user-avatar",size:"large",children:[e.avatar?Object(c.jsx)(F.a,{src:e.avatar,avatar:!0}):Object(c.jsx)("div",{className:"empty-avatar",children:e.userName[0].toUpperCase()}),Object(c.jsx)(k.a,{corner:!0,name:"camera",inverted:!0,circular:!0})]}),Object(c.jsx)("div",{className:"current-username",children:e.userName})]}):Object(c.jsx)("div",{className:"user-loading",children:Object(c.jsx)(I.a,{active:!0,size:"small"})})]})]})},z=function(e){var t=e.chat,a=e.username,s=e.className,i=b().chatConfig,r=Object(n.useState)(""),l=Object(o.a)(r,2),u=l[0],j=l[1];return Object(n.useEffect)((function(){d.firestore.collection("chatUsers").where("userName","==",a).get().then((function(e){var t,a=null===(t=e.docs[0])||void 0===t?void 0:t.data();(null===a||void 0===a?void 0:a.avatar)&&j(a.avatar)}))}),[t,i,a]),u?Object(c.jsx)(F.a,{className:s||"chat-list-avatar",src:u}):Object(c.jsx)("div",{className:s||"empty-avatar",children:t.people.find((function(e){return e.person.username!==i.userName})).person.username[0].toUpperCase()})},B=function(){var e=b(),t=e.selectedChat,a=e.chatConfig,s=Object(n.useState)(!1),i=Object(o.a)(s,2),r=i[0],l=i[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"chat-toolbar",children:[Object(c.jsx)("div",{className:"chat-header-text",children:T(t.people,a.userName).slice(0,50)}),Object(c.jsx)("div",{className:"add-user-icon",children:Object(c.jsx)(k.a,{color:"grey",name:"user plus",onClick:function(){return l(!0)}})})]}),Object(c.jsx)(G,{closeFn:function(){return l(!1)},visible:r})]})},V=a(266),G=function(e){var t=e.visible,a=e.closeFn,s=Object(n.useRef)(),i=Object(n.useState)(!1),r=Object(o.a)(i,2),u=r[0],d=r[1],h=Object(n.useState)(""),m=Object(o.a)(h,2),f=m[0],O=m[1],v=function(e,t){var a=Object(n.useState)(e),c=Object(o.a)(a,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){return i(e)}),t);return function(){return clearTimeout(a)}}),[e,t]),s}(f,500),g=Object(n.useState)(null),x=Object(o.a)(g,2),C=x[0],N=x[1];Object(n.useEffect)((function(){t&&s&&s.focus()}),[t]);var S=b(),y=S.myChats,w=S.setMyChats,A=S.chatConfig,E=S.selectedChat,_=S.setSelectedChat;return Object(n.useEffect)((function(){v?(d(!0),Object(j.g)(A,E.id,(function(e,t){var a=Object.keys(t).map((function(e){return t[e].username})).filter((function(e){return e.toLowerCase().includes(v.toLowerCase())}));N(a.map((function(e){return{title:e}}))),d(!1)}))):N(null)}),[A,E,v]),Object(c.jsx)("div",{className:"user-search",style:{display:t?"block":"none"},children:Object(c.jsx)(V.a,{fluid:!0,onBlur:a,loading:u,value:f,results:C,placeholder:"search for user",open:!!C&&!u,input:{ref:function(e){return s=e}},onSearchChange:function(e){return O(e.target.value)},onResultSelect:function(e,t){var c,n;(null===(c=t.result)||void 0===c?void 0:c.title)&&(n=t.result.title,Object(j.b)(A,E.id,n,(function(){var e=y.filter((function(e){return e.id!==E.id})),t=Object(l.a)(Object(l.a)({},E),{},{people:[].concat(Object(p.a)(E.people),[{person:{username:n}}])});_(t),w([].concat(Object(p.a)(e),[t])),a()})))}})})},K=function(){var e,t,a=b().selectedChat;return e=a,t="chat-messages",Object(n.useEffect)((function(){e&&Promise.all(Array.from(document.images).filter((function(e){return!e.complete})).map((function(e){return new Promise((function(t){e.onload=e.onerror=t}))}))).then((function(){document.getElementsByClassName(t)[0].scrollTop=document.getElementsByClassName(t)[0].scrollHeight}))}),[e,t]),Object(c.jsx)("div",{className:"chat-messages",children:a.messages.length?R(a.messages).map((function(e,t){return Object(c.jsxs)("div",{className:"chat-message",children:[Object(c.jsxs)("div",{className:"chat-message-header",children:[Object(c.jsx)(z,{className:"message-avatar",username:e[0].sender.username,chat:a}),Object(c.jsx)("div",{className:"message-author",children:e[0].sender.username})]}),Object(c.jsx)("div",{className:"message-content",children:e.map((function(e,t){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"message-text",children:e.text}),!!e.attachments.length&&Object(c.jsx)("img",{className:"message-image",src:e.attachments[0].file,alt:e.id+"-attachment"})]},t)}))})]},t)})):Object(c.jsx)("div",{className:"no-messages-yet",children:"No messages yet"})})},W=a(187),H=a.n(W),Y=a(267),J=function(e){var t=e.file,a=e.close,s=e.onSubmit,i=e.crop,r=void 0!==i&&i,l=e.header,u=void 0===l?"Send This Image?":l,d=Object(n.useState)(""),j=Object(o.a)(d,2),h=j[0],m=j[1],b=Object(n.useRef)();return Object(n.useEffect)((function(){var e=new FileReader;e.onload=function(){return m(e.result)},e.readAsDataURL(t)}),[t]),Object(c.jsxs)(Y.a,{dimmer:"blurring",open:!0,children:[Object(c.jsx)(Y.a.Header,{children:u}),Object(c.jsx)(Y.a.Content,{image:!0,children:r?Object(c.jsx)(H.a,{ref:b,width:200,height:200,border:50,image:h}):Object(c.jsx)(F.a,{size:"medium",src:h,alt:"preview"})}),Object(c.jsx)(Y.a.Actions,{children:Object(c.jsxs)("div",{className:"image-upload-actions",children:[Object(c.jsx)("button",{className:"cancel",onClick:a,children:"Cancel"}),Object(c.jsx)("button",{className:"submit",onClick:function(){if(r&&b){var e=b.current.getImageScaledToCanvas().toDataURL();fetch(e).then((function(e){return e.blob()})).then((function(e){return s(e)}))}else s()},children:"Upload"})]})})]})},Z=a(108);r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(Z.a,{children:Object(c.jsx)(v,{})})}),document.getElementById("root"))}},[[250,1,2]]]);
//# sourceMappingURL=main.f59ee8df.chunk.js.map