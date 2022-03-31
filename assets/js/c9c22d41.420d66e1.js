"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8709],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,v=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(v,s(s({ref:t},d),{},{components:n})):a.createElement(v,s({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8086:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={sidebar_label:"LSP1 - Universal Receiver",sidebar_position:3.2},c="LSP1 - Universal Receiver",l={unversionedId:"standards/generic-standards/lsp1-universal-receiver",id:"standards/generic-standards/lsp1-universal-receiver",title:"LSP1 - Universal Receiver",description:"LSP1 - Universal Receiver",source:"@site/docs/standards/generic-standards/02-lsp1-universal-receiver.md",sourceDirName:"standards/generic-standards",slug:"/standards/generic-standards/lsp1-universal-receiver",permalink:"/standards/generic-standards/lsp1-universal-receiver",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/generic-standards/02-lsp1-universal-receiver.md",tags:[],version:"current",sidebarPosition:3.2,frontMatter:{sidebar_label:"LSP1 - Universal Receiver",sidebar_position:3.2},sidebar:"standardsSidebar",previous:{title:"Standards Detection",permalink:"/standards/standard-detection"},next:{title:"LSP2 - ERC725Y JSON Schema",permalink:"/standards/generic-standards/lsp2-json-schema"}},d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"What does this standard represent ?",id:"what-does-this-standard-represent-",level:2},{value:"Specification",id:"specification",level:3},{value:"Extension",id:"extension",level:2},{value:"References",id:"references",level:2}],m={toc:p};function u(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lsp1---universal-receiver"},"LSP1 - Universal Receiver"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Standard Document")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md"},"LSP1 - Universal Receiver")))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"There is often the need for smart contracts to ",(0,i.kt)("strong",{parentName:"p"},"be aware of incoming transactions"),", especially when it comes to value transfers."),(0,i.kt)("p",null,"A good example is ERC20 token transfers. When a smart contract receives a token, it has no generic way to be notified about it. One solution to this problem could be to monitor the receiving contract by listening for ERC20 token transfer events."),(0,i.kt)("p",null,"However, this requires using a trusted third party to monitor the contract. Such a method limits smart contracts' autonomy and introduces a single point of failure."),(0,i.kt)("p",null,"One way to solve this problem is by creating a standard function that any smart contract can implement. Wallets or profiles could use this function to notify the user about an incoming asset, information, followers, etc."),(0,i.kt)("h2",{id:"what-does-this-standard-represent-"},"What does this standard represent ?"),(0,i.kt)("h3",{id:"specification"},"Specification"),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"recommendation")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Smart contracts implementing the ",(0,i.kt)("inlineCode",{parentName:"p"},"universalReceiver(...)")," function SHOULD ",(0,i.kt)("strong",{parentName:"p"},"register")," the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/interface-ids"},"LSP1UniversalReceiver InterfaceId")," using ERC165"),". This way, other contracts can be aware that the contract supports the LSP1 standard."))),(0,i.kt)("p",null,"This standard defines a single function named ",(0,i.kt)("inlineCode",{parentName:"p"},"universalReceiver(...)")," that could receive ",(0,i.kt)("strong",{parentName:"p"},"any arbitrary information"),". It takes two parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bytes32 ",(0,i.kt)("inlineCode",{parentName:"li"},"typeId"),": Hash or Hook of a specific standard."),(0,i.kt)("li",{parentName:"ul"},"bytes ",(0,i.kt)("inlineCode",{parentName:"li"},"data"),": Any arbitrary data.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"universalReceiver(...)")," function emits an event with the data passed to it and some additional data. The function can then implement custom logic to make the contract behave differently based on the data received. For instance, the universalReceiver(...) function could:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"revert on calls to completely disallow the smart contract from receiving assets, information, etc. \u274c"),(0,i.kt)("li",{parentName:"ul"},"register the received assets inside the contract storage (see ",(0,i.kt)("a",{parentName:"li",href:"/standards/universal-profile/lsp5-received-assets"},"LSP5 - Received Assets"),") \u2795")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Receiving contracts should consider the ",(0,i.kt)("inlineCode",{parentName:"p"},"typeId")," parameter to ",(0,i.kt)("strong",{parentName:"p"},"decode the data correctly"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"schema of universal receiver transaction",src:n(736).Z,width:"3021",height:"1323"})),(0,i.kt)("h2",{id:"extension"},"Extension"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"See the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp1-universal-receiver-delegate"},"LSP1-UniversalReceiverDelegate"))," standard for more details."))),(0,i.kt)("p",null,"LSP1-UniversalReceiverDelegate is an ",(0,i.kt)("strong",{parentName:"p"},"optional extension")," to the LSP1-UniversalReceiver Standard. As well as notifying a contract about the incoming and outgoing transactions via an event, it will delegate the ",(0,i.kt)("inlineCode",{parentName:"p"},"universalReceiver(...)")," functionality to an external contract that can ",(0,i.kt)("strong",{parentName:"p"},"handle and react to specific calls")," with its custom logic."),(0,i.kt)("p",null,"To enable this optional extension, the address of the ",(0,i.kt)("strong",{parentName:"p"},"external contract")," MUST be set as a value for the ",(0,i.kt)("strong",{parentName:"p"},"LSP1UniversalReceiverDelegate key")," shown below. This key-value pair inside the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/ERC725Alliance/erc725/blob/main/docs/ERC-725.md#erc725y"},"ERC725Y key value store"))," of the contract implementing the ",(0,i.kt)("inlineCode",{parentName:"p"},"universalReceiver(...)")," function will act as a reference, making this external contract upgradeable if required."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP1UniversalReceiverDelegate",\n  "key": "0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47",\n  "keyType": "Singleton",\n  "valueType": "address",\n  "valueContent": "Address"\n}\n')),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md"},"LUKSO Standards Proposals: LSP1 - Universal Receiver (Standard Specification, GitHub)"))))}u.isMDXComponent=!0},736:function(e,t,n){t.Z=n.p+"assets/images/ur-transaction-276d04a0b8fc0fbcf8c4372388811f33.jpeg"}}]);