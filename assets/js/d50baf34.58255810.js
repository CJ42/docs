"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2256],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(v,s(s({ref:t},c),{},{components:n})):a.createElement(v,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),i=n(2389),s=n(3725),o=n(6010),l="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.UB)(),b=k.tabGroupChoices,N=k.setTabGroupChoices,y=(0,r.useState)(f),T=y[0],x=y[1],E=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=b[m];null!=P&&P!==T&&g.some((function(e){return e.value===P}))&&x(P)}var I=function(e){var t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==T&&(j(t),x(a),null!=m&&N(m,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},v)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",l,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},2311:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=n(9877),o=n(8215),l=["components"],u={sidebar_label:"Interact with a dApp",sidebar_position:3},c="Interact with a dApp",p={unversionedId:"guides/universal-profile/browser-extension/interact-with-dapp",id:"guides/universal-profile/browser-extension/interact-with-dapp",title:"Interact with a dApp",description:"The UP Browser Extenstion is currently in the development alpha version. DO NOT use this in production!",source:"@site/docs/guides/universal-profile/browser-extension/03-interact-with-dapp.md",sourceDirName:"guides/universal-profile/browser-extension",slug:"/guides/universal-profile/browser-extension/interact-with-dapp",permalink:"/guides/universal-profile/browser-extension/interact-with-dapp",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/universal-profile/browser-extension/03-interact-with-dapp.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Interact with a dApp",sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"Create a Universal Profile",permalink:"/guides/universal-profile/browser-extension/create-a-universal-profile"},next:{title:"Give permissions to addresses",permalink:"/guides/key-manager/give-permissions"}},d={},m=[{value:"Setup",id:"setup",level:2},{value:"1. Initialize a blockchain provider.",id:"1-initialize-a-blockchain-provider",level:3},{value:"2. Get access to the UP address in use.",id:"2-get-access-to-the-up-address-in-use",level:3},{value:"Operations",id:"operations",level:2},{value:"Send a transaction",id:"send-a-transaction",level:3},{value:"Sign a message",id:"sign-a-message",level:3},{value:"Interact with your universal profile",id:"interact-with-your-universal-profile",level:2},{value:"Events",id:"events",level:2},{value:"Sample dApp",id:"sample-dapp",level:2}],v={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interact-with-a-dapp"},"Interact with a dApp"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The UP Browser Extenstion is currently in the ",(0,i.kt)("strong",{parentName:"p"},"development alpha")," version. DO NOT use this in production!"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"MetaMask (or any other ethereum provider) cannot be running simultaneously. It is recommended to deactivate the MetaMask extension for the UP Extension to work."))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"The extension injects an ",(0,i.kt)("inlineCode",{parentName:"p"},"ethereum")," object into a web page as ",(0,i.kt)("inlineCode",{parentName:"p"},"window.ethereum")," to interact with the extension."),(0,i.kt)("h3",{id:"1-initialize-a-blockchain-provider"},"1. Initialize a blockchain provider."),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"web3",label:"web3",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Web3 from 'web3';\nconst web3 = new Web3(window.ethereum);\n"))),(0,i.kt)(o.Z,{value:"etherjs",label:"etherjs",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { ethers } from 'ethers';\nconst etherProvider = new ethers.providers.Web3Provider(window.ethereum);\n")))),(0,i.kt)("h3",{id:"2-get-access-to-the-up-address-in-use"},"2. Get access to the UP address in use."),(0,i.kt)("p",null,"A call to ",(0,i.kt)("inlineCode",{parentName:"p"},"requestAccounts")," will open an extension popup to authorize an account."),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"web3",label:"web3",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const accountsRequest: string[] = await web3.eth.requestAccounts();\nconst accounts: string[] = await web3.eth.getAccounts(); //should also yield the same address\n"))),(0,i.kt)(o.Z,{value:"etherjs",label:"etherjs",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const accountsRequest: string[] = await etherProvider.send(\n  'eth_requestAccounts',\n  [],\n);\nconst signer = etherProvider.getSigner();\nawait signer.getAddress(); //should also yield the same address\n"))),(0,i.kt)(o.Z,{value:"raw",label:"raw",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const accountsRequest: string[] = await window.ethereum.request({\n  method: 'eth_requestAccounts',\n  params: [],\n});\nconst accounts: string[] = await window.ethereum.request({\n  method: 'eth_accounts',\n  params: [],\n}); //should also yield the same address\n")))),(0,i.kt)("h2",{id:"operations"},"Operations"),(0,i.kt)("p",null,"Each operation will open an extension popup window for a user to confirm the transaction or sign the message."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you don't have funds on your EOA, the application will use the relayer service by default to pay the gas fees (thus ignoring gas properties)."))),(0,i.kt)("h3",{id:"send-a-transaction"},"Send a transaction"),(0,i.kt)("p",null,"You can send any transaction (a value transfer or a smart contract interaction with or without a value)."),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"web3",label:"web3",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await web3.eth.sendTransaction({\n  from: UP_ADDRESS,\n  to: RECIPIENT_ADDRESS,\n  value: 100,\n  data: '0x',\n  gas: 5_000_000,\n  gasPrice: '1000000000',\n});\n"))),(0,i.kt)(o.Z,{value:"etherjs",label:"etherjs",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await signer.sendTransaction({\n  from: UP_ADDRESS,\n  to: RECIPIENT_ADDRESS,\n  value: 100,\n  gas: 5_000_000,\n  gasPrice: '1000000000',\n});\n"))),(0,i.kt)(o.Z,{value:"raw",label:"raw",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await window.ethereum.request({\n  method: 'eth_sendTransaction',\n  params: [\n    {\n      from: UP_ADDRESS,\n      to: RECIPIENT_ADDRESS,\n      value: '0xB1A2BC2EC50000',\n      gas: '0x76c0',\n      gasPrice: '0x9184e72a000',\n    },\n  ],\n});\n")))),(0,i.kt)("p",null,"You can also add a ",(0,i.kt)("inlineCode",{parentName:"p"},"chainId")," parameter, i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"chaidId: '0x16'"),", to ensure the transaction will run on the specified network."),(0,i.kt)("h3",{id:"sign-a-message"},"Sign a message"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"web3",label:"web3",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await web3.eth.sign('message', UP_ADDRESS);\n"))),(0,i.kt)(o.Z,{value:"etherjs",label:"etherjs",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await signer.signMessage('message');\n"))),(0,i.kt)(o.Z,{value:"raw",label:"raw",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await window.ethereum.request({\n  method: 'eth_sign',\n  params: [UP_ADDRESS, '0xdeadbeaf'],\n});\n")))),(0,i.kt)("h2",{id:"interact-with-your-universal-profile"},"Interact with your universal profile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"  npm install @lukso/lsp-smart-contracts\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import UniversalProfile from \"@lukso/universalprofile-smart-contracts/artifacts/UniversalProfile.json\";\n\nconst contract = new web3.eth.Contract(\n  UniversalProfile.abi as unknown, UP_ADDRESS, {\n    gas: 5_000_000,\n    gasPrice: '1000000000',\n  })\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"setData")," functionality:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'await contract.methods\n  .setData([key], [value])\n  .send({\n      from: UP_ADDRESS,\n  })\n  .on("receipt", (receipt: TransactionReceipt) => {\n      ...\n  })\n  .once("sending", (payload: unknown) => {\n      ...\n  })\n);\n')),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": Listening for accounts changed event:"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"web3",label:"web3",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"window.ethereum.on('accountsChanged', (addresses: string[]) => {\n  const newAddress = addresses[0];\n  ...\n}\n")))),(0,i.kt)("h2",{id:"sample-dapp"},"Sample dApp"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check the ",(0,i.kt)("a",{parentName:"li",href:"https://up-sample-web-app.staging.lukso.dev/"},"Sample dApp")," for more examples in the browser."),(0,i.kt)("li",{parentName:"ul"},"Check the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/universalprofile-sample-web-app"},"Repository")," for code snippets.")))}h.isMDXComponent=!0}}]);