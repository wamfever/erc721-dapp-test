(this["webpackJsonpweb3solidity-test"]=this["webpackJsonpweb3solidity-test"]||[]).push([[0],{236:function(e,t,n){},251:function(e,t){},260:function(e,t){},278:function(e,t){},280:function(e,t){},297:function(e,t){},298:function(e,t){},362:function(e,t){},364:function(e,t){},373:function(e,t){},375:function(e,t){},400:function(e,t){},402:function(e,t){},403:function(e,t){},408:function(e,t){},410:function(e,t){},423:function(e,t){},435:function(e,t){},438:function(e,t){},443:function(e,t){},454:function(e,t){},457:function(e,t){},510:function(e,t,n){},512:function(e,t,n){},516:function(e,t,n){},517:function(e,t,n){},518:function(e,t,n){},520:function(e,t,n){},521:function(e,t,n){},523:function(e,t,n){},524:function(e,t,n){"use strict";n.r(t);var a,r,s=n(0),i=n.n(s),o=n(82),c=n.n(o),u=n(126),l=(n(236),n(49)),p=n(83),d=(n(237),n(17)),y=n(86),m=n(18),f=n.n(m),b=n(36),h=n(27),j=n(71),g=n.n(j),x=n(85),T=n.n(x),v=n(529),O=n(229),k=n(87),w=n(225),C=n.n(w),M="0x871e46Bf148d90d334a719dEf062Fd0ed33Bb3aF",I=[{inputs:[{internalType:"string",name:"name_",type:"string"},{internalType:"string",name:"symbol_",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"age",type:"uint256"}],name:"changeAge",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"eyesColor",type:"string"}],name:"changeEyesColor",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"hairColor",type:"string"}],name:"changeHairColor",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"height",type:"uint256"}],name:"changeHeight",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"name",type:"string"}],name:"changeName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"minter",type:"address"}],name:"grantMinter",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"isMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"hairColor",type:"string"},{internalType:"string",name:"eyesColor",type:"string"},{internalType:"uint256",name:"height",type:"uint256"},{internalType:"uint256",name:"age",type:"uint256"}],name:"mintToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"exMinter",type:"address"}],name:"removeMinter",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"tokenData",outputs:[{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"mintedTimestamp",type:"uint256"},{internalType:"string",name:"hairColor",type:"string"},{internalType:"string",name:"eyesColor",type:"string"},{internalType:"uint256",name:"height",type:"uint256"},{internalType:"uint256",name:"age",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokensLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}];!function(e){e[e.Age=0]="Age",e[e.EyesColor=1]="EyesColor",e[e.HairColor=2]="HairColor",e[e.Name=3]="Name",e[e.Height=4]="Height"}(a||(a={})),function(e){e[e.GrantMinter=0]="GrantMinter",e[e.RemoveMinter=1]="RemoveMinter",e[e.TransferToken=2]="TransferToken",e[e.MintToken=3]="MintToken",e[e.ChangeAge=4]="ChangeAge",e[e.ChangeEyesColor=5]="ChangeEyesColor",e[e.ChangeHairColor=6]="ChangeHairColor",e[e.ChangeHeight=7]="ChangeHeight",e[e.ChangeName=8]="ChangeName"}(r||(r={}));var A,N,S=function(e,t,n){var r=t.tokenId,s=t.newInformation;switch(n){case a.Age:return e.contract.methods.changeAge(r,s).send(e.querySender);case a.EyesColor:return e.contract.methods.changeEyesColor(r,s).send(e.querySender);case a.HairColor:return e.contract.methods.changeHairColor(r,s).send(e.querySender);case a.Height:case a.Name:return e.contract.methods.changeHeight(r,s).send(e.querySender)}},F=function(e){return e.contract.methods.owner().call()},H=function(e,t){return e.contract.methods.tokenData(t).call()},E=[{title:"Grant Minter",forOwner:!0,forMinter:!1,formType:r.GrantMinter,fields:[{controlId:"address",label:"Address",value:"",type:"text"}],formFunc:function(e,t){var n=t.address;return e.contract.methods.grantMinter(n).send(e.querySender)}},{title:"Change Height",forOwner:!0,forMinter:!0,formType:r.ChangeHeight,fields:[{controlId:"tokenId",label:"Token ID",value:"",type:"text"},{controlId:"newInformation",label:"New Height",value:"",type:"text"}],formFunc:S},{title:"Change Name",forOwner:!0,forMinter:!0,formType:r.ChangeName,fields:[{controlId:"tokenId",label:"Token ID",value:"",type:"text"},{controlId:"newInformation",label:"New Name",value:"",type:"text"}],formFunc:S},{title:"Change Hair Color",forOwner:!0,forMinter:!0,formType:r.ChangeHairColor,fields:[{controlId:"tokenId",label:"Token ID",value:"",type:"text"},{controlId:"newInformation",label:"New Hair Color",value:"",type:"text"}],formFunc:S},{title:"Mint Token",forOwner:!1,forMinter:!0,formType:r.MintToken,fields:[{controlId:"name",label:"Token Name",value:"",type:"text"},{controlId:"age",label:"Token Age",value:"",type:"text"},{controlId:"eyesColor",label:"Token Eyes Color",value:"",type:"text"},{controlId:"hairColor",label:"Token Hair Color",value:"",type:"text"},{controlId:"height",label:"Token Height",value:"",type:"text"}],formFunc:function(e,t){var n=t.hairColor,a=t.eyesColor,r=t.name,s=t.height,i=t.age;return e.contract.methods.mintToken(n,a,r,s,i).send(e.querySender)}},{title:"Remove Minter",forOwner:!0,forMinter:!1,formType:r.RemoveMinter,fields:[{controlId:"address",label:"Address",value:"",type:"text"}],formFunc:function(e,t){var n=t.address;return e.contract.methods.removeMinter(n).send(e.querySender)}},{title:"Change Age",forOwner:!0,forMinter:!0,formType:r.ChangeAge,fields:[{controlId:"tokenId",label:"Token ID",value:"",type:"text"},{controlId:"newInformation",label:"New Age",value:"",type:"text"}],formFunc:S},{title:"Change Eyes Color",forOwner:!0,forMinter:!0,formType:r.ChangeEyesColor,fields:[{controlId:"tokenId",label:"Token ID",value:"",type:"text"},{controlId:"newInformation",label:"New Eyes Color",value:"",type:"text"}],formFunc:S},{title:"Transfer Token",forOwner:!0,forMinter:!0,formType:r.TransferToken,fields:[{controlId:"tokenId",label:"Token ID",value:"",type:"text"},{controlId:"address",label:"Transfer to (address):",value:"",type:"text"}],formFunc:function(e,t){var n=t.address,a=t.tokenId;return e.contract.methods.safeTransferFrom(e.querySender.from,n,a).send(e.querySender)}}],D=y.a.div(A||(A=Object(p.a)(["\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),q=n(129),B=n(531),G=n(532),R=(n(510),n(2)),W=function(e){var t=e.title;return Object(R.jsx)("div",{className:"form-title",children:t.toUpperCase()})},Y=(n(512),function(e){var t=e.formDetails,n=e.handleSubmit,a=t.formTitle,r=t.formType,i=t.fields,o=t.formFunc,c=Object(s.useState)(i),u=Object(h.a)(c,2),p=u[0],d=u[1],y=Object(s.useState)({}),m=Object(h.a)(y,2),f=m[0],b=m[1];Object(s.useEffect)((function(){b((function(e){var t=p.reduce((function(e,t){return e[t.controlId]=t.value,e}),{});return Object.assign({},t,e)}))}),[p]);return Object(R.jsx)("div",{className:"widget-container",children:Object(R.jsxs)("div",{className:"form-container",children:[Object(R.jsx)(W,{title:a}),Object(R.jsxs)(B.a,{onSubmit:function(e){e.preventDefault();var t=Object(l.a)({},f);n(o,r,t),b((function(e){return Object.assign({})})),d((function(e){return Object(q.a)(e)}))},children:[p.map((function(e,t){return Object(R.jsx)(B.a.Group,{controlId:e.controlId,children:Object(R.jsx)(B.a.Control,{required:!0,placeholder:e.label,type:e.type||"text",onChange:function(t){return n=e.controlId,a=t.target.value,b((function(e){return e["".concat(n)]=a,e})),void d((function(e){return Object(q.a)(e)}));var n,a},value:f[e.controlId]||""})},t)})),Object(R.jsx)(G.a,{variant:"success",type:"submit",block:!0,children:"SUBMIT"})]})]})})}),L=(n(516),function(e){var t=e.title;return Object(R.jsx)("div",{className:"page-title",children:t.toUpperCase()})}),U=(n(517),n(528)),P=function(e){var t=e.rows;return Object(R.jsxs)("div",{className:"table-container",children:[Object(R.jsx)("div",{className:"table-title",children:"DATA TABLE"}),Object(R.jsxs)(U.a,{responsive:"lg",children:[Object(R.jsx)("thead",{children:Object(R.jsxs)("tr",{children:[Object(R.jsx)("th",{children:"#"}),Object(R.jsx)("th",{children:"Name"}),Object(R.jsx)("th",{children:"Age"}),Object(R.jsx)("th",{children:"Height"}),Object(R.jsx)("th",{children:"Hair Color"}),Object(R.jsx)("th",{children:"Eyes Color"}),Object(R.jsx)("th",{children:"Minted Timestamp"})]})}),Object(R.jsx)("tbody",{children:t.map((function(e,t){return Object(R.jsx)("tr",{children:Object.keys(e).map((function(t,n){return Object(R.jsx)("td",{children:e[t]},n)}))},t)}))})]})]})},_=(n(518),n(519),function(e){var t=Object(s.useState)({}),n=Object(h.a)(t,2),i=n[0],o=n[1],c=Object(s.useState)(),u=Object(h.a)(c,2),l=u[0],p=u[1],d=Object(s.useState)(!1),y=Object(h.a)(d,2),m=y[0],j=y[1],x=Object(s.useState)(!1),w=Object(h.a)(x,2),A=w[0],N=w[1],S=Object(s.useState)(!1),q=Object(h.a)(S,2),B=q[0],G=q[1],W=Object(s.useState)([]),U=Object(h.a)(W,2),_=U[0],J=U[1],z=Object(s.useState)(!1),K=Object(h.a)(z,2),Q=K[0],V=K[1],X=Object(s.useCallback)((function(){return{contract:l,querySender:{from:i.walletAddress}}}),[l,i.walletAddress]),Z=Object(s.useCallback)(Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(t=X()).contract.methods.isMinter(t.querySender.from).call();case 2:if(!e.sent){e.next=6;break}N(!0),e.next=7;break;case 6:N(!1);case 7:return e.next=9,F(X());case 9:if(e.t0=e.sent,e.t1=i.walletAddress,e.t0!==e.t1){e.next=13;break}j(!0);case 13:G(!0);case 14:case"end":return e.stop()}var t}),e)}))),[i.walletAddress,X]),$=Object(s.useCallback)(Object(b.a)(f.a.mark((function e(){var t,n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),e.next=3,X().contract.methods.tokensLength().call();case 3:t=e.sent,n=[],a=0;case 6:if(!(a<t)){e.next=15;break}return e.next=9,H(X(),a);case 9:r=e.sent,r={id:a,name:r.name,age:r.age,height:r.height,hairColor:r.hairColor,eyesColor:r.eyesColor,mintedTimeStamp:C.a.unix(r.mintedTimestamp).format("MM/DD/YYYY")},n.push(r);case 12:a++,e.next=6;break;case 15:J(n);case 16:case"end":return e.stop()}}),e)}))),[X]);Object(s.useEffect)((function(){if(!l&&i.walletAddress){var e=new g.a(i.provider);p(new e.eth.Contract(I,M))}l&&!B&&Z(),l&&!Q&&$()}),[i,A,_,l,Q,B,Z,$]);var ee=function(e,t){return!!(e&&t||e&&m||t&&A)},te=function(){var t=Object(b.a)(f.a.mark((function t(){var n,a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.connectWallet,a=e.history.location.state,t.next=4,T()({mustBeMetaMask:!0});case 4:r=t.sent,a&&a.address?o({walletAddress:a.address,provider:r}):n().then((function(e){o({walletAddress:e.address,provider:r})}));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();i.walletAddress||te();var ne=function(e,t){var n={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!1};"success"===e&&k.b.success("Your action was successful!",n),"error"===e&&k.b.error("There was a problem with your request!",n)},ae=function(){var e=Object(b.a)(f.a.mark((function e(t,n,s){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n,e.next=e.t0===r.GrantMinter?3:e.t0===r.RemoveMinter?14:e.t0===r.MintToken?25:e.t0===r.TransferToken?35:e.t0===r.ChangeAge?45:e.t0===r.ChangeEyesColor?55:e.t0===r.ChangeHairColor?65:e.t0===r.ChangeHeight?75:e.t0===r.ChangeName?85:95;break;case 3:return e.prev=3,e.next=6,t(X(),s);case 6:ne("success"),Z(),e.next=13;break;case 10:e.prev=10,e.t1=e.catch(3),ne(e.t1.reason);case 13:return e.abrupt("return");case 14:return e.prev=14,e.next=17,t(X(),s);case 17:ne("success"),Z(),e.next=24;break;case 21:e.prev=21,e.t2=e.catch(14),ne(e.t2.reason);case 24:return e.abrupt("return");case 25:return e.prev=25,e.next=28,t(X(),s);case 28:ne("success"),e.next=34;break;case 31:e.prev=31,e.t3=e.catch(25),ne(e.t3.reason);case 34:return e.abrupt("return");case 35:return e.prev=35,e.next=38,t(X(),s);case 38:ne("success"),e.next=44;break;case 41:e.prev=41,e.t4=e.catch(35),ne(e.t4.reason);case 44:return e.abrupt("return");case 45:return e.prev=45,e.next=48,t(X(),s,a.Age);case 48:ne("success"),e.next=54;break;case 51:e.prev=51,e.t5=e.catch(45),ne(e.t5.reason);case 54:return e.abrupt("return");case 55:return e.prev=55,e.next=58,t(X(),s,a.EyesColor);case 58:ne("success"),e.next=64;break;case 61:e.prev=61,e.t6=e.catch(55),ne(e.t6.reason);case 64:return e.abrupt("return");case 65:return e.prev=65,e.next=68,t(X(),s,a.HairColor);case 68:ne("success"),e.next=74;break;case 71:e.prev=71,e.t7=e.catch(65),ne(e.t7.reason);case 74:return e.abrupt("return");case 75:return e.prev=75,e.next=78,t(X(),s,a.Height);case 78:ne("success"),e.next=84;break;case 81:e.prev=81,e.t8=e.catch(75),ne(e.t8.reason);case 84:return e.abrupt("return");case 85:return e.prev=85,e.next=88,t(X(),s,a.Name);case 88:ne("success"),e.next=94;break;case 91:e.prev=91,e.t9=e.catch(85),ne(e.t9.reason);case 94:return e.abrupt("return");case 95:case"end":return e.stop()}}),e,null,[[3,10],[14,21],[25,31],[35,41],[45,51],[55,61],[65,71],[75,81],[85,91]])})));return function(t,n,a){return e.apply(this,arguments)}}(),re=Math.ceil(E.length/2);return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(k.a,{}),Object(R.jsxs)(D,{className:"scrollable-area-container",children:[Object(R.jsx)(L,{title:"Dashboard"}),Object(R.jsxs)(v.a,{className:"dashboard-forms",children:[Object(R.jsx)(O.a,{xs:"5",children:E.slice(0,re).map((function(e,t){return ee(e.forOwner,e.forMinter)?Object(R.jsx)(Y,{formDetails:{formTitle:e.title,formType:e.formType,fields:e.fields,formFunc:e.formFunc},handleSubmit:ae},t):null}))}),Object(R.jsx)(O.a,{xs:"5",children:E.slice(re).map((function(e,t){return ee(e.forOwner,e.forMinter)?Object(R.jsx)(Y,{formDetails:{formTitle:e.title,formType:e.formType,fields:e.fields,formFunc:e.formFunc},handleSubmit:ae},t):null}))})]}),Object(R.jsx)(P,{rows:_})]})]})}),J=n(530),z=n.p+"static/media/metamask.a4d5e8f2.jpg",K=(n(520),function(e){var t=e.connectWalletAndGetAddress;return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(J.a,{className:"metamask-image",height:"175",onClick:t,src:z})})}),Q=(n(521),function(e){var t=e.connectWallet,n=Object(s.useState)(""),a=Object(h.a)(n,2),r=a[0],i=a[1],o=Object(d.f)(),c=function(){var e=Object(b.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(!1);case 2:n=e.sent,i(n.address);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){r?o.push({pathname:"/dashboard",state:{address:r}}):t(!0).then((function(e){e.address&&o.push({pathname:"/dashboard",state:{address:e.address}})})).catch((function(e){console.log("Err while trying to connect wallet: ",e.status)}))}),[r,t,o]),Object(R.jsxs)(D,{children:[Object(R.jsx)(L,{title:"Wallet Connect"}),Object(R.jsx)(K,{connectWalletAndGetAddress:c}),Object(R.jsx)("span",{className:"click-to-connect",children:"Click on the logo above if you want to connect your wallet to the app, but denied the initial pop-up."})]})}),V=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T()({mustBeMetaMask:!0});case 2:if(!(n=e.sent)){e.next=23;break}if(e.prev=4,!t){e.next=11;break}return e.next=8,new g.a(n).eth.getAccounts();case 8:a=e.sent,e.next=14;break;case 11:return e.next=13,new g.a(n).eth.requestAccounts();case 13:a=e.sent;case 14:return r={connectedStatus:!0,address:a[0]},e.abrupt("return",r);case 18:return e.prev=18,e.t0=e.catch(4),e.abrupt("return","\ud83e\udd8a Connect to Metamask using the button on the top right.");case 21:e.next=24;break;case 23:return e.abrupt("return","\ud83e\udd8a You must install Metamask into your browser: https://metamask.io/download.html");case 24:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),X=[{exact:!0,path:"/",render:function(e){return Object(R.jsx)(Q,Object(l.a)({connectWallet:V},e))}},{exact:!0,path:"/dashboard",render:function(e){return Object(R.jsx)(_,Object(l.a)({connectWallet:V},e))}}],Z=(n(523),y.a.div(N||(N=Object(p.a)(["\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  flex-direction: column;\n"]))));var $=function(){return Object(R.jsxs)(Z,{children:[Object(R.jsx)("h1",{className:"App-title",children:"ERC-721"}),Object(R.jsx)("div",{className:"App-route",children:Object(R.jsx)(d.c,{children:X.map((function(e,t){return Object(R.jsx)(d.a,Object(l.a)({},e),t)}))})})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,533)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};c.a.render(Object(R.jsx)(i.a.StrictMode,{children:Object(R.jsx)(u.a,{children:Object(R.jsx)($,{})})}),document.getElementById("root")),ee()}},[[524,1,2]]]);
//# sourceMappingURL=main.0c64b63e.chunk.js.map