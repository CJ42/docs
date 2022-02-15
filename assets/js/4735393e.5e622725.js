"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[284],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5893:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={sidebar_label:"LSP9 - Vault",sidebar_position:7},l="LSP9 - Vault",c={unversionedId:"standards/universal-profile/lsp9-vault",id:"standards/universal-profile/lsp9-vault",title:"LSP9 - Vault",description:"LSP9 - Vault",source:"@site/docs/standards/universal-profile/07-lsp9-vault.md",sourceDirName:"standards/universal-profile",slug:"/standards/universal-profile/lsp9-vault",permalink:"/standards/universal-profile/lsp9-vault",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/universal-profile/07-lsp9-vault.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"LSP9 - Vault",sidebar_position:7},sidebar:"standardsSidebar",previous:{title:"LSP5 - Received Assets",permalink:"/standards/universal-profile/lsp5-received-assets"},next:{title:"LSP10 - Received Vaults",permalink:"/standards/universal-profile/lsp10-received-vaults"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"What does this standard represent ?",id:"what-does-this-standard-represent-",children:[{value:"ERC725X - Generic Executor",id:"erc725x---generic-executor",children:[],level:3},{value:"ERC725Y - Generic Key-Value Store",id:"erc725y---generic-key-value-store",children:[],level:3},{value:"LSP1 - UniversalReceiver",id:"lsp1---universalreceiver",children:[],level:3}],level:2},{value:"Extension",id:"extension",children:[{value:"Interactivity",id:"interactivity",children:[],level:3},{value:"Flow",id:"flow",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lsp9---vault"},"LSP9 - Vault"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Standard Document")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-9-Vault.md"},"LSP9 - Vault")))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Using the Key Manager with the Universal Profile will enable third parties to execute through your profile given specific permissions, but this will not eliminate the risk of operating maliciously with your data and belongings."),(0,i.kt)("p",null,"To avoid this risk, third parties should be restricted to talking to a specific smart contract through the Universal Profile, that has almost the same functionalities and is controlled by the Universal Profile."),(0,i.kt)("h2",{id:"what-does-this-standard-represent-"},"What does this standard represent ?"),(0,i.kt)("p",null,"This standard defines a vault that can hold assets and interact with other contracts. It has the ability to ",(0,i.kt)("strong",{parentName:"p"},"attach information")," via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y"},"ERC725Y")," to itself, ",(0,i.kt)("strong",{parentName:"p"},"execute, deploy or transfer value")," to any other smart contract or EOA via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725x"},"ERC725X"),". It can be ",(0,i.kt)("strong",{parentName:"p"},"notified of incoming assets")," via the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-1-UniversalReceiver.md"},"LSP1-UniversalReceiver")," function."),(0,i.kt)("p",null,"This standard uses the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-173"},"ERC173"))," standard to provide ownership functions for owning and controlling the implementation contract."),(0,i.kt)("h3",{id:"erc725x---generic-executor"},"ERC725X - Generic Executor"),(0,i.kt)("p",null,"This substandard enables the vault to execute a call on any other smart contracts, transfers the blockchains native token, or deploys a new smart contract. Only the owner can execute these operations below."),(0,i.kt)("p",null,"The operation types available are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CALL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CREATE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CREATE2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DELEGATECALL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"STATICCALL"))),(0,i.kt)("h3",{id:"erc725y---generic-key-value-store"},"ERC725Y - Generic Key-Value Store"),(0,i.kt)("p",null,"This substandard enables the vault to hold arbitrary data through a generic key/value store. It gives flexibility to the contract storage, by enabling to attach any type of information to the contract, and update it easily."),(0,i.kt)("p",null,"The keys and values are constructed according to the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp2-json-schema"},"LSP2-ERC725YJSONSchema"))," standard."),(0,i.kt)("h3",{id:"lsp1---universalreceiver"},"LSP1 - UniversalReceiver"),(0,i.kt)("p",null,"This standard enables the vault to be notified of any incoming transactions either it's a token transfer, vault transfer, information transfer, etc.\nThis is very useful for vaults where anyone could customize the way her/his account reacts to certain tokens by rejecting them or operating a specific call on token receive."),(0,i.kt)("p",null,"Check ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp1-universal-receiver"},"LSP1-UniversalReceiver"))," standard for more information."),(0,i.kt)("h2",{id:"extension"},"Extension"),(0,i.kt)("h3",{id:"interactivity"},"Interactivity"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The implementation of the ",(0,i.kt)("strong",{parentName:"p"},"UniversalReceiverDelegate")," used by the Universal Profile is different from the one used by the vault. Check ",(0,i.kt)("a",{parentName:"p",href:"/standards/smart-contracts/lsp1-universal-receiver-delegate-vault"},"LSP1UniversalReceiverDelegateVault")))),(0,i.kt)("p",null,"The vault can be notified of incoming assets, information, etc via the ",(0,i.kt)("strong",{parentName:"p"},"universalReceiver")," function. An extension could be added to increase the autonomy of the contract by handling and reacting to transactions that the vault receives."),(0,i.kt)("p",null,"This can happen by setting a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp1-universal-receiver-delegate"},"LSP1-UniversalReceiverDelegate"))," to your account."),(0,i.kt)("h3",{id:"flow"},"Flow"),(0,i.kt)("p",null,"The vault could be used to hold assets but also as mentioned before, could be used to restrict third parties to only operate on the assets and metadata of the vault and not the UniversalProfile. This way the metadata and the assets owned by the UniversalProfile are completely safe if the third party tried to act maliciously."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," The ",(0,i.kt)("strong",{parentName:"p"},"protocol")," should be allowed to only talk to the vault A1 through ",(0,i.kt)("a",{parentName:"p",href:"./lsp6-key-manager#address-permissions"},"AllowedAddresses permission"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LSP9 vault allowed in profile",src:a(2724).Z,width:"2883",height:"1387"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.")," All the ",(0,i.kt)("strong",{parentName:"p"},"protocol")," transactions should be routed through the vault, otherwise, the transaction will ",(0,i.kt)("strong",{parentName:"p"},"revert"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LSP9 vault with third parties flow",src:a(2153).Z,width:"2977",height:"1343"})))}u.isMDXComponent=!0},2153:function(e,t,a){t.Z=a.p+"assets/images/lsp9-vault-flow-ed483895cf7d7b3efaad19b27fd02412.jpeg"},2724:function(e,t,a){t.Z=a.p+"assets/images/vault-flow-f8d1ff75e1ac5733161a91af9178ed74.jpeg"}}]);